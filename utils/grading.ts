
import { Problem } from '../types';
import { simplify, evaluate } from 'mathjs';

// Helper to normalize strings for comparison
export const normalize = (val: string): string => {
  if (!val) return '';
  return val
    .trim()
    .replace(/\s+/g, '')          // Remove spaces
    .toLowerCase()                // Lowercase
    .replace(/[·•]/g, '*')        // Standardize multiplication
    .replace(/:/g, '/')           // Standardize division
    .replace(/,/g, '.')           // Standardize decimal separator (IMPORTANT: force dot for mathjs)
    .replace(/\$/g, '');          // Remove LaTeX delimiters
};

// Check if two values are numerically equivalent (e.g., "3.5", "3,50", "3.500")
const isNumericallyEqual = (val1: string, val2: string): boolean => {
    // Attempt to parse as floats
    const n1 = parseFloat(normalize(val1));
    const n2 = parseFloat(normalize(val2));

    // If both are valid numbers
    if (!isNaN(n1) && !isNaN(n2)) {
        // Check difference with a small epsilon for floating point errors
        return Math.abs(n1 - n2) < 0.000001;
    }
    return false;
};

// Advanced check using mathjs to see if two expressions are mathematically equivalent
const isSymbolicallyEqual = (val1: string, val2: string): boolean => {
  try {
    // 0. Quick numeric check first (handles 3,5 vs 3.5)
    if (isNumericallyEqual(val1, val2)) return true;

    const norm1 = normalize(val1);
    const norm2 = normalize(val2);

    // 1. Handle Equations (e.g. x = 2 vs 2 = x)
    if (norm1.includes('=') && norm2.includes('=')) {
      const parts1 = norm1.split('=');
      const parts2 = norm2.split('=');
      if (parts1.length !== 2 || parts2.length !== 2) return false;

      // Check direct: LHS=LHS & RHS=RHS
      const directMatch = isSymbolicallyEqual(parts1[0], parts2[0]) && isSymbolicallyEqual(parts1[1], parts2[1]);
      if (directMatch) return true;

      // Check swapped: LHS=RHS & RHS=LHS
      const swappedMatch = isSymbolicallyEqual(parts1[0], parts2[1]) && isSymbolicallyEqual(parts1[1], parts2[0]);
      if (swappedMatch) return true;
      
      return false;
    }

    // 2. Handle Inequalities strings directly after normalization
    if (/[<>]/.test(norm1) || /[<>]/.test(norm2)) {
         return norm1 === norm2; 
    }

    // 3. Symbolic / Numeric Check via MathJS
    // Try symbolic simplification first
    try {
        const s1 = simplify(norm1).toString().replace(/\s/g, '');
        const s2 = simplify(norm2).toString().replace(/\s/g, '');
        if (s1 === s2) return true;
    } catch(e) {
        // simplify failed, proceed to evaluate
    }

    // Evaluate with scope
    const scope = { x: 7, y: 3, a: 2, b: 5, c: 11, n: 4, k: 6 };
    const e1 = evaluate(norm1, scope);
    const e2 = evaluate(norm2, scope);
    
    if (typeof e1 === 'number' && typeof e2 === 'number') {
        return Math.abs(e1 - e2) < 0.000001;
    }

    return false;
  } catch (e) {
    return false;
  }
};

export interface GradeResult {
  isCorrect: boolean;
  feedback: { [key: string]: 'correct' | 'incorrect' };
  generalFeedback: 'correct' | 'incorrect' | null;
}

export const checkProblemAnswer = (
  problem: Problem,
  inputs: { [key: string]: string },
  selectedOption: string | null
): GradeResult => {
  let isProblemSolved = true;
  const newFeedback: { [key: string]: 'correct' | 'incorrect' } = {};
  let generalFeedback: 'correct' | 'incorrect' | null = null;

  const checkValue = (userVal: string, correctVal: string | undefined): boolean => {
      if (correctVal === undefined || correctVal === null) return false;
      
      // Direct string match (normalized)
      if (normalize(userVal) === normalize(correctVal)) return true;
      
      // Numeric/Symbolic match
      if (userVal && isSymbolicallyEqual(userVal, correctVal)) {
          return true;
      }
      return false;
  };

  // 1. Custom Visual Data
  if (problem.custom_visual_data) {
    if (problem.custom_visual_data.type === 'grid_of_fractions') {
      const selectedStr = inputs[problem.id] || '';
      const selected = selectedStr.split(',').filter(Boolean).sort();
      const correct = problem.custom_visual_data.correct_items ? [...problem.custom_visual_data.correct_items].sort() : [];
      
      if (JSON.stringify(selected) === JSON.stringify(correct)) {
         newFeedback[problem.id] = 'correct';
         generalFeedback = 'correct';
      } else {
         newFeedback[problem.id] = 'incorrect';
         generalFeedback = 'incorrect';
         isProblemSolved = false;
      }
    } 
    else if (problem.custom_visual_data.type === 'fraction_conversion') {
       problem.custom_visual_data.tasks.forEach((task: any) => {
          const lcmVal = inputs[task.lcm_item.id] || '';
          if (checkValue(lcmVal, task.lcm_item.answer)) {
             newFeedback[task.lcm_item.id] = 'correct';
          } else {
             newFeedback[task.lcm_item.id] = 'incorrect';
             isProblemSolved = false;
          }
          task.fraction_items.forEach((item: any) => {
             const fVal = inputs[item.id] || '';
             if (checkValue(fVal, item.answer)) {
                newFeedback[item.id] = 'correct';
             } else {
                newFeedback[item.id] = 'incorrect';
                isProblemSolved = false;
             }
          });
       });
    }
    else if (problem.custom_visual_data.type === 'hierarchy_fill') {
       problem.custom_visual_data.inputs.forEach((item: any) => {
          const val = inputs[item.id] || '';
          if (checkValue(val, item.answer)) {
             newFeedback[item.id] = 'correct';
          } else {
             newFeedback[item.id] = 'incorrect';
             isProblemSolved = false;
          }
       });
    }
    else {
      // General handler for other custom types (interactive_table, value_cards)
      let itemsToCheck: any[] = [];
      if (problem.custom_visual_data.type === 'interactive_table') {
        itemsToCheck = problem.custom_visual_data.rows.flat().filter((cell: any) => cell.id);
      } else if (problem.custom_visual_data.items) {
        itemsToCheck = problem.custom_visual_data.items;
      }

      itemsToCheck.forEach((item: any) => {
         const userVal = inputs[item.id] || '';
         if (checkValue(userVal, item.answer)) {
            newFeedback[item.id] = 'correct';
         } else {
            newFeedback[item.id] = 'incorrect';
            isProblemSolved = false;
         }
      });
    }
  }

  // 2. Standard Parts
  if (problem.parts) {
    if (problem.problem_type === 'fill_in_the_blanks') {
         problem.parts.forEach(part => {
             // Handle multiple answers in one part (comma separated)
             const answers = part.answer ? part.answer.split(',').map(s => s.trim()) : [];
             
             // If we have drag items, user might have put them in any order if logic permits, 
             // but usually fill-in-blanks is positional.
             // We assume positional mapping: first input -> first answer.
             
             answers.forEach((ans, idx) => {
                 const inputId = `${part.part_id}_${idx}`;
                 const userVal = inputs[inputId] || '';
                 if (checkValue(userVal, ans)) {
                     newFeedback[inputId] = 'correct';
                 } else {
                     newFeedback[inputId] = 'incorrect';
                     isProblemSolved = false;
                 }
             });
         });
    } else {
      problem.parts.forEach((part) => {
        const userVal = inputs[part.part_id] || '';
        if (part.answer && checkValue(userVal, part.answer)) {
            newFeedback[part.part_id] = 'correct';
        } else if (part.answer) {
            newFeedback[part.part_id] = 'incorrect';
            isProblemSolved = false;
        }
      });
    }
  } 
  // 3. Multiple Choice
  else if (problem.options) {
    if (problem.answer) {
      if (selectedOption === problem.answer) {
        generalFeedback = 'correct';
      } else {
        generalFeedback = 'incorrect';
        isProblemSolved = false;
      }
    }
  }
  // 4. Single Input
  else if (!problem.parts && !problem.options && problem.answer && 
           !['grid_of_fractions', 'fraction_conversion', 'hierarchy_fill', 'info_cards'].includes(problem.custom_visual_data?.type)) {
    const userVal = inputs[problem.id] || '';
    if (checkValue(userVal, problem.answer)) {
      generalFeedback = 'correct';
    } else {
      generalFeedback = 'incorrect';
      isProblemSolved = false;
    }
  }

  return {
    isCorrect: isProblemSolved,
    feedback: newFeedback,
    generalFeedback
  };
};

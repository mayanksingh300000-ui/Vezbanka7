
import { Problem } from '../types';
import { simplify, evaluate } from 'mathjs';

// Helper to normalize strings for comparison
export const normalize = (val: string): string => {
  if (!val) return '';
  return val
    .replace(/\s+/g, '')          // Remove spaces
    .toLowerCase()                // Lowercase
    .replace(/[·•]/g, '*')        // Standardize multiplication
    .replace(/:/g, '/')           // Standardize division
    .replace(/,/g, '.')           // Standardize decimal separator
    .replace(/\$/g, '');          // Remove LaTeX delimiters
};

// Advanced check using mathjs to see if two expressions are mathematically equivalent
const isSymbolicallyEqual = (val1: string, val2: string): boolean => {
  try {
    // 1. Handle Equations (e.g. x = 2 vs 2 = x)
    if (val1.includes('=') && val2.includes('=')) {
      const parts1 = val1.split('=');
      const parts2 = val2.split('=');
      if (parts1.length !== 2 || parts2.length !== 2) return false;

      // Check direct: LHS=LHS & RHS=RHS
      const directMatch = isSymbolicallyEqual(parts1[0], parts2[0]) && isSymbolicallyEqual(parts1[1], parts2[1]);
      if (directMatch) return true;

      // Check swapped: LHS=RHS & RHS=LHS
      const swappedMatch = isSymbolicallyEqual(parts1[0], parts2[1]) && isSymbolicallyEqual(parts1[1], parts2[0]);
      if (swappedMatch) return true;
      
      return false;
    }

    // 2. Handle Inequalities
    if (/[<>]/.test(val1) || /[<>]/.test(val2)) {
         return val1 === val2; 
    }

    // 3. Symbolic / Numeric Check
    try {
        const s1 = simplify(val1).toString().replace(/\s/g, '');
        const s2 = simplify(val2).toString().replace(/\s/g, '');
        if (s1 === s2) return true;
    } catch(e) {
        // simplify failed, proceed to evaluate
    }

    const scope = { x: 7, y: 3, a: 2, b: 5, c: 11, n: 4, k: 6 };
    const e1 = evaluate(val1, scope);
    const e2 = evaluate(val2, scope);
    
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
      const normUser = normalize(userVal);
      const normCorrect = normalize(correctVal);
      if (normUser === normCorrect) return true;
      if (normUser && normCorrect && isSymbolicallyEqual(normUser, normCorrect)) {
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
    } else {
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
             const answers = part.answer ? part.answer.split(',').map(s => s.trim()) : [];
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
  else if (!problem.parts && !problem.options && problem.answer && problem.custom_visual_data?.type !== 'grid_of_fractions') {
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

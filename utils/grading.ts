
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
    .replace(/,/g, '.')           // Standardize decimal separator (optional, depending on strictness)
    .replace(/\$/g, '');          // Remove LaTeX delimiters if copied
};

// Advanced check using mathjs to see if two expressions are mathematically equivalent
// e.g. "x+2" == "2+x", "1/2" == "0.5"
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

    // 2. Handle Inequalities (basic support, e.g. x < 5)
    // We do not currently support symbolic inequality inversion (e.g. x < 5 vs 5 > x)
    // So we fall back to string comparison for inequality signs
    if (/[<>]/.test(val1) || /[<>]/.test(val2)) {
         return val1 === val2; 
    }

    // 3. Symbolic / Numeric Check
    // Attempt simplify comparison (covers x+2 vs 2+x)
    try {
        const s1 = simplify(val1).toString().replace(/\s/g, '');
        const s2 = simplify(val2).toString().replace(/\s/g, '');
        if (s1 === s2) return true;
    } catch(e) {
        // simplify failed, proceed to evaluate
    }

    // Attempt evaluation with test variables (covers 1/2 vs 0.5, and complex expressions)
    // Common variables in 7th grade math
    const scope = { x: 7, y: 3, a: 2, b: 5, c: 11, n: 4, k: 6 };
    const e1 = evaluate(val1, scope);
    const e2 = evaluate(val2, scope);
    
    // Tolerance for floating point
    if (typeof e1 === 'number' && typeof e2 === 'number') {
        return Math.abs(e1 - e2) < 0.000001;
    }

    return false;
  } catch (e) {
    // If mathjs fails to parse (e.g. non-math text), return false 
    return false;
  }
};

// Types of results from checking
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

  // Unified checking function
  const checkValue = (userVal: string, correctVal: string | undefined): boolean => {
      if (correctVal === undefined || correctVal === null) return false;
      
      const normUser = normalize(userVal);
      const normCorrect = normalize(correctVal);
      
      // 1. Exact string match (fastest)
      if (normUser === normCorrect) return true;

      // 2. Math symbolic match (slower but smarter)
      // Only invoke if strings are non-empty
      if (normUser && normCorrect && isSymbolicallyEqual(normUser, normCorrect)) {
          return true;
      }
      
      return false;
  };

  // 1. Custom Visual Data Inputs (Grid Selector, Tables, Cards)
  if (problem.custom_visual_data) {
    if (problem.custom_visual_data.type === 'grid_of_fractions') {
      // Grid Selector Logic
      const selectedStr = inputs[problem.id] || '';
      const selected = selectedStr.split(',').filter(Boolean).sort();
      const correct = problem.custom_visual_data.correct_items ? [...problem.custom_visual_data.correct_items].sort() : [];
      
      const isCorrect = JSON.stringify(selected) === JSON.stringify(correct);
      
      if (isCorrect) {
         newFeedback[problem.id] = 'correct';
         generalFeedback = 'correct';
      } else {
         newFeedback[problem.id] = 'incorrect';
         generalFeedback = 'incorrect';
         isProblemSolved = false;
      }
    } else {
      // Logic for Value Cards / Table
      let itemsToCheck: any[] = [];
      if (problem.custom_visual_data.type === 'interactive_table') {
        itemsToCheck = problem.custom_visual_data.rows.flat().filter((cell: any) => cell.id);
      } else if (problem.custom_visual_data.items) {
        itemsToCheck = problem.custom_visual_data.items;
      }

      itemsToCheck.forEach((item: any) => {
         const userVal = inputs[item.id] || '';
         const correctVal = item.answer;
         
         if (checkValue(userVal, correctVal)) {
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
         // Handle multi-input parts
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
      // Standard single input per part
      problem.parts.forEach((part) => {
        const userVal = inputs[part.part_id] || '';
        const correctVal = part.answer; 
        
        if (!correctVal) return; 

        // Ordering problems usually require strict order (comma separated)
        // checkValue's mathjs might treat "1,2,3" as a set {1,2,3}, which is unordered.
        // For ordering, we enforce strict string match via normalize (which is already inside checkValue as fallback/first step)
        // But isSymbolicallyEqual might return true for "1, 2" vs "2, 1" if parsed as set.
        // Wait, mathjs parse("1,2") -> [1, 2] (Matrix).
        // simplify([1,2]) == simplify([2,1]) ? No, matrices are ordered.
        // So checkValue is safe for ordering.
        
        if (checkValue(userVal, correctVal)) {
            newFeedback[part.part_id] = 'correct';
        } else {
            newFeedback[part.part_id] = 'incorrect';
            isProblemSolved = false;
        }
      });
    }
  } 
  // 3. Check Multiple Choice
  else if (problem.options) {
    const correctOption = problem.answer;
    if (correctOption) {
      if (selectedOption === correctOption) {
        generalFeedback = 'correct';
      } else {
        generalFeedback = 'incorrect';
        isProblemSolved = false;
      }
    }
  }
  // 4. Check Single Input (only if no parts and no options AND not a grid selector)
  else if (!problem.parts && !problem.options && problem.answer && problem.custom_visual_data?.type !== 'grid_of_fractions') {
    const userVal = inputs[problem.id] || '';
    const correctVal = problem.answer;
    
    if (checkValue(userVal, correctVal)) {
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

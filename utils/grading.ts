
import { Problem } from '../types';

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
         
         if (normalize(userVal) === normalize(correctVal)) {
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
                 
                 // Handle specific case where normalized '305/11' matches user input
                 if (normalize(userVal) === normalize(ans)) {
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

        if (problem.problem_type === 'ordering_of_integers' || problem.problem_type === 'ordering_of_fractions') {
            // For ordering, allow variations in spacing by normalizing the whole string
            if (normalize(userVal) === normalize(correctVal)) {
                newFeedback[part.part_id] = 'correct';
            } else {
                newFeedback[part.part_id] = 'incorrect';
                isProblemSolved = false;
            }
        } else {
            if (normalize(userVal) === normalize(correctVal)) {
              newFeedback[part.part_id] = 'correct';
            } else {
              newFeedback[part.part_id] = 'incorrect';
              isProblemSolved = false;
            }
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
    
    if (normalize(userVal) === normalize(correctVal)) {
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

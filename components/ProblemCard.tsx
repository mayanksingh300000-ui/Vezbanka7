
import React, { useState } from 'react';
import { Problem } from '../types';
import LatexRenderer from './LatexRenderer';
import ProblemBody from './ProblemBody';

interface ProblemCardProps {
  problem: Problem;
  onAskAI: (context: string) => void;
  titleOverride?: string;
  onProblemSolved?: (id: string) => void;
}

const ProblemCard: React.FC<ProblemCardProps> = ({ problem, onAskAI, titleOverride, onProblemSolved }) => {
  const [inputs, setInputs] = useState<{ [key: string]: string }>({});
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{ [key: string]: 'correct' | 'incorrect' | null }>({});
  const [generalFeedback, setGeneralFeedback] = useState<string | null>(null);
  const [isSolved, setIsSolved] = useState(false);

  // Handle text input changes 
  const handleInputChange = (id: string, value: string) => {
    setInputs((prev) => ({ ...prev, [id]: value }));
    setFeedback((prev) => ({ ...prev, [id]: null })); 
  };

  // Handle multiple choice selection
  const handleOptionSelect = (optionId: string) => {
    setSelectedOption(optionId);
    setGeneralFeedback(null);
  };

  const checkAnswers = () => {
    let currentSolvedState = true; // Assume true, prove false
    const newFeedback: { [key: string]: 'correct' | 'incorrect' } = {};

    // 1. Check Custom Visual Data Inputs (Value Cards or Interactive Table)
    if (problem.custom_visual_data && (problem.custom_visual_data.type === 'value_cards' || problem.custom_visual_data.type === 'interactive_table')) {
       
       let itemsToCheck: any[] = [];
       if (problem.custom_visual_data.type === 'interactive_table') {
         // Flatten rows to find cells with IDs
         itemsToCheck = problem.custom_visual_data.rows.flat().filter((cell: any) => cell.id);
       } else {
         itemsToCheck = problem.custom_visual_data.items;
       }

       itemsToCheck.forEach((item: any) => {
          const userVal = inputs[item.id]?.trim();
          const correctVal = item.answer;
          
          if (userVal === correctVal) {
             newFeedback[item.id] = 'correct';
          } else {
             newFeedback[item.id] = 'incorrect';
             currentSolvedState = false;
          }
       });
    }

    // 2. Check Standard Parts
    if (problem.parts) {
      problem.parts.forEach((part) => {
        const userVal = inputs[part.part_id]?.trim();
        const correctVal = part.answer; // Use correct answer from JSON part
        
        if (!correctVal) return; 

        if (problem.problem_type === 'ordering_of_integers') {
             const normalize = (str: string) => str.split(',').map(s => s.trim()).join(', ');
             if (normalize(userVal || '') === normalize(correctVal)) {
                 newFeedback[part.part_id] = 'correct';
             } else {
                 newFeedback[part.part_id] = 'incorrect';
                 currentSolvedState = false;
             }
        } else {
             if (userVal === correctVal) {
               newFeedback[part.part_id] = 'correct';
             } else {
               newFeedback[part.part_id] = 'incorrect';
               currentSolvedState = false;
             }
        }
      });
    } 
    // 3. Check Multiple Choice
    else if (problem.options) {
      const correctOption = problem.answer;
      if (!correctOption) {
        onAskAI(`Дали мојот избор ${selectedOption} е точен за задачата: ${problem.text_mk}`);
        return;
      }

      if (selectedOption === correctOption) {
        setGeneralFeedback('correct');
      } else {
        setGeneralFeedback('incorrect');
        currentSolvedState = false;
      }
    }
    // 4. Check Single Input (only if no parts and no options)
    else if (!problem.parts && !problem.options && problem.answer) {
      const userVal = inputs[problem.id]?.trim();
      const correctVal = problem.answer;
      
      if (userVal === correctVal) {
        setGeneralFeedback('correct');
      } else {
        setGeneralFeedback('incorrect');
        currentSolvedState = false;
      }
    }

    setFeedback(prev => ({...prev, ...newFeedback}));

    if (currentSolvedState) {
        setIsSolved(true);
        if (onProblemSolved) {
            onProblemSolved(problem.id);
        }
    }
  };

  // Helper to parse simple markdown bold syntax **text**
  const renderText = (text: string) => {
    // Split on **bold**
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index} className="font-bold">{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

  const displayTitle = titleOverride || problem.id.replace('_', ' ');

  // Determine if the user has attempted the problem (Check button clicked)
  const hasAttempted = isSolved || generalFeedback !== null || Object.keys(feedback).some(k => feedback[k] !== null);

  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden mb-8 border transition-all hover:shadow-lg ${isSolved ? 'border-green-400 ring-2 ring-green-100' : 'border-gray-100'}`}>
      <div className={`px-6 py-4 flex justify-between items-center ${isSolved ? 'bg-green-600' : 'bg-indigo-600'}`}>
        <div>
          {problem.topic && (
            <div className={`text-xs uppercase tracking-wider font-semibold mb-1 ${isSolved ? 'text-green-100' : 'text-indigo-200'}`}>
              {problem.topic}
            </div>
          )}
          <h3 className="text-white font-bold text-lg flex items-center gap-2">
            {displayTitle}
            {isSolved && <span className="bg-white text-green-600 text-xs px-2 py-1 rounded-full">Решено</span>}
          </h3>
        </div>
        <button 
          onClick={() => onAskAI(problem.text_mk + (problem.latex_math || "") + (problem.data_table_latex || ""))}
          className={`${isSolved ? 'text-green-100' : 'text-indigo-100'} hover:text-white flex items-center gap-2 text-sm font-medium transition-colors`}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          AI Помош
        </button>
      </div>
      
      <div className="p-6">
        <div className="mb-6 text-gray-800 text-lg whitespace-pre-line">
          {renderText(problem.text_mk)}
          {problem.range_mk && (
            <div className="text-sm text-gray-500 mt-1 italic">
              ({problem.range_mk})
            </div>
          )}
          {problem.note_mk && (
             <div className="mt-2 text-sm text-amber-600 bg-amber-50 p-2 rounded border border-amber-200 italic">
               ℹ️ {problem.note_mk}
             </div>
          )}
          {problem.latex_conditions && (
             <div className="mt-2 text-xl font-mono text-center bg-gray-50 p-3 rounded-lg">
               <LatexRenderer content={problem.latex_conditions} />
             </div>
          )}
          {problem.latex_math && (
             <div className="mt-2 text-xl font-mono text-center">
               <LatexRenderer content={problem.latex_math} />
             </div>
          )}
        </div>

        {/* Separated View Component */}
        <ProblemBody 
          problem={problem}
          inputs={inputs}
          onInputChange={handleInputChange}
          selectedOption={selectedOption}
          onOptionSelect={handleOptionSelect}
          feedback={feedback}
          hasAttempted={hasAttempted}
        />

        {/* Action Bar */}
        <div className="mt-8 flex items-center justify-between border-t pt-4">
           <div>
             {generalFeedback && (
                <div className={`text-lg font-bold flex items-center ${generalFeedback === 'correct' ? 'text-green-600' : 'text-red-500'}`}>
                  {generalFeedback === 'correct' ? '✓ Браво! Точен одговор.' : '✗ Грешка. Обиди се повторно.'}
                </div>
             )}
           </div>
           <button 
             onClick={checkAnswers}
             className={`font-bold py-2 px-6 rounded-lg shadow-sm transition-colors transform active:scale-95 text-white
               ${isSolved ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'}
             `}
             disabled={isSolved}
           >
             {isSolved ? 'Решено' : 'Провери'}
           </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemCard;

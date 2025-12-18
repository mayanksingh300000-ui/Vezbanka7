
import React from 'react';
import { Option } from '../types';
import LatexRenderer from './LatexRenderer';

interface MultipleChoiceProps {
  options: Option[];
  selectedOption: string | null;
  onOptionSelect: (optionId: string) => void;
}

const MultipleChoice: React.FC<MultipleChoiceProps> = ({ options, selectedOption, onOptionSelect }) => {
  
  const isGridOptions = options && (
    (options.length > 3 && options.every(o => o.text_mk && o.text_mk.length > 50)) ||
    options.length === 4
  );

  return (
    <div className={isGridOptions ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "space-y-3"}>
      {options.map((option) => (
        <div 
          key={option.option_id}
          onClick={() => onOptionSelect(option.option_id)}
          className={`cursor-pointer p-4 rounded-lg border-2 transition-all flex items-center gap-3 h-full
            ${selectedOption === option.option_id 
              ? 'border-indigo-500 bg-indigo-50 shadow-md transform scale-[1.02]' 
              : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
            }`}
        >
          <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors
              ${selectedOption === option.option_id ? 'border-indigo-600' : 'border-gray-300'}`}>
              {selectedOption === option.option_id && <div className="w-3 h-3 bg-indigo-600 rounded-full" />}
          </div>
          <div className="text-gray-800 font-medium">
            {option.latex ? <LatexRenderer content={option.latex} /> : option.text_mk}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MultipleChoice;

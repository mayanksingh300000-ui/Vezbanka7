
import React from 'react';
import { Part } from '../types';
import LatexRenderer from './LatexRenderer';

interface ConditionalEquationProps {
  parts: Part[];
  inputs: { [key: string]: string };
  onInputChange: (id: string, value: string) => void;
  feedback: { [key: string]: 'correct' | 'incorrect' | null };
}

const ConditionalEquation: React.FC<ConditionalEquationProps> = ({ parts, inputs, onInputChange, feedback }) => {
  
  const renderFeedbackIcon = (status: 'correct' | 'incorrect' | null) => {
    if (status === 'correct') return <span className="text-green-500 ml-1 text-lg font-bold">✓</span>;
    if (status === 'incorrect') return <span className="text-red-500 ml-1 text-lg font-bold">✗</span>;
    return null;
  };

  const part1 = parts[0];
  if (!part1) return null;

  const inputVal = (inputs[part1.part_id] || '').toLowerCase().trim();
  const showPart2 = inputVal === 'да' || inputVal === 'da' || inputVal === 'yes';

  return (
    <div className="space-y-4">
      {/* Part 1: Yes/No Question */}
      <div className="p-4 bg-gray-50 rounded-lg flex items-center gap-3 shadow-sm border border-gray-100">
          <span className="font-semibold text-gray-700">{part1.text_mk}</span>
          <input
              type="text"
              value={inputs[part1.part_id] || ''}
              onChange={(e) => onInputChange(part1.part_id, e.target.value)}
              className="border-2 border-gray-300 rounded-md px-3 py-1 w-24 focus:border-indigo-500 focus:outline-none text-center"
              placeholder="?"
          />
          {renderFeedbackIcon(feedback[part1.part_id])}
      </div>

      {/* Part 2: Shows only if 'yes' */}
      {showPart2 && parts[1] && (
          <div className="p-4 bg-indigo-50 rounded-lg flex flex-col md:flex-row items-center gap-3 shadow-sm border border-indigo-100 animate-fade-in-up">
              <span className="font-semibold text-indigo-900">{parts[1].text_mk}</span>
              <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-indigo-200">
                  {parts[1].latex && <LatexRenderer content={parts[1].latex} className="text-xl" />}
                  <input
                      type="text"
                      value={inputs[parts[1].part_id] || ''}
                      onChange={(e) => onInputChange(parts[1].part_id, e.target.value)}
                      className="border-2 border-gray-300 rounded-md px-2 py-1 w-24 focus:border-indigo-500 focus:outline-none text-center font-bold"
                  />
                  {parts[1].latex_suffix && <LatexRenderer content={parts[1].latex_suffix} className="text-xl" />}
              </div>
              {renderFeedbackIcon(feedback[parts[1].part_id])}
          </div>
      )}
    </div>
  );
};

export default ConditionalEquation;

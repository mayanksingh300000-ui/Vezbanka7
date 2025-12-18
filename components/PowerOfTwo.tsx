
import React from 'react';
import { Part } from '../types';

interface PowerOfTwoProps {
  parts: Part[];
  inputs: { [key: string]: string };
  onInputChange: (id: string, value: string) => void;
  feedback: { [key: string]: 'correct' | 'incorrect' | null };
}

const PowerOfTwo: React.FC<PowerOfTwoProps> = ({ parts, inputs, onInputChange, feedback }) => {
  const renderFeedbackIcon = (status: 'correct' | 'incorrect' | null) => {
    if (status === 'correct') return <span className="text-green-500 ml-1 text-lg font-bold">✓</span>;
    if (status === 'incorrect') return <span className="text-red-500 ml-1 text-lg font-bold">✗</span>;
    return null;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {parts.map((part) => (
        <div key={part.part_id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center gap-2">
            <div className="text-xl font-bold text-gray-700">{part.text_mk} = 2</div>
            <div className="relative -top-2">
              <input
                type="text"
                value={inputs[part.part_id] || ''}
                onChange={(e) => onInputChange(part.part_id, e.target.value)}
                className={`w-10 h-10 text-center border-2 rounded-md text-sm font-bold focus:outline-none focus:border-indigo-500
                  ${feedback[part.part_id] === 'correct' ? 'border-green-500 bg-green-50' : 
                    feedback[part.part_id] === 'incorrect' ? 'border-red-500 bg-red-50' : 'border-gray-300'}
                `}
                placeholder=""
              />
            </div>
            {renderFeedbackIcon(feedback[part.part_id])}
        </div>
      ))}
    </div>
  );
};

export default PowerOfTwo;


import React from 'react';
import LatexRenderer from './LatexRenderer';

interface ValueCardsProps {
  data: any;
  inputs: { [key: string]: string };
  onInputChange: (id: string, value: string) => void;
  feedback: { [key: string]: 'correct' | 'incorrect' | null };
}

const ValueCards: React.FC<ValueCardsProps> = ({ data, inputs, onInputChange, feedback }) => {
  const renderFeedbackIcon = (status: 'correct' | 'incorrect' | null) => {
    if (status === 'correct') return <span className="text-green-500 ml-1 text-lg font-bold">✓</span>;
    if (status === 'incorrect') return <span className="text-red-500 ml-1 text-lg font-bold">✗</span>;
    return null;
  };

  return (
    <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
      {data.description && (
        <p className="font-semibold text-indigo-900 mb-4">{data.description}</p>
      )}
      <div className="flex flex-wrap gap-4 justify-center">
        {data.items.map((item: any) => (
          <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-indigo-100 flex flex-col items-center min-w-[120px]">
            <div className="text-2xl mb-3 font-bold text-gray-800">
              <LatexRenderer content={item.latex} />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputs[item.id] || ''}
                onChange={(e) => onInputChange(item.id, e.target.value)}
                className="border-2 border-gray-300 rounded-lg px-2 py-1 w-16 text-center text-lg focus:border-indigo-500 focus:outline-none"
                placeholder="?"
              />
              {renderFeedbackIcon(feedback[item.id])}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ValueCards;

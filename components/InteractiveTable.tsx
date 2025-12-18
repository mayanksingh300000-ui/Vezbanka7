
import React from 'react';
import LatexRenderer from './LatexRenderer';

interface InteractiveTableProps {
  data: any;
  inputs: { [key: string]: string };
  onInputChange: (id: string, value: string) => void;
  feedback: { [key: string]: 'correct' | 'incorrect' | null };
}

const InteractiveTable: React.FC<InteractiveTableProps> = ({ data, inputs, onInputChange, feedback }) => {
  const renderFeedbackIcon = (status: 'correct' | 'incorrect' | null) => {
    if (status === 'correct') return <span className="text-green-500 ml-1 text-lg font-bold">✓</span>;
    if (status === 'incorrect') return <span className="text-red-500 ml-1 text-lg font-bold">✗</span>;
    return null;
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
        <thead className="bg-indigo-100 text-indigo-800">
          <tr>
            {data.headers.map((header: string, idx: number) => (
              <th key={idx} className="px-4 py-3 border-b border-gray-300 text-center text-sm font-bold">
                <LatexRenderer content={header} />
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {data.rows.map((row: any[], rIdx: number) => (
            <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
              {row.map((cell, cIdx) => (
                <td key={cIdx} className="px-2 py-3 border-r last:border-r-0 border-gray-200 text-center">
                  {cell.id ? (
                    <div className="flex items-center justify-center gap-1">
                      <input 
                        type="text"
                        value={inputs[cell.id] || ''}
                        onChange={(e) => onInputChange(cell.id, e.target.value)}
                        className={`w-16 text-center border-2 rounded p-1 focus:outline-none focus:border-indigo-500 font-semibold
                          ${feedback[cell.id] === 'correct' ? 'border-green-400 bg-green-50' : 
                            feedback[cell.id] === 'incorrect' ? 'border-red-400 bg-red-50' : 'border-gray-300'}
                        `}
                      />
                      {feedback[cell.id] && renderFeedbackIcon(feedback[cell.id])}
                    </div>
                  ) : (
                    <span className="font-bold text-gray-700">
                      {cell.value}
                    </span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InteractiveTable;

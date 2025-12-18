
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

  // Helper function to render text mixed with LaTeX
  // Only parts wrapped in $...$ will be rendered by LatexRenderer
  const renderMixedText = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\$[^$]+\$)/g);
    return parts.map((part, index) => {
      if (part.startsWith('$') && part.endsWith('$')) {
        return (
          <LatexRenderer 
            key={index} 
            content={part.slice(1, -1)} 
            className="inline-block mx-1 align-bottom text-lg" 
          />
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  const handleFractionChange = (id: string, part: 'num' | 'den', newVal: string) => {
    const currentVal = inputs[id] || '';
    const [currNum, currDen] = currentVal.split('/');
    
    const safeNum = currNum || '';
    const safeDen = currDen || '';

    let nextVal = '';
    if (part === 'num') {
        nextVal = `${newVal}/${safeDen}`;
    } else {
        nextVal = `${safeNum}/${newVal}`;
    }
    onInputChange(id, nextVal);
  };

  return (
    <div className="w-full">
      {/* Game Rules Cards (Optional) */}
      {data.rules && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {data.rules.map((rule: string, index: number) => {
            // Logic: If it's the 3rd item (index 2), span across 2 columns
            const isFullWidth = index === 2; 
            
            return (
              <div 
                key={index} 
                className={`
                  bg-yellow-50 border-2 border-yellow-200 rounded-xl p-4 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-md transition-shadow
                  ${isFullWidth ? 'md:col-span-2' : ''}
                `}
              >
                <div className="absolute top-0 right-0 bg-yellow-200 text-yellow-800 text-xs font-bold px-3 py-1 rounded-bl-lg z-10">
                  Правило {index + 1}
                </div>
                <div className="flex items-start gap-4">
                    <div className="text-3xl shrink-0 mt-1">
                        {index === 0 ? '🎲' : index === 1 ? '🔄' : '🎨'}
                    </div>
                    <div className="text-base text-gray-800 font-medium leading-relaxed mt-1 w-full">
                        {renderMixedText(rule)}
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* The Table */}
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
                  <td key={cIdx} className="px-2 py-3 border-r last:border-r-0 border-gray-200 text-center align-middle">
                    {cell.id ? (
                      cell.type === 'fraction' ? (
                          // Fraction Input Cell
                          <div className="flex items-center justify-center gap-2">
                              <div className="flex flex-col items-center gap-1">
                                  <input 
                                      type="text"
                                      value={(inputs[cell.id] || '').split('/')[0] || ''}
                                      onChange={(e) => handleFractionChange(cell.id, 'num', e.target.value)}
                                      className={`w-12 text-center border-b-2 outline-none p-0.5 text-sm font-semibold bg-transparent
                                          ${feedback[cell.id] === 'correct' ? 'border-green-500 text-green-700' : 
                                            feedback[cell.id] === 'incorrect' ? 'border-red-500 text-red-700' : 'border-gray-400 focus:border-indigo-500'}
                                      `}
                                      placeholder="?"
                                  />
                                  <div className="w-full h-px bg-gray-800"></div>
                                  <input 
                                      type="text"
                                      value={(inputs[cell.id] || '').split('/')[1] || ''}
                                      onChange={(e) => handleFractionChange(cell.id, 'den', e.target.value)}
                                      className={`w-12 text-center outline-none p-0.5 text-sm font-semibold bg-transparent
                                          ${feedback[cell.id] === 'correct' ? 'text-green-700' : 
                                            feedback[cell.id] === 'incorrect' ? 'text-red-700' : ''}
                                      `}
                                      placeholder="?"
                                  />
                              </div>
                              {feedback[cell.id] && renderFeedbackIcon(feedback[cell.id])}
                          </div>
                      ) : (
                          // Standard Input Cell
                          <div className="flex items-center justify-center gap-1">
                          <input 
                              type="text"
                              value={inputs[cell.id] || ''}
                              onChange={(e) => onInputChange(cell.id, e.target.value)}
                              className={`w-20 text-center border-2 rounded p-1 focus:outline-none focus:border-indigo-500 font-semibold
                              ${feedback[cell.id] === 'correct' ? 'border-green-400 bg-green-50' : 
                                  feedback[cell.id] === 'incorrect' ? 'border-red-400 bg-red-50' : 'border-gray-300'}
                              `}
                          />
                          {feedback[cell.id] && renderFeedbackIcon(feedback[cell.id])}
                          </div>
                      )
                    ) : (
                      <span className="font-bold text-gray-700">
                        <LatexRenderer content={cell.value} />
                      </span>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default InteractiveTable;

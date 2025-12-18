
import React from 'react';
import LatexRenderer from './LatexRenderer';

interface FractionItem {
  id: string;
  answer: string;
}

interface ConversionTask {
  title: string;
  instruction: string;
  original_latex: string[];
  lcm_item: { id: string; answer: string; label: string };
  fraction_items: FractionItem[];
}

interface FractionConverterProps {
  data: {
    tasks: ConversionTask[];
  };
  inputs: { [key: string]: string };
  onInputChange: (id: string, value: string) => void;
  feedback: { [key: string]: 'correct' | 'incorrect' | null };
}

const FractionConverter: React.FC<FractionConverterProps> = ({ data, inputs, onInputChange, feedback }) => {
  
  const renderFeedbackIcon = (status: 'correct' | 'incorrect' | null) => {
    if (status === 'correct') return <span className="absolute -top-2 -right-2 bg-white rounded-full text-green-500 text-sm font-bold shadow-sm">✓</span>;
    if (status === 'incorrect') return <span className="absolute -top-2 -right-2 bg-white rounded-full text-red-500 text-sm font-bold shadow-sm">✗</span>;
    return null;
  };

  return (
    <div className="space-y-8">
      {data.tasks.map((task, taskIdx) => (
        <div key={taskIdx} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-indigo-50 px-6 py-4 border-b border-indigo-100">
            <h4 className="font-bold text-indigo-900 text-lg">{task.title}</h4>
            <p className="text-sm text-indigo-600 mt-1">{task.instruction}</p>
          </div>

          <div className="p-6">
            {/* Step 1: LCM/GCD Input */}
            <div className="mb-8 flex items-center gap-3 bg-yellow-50 p-3 rounded-lg border border-yellow-100 w-fit">
              <span className="font-bold text-gray-700">{task.lcm_item.label}:</span>
              <div className="relative">
                <input
                  type="text"
                  value={inputs[task.lcm_item.id] || ''}
                  onChange={(e) => onInputChange(task.lcm_item.id, e.target.value)}
                  className={`w-20 text-center border-2 rounded-md px-2 py-1 font-bold text-lg outline-none transition-colors
                    ${feedback[task.lcm_item.id] === 'correct' ? 'border-green-500 bg-green-50' : 
                      feedback[task.lcm_item.id] === 'incorrect' ? 'border-red-500 bg-red-50' : 'border-gray-300 focus:border-indigo-500'}
                  `}
                  placeholder="?"
                />
                {renderFeedbackIcon(feedback[task.lcm_item.id])}
              </div>
            </div>

            {/* Step 2: Fraction Conversion Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {task.original_latex.map((latex, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3">
                  {/* Original Fraction */}
                  <div className="bg-gray-100 px-4 py-2 rounded-lg text-xl text-gray-700 font-medium min-w-[60px] text-center">
                    <LatexRenderer content={latex} />
                  </div>
                  
                  {/* Arrow */}
                  <div className="text-gray-400 text-xl">↓</div>
                  
                  {/* New Fraction Input */}
                  <div className="relative">
                    <input
                      type="text"
                      value={inputs[task.fraction_items[idx].id] || ''}
                      onChange={(e) => onInputChange(task.fraction_items[idx].id, e.target.value)}
                      className={`w-24 text-center border-2 rounded-md px-2 py-2 font-bold outline-none transition-colors
                        ${feedback[task.fraction_items[idx].id] === 'correct' ? 'border-green-500 bg-green-50' : 
                          feedback[task.fraction_items[idx].id] === 'incorrect' ? 'border-red-500 bg-red-50' : 'border-indigo-200 focus:border-indigo-500'}
                      `}
                      placeholder="?/?"
                    />
                    {renderFeedbackIcon(feedback[task.fraction_items[idx].id])}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FractionConverter;


import React from 'react';

interface ImageCardGridProps {
  data: {
    items: {
      id: string;
      svg: string;
      answer: string;
      suffix?: string;
    }[];
  };
  inputs: { [key: string]: string };
  onInputChange: (id: string, value: string) => void;
  feedback: { [key: string]: 'correct' | 'incorrect' | null };
}

const ImageCardGrid: React.FC<ImageCardGridProps> = ({ data, inputs, onInputChange, feedback }) => {
  
  const renderFeedbackIcon = (status: 'correct' | 'incorrect' | null) => {
    if (status === 'correct') return <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 font-bold text-xl">✓</span>;
    if (status === 'incorrect') return <span className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 font-bold text-xl">✗</span>;
    return null;
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {data.items.map((item, idx) => (
        <div key={idx} className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
          {/* Image Area */}
          <div className="bg-gray-50 p-2 flex items-center justify-center border-b border-gray-100 h-32">
             <div className="w-24 h-24" dangerouslySetInnerHTML={{ __html: item.svg }} />
          </div>
          
          {/* Input Area */}
          <div className="p-3 bg-white flex items-center justify-center">
             <div className="relative w-full max-w-[100px]">
                <input
                  type="text"
                  value={inputs[item.id] || ''}
                  onChange={(e) => onInputChange(item.id, e.target.value)}
                  className={`w-full text-center border-2 rounded-lg py-1 pl-1 pr-6 font-bold text-lg outline-none transition-colors
                    ${feedback[item.id] === 'correct' ? 'border-green-500 bg-green-50 text-green-800' : 
                      feedback[item.id] === 'incorrect' ? 'border-red-500 bg-red-50 text-red-800' : 'border-gray-300 focus:border-indigo-500'}
                  `}
                  placeholder="..."
                />
                {renderFeedbackIcon(feedback[item.id])}
             </div>
             {item.suffix && (
                 <span className="ml-1 font-bold text-gray-600 text-lg">{item.suffix}</span>
             )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageCardGrid;

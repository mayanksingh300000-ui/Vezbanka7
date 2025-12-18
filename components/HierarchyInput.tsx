
import React, { useState } from 'react';
import LatexRenderer from './LatexRenderer';

interface InputDefinition {
  id: string;
  answer: string;
}

interface GroupDefinition {
  items: string[];
}

interface HierarchyInputProps {
  data: {
    groups: GroupDefinition[];
    middle_value: string;
    inputs: InputDefinition[];
    example_svg?: string; 
  };
  inputs: { [key: string]: string };
  onInputChange: (id: string, value: string) => void;
  feedback: { [key: string]: 'correct' | 'incorrect' | null };
}

// Custom Connector for Group (3 items -> 1 output)
const GroupConnector = () => (
  <div className="flex justify-center -my-1 w-full">
     <svg width="140" height="40" viewBox="0 0 140 40" className="text-rose-400 fill-none stroke-current stroke-2">
        <defs>
            <marker id="arrowHeadSmall" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">
                <polygon points="0 0, 8 3, 0 6" fill="#fb7185" />
            </marker>
        </defs>
        <path d="M20 0 L 65 30" marker-end="url(#arrowHeadSmall)" />
        <path d="M70 0 L 70 30" marker-end="url(#arrowHeadSmall)" />
        <path d="M120 0 L 75 30" marker-end="url(#arrowHeadSmall)" />
     </svg>
  </div>
);

// Custom Connector for Level 2 (3 items -> 1 output)
const ThreeWayConnector = () => (
  <div className="flex justify-center -mt-2 w-full">
     <svg width="100%" height="50" viewBox="0 0 300 50" className="text-rose-400 fill-none stroke-current stroke-2 w-full max-w-4xl" preserveAspectRatio="none">
        <defs>
            <marker id="arrowHead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                <polygon points="0 0, 10 3.5, 0 7" fill="#fb7185" />
            </marker>
        </defs>
        {/* Left (from ~16% center) to Center */}
        <path d="M50 0 L 145 40" marker-end="url(#arrowHead)" vectorEffect="non-scaling-stroke" />
        {/* Middle (from 50% center) to Center */}
        <path d="M150 0 L 150 40" marker-end="url(#arrowHead)" vectorEffect="non-scaling-stroke" />
        {/* Right (from ~83% center) to Center */}
        <path d="M250 0 L 155 40" marker-end="url(#arrowHead)" vectorEffect="non-scaling-stroke" />
     </svg>
  </div>
);

const StaticBox: React.FC<{ latex: string }> = ({ latex }) => (
  <div className="bg-rose-100 border-2 border-rose-300 rounded-lg px-3 py-2 min-w-[60px] text-center shadow-sm flex items-center justify-center h-14">
    <LatexRenderer content={latex} />
  </div>
);

const HierarchyInput: React.FC<HierarchyInputProps> = ({ data, inputs, onInputChange, feedback }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  
  const renderFeedbackIcon = (status: 'correct' | 'incorrect' | null) => {
    if (status === 'correct') return <span className="absolute -top-3 -right-3 bg-white rounded-full text-green-500 text-sm font-bold shadow-sm border border-green-200 p-0.5">✓</span>;
    if (status === 'incorrect') return <span className="absolute -top-3 -right-3 bg-white rounded-full text-red-500 text-sm font-bold shadow-sm border border-red-200 p-0.5">✗</span>;
    return null;
  };

  const InputBox = ({ def }: { def: InputDefinition }) => (
    <div className="relative inline-block">
        <input
            type="text"
            value={inputs[def.id] || ''}
            onChange={(e) => onInputChange(def.id, e.target.value)}
            className={`w-24 h-16 text-center border-4 rounded-lg text-lg font-bold outline-none transition-colors shadow-sm
            ${feedback[def.id] === 'correct' ? 'border-green-400 bg-green-50' : 
                feedback[def.id] === 'incorrect' ? 'border-red-400 bg-red-50' : 'border-rose-300 focus:border-rose-500 bg-white'}
            `}
            placeholder="?"
        />
        {renderFeedbackIcon(feedback[def.id])}
    </div>
  );

  return (
    <>
      <div className="flex flex-col gap-8 items-center w-full">
        
        {/* --- TOP: Example (SVG) --- */}
        {data.example_svg && (
          <div className="w-full max-w-4xl bg-white rounded-xl border border-gray-200 shadow-sm p-6 flex flex-col items-center">
             <h4 className="text-gray-500 font-bold uppercase text-sm tracking-wider mb-4 w-full text-left border-b pb-2">Пример (Правило)</h4>
             <div 
               className="w-full cursor-zoom-in hover:opacity-95 transition-opacity flex justify-center"
               onClick={() => setIsZoomed(true)}
               title="Кликни за зголемување"
               dangerouslySetInnerHTML={{ __html: data.example_svg }}
             />
             <p className="text-xs text-gray-400 mt-2 italic">🔍 Кликни на сликата за зголемување</p>
          </div>
        )}

        {/* --- BOTTOM: Interactive Task --- */}
        <div className="w-full bg-white rounded-xl border border-indigo-200 shadow-md p-8 flex flex-col items-center relative overflow-hidden">
          {/* Decorative top bar */}
          <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-rose-400 to-indigo-500"></div>
          
          <h4 className="text-indigo-600 font-bold uppercase text-lg tracking-wider mb-8 flex items-center gap-2">
            <span>✍️</span> Твоја задача
          </h4>
          
          <div className="flex flex-col items-center w-full max-w-4xl">
            
            {/* --- ROW 1: GROUPS (Left & Right) --- */}
            <div className="grid grid-cols-3 w-full gap-4 mb-2">
                {/* Group 1 (Left) */}
                <div className="flex flex-col items-center">
                    <div className="flex gap-2 justify-center">
                        {data.groups[0].items.map((item, i) => (
                            <StaticBox key={i} latex={item} />
                        ))}
                    </div>
                    <GroupConnector />
                </div>

                {/* Empty Middle Spacer */}
                <div></div>

                {/* Group 2 (Right) */}
                <div className="flex flex-col items-center">
                    <div className="flex gap-2 justify-center">
                        {data.groups[1].items.map((item, i) => (
                            <StaticBox key={i} latex={item} />
                        ))}
                    </div>
                    <GroupConnector />
                </div>
            </div>

            {/* --- ROW 2: INPUTS + MIDDLE VALUE --- */}
            <div className="grid grid-cols-3 w-full gap-4 items-center">
                {/* Left Input (Result of Group 1) */}
                <div className="flex justify-center">
                    <InputBox def={data.inputs[0]} />
                </div>

                {/* Middle Value (Static, Centered) */}
                <div className="flex justify-center relative top-[-10px]">
                    <StaticBox latex={data.middle_value} />
                </div>

                {/* Right Input (Result of Group 2) */}
                <div className="flex justify-center">
                    <InputBox def={data.inputs[1]} />
                </div>
            </div>

            {/* --- ROW 3: BIG CONNECTOR (3 -> 1) --- */}
            <div className="w-full">
                <ThreeWayConnector />
            </div>

            {/* --- ROW 4: FINAL INPUT --- */}
            <div className="flex justify-center mt-[-5px] relative z-10">
                <InputBox def={data.inputs[2]} />
            </div>

          </div>
        </div>

      </div>

      {/* --- ZOOM MODAL --- */}
      {isZoomed && data.example_svg && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div className="bg-white p-4 rounded-xl max-w-5xl w-full max-h-[90vh] overflow-auto relative shadow-2xl">
             <button 
               className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-2xl font-bold p-2"
               onClick={() => setIsZoomed(false)}
             >
               ✕
             </button>
             <div dangerouslySetInnerHTML={{ __html: data.example_svg }} className="w-full" />
          </div>
        </div>
      )}
    </>
  );
};

export default HierarchyInput;

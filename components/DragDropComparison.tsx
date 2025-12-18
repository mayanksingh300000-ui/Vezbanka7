
import React, { useState } from 'react';
import { Part } from '../types';
import LatexRenderer from './LatexRenderer';

interface DragDropComparisonProps {
  parts: Part[];
  items: string[];
  values: { [key: string]: string };
  onChange: (id: string, value: string) => void;
  feedback: { [key: string]: 'correct' | 'incorrect' | null };
}

const DragDropComparison: React.FC<DragDropComparisonProps> = ({ parts, items, values, onChange, feedback }) => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, item: string) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text/plain', item);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, partId: string) => {
    e.preventDefault();
    const item = draggedItem || e.dataTransfer.getData('text/plain');
    if (item) {
      onChange(partId, item);
    }
    setDraggedItem(null);
  };

  const handleRemove = (partId: string) => {
    // Only allow removing if not already correct (to prevent accidental undoing of success)
    if (feedback[partId] !== 'correct') {
        onChange(partId, '');
    }
  };

  const getBorderClass = (partId: string, isFilled: boolean) => {
    if (feedback[partId] === 'correct') return 'border-green-500 bg-green-50 text-green-700';
    if (feedback[partId] === 'incorrect') return 'border-red-500 bg-red-50 text-red-700';
    if (isFilled) return 'border-indigo-500 bg-indigo-50 text-indigo-900';
    return 'border-gray-300 bg-white border-dashed';
  };

  return (
    <div className="space-y-6">
       {/* Instruction */}
       <div className="bg-indigo-50 p-3 rounded-lg border border-indigo-100 text-sm text-indigo-800 flex items-center gap-2">
         <span>👋</span>
         <span>Влечи ги знаците од долниот дел и пушти ги во празните квадратчиња помеѓу изразите.</span>
       </div>

       {/* Comparison Rows */}
       <div className="space-y-4">
        {parts.map((part) => (
          <div key={part.part_id} className="flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-gray-50 rounded-xl border border-gray-100 shadow-sm">
            
            {/* Left Expression */}
            <div className="flex-1 flex justify-end">
                <div className="text-xl font-medium bg-white px-4 py-2 rounded-lg border border-gray-200 min-w-[120px] text-center shadow-sm">
                    {part.latex && <LatexRenderer content={part.latex} />}
                </div>
            </div>

            {/* Drop Zone */}
            <div 
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, part.part_id)}
              onClick={() => values[part.part_id] && handleRemove(part.part_id)}
              className={`
                w-16 h-16 rounded-xl border-2 flex items-center justify-center cursor-pointer transition-all shadow-inner
                ${getBorderClass(part.part_id, !!values[part.part_id])}
              `}
            >
              {values[part.part_id] ? (
                <div className="text-3xl font-bold">
                    <LatexRenderer content={values[part.part_id]} />
                </div>
              ) : (
                <span className="text-gray-300 text-2xl font-bold">?</span>
              )}
            </div>

            {/* Right Expression */}
            <div className="flex-1 flex justify-start">
                <div className="text-xl font-medium bg-white px-4 py-2 rounded-lg border border-gray-200 min-w-[120px] text-center shadow-sm">
                    {part.latex_suffix && <LatexRenderer content={part.latex_suffix} />}
                </div>
            </div>
            
            {/* Feedback Icon (Absolute Right) */}
            <div className="w-8 flex justify-center">
                 {feedback[part.part_id] === 'correct' && <span className="text-green-500 text-xl font-bold">✓</span>}
                 {feedback[part.part_id] === 'incorrect' && <span className="text-red-500 text-xl font-bold">✗</span>}
            </div>

          </div>
        ))}
      </div>

      {/* Draggable Items (Sticky Bottom or standard) */}
      <div className="sticky bottom-4 z-10 flex justify-center">
        <div className="bg-white p-3 rounded-2xl shadow-xl border-2 border-indigo-100 flex gap-6 animate-fade-in-up">
          {items.map((item, idx) => (
            <div
              key={idx}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              className="
                cursor-grab active:cursor-grabbing hover:scale-110 transition-transform
                bg-indigo-600 text-white shadow-lg rounded-xl
                w-16 h-16 flex items-center justify-center text-3xl font-bold border-2 border-indigo-700
              "
            >
              <LatexRenderer content={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DragDropComparison;

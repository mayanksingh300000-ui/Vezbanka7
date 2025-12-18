import React, { useState, useEffect } from 'react';
import { Part } from '../types';
import LatexRenderer from './LatexRenderer';

interface DragDropSetTheoryProps {
  parts: Part[];
  items: string[];
  values: { [key: string]: string };
  onChange: (id: string, value: string) => void;
  feedback: { [key: string]: 'correct' | 'incorrect' | null };
}

const DragDropSetTheory: React.FC<DragDropSetTheoryProps> = ({ parts, items, values, onChange, feedback }) => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const handleDragStart = (e: React.DragEvent, item: string) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text/plain', item);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault(); // Necessary to allow dropping
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
    onChange(partId, '');
  };

  const getBorderColor = (partId: string, isFilled: boolean) => {
    if (feedback[partId] === 'correct') return 'border-green-500 bg-green-50';
    if (feedback[partId] === 'incorrect') return 'border-red-500 bg-red-50';
    if (isFilled) return 'border-indigo-500 bg-indigo-50';
    return 'border-gray-300 bg-white border-dashed';
  };

  return (
    <div className="space-y-8">
      {/* Equations Area */}
      <div className="space-y-4">
        {parts.map((part) => (
          <div key={part.part_id} className="flex items-center flex-wrap gap-3 p-3 bg-gray-50 rounded-lg">
            <span className="font-bold text-gray-500 mr-2">{part.text_mk}</span>
            
            {/* Left side of equation */}
            {part.latex && <LatexRenderer content={part.latex} className="text-xl" />}
            
            {/* Drop Zone */}
            <div 
              onDragOver={handleDragOver}
              onDrop={(e) => handleDrop(e, part.part_id)}
              onClick={() => values[part.part_id] && handleRemove(part.part_id)}
              className={`
                min-w-[80px] h-12 rounded-lg border-2 flex items-center justify-center cursor-pointer transition-all
                ${getBorderColor(part.part_id, !!values[part.part_id])}
              `}
            >
              {values[part.part_id] ? (
                <div className="flex items-center gap-1">
                    <LatexRenderer content={values[part.part_id]} />
                    {/* Small x to clear, only if not already validated as correct */}
                    {feedback[part.part_id] !== 'correct' && (
                        <span className="text-xs text-gray-400 hover:text-red-500 ml-1">✕</span>
                    )}
                </div>
              ) : (
                <span className="text-gray-300 text-sm">?</span>
              )}
            </div>

            {/* Right side of equation (if any) */}
            {part.latex_suffix && <LatexRenderer content={part.latex_suffix} className="text-xl" />}

            {/* Feedback Icon */}
            {feedback[part.part_id] === 'correct' && <span className="text-green-500 text-xl">✓</span>}
            {feedback[part.part_id] === 'incorrect' && <span className="text-red-500 text-xl">✗</span>}
          </div>
        ))}
      </div>

      {/* Answer Bank */}
      <div className="border-t pt-4">
        <p className="text-sm text-gray-500 mb-3 text-center italic">Влечи ги картичките во празните полиња:</p>
        <div className="flex flex-wrap justify-center gap-4">
          {items.map((item, idx) => (
            <div
              key={idx}
              draggable
              onDragStart={(e) => handleDragStart(e, item)}
              className="
                cursor-grab active:cursor-grabbing hover:scale-105 transition-transform
                bg-white border-2 border-indigo-200 shadow-sm rounded-lg
                w-16 h-12 flex items-center justify-center
                hover:border-indigo-400 hover:shadow-md
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

export default DragDropSetTheory;
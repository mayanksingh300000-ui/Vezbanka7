
import React, { useState } from 'react';
import { Part } from '../types';
import LatexRenderer from './LatexRenderer';

interface FillInTheBlanksProps {
  part: Part;
  inputs: { [key: string]: string };
  onInputChange: (id: string, value: string) => void;
  feedback: { [key: string]: 'correct' | 'incorrect' | null };
  dragItems?: string[];
}

const FillInTheBlanks: React.FC<FillInTheBlanksProps> = ({ part, inputs, onInputChange, feedback, dragItems }) => {
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  // Split text by {{}} placeholder
  const segments = part.text_mk.split('{{}}');

  const handleDragStart = (e: React.DragEvent, item: string) => {
    setDraggedItem(item);
    e.dataTransfer.effectAllowed = 'copy';
    e.dataTransfer.setData('text/plain', item);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent, inputId: string) => {
    e.preventDefault();
    const item = draggedItem || e.dataTransfer.getData('text/plain');
    if (item) {
      onInputChange(inputId, item);
    }
    setDraggedItem(null);
  };

  // Helper to render text with LaTeX ($...$) and Bold (**...**) support
  const renderSegmentContent = (text: string) => {
    // Split by LaTeX delimiters $...$
    const latexParts = text.split(/(\$[^$]+\$)/g);
    
    return latexParts.map((part, i) => {
      if (part.startsWith('$') && part.endsWith('$')) {
        return <LatexRenderer key={i} content={part.slice(1, -1)} className="mx-1" />;
      }
      
      // Split by Markdown Bold **...**
      const boldParts = part.split(/(\*\*.*?\*\*)/g);
      return boldParts.map((subPart, j) => {
        if (subPart.startsWith('**') && subPart.endsWith('**')) {
          return <strong key={`${i}-${j}`}>{subPart.slice(2, -2)}</strong>;
        }
        return <span key={`${i}-${j}`}>{subPart}</span>;
      });
    });
  };

  return (
    <div className="bg-gray-50 p-5 rounded-xl border border-gray-200 shadow-sm">
      {/* Changed items-center to items-baseline for better text alignment */}
      <div className="leading-loose text-lg text-gray-800 flex flex-wrap items-baseline gap-y-3">
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1;
          const inputId = `${part.part_id}_${index}`;
          const val = inputs[inputId] || '';
          const status = feedback[inputId];

          return (
            <React.Fragment key={index}>
              {/* Render Text Segment with Latex/Bold support */}
              {renderSegmentContent(segment)}
              
              {/* Render Input/DropZone if not the last segment */}
              {!isLast && (
                <span className="inline-flex mx-1 relative top-1"> {/* Small offset adjustment */}
                   <div className="relative inline-block">
                      <input
                        type="text"
                        value={val}
                        onChange={(e) => onInputChange(inputId, e.target.value)}
                        onDragOver={handleDragOver}
                        onDrop={(e) => handleDrop(e, inputId)}
                        className={`
                          border-b-2 px-2 py-0.5 text-center font-bold outline-none transition-colors min-w-[80px] w-auto h-8
                          ${status === 'correct' ? 'border-green-500 bg-green-50 text-green-700' : 
                            status === 'incorrect' ? 'border-red-500 bg-red-50 text-red-700' : 
                            'border-indigo-300 bg-white focus:border-indigo-600'}
                        `}
                        placeholder="?"
                      />
                      {status === 'correct' && (
                        <span className="absolute -right-4 -top-2 text-green-600 text-sm font-bold">✓</span>
                      )}
                      {status === 'incorrect' && (
                        <span className="absolute -right-4 -top-2 text-red-500 text-sm font-bold">✗</span>
                      )}
                   </div>
                </span>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default FillInTheBlanks;

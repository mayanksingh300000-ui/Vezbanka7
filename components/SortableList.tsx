
import React, { useState, useEffect } from 'react';
import LatexRenderer from './LatexRenderer';

interface SortableListProps {
  items: string[];
  onChange: (items: string[]) => void;
}

const SortableList: React.FC<SortableListProps> = ({ items, onChange }) => {
  const [list, setList] = useState(items);
  const [draggingIndex, setDraggingIndex] = useState<number | null>(null);

  useEffect(() => {
    // Only update if the incoming items are effectively different to avoid loop
    // Simple JSON stringify comparison usually suffices for string arrays
    if (JSON.stringify(items) !== JSON.stringify(list)) {
        setList(items);
    }
  }, [items]); 

  const handleDragStart = (e: React.DragEvent, index: number) => {
    setDraggingIndex(index);
    e.dataTransfer.effectAllowed = 'move';
    // Set transparent image or styling here if needed
    // e.dataTransfer.setDragImage(e.target as Element, 0, 0);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault(); // Necessary to allow dropping
    if (draggingIndex === null || draggingIndex === index) return;

    const newList = [...list];
    const draggedItem = newList[draggingIndex];
    newList.splice(draggingIndex, 1);
    newList.splice(index, 0, draggedItem);
    
    setList(newList);
    setDraggingIndex(index);
    onChange(newList); // Notify parent immediately for smooth feel
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  return (
    <div className="select-none">
      <p className="text-xs text-gray-500 mb-2 italic">
        * Фати и влечи ги картичките за да ги подредиш
      </p>
      <div className="flex flex-wrap gap-3 p-4 bg-gray-50 rounded-xl border-2 border-dashed border-indigo-200 min-h-[80px]">
        {list.map((item, index) => (
          <div
            key={`${item}-${index}`} // Using index combination to handle duplicate values if any
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
            className={`
              cursor-grab active:cursor-grabbing
              px-5 py-3 rounded-lg shadow-sm border
              font-mono text-lg font-bold flex items-center justify-center
              transition-all duration-200 transform
              ${draggingIndex === index 
                ? 'opacity-40 scale-95 bg-indigo-100 border-indigo-400' 
                : 'bg-white border-gray-200 hover:shadow-md hover:-translate-y-1 hover:border-indigo-300 text-gray-800'
              }
            `}
          >
            <LatexRenderer content={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SortableList;

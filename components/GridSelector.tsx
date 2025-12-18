
import React from 'react';
import LatexRenderer from './LatexRenderer';

interface GridSelectorProps {
  items: string[];
  selectedItems: string[];
  onChange: (selected: string[]) => void;
  feedback?: 'correct' | 'incorrect' | null;
  correctItems?: string[]; // Optional: passed only when checking/revealing
}

const GridSelector: React.FC<GridSelectorProps> = ({ items, selectedItems, onChange, feedback, correctItems }) => {
  
  const toggleItem = (item: string) => {
    if (feedback) return; // Disable interaction if feedback is showing
    
    const newSelection = selectedItems.includes(item)
      ? selectedItems.filter(i => i !== item)
      : [...selectedItems, item];
    onChange(newSelection);
  };

  const getCardStyle = (item: string) => {
    const isSelected = selectedItems.includes(item);
    
    // Feedback State
    if (feedback && correctItems) {
      const isCorrect = correctItems.includes(item);
      
      // Correctly selected
      if (isSelected && isCorrect) return 'bg-green-100 border-green-500 text-green-800 ring-2 ring-green-300';
      // Incorrectly selected
      if (isSelected && !isCorrect) return 'bg-red-100 border-red-500 text-red-800 ring-2 ring-red-300';
      // Missed correct item (optional: highlight missed ones slightly)
      if (!isSelected && isCorrect) return 'bg-green-50 border-green-200 text-gray-500 opacity-75'; 
    }

    // Normal State
    if (isSelected) return 'bg-indigo-100 border-indigo-500 text-indigo-900 shadow-md transform scale-105';
    
    return 'bg-white border-gray-200 text-gray-700 hover:border-indigo-300 hover:shadow-sm';
  };

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
      {items.map((item, idx) => (
        <button
          key={idx}
          onClick={() => toggleItem(item)}
          className={`
            p-6 rounded-xl border-2 transition-all duration-200 flex items-center justify-center text-xl font-bold
            ${getCardStyle(item)}
          `}
        >
          <LatexRenderer content={item} />
          {feedback && correctItems && selectedItems.includes(item) && (
             <span className="absolute top-2 right-2 text-xs">
                {correctItems.includes(item) ? '✓' : '✗'}
             </span>
          )}
        </button>
      ))}
    </div>
  );
};

export default GridSelector;

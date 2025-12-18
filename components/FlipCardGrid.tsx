import React, { useState } from 'react';
import LatexRenderer from './LatexRenderer';

interface CardData {
  front: string; // The integer
  back: string;  // The absolute value calculation
}

interface FlipCardGridProps {
  cards: CardData[];
  allowReveal: boolean;
}

const FlipCardGrid: React.FC<FlipCardGridProps> = ({ cards, allowReveal }) => {
  // Track which cards are flipped
  const [flippedIndices, setFlippedIndices] = useState<Set<number>>(new Set());

  const handleCardClick = (index: number) => {
    if (!allowReveal) return;

    setFlippedIndices((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <div className="my-6">
      {!allowReveal && (
        <div className="bg-yellow-50 text-yellow-800 px-4 py-2 rounded-lg text-sm mb-4 text-center border border-yellow-200 shadow-sm flex items-center justify-center gap-2">
          <span>🔒</span>
          <strong>Направи избор и кликни „Провери“ за да ги отклучиш картичките!</strong>
        </div>
      )}
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 justify-center">
        {cards.map((card, index) => {
          const isFlipped = flippedIndices.has(index);

          return (
            <div
              key={index}
              className={`relative h-32 w-full cursor-pointer group perspective-1000 ${!allowReveal ? 'cursor-not-allowed opacity-90' : ''}`}
              onClick={() => handleCardClick(index)}
              style={{ perspective: '1000px' }} // Explicit perspective for 3D effect
            >
              <div 
                className={`w-full h-full transition-all duration-500 transform-style-3d relative shadow-md rounded-xl ${isFlipped ? 'rotate-y-180' : ''}`}
                style={{ transformStyle: 'preserve-3d', transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)' }}
              >
                {/* FRONT */}
                <div 
                  className="absolute inset-0 w-full h-full bg-indigo-600 text-white rounded-xl flex items-center justify-center text-2xl font-bold backface-hidden border-2 border-indigo-700"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <LatexRenderer content={card.front} />
                  {allowReveal && !isFlipped && (
                     <div className="absolute bottom-2 text-xs text-indigo-200 opacity-0 group-hover:opacity-100 transition-opacity">
                        Кликни за превртување
                     </div>
                  )}
                </div>

                {/* BACK */}
                <div 
                  className="absolute inset-0 w-full h-full bg-white text-indigo-900 rounded-xl flex items-center justify-center text-xl font-bold border-2 border-indigo-200 backface-hidden rotate-y-180"
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <LatexRenderer content={card.back} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {allowReveal && (
          <p className="text-center text-sm text-gray-500 mt-2 italic animate-pulse">
            * Сега можеш да кликнеш на картичките за да провериш што пишува позади!
          </p>
      )}
    </div>
  );
};

export default FlipCardGrid;
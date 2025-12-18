
import React from 'react';
import { Problem } from '../types';

interface GeometryCanvasProps {
  problem: Problem;
  onInputChange: (id: string, value: string) => void;
  feedback: { [key: string]: 'correct' | 'incorrect' | null };
}

const GeometryCanvas: React.FC<GeometryCanvasProps> = ({ problem, onInputChange, feedback }) => {
  return (
    <div className="border-2 border-dashed border-indigo-300 rounded-xl p-8 bg-white text-center">
      <div className="mb-4 text-indigo-800 font-bold text-lg">
        📏 Геометриска Работна Површина
      </div>
      
      <div className="bg-gray-50 h-64 w-full border border-gray-200 rounded-lg flex items-center justify-center mb-4 relative overflow-hidden">
        {/* Placeholder for Canvas API / SVG Interactive Logic */}
        <p className="text-gray-400 italic">
          Интерактивната табла за геометрија ќе биде вчитана овде.
          <br />
          (Овој дел ќе се развива во следната фаза)
        </p>
        
        {/* Temporary visual just to show something appears based on props */}
        {problem.svg && (
           <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
              <div dangerouslySetInnerHTML={{ __html: problem.svg }} />
           </div>
        )}
      </div>

      <div className="flex justify-center gap-4">
        {/* Placeholder controls */}
        <button className="px-3 py-1 bg-gray-200 rounded text-sm text-gray-600 cursor-not-allowed">✏️ Молив</button>
        <button className="px-3 py-1 bg-gray-200 rounded text-sm text-gray-600 cursor-not-allowed">📏 Линијар</button>
        <button className="px-3 py-1 bg-gray-200 rounded text-sm text-gray-600 cursor-not-allowed">🔄 Избриши</button>
      </div>
      
      <div className="mt-4 text-sm text-gray-500">
        За оваа демо верзија, внеси го одговорот долу:
      </div>
       <div className="mt-2 flex justify-center items-center gap-2">
            <span className="font-bold">Решение:</span>
            <input
              type="text"
              onChange={(e) => onInputChange(problem.id, e.target.value)}
              className="border-2 border-gray-300 rounded-md px-3 py-1 w-32 focus:border-indigo-500 focus:outline-none"
              placeholder="Внеси вредност"
            />
        </div>
    </div>
  );
};

export default GeometryCanvas;

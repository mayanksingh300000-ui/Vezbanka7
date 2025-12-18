
import React from 'react';
import { Part } from '../types';
import LatexRenderer from './LatexRenderer';
import SortableList from './SortableList';

interface StandardPartsProps {
  parts: Part[];
  problemType: string;
  inputs: { [key: string]: string };
  onInputChange: (id: string, value: string) => void;
  feedback: { [key: string]: 'correct' | 'incorrect' | null };
}

const StandardParts: React.FC<StandardPartsProps> = ({ parts, problemType, inputs, onInputChange, feedback }) => {
  
  const renderFeedbackIcon = (status: 'correct' | 'incorrect' | null) => {
    if (status === 'correct') return <span className="text-green-500 ml-1 text-lg font-bold">✓</span>;
    if (status === 'incorrect') return <span className="text-red-500 ml-1 text-lg font-bold">✗</span>;
    return null;
  };

  // Helper to parse text with LaTeX ($...$) and simple markdown bold (**...**)
  const renderText = (text: string) => {
    if (!text) return null;
    const latexParts = text.split(/(\$[^$]+\$)/g);
    
    return latexParts.map((part, i) => {
      if (part.startsWith('$') && part.endsWith('$')) {
        return <LatexRenderer key={i} content={part.slice(1, -1)} className="inline-block mx-1 align-middle text-indigo-700" />;
      }
      
      const boldParts = part.split(/(\*\*.*?\*\*)/g);
      return boldParts.map((subPart, j) => {
        if (subPart.startsWith('**') && subPart.endsWith('**')) {
          return <strong key={`${i}-${j}`} className="font-bold">{subPart.slice(2, -2)}</strong>;
        }
        return <span key={`${i}-${j}`}>{subPart}</span>;
      });
    });
  };

  // Determine grid layout for Parts
  const getPartsLayoutClass = () => {
    const hasLongContent = parts?.some(p => 
        (p.latex_numbers && p.latex_numbers.length > 45) || 
        (p.latex && p.latex.length > 45)
    );

    if (hasLongContent) return "space-y-6";
    
    if (parts && parts.length === 3 && problemType === 'equation_solving') return "grid grid-cols-1 md:grid-cols-3 gap-4";
    
    if (problemType === 'comparison_of_integers') return "grid grid-cols-1 md:grid-cols-2 gap-4";
    
    if (parts && parts.length === 4) {
        return "grid grid-cols-1 md:grid-cols-2 gap-4";
    }

    if (parts && parts.length === 2 && ['inequalities_solving', 'expression_calculation', 'equation_solving'].includes(problemType)) {
       return "grid grid-cols-1 md:grid-cols-2 gap-4";
    }

    if (parts && parts.length >= 6) {
       return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4";
    }

    return "space-y-6";
  };

  return (
    <div className={getPartsLayoutClass()}>
      {parts.map((part) => (
        <div key={part.part_id} className="p-4 bg-gray-50 rounded-lg flex flex-col justify-center relative shadow-sm border border-gray-100">
          <div className="mb-2 font-semibold text-gray-700">{renderText(part.text_mk)}</div>
          
          {part.latex_numbers && problemType !== 'ordering_of_integers' && (
            <div className="mb-3">
              <LatexRenderer content={part.latex_numbers} block className="text-xl" />
            </div>
          )}

          {part.svg && (
            <div 
              className="mb-4"
              dangerouslySetInnerHTML={{ __html: part.svg }} 
            />
          )}

          {/* Conditional Rendering for Ordering Drag and Drop vs Inputs */}
          {problemType === 'ordering_of_integers' && part.latex_numbers ? (
            <div className="mt-2">
              <SortableList 
                items={inputs[part.part_id] 
                  ? inputs[part.part_id].split(',').map(s => s.trim()) 
                  : part.latex_numbers.split(',').map(s => s.trim())
                }
                onChange={(newOrder) => onInputChange(part.part_id, newOrder.join(', '))}
              />
              <div className="mt-2 flex items-center justify-end h-6">
                  {renderFeedbackIcon(feedback[part.part_id])}
              </div>
            </div>
          ) : (
            <div className={`flex items-center flex-wrap gap-2 ${parts && parts.length === 3 ? 'justify-center' : ''}`}>
              {part.latex && <LatexRenderer content={part.latex} className="text-xl mr-2" />}
              
              <input
                type="text"
                value={inputs[part.part_id] || ''}
                onChange={(e) => onInputChange(part.part_id, e.target.value)}
                className={`border-2 border-gray-300 rounded-md px-3 py-1 focus:border-indigo-500 focus:outline-none font-medium text-lg text-center
                  ${part.latex_numbers ? 'w-full' : (part.latex_suffix ? 'w-20' : 'w-24')}`}
                placeholder={part.latex_numbers ? "Внеси ги броевите..." : "?"}
              />

              {part.latex_suffix && <LatexRenderer content={part.latex_suffix} className="text-xl ml-2" />}

              {renderFeedbackIcon(feedback[part.part_id])}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StandardParts;

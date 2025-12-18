
import React, { useState } from 'react';
import { Problem } from '../types';
import LatexRenderer from './LatexRenderer';
import DragDropSetTheory from './DragDropSetTheory';
import DragDropComparison from './DragDropComparison';
import WeatherDashboard from './WeatherDashboard';
import FlipCardGrid from './FlipCardGrid';
import FillInTheBlanks from './FillInTheBlanks';
import GridSelector from './GridSelector';
import ValueCards from './ValueCards';
import InteractiveTable from './InteractiveTable';
import MultipleChoice from './MultipleChoice';
import StandardParts from './StandardParts';
import PowerOfTwo from './PowerOfTwo';
import ConditionalEquation from './ConditionalEquation';
import GeometryCanvas from './GeometryCanvas';
import FractionConverter from './FractionConverter';
import HierarchyInput from './HierarchyInput';
import FractionInput from './FractionInput';
import ImageCardGrid from './ImageCardGrid';

interface ProblemBodyProps {
  problem: Problem;
  inputs: { [key: string]: string };
  onInputChange: (id: string, value: string) => void;
  selectedOption: string | null;
  onOptionSelect: (optionId: string) => void;
  feedback: { [key: string]: 'correct' | 'incorrect' | null };
  hasAttempted?: boolean; 
}

const ProblemBody: React.FC<ProblemBodyProps> = ({ 
  problem, 
  inputs, 
  onInputChange, 
  selectedOption, 
  onOptionSelect, 
  feedback,
  hasAttempted = false
}) => {
  const [isZoomed, setIsZoomed] = useState(false);

  // --- 1. Custom Visuals Dispatcher (Top Level) ---
  const renderCustomVisual = () => {
    if (!problem.custom_visual_data) return null;

    const { type } = problem.custom_visual_data;

    // Mapping custom visual types to components
    switch (type) {
      case 'data_analysis_and_comparison': 
        return <WeatherDashboard data={problem.custom_visual_data} />;
      case 'grid_of_fractions':
        return (
          <GridSelector 
             items={problem.custom_visual_data.fractions}
             selectedItems={inputs[problem.id] ? inputs[problem.id].split(',').filter(Boolean) : []}
             onChange={(selected) => onInputChange(problem.id, selected.join(','))}
             feedback={feedback[problem.id] || null}
             correctItems={problem.custom_visual_data.correct_items}
          />
        );
      case 'value_cards':
        return (
          <ValueCards 
            data={problem.custom_visual_data}
            inputs={inputs}
            onInputChange={onInputChange}
            feedback={feedback}
          />
        );
      case 'interactive_table':
        return (
          <InteractiveTable 
            data={problem.custom_visual_data}
            inputs={inputs}
            onInputChange={onInputChange}
            feedback={feedback}
          />
        );
      case 'fraction_conversion':
        return (
          <FractionConverter
            data={problem.custom_visual_data}
            inputs={inputs}
            onInputChange={onInputChange}
            feedback={feedback}
          />
        );
      case 'hierarchy_fill':
        return (
          <HierarchyInput
            data={problem.custom_visual_data}
            inputs={inputs}
            onInputChange={onInputChange}
            feedback={feedback}
          />
        );
      case 'fraction_input':
        return (
          <FractionInput
            id={problem.id}
            value={inputs[problem.id] || ''}
            onChange={onInputChange}
            feedback={feedback[problem.id] || null}
          />
        );
      case 'image_card_grid':
        return (
          <ImageCardGrid 
            data={problem.custom_visual_data}
            inputs={inputs}
            onInputChange={onInputChange}
            feedback={feedback}
          />
        );
      case 'info_cards':
        // New visual for purely displaying information in card format (Challenge 2)
        return (
          <div className="space-y-6">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {problem.custom_visual_data.cards.map((card: any, idx: number) => (
                  <div key={idx} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex flex-col items-center text-center hover:shadow-md transition-shadow">
                      <div className="text-4xl mb-3">{card.icon}</div>
                      <h4 className="font-bold text-gray-800 text-lg">{card.title}</h4>
                      <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mb-2">{card.subtitle}</p>
                      <div className="mt-auto bg-indigo-50 px-4 py-2 rounded-lg border border-indigo-100 w-full">
                         <span className="font-bold text-indigo-700 text-xl">
                            <LatexRenderer content={card.value} />
                         </span>
                      </div>
                  </div>
                ))}
             </div>
             {problem.custom_visual_data.extra_info && (
               <div className="bg-orange-50 border-l-4 border-orange-400 p-4 rounded-r-lg text-orange-800 font-medium flex items-center gap-3">
                  <span>⏱️</span>
                  <span>{problem.custom_visual_data.extra_info}</span>
               </div>
             )}
          </div>
        );
      default:
        // Legacy fallback for types handled by problem_type check previously
        if (problem.problem_type === 'data_analysis_and_comparison') {
             return <WeatherDashboard data={problem.custom_visual_data} />;
        }
        if (problem.problem_type === 'flashcards_logic') {
             return (
              <FlipCardGrid 
                cards={problem.custom_visual_data.cards} 
                allowReveal={hasAttempted}
              />
             );
        }
        return null;
    }
  };

  // --- 2. Problem Type Component Factory ---
  
  // This map connects problem_type strings to specific components.
  // StandardParts is the default fallback.
  const renderProblemParts = () => {
    // Priority Check: Geometry
    if (problem.problem_type === 'geometry_construction') {
       return (
         <GeometryCanvas 
            problem={problem}
            onInputChange={onInputChange}
            feedback={feedback}
         />
       );
    }

    if (!problem.parts) return null;

    switch (problem.problem_type) {
      case 'fill_in_the_blanks':
        return (
          <div className="space-y-6">
            {problem.parts.map((part) => (
                <FillInTheBlanks 
                  key={part.part_id}
                  part={part}
                  inputs={inputs}
                  onInputChange={onInputChange}
                  feedback={feedback}
                  dragItems={problem.drag_items}
                />
            ))}
          </div>
        );
      
      case 'set_theory_drag_drop':
        return problem.drag_items ? (
            <div className="col-span-1 md:col-span-2">
              <DragDropSetTheory 
                parts={problem.parts}
                items={problem.drag_items}
                values={inputs}
                onChange={onInputChange}
                feedback={feedback}
              />
            </div>
        ) : null;

      case 'drag_drop_comparison':
        return problem.drag_items ? (
            <div className="col-span-1">
              <DragDropComparison 
                parts={problem.parts}
                items={problem.drag_items}
                values={inputs}
                onChange={onInputChange}
                feedback={feedback}
              />
            </div>
        ) : null;

      case 'power_of_two':
        return (
          <PowerOfTwo 
            parts={problem.parts} 
            inputs={inputs} 
            onInputChange={onInputChange} 
            feedback={feedback} 
          />
        );

      case 'conditional_yes_no_equation':
        return (
          <ConditionalEquation 
            parts={problem.parts} 
            inputs={inputs} 
            onInputChange={onInputChange} 
            feedback={feedback} 
          />
        );

      default:
        // The default handler for most practice problems
        return (
          <StandardParts 
            parts={problem.parts}
            problemType={problem.problem_type}
            inputs={inputs}
            onInputChange={onInputChange}
            feedback={feedback}
          />
        );
    }
  };

  return (
    <>
      {/* Render top-level SVG illustration FIRST (e.g., Egg Cartons) */}
      {problem.svg && problem.problem_type !== 'geometry_construction' && (
        <>
          <div 
            className="mb-6 flex justify-center cursor-zoom-in"
            onClick={() => setIsZoomed(true)}
            title="Кликни за зголемување"
            dangerouslySetInnerHTML={{ __html: problem.svg }} 
          />
          {isZoomed && (
            <div 
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
              onClick={() => setIsZoomed(false)}
            >
               <div className="bg-white p-2 rounded-lg max-w-[95vw] max-h-[95vh] overflow-auto shadow-2xl relative">
                  <button 
                    onClick={(e) => { e.stopPropagation(); setIsZoomed(false); }}
                    className="absolute top-2 right-2 bg-gray-200 hover:bg-gray-300 rounded-full w-8 h-8 flex items-center justify-center font-bold text-gray-700"
                  >
                    ✕
                  </button>
                  <div dangerouslySetInnerHTML={{ __html: problem.svg }} className="w-full h-full" />
               </div>
            </div>
          )}
        </>
      )}

      {/* Custom Visual Data Section (e.g., Input Fields, Charts) */}
      {problem.custom_visual_data && (
        <div className="mb-6">
           {renderCustomVisual()}
        </div>
      )}

      {/* Claims */}
      {problem.claims && (
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-lg mb-8 shadow-sm">
           <h4 className="text-xs font-bold text-indigo-50 uppercase tracking-widest mb-3">Анализирај ги тврдењата:</h4>
           <ul className="space-y-3">
             {problem.claims.map((claim, idx) => (
               <li key={idx} className="flex gap-3 text-gray-800">
                  <span className="font-bold bg-white text-indigo-600 w-8 h-8 rounded-full flex items-center justify-center shadow-sm shrink-0 border border-indigo-100">
                    {['I', 'II', 'III', 'IV'][idx]}
                  </span>
                  <span className="mt-1">{claim}</span>
               </li>
             ))}
           </ul>
        </div>
      )}

      {/* Legacy Data Table */}
      {problem.data_table_latex && !problem.custom_visual_data && (
        <div className="mb-6 overflow-x-auto flex justify-center">
            <LatexRenderer content={problem.data_table_latex} block />
        </div>
      )}

      {/* Render The Specific Problem Logic */}
      {renderProblemParts()}
      
      {/* Universal Drag Items Bank (Fallback for Fill in the blanks if not handled inside) */}
      {problem.problem_type === 'fill_in_the_blanks' && problem.drag_items && (
         <div className="sticky bottom-4 z-20 mt-6 flex justify-center">
            <div className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl shadow-xl border-2 border-indigo-200 flex flex-wrap gap-3 justify-center animate-fade-in-up">
              {problem.drag_items.map((item, idx) => (
                <div
                  key={idx}
                  draggable
                  onDragStart={(e) => {
                    e.dataTransfer.effectAllowed = 'copy';
                    e.dataTransfer.setData('text/plain', item);
                  }}
                  className="
                    cursor-grab active:cursor-grabbing hover:-translate-y-1 transition-transform
                    bg-indigo-100 text-indigo-900 shadow-sm rounded-lg px-4 py-2
                    font-bold border border-indigo-300 text-sm md:text-base flex items-center justify-center
                  "
                >
                  {item.startsWith('$') && item.endsWith('$') ? (
                    <LatexRenderer content={item.slice(1, -1)} />
                  ) : (
                    item
                  )}
                </div>
              ))}
            </div>
         </div>
      )}

      {/* Render Options (Multiple Choice) */}
      {problem.options && (
        <MultipleChoice 
          options={problem.options}
          selectedOption={selectedOption}
          onOptionSelect={onOptionSelect}
        />
      )}

      {/* Single Input Case (Fallback if no parts and no options) */}
      {!problem.parts && !problem.options && 
        problem.problem_type !== 'geometry_construction' && 
        problem.custom_visual_data?.type !== 'grid_of_fractions' && 
        problem.custom_visual_data?.type !== 'fraction_conversion' && 
        problem.custom_visual_data?.type !== 'hierarchy_fill' && 
        problem.custom_visual_data?.type !== 'fraction_input' &&
        problem.custom_visual_data?.type !== 'image_card_grid' &&
        problem.custom_visual_data?.type !== 'value_cards' &&
        problem.custom_visual_data?.type !== 'info_cards' &&
        problem.custom_visual_data?.type !== 'interactive_table' && 
        (
          <div className="mt-4 flex items-center gap-4">
            <span className="font-bold">Одговор:</span>
            <input
              type="text"
              value={inputs[problem.id] || ''}
              onChange={(e) => onInputChange(problem.id, e.target.value)}
              className="border-2 border-gray-300 rounded-md px-4 py-2 w-full max-w-xs focus:border-indigo-500 focus:outline-none text-lg"
            />
          </div>
      )}
    </>
  );
};

export default ProblemBody;

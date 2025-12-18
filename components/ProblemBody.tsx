
import React from 'react';
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
      {/* Custom Visual Data Section */}
      {problem.custom_visual_data && (
        <div className="mb-6">
           {renderCustomVisual()}
        </div>
      )}

      {/* Render top-level SVG if present - BUT SKIP if using GeometryCanvas (it handles its own svg) */}
      {problem.svg && problem.problem_type !== 'geometry_construction' && (
        <div 
          className="mb-6 flex justify-center"
          dangerouslySetInnerHTML={{ __html: problem.svg }} 
        />
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
      {!problem.parts && !problem.options && problem.problem_type !== 'geometry_construction' && problem.custom_visual_data?.type !== 'grid_of_fractions' && (
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

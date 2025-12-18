
import React from 'react';
import { Problem } from '../types';
import LatexRenderer from './LatexRenderer';
import SortableList from './SortableList';
import DragDropSetTheory from './DragDropSetTheory';
import DragDropComparison from './DragDropComparison';
import WeatherDashboard from './WeatherDashboard';
import FlipCardGrid from './FlipCardGrid';
import FillInTheBlanks from './FillInTheBlanks';

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
    const hasLongContent = problem.parts?.some(p => 
        (p.latex_numbers && p.latex_numbers.length > 45) || 
        (p.latex && p.latex.length > 45)
    );

    if (hasLongContent || problem.problem_type === 'fill_in_the_blanks' || problem.problem_type === 'conditional_yes_no_equation') {
        return "space-y-6";
    }

    if (problem.problem_type === 'set_theory_drag_drop') return "space-y-6";
    if (problem.problem_type === 'drag_drop_comparison') return "space-y-6";
    
    if (problem.parts && problem.parts.length === 3 && problem.problem_type === 'equation_solving') return "grid grid-cols-1 md:grid-cols-3 gap-4";
    
    if (problem.problem_type === 'comparison_of_integers') return "grid grid-cols-1 md:grid-cols-2 gap-4";
    
    if (problem.parts && problem.parts.length === 4) {
        return "grid grid-cols-1 md:grid-cols-2 gap-4";
    }

    if (problem.parts && problem.parts.length === 2 && ['inequalities_solving', 'expression_calculation', 'equation_solving'].includes(problem.problem_type)) {
       return "grid grid-cols-1 md:grid-cols-2 gap-4";
    }

    if (problem.parts && problem.parts.length >= 6) {
       return "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4";
    }

    return "space-y-6";
  };

  const isGridOptions = problem.options && (
    (problem.options.length > 3 && problem.options.every(o => o.text_mk && o.text_mk.length > 50)) ||
    problem.options.length === 4
  );

  return (
    <>
      {/* Custom Visual Data */}
      {problem.custom_visual_data && (
        <div className="mb-6">
           {problem.problem_type === 'data_analysis_and_comparison' && (
              <WeatherDashboard data={problem.custom_visual_data} />
           )}
           {problem.problem_type === 'flashcards_logic' && (
              <FlipCardGrid 
                cards={problem.custom_visual_data.cards} 
                allowReveal={hasAttempted}
              />
           )}
           {problem.custom_visual_data.type === 'value_cards' && (
             <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-100">
               {problem.custom_visual_data.description && (
                  <p className="font-semibold text-indigo-900 mb-4">{problem.custom_visual_data.description}</p>
               )}
               <div className="flex flex-wrap gap-4 justify-center">
                  {problem.custom_visual_data.items.map((item: any) => (
                    <div key={item.id} className="bg-white p-4 rounded-xl shadow-sm border border-indigo-100 flex flex-col items-center min-w-[120px]">
                        <div className="text-2xl mb-3 font-bold text-gray-800">
                          <LatexRenderer content={item.latex} />
                        </div>
                        <div className="flex items-center gap-2">
                          <input
                            type="text"
                            value={inputs[item.id] || ''}
                            onChange={(e) => onInputChange(item.id, e.target.value)}
                            className="border-2 border-gray-300 rounded-lg px-2 py-1 w-16 text-center text-lg focus:border-indigo-500 focus:outline-none"
                            placeholder="?"
                          />
                          {renderFeedbackIcon(feedback[item.id])}
                        </div>
                    </div>
                  ))}
               </div>
             </div>
           )}

           {/* Interactive Table Renderer */}
           {problem.custom_visual_data.type === 'interactive_table' && (
             <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden shadow-sm">
                  <thead className="bg-indigo-100 text-indigo-800">
                    <tr>
                      {problem.custom_visual_data.headers.map((header: string, idx: number) => (
                        <th key={idx} className="px-4 py-3 border-b border-gray-300 text-center text-sm font-bold">
                           <LatexRenderer content={header} />
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {problem.custom_visual_data.rows.map((row: any[], rIdx: number) => (
                      <tr key={rIdx} className={rIdx % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                        {row.map((cell, cIdx) => (
                          <td key={cIdx} className="px-2 py-3 border-r last:border-r-0 border-gray-200 text-center">
                             {cell.id ? (
                               <div className="flex items-center justify-center gap-1">
                                 <input 
                                   type="text"
                                   value={inputs[cell.id] || ''}
                                   onChange={(e) => onInputChange(cell.id, e.target.value)}
                                   className={`w-16 text-center border-2 rounded p-1 focus:outline-none focus:border-indigo-500 font-semibold
                                     ${feedback[cell.id] === 'correct' ? 'border-green-400 bg-green-50' : 
                                       feedback[cell.id] === 'incorrect' ? 'border-red-400 bg-red-50' : 'border-gray-300'}
                                   `}
                                 />
                                 {feedback[cell.id] && renderFeedbackIcon(feedback[cell.id])}
                               </div>
                             ) : (
                               <span className="font-bold text-gray-700">
                                 {cell.value}
                               </span>
                             )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
             </div>
           )}
        </div>
      )}

      {/* Render top-level SVG if present */}
      {problem.svg && (
        <div 
          className="mb-6 flex justify-center"
          dangerouslySetInnerHTML={{ __html: problem.svg }} 
        />
      )}

      {/* Claims */}
      {problem.claims && (
        <div className="bg-indigo-50 border-l-4 border-indigo-500 p-5 rounded-r-lg mb-8 shadow-sm">
           <h4 className="text-xs font-bold text-indigo-500 uppercase tracking-widest mb-3">Анализирај ги тврдењата:</h4>
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

      {/* Render Parts */}
      {problem.parts && (
        <div className={getPartsLayoutClass()}>
          
          {/* Case: Fill in the Blanks */}
          {problem.problem_type === 'fill_in_the_blanks' ? (
             problem.parts.map((part) => (
                <FillInTheBlanks 
                  key={part.part_id}
                  part={part}
                  inputs={inputs}
                  onInputChange={onInputChange}
                  feedback={feedback}
                  dragItems={problem.drag_items}
                />
             ))
          ) : 
          
          /* Case: Set Theory Drag and Drop */
          problem.problem_type === 'set_theory_drag_drop' && problem.drag_items ? (
            <div className="col-span-1 md:col-span-2">
              <DragDropSetTheory 
                parts={problem.parts}
                items={problem.drag_items}
                values={inputs}
                onChange={onInputChange}
                feedback={feedback}
              />
            </div>
          ) : problem.problem_type === 'drag_drop_comparison' && problem.drag_items ? (
            <div className="col-span-1">
              <DragDropComparison 
                parts={problem.parts}
                items={problem.drag_items}
                values={inputs}
                onChange={onInputChange}
                feedback={feedback}
              />
            </div>
          ) : problem.problem_type === 'power_of_two' ? (
            /* Case: Power of Two (Base 2 Exponent Entry) */
             problem.parts.map((part) => (
              <div key={part.part_id} className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex items-center justify-center gap-2">
                  <div className="text-xl font-bold text-gray-700">{part.text_mk} = 2</div>
                  <div className="relative -top-2">
                    <input
                      type="text"
                      value={inputs[part.part_id] || ''}
                      onChange={(e) => onInputChange(part.part_id, e.target.value)}
                      className={`w-10 h-10 text-center border-2 rounded-md text-sm font-bold focus:outline-none focus:border-indigo-500
                        ${feedback[part.part_id] === 'correct' ? 'border-green-500 bg-green-50' : 
                          feedback[part.part_id] === 'incorrect' ? 'border-red-500 bg-red-50' : 'border-gray-300'}
                      `}
                      placeholder=""
                    />
                  </div>
                  {renderFeedbackIcon(feedback[part.part_id])}
              </div>
            ))
          ) : problem.problem_type === 'conditional_yes_no_equation' ? (
            /* Case: Conditional Yes/No Equation */
            <div className="space-y-4">
              {/* Part 1: Yes/No Question */}
              {(() => {
                const part1 = problem.parts![0];
                const inputVal = (inputs[part1.part_id] || '').toLowerCase().trim();
                const showPart2 = inputVal === 'да' || inputVal === 'da' || inputVal === 'yes';

                return (
                  <>
                    <div className="p-4 bg-gray-50 rounded-lg flex items-center gap-3 shadow-sm border border-gray-100">
                        <span className="font-semibold text-gray-700">{part1.text_mk}</span>
                        <input
                            type="text"
                            value={inputs[part1.part_id] || ''}
                            onChange={(e) => onInputChange(part1.part_id, e.target.value)}
                            className="border-2 border-gray-300 rounded-md px-3 py-1 w-24 focus:border-indigo-500 focus:outline-none text-center"
                            placeholder="?"
                        />
                        {renderFeedbackIcon(feedback[part1.part_id])}
                    </div>

                    {/* Part 2: Shows only if 'yes' */}
                    {showPart2 && problem.parts![1] && (
                        <div className="p-4 bg-indigo-50 rounded-lg flex flex-col md:flex-row items-center gap-3 shadow-sm border border-indigo-100 animate-fade-in-up">
                            <span className="font-semibold text-indigo-900">{problem.parts![1].text_mk}</span>
                            <div className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg border border-indigo-200">
                                {problem.parts![1].latex && <LatexRenderer content={problem.parts![1].latex} className="text-xl" />}
                                <input
                                    type="text"
                                    value={inputs[problem.parts![1].part_id] || ''}
                                    onChange={(e) => onInputChange(problem.parts![1].part_id, e.target.value)}
                                    className="border-2 border-gray-300 rounded-md px-2 py-1 w-24 focus:border-indigo-500 focus:outline-none text-center font-bold"
                                />
                                {problem.parts![1].latex_suffix && <LatexRenderer content={problem.parts![1].latex_suffix} className="text-xl" />}
                            </div>
                            {renderFeedbackIcon(feedback[problem.parts![1].part_id])}
                        </div>
                    )}
                  </>
                );
              })()}
            </div>
          ) : (
            // Standard Parts Rendering
            problem.parts.map((part) => (
              <div key={part.part_id} className="p-4 bg-gray-50 rounded-lg flex flex-col justify-center relative shadow-sm border border-gray-100">
                <div className="mb-2 font-semibold text-gray-700">{renderText(part.text_mk)}</div>
                
                {part.latex_numbers && problem.problem_type !== 'ordering_of_integers' && (
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
                {problem.problem_type === 'ordering_of_integers' && part.latex_numbers ? (
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
                  <div className={`flex items-center flex-wrap gap-2 ${problem.parts && problem.parts.length === 3 ? 'justify-center' : ''}`}>
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
            ))
          )}
        </div>
      )}
      
      {/* Universal Drag Items Bank (for Fill in the blanks) */}
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
        <div className={isGridOptions ? "grid grid-cols-1 sm:grid-cols-2 gap-4" : "space-y-3"}>
          {problem.options.map((option) => (
            <div 
              key={option.option_id}
              onClick={() => onOptionSelect(option.option_id)}
              className={`cursor-pointer p-4 rounded-lg border-2 transition-all flex items-center gap-3 h-full
                ${selectedOption === option.option_id 
                  ? 'border-indigo-500 bg-indigo-50 shadow-md transform scale-[1.02]' 
                  : 'border-gray-200 hover:border-indigo-300 hover:bg-gray-50'
                }`}
            >
              <div className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors
                  ${selectedOption === option.option_id ? 'border-indigo-600' : 'border-gray-300'}`}>
                  {selectedOption === option.option_id && <div className="w-3 h-3 bg-indigo-600 rounded-full" />}
              </div>
              <div className="text-gray-800 font-medium">
                {option.latex ? <LatexRenderer content={option.latex} /> : option.text_mk}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Single Input Case */}
      {!problem.parts && !problem.options && (
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


import React from 'react';

interface FractionInputProps {
  id: string;
  value: string; // Stored as "num/den" string
  onChange: (id: string, value: string) => void;
  feedback: 'correct' | 'incorrect' | null;
}

const FractionInput: React.FC<FractionInputProps> = ({ id, value, onChange, feedback }) => {
  // Parse existing value "num/den" or default to empty
  const [num, den] = value ? value.split('/').map(s => s.trim()) : ['', ''];

  const handleChange = (part: 'num' | 'den', newVal: string) => {
    const cleanVal = newVal.replace(/[^0-9\-]/g, ''); // Allow only numbers and minus
    const currentNum = part === 'num' ? cleanVal : num;
    const currentDen = part === 'den' ? cleanVal : den;
    
    // Construct the string format expected by the grader
    // If denominator is empty, just send numerator (though for fraction logic, we need both)
    if (currentDen) {
        onChange(id, `${currentNum}/${currentDen}`);
    } else {
        onChange(id, currentNum);
    }
  };

  const getBorderColor = () => {
    if (feedback === 'correct') return 'border-green-500 bg-green-50';
    if (feedback === 'incorrect') return 'border-red-500 bg-red-50';
    return 'border-gray-300 focus-within:border-indigo-500';
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 bg-white rounded-xl shadow-sm border border-gray-200 w-fit mx-auto mt-4">
      <span className="text-sm text-gray-500 mb-2 font-bold uppercase tracking-wider">Внеси го одговорот:</span>
      <div className={`flex flex-col items-center gap-1 p-2 rounded-lg border-2 transition-colors ${getBorderColor()}`}>
        
        {/* Numerator */}
        <input
          type="text"
          value={num}
          onChange={(e) => handleChange('num', e.target.value)}
          className="w-16 h-12 text-center text-2xl font-bold outline-none bg-transparent"
          placeholder="?"
          autoComplete="off"
        />
        
        {/* Fraction Bar */}
        <div className="w-full h-1 bg-gray-800 rounded-full"></div>
        
        {/* Denominator */}
        <input
          type="text"
          value={den}
          onChange={(e) => handleChange('den', e.target.value)}
          className="w-16 h-12 text-center text-2xl font-bold outline-none bg-transparent"
          placeholder="?"
          autoComplete="off"
        />
      </div>
      {feedback === 'correct' && <span className="text-green-600 font-bold mt-2">✓ Точно!</span>}
      {feedback === 'incorrect' && <span className="text-red-500 font-bold mt-2">✗ Обиди се повторно</span>}
    </div>
  );
};

export default FractionInput;

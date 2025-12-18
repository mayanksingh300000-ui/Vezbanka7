import React from 'react';
import { Problem } from '../types';
import ProblemCard from './ProblemCard';

interface ProblemListProps {
  problems: Problem[];
  onAskAI: (context: string) => void;
  titlePrefix: string;
  emptyMessage?: string;
  onProblemSolved?: (id: string) => void;
}

const ProblemList: React.FC<ProblemListProps> = ({ problems, onAskAI, titlePrefix, emptyMessage, onProblemSolved }) => {
  if (problems.length === 0) {
    return <p className="text-center text-gray-500">{emptyMessage || "Нема задачи во оваа секција."}</p>;
  }

  return (
    <div>
      {problems.map((problem, index) => (
        <ProblemCard 
          key={problem.id} 
          problem={problem} 
          onAskAI={onAskAI}
          titleOverride={`${titlePrefix} ${index + 1}`}
          onProblemSolved={onProblemSolved}
        />
      ))}
    </div>
  );
};

export default ProblemList;
import React from 'react';

export type TabType = 'regular' | 'problems' | 'docs';

interface TabNavigationProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  isProblemsLocked: boolean;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ activeTab, onTabChange, isProblemsLocked }) => {
  const getButtonClass = (tabName: TabType, locked = false) => {
    if (locked) {
      return `px-6 py-2 rounded-lg text-sm font-semibold bg-gray-100 text-gray-400 cursor-not-allowed flex items-center gap-2`;
    }
    return `px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
      activeTab === tabName 
        ? 'bg-indigo-600 text-white shadow-md' 
        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
    }`;
  };

  return (
    <div className="flex justify-center mb-8 bg-white p-1 rounded-xl shadow-sm border border-gray-200 w-fit mx-auto overflow-x-auto">
      <button 
        onClick={() => onTabChange('regular')}
        className={getButtonClass('regular')}
      >
        <span>📝</span> 1. Вежби
      </button>
      
      <button 
        onClick={() => !isProblemsLocked && onTabChange('problems')}
        className={getButtonClass('problems', isProblemsLocked)}
        title={isProblemsLocked ? "Реши ги сите вежби за да отклучиш!" : ""}
      >
        {isProblemsLocked ? (
            <><span>🔒</span> 2. Предизвици</>
        ) : (
            <><span>🚀</span> 2. Предизвици</>
        )}
      </button>
      
      <button 
        onClick={() => onTabChange('docs')}
        className={getButtonClass('docs')}
      >
        <span>ℹ️</span> Инфо
      </button>
    </div>
  );
};

export default TabNavigation;
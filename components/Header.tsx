import React from 'react';
import { WorkbookData } from '../types';

interface HeaderProps {
  workbookData: WorkbookData;
}

const Header: React.FC<HeaderProps> = ({ workbookData }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-gray-800 tracking-tight">
            {workbookData.workbook_title}
          </h1>
          <div className="flex gap-2 mt-1">
            {workbookData.multilingual_support.map(lang => (
               <span key={lang} className="text-xs bg-gray-200 text-gray-600 px-2 py-0.5 rounded-full">
                 {lang}
               </span>
            ))}
          </div>
        </div>
        <div className="hidden md:block">
          <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded">
             7 одд.
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;

import React from 'react';
import { WorkbookData } from '../types';

interface HeaderProps {
  workbookData: WorkbookData;
}

const FLAG_URLS: Record<string, string> = {
  "Macedonian": "https://flagcdn.com/w40/mk.png",
  "English": "https://flagcdn.com/w40/gb.png",
  "Albanian": "https://flagcdn.com/w40/al.png",
  "Turkish": "https://flagcdn.com/w40/tr.png"
};

const Header: React.FC<HeaderProps> = ({ workbookData }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10 border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-800 tracking-tight flex items-center gap-2">
            <span>📚</span>
            {workbookData.workbook_title}
          </h1>
          <p className="text-xs text-gray-500 mt-1 ml-9">Интерактивна вежбанка за 7-мо одделение</p>
        </div>
        
        <div className="flex items-center gap-3 self-end md:self-auto">
          <div className="flex flex-wrap justify-end gap-2">
            {workbookData.multilingual_support.map(lang => (
               <button 
                 key={lang} 
                 className="flex items-center gap-2 px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg transition-all hover:shadow-sm text-sm text-gray-700"
                 title={`Switch to ${lang}`}
               >
                 {FLAG_URLS[lang] ? (
                   <img 
                     src={FLAG_URLS[lang]} 
                     alt={lang} 
                     className="w-5 h-auto rounded-sm shadow-sm object-cover" 
                   />
                 ) : (
                   <span className="text-lg">🌐</span>
                 )}
                 <span className="font-medium hidden sm:inline">{lang}</span>
               </button>
            ))}
          </div>
          <div className="hidden md:block w-px h-8 bg-gray-300 mx-2"></div>
          <div className="hidden md:flex items-center justify-center w-10 h-10 bg-indigo-600 text-white font-bold rounded-full border-2 border-indigo-200 shadow-md transform hover:scale-105 transition-transform cursor-default" title="7-мо одделение">
             7
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

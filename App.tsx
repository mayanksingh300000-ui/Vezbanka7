
import React, { useState, useEffect, useMemo } from 'react';
import { WORKBOOK_DATA } from './constants';
import { ThemeDefinition, UnitDefinition } from './types';
import Header from './components/Header';
import TabNavigation, { TabType } from './components/TabNavigation';
import ProblemList from './components/ProblemList';
import AiTutor from './components/AiTutor';
import Documentation from './components/Documentation';

// --- КОНФИГУРАЦИЈА ---
const ENABLE_LOCKING = false; 

// Helper to ensure loose matching between Curriculum topics and Problem topics
const normalizeTopic = (topic: string | undefined) => {
  if (!topic) return '';
  // Remove all spaces, dots, and convert to lowercase for comparison
  // This ensures "1.5. ЦЕЛИ БРОЕВИ" matches "1.5.ЦЕЛИ БРОЕВИ"
  return topic.replace(/[\s\.]/g, '').toLowerCase();
};

const App: React.FC = () => {
  // Navigation State
  const [activeTab, setActiveTab] = useState<TabType>('regular');
  const [selectedTheme, setSelectedTheme] = useState<ThemeDefinition | null>(null);
  const [selectedUnit, setSelectedUnit] = useState<UnitDefinition | null>(null);
  const [activeLessonId, setActiveLessonId] = useState<string>('');
  
  // AI State
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [currentContext, setCurrentContext] = useState<string>('');
  
  // Progress: IDs of solved problems
  const [solvedProblems, setSolvedProblems] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('mathWorkbook_solved');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (e) {
      console.warn("Could not load progress", e);
      return new Set();
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('mathWorkbook_solved', JSON.stringify(Array.from(solvedProblems)));
    } catch (e) {
      console.warn("Could not save progress", e);
    }
  }, [solvedProblems]);

  // --- DERIVED DATA ---

  // Initialize active lesson when entering a unit
  useEffect(() => {
    if (selectedUnit && selectedUnit.lessons.length > 0 && !activeLessonId) {
      setActiveLessonId(selectedUnit.lessons[0].id);
    }
  }, [selectedUnit]);

  // Get current Lesson Object
  const currentLesson = useMemo(() => {
    if (!selectedUnit) return null;
    return selectedUnit.lessons.find(l => l.id === activeLessonId) || selectedUnit.lessons[0];
  }, [selectedUnit, activeLessonId]);

  // Calculate Statistics for the current Unit (Locking logic)
  const lessonStats = useMemo(() => {
    if (!selectedUnit) return [];

    let previousLessonComplete = true;

    return selectedUnit.lessons.map(lesson => {
      const normalizedLessonTopic = normalizeTopic(lesson.db_topic);

      // Practice Problems
      const practiceProbs = WORKBOOK_DATA.problems.filter(p => 
        p.category === 'practice' && normalizeTopic(p.topic) === normalizedLessonTopic
      );
      const practiceTotal = practiceProbs.length;
      const practiceSolved = practiceProbs.filter(p => solvedProblems.has(p.id)).length;
      const isComplete = practiceTotal > 0 && practiceSolved === practiceTotal;

      // Challenge Problems
      const challengeProbs = WORKBOOK_DATA.problems.filter(p => 
        p.category === 'challenge' && normalizeTopic(p.topic) === normalizedLessonTopic
      );
      const challengeTotal = challengeProbs.length;
      const challengeSolved = challengeProbs.filter(p => solvedProblems.has(p.id)).length;

      const isLocked = ENABLE_LOCKING ? !previousLessonComplete : false;
      previousLessonComplete = isComplete;

      return {
        ...lesson,
        isLocked,
        isComplete,
        regular: { problems: practiceProbs, total: practiceTotal, solved: practiceSolved },
        problems: { problems: challengeProbs, total: challengeTotal, solved: challengeSolved } // Mapped to 'problems' tab
      };
    });
  }, [selectedUnit, solvedProblems]);

  const currentLessonData = lessonStats.find(l => l.id === activeLessonId);
  
  // Logic for Global Challenge Lock within a lesson
  const isChallengesLocked = useMemo(() => {
    if (!ENABLE_LOCKING || !currentLessonData) return false;
    return !currentLessonData.isComplete;
  }, [currentLessonData]);

  // --- HANDLERS ---

  const handleAskAI = (context: string) => {
    setCurrentContext(context);
    setIsAiOpen(true);
  };

  const handleProblemSolved = (id: string) => {
    setSolvedProblems(prev => new Set(prev).add(id));
  };

  const handleResetProgress = () => {
    if (confirm("Дали сте сигурни дека сакате да го избришете целиот напредок?")) {
      setSolvedProblems(new Set());
      localStorage.removeItem('mathWorkbook_solved');
    }
  };

  const navigateHome = () => {
    setSelectedTheme(null);
    setSelectedUnit(null);
    setActiveLessonId('');
    setActiveTab('regular');
  };

  const navigateToTheme = (theme: ThemeDefinition) => {
    setSelectedTheme(theme);
    setSelectedUnit(null);
    setActiveLessonId('');
  };

  const navigateToUnit = (unit: UnitDefinition) => {
    if (unit.lessons.length === 0) {
      alert("Овој дел сеуште е во изработка.");
      return;
    }
    setSelectedUnit(unit);
    setActiveLessonId(unit.lessons[0].id);
  };

  // --- RENDER HELPERS ---

  const renderBreadcrumbs = () => (
    <nav className="flex items-center text-sm text-gray-500 mb-6 bg-white px-4 py-2 rounded-lg shadow-sm w-fit">
      <button onClick={navigateHome} className="hover:text-indigo-600 font-bold flex items-center">
        🏠 Дома
      </button>
      {selectedTheme && (
        <>
          <span className="mx-2">/</span>
          <button onClick={() => navigateToTheme(selectedTheme)} className="hover:text-indigo-600 font-medium">
            {selectedTheme.id.replace('theme_', 'Тема ')}
          </button>
        </>
      )}
      {selectedUnit && (
        <>
          <span className="mx-2">/</span>
          <span className="text-gray-800 font-bold">{selectedUnit.title}</span>
        </>
      )}
    </nav>
  );

  // VIEW 1: THEMES DASHBOARD
  if (!selectedTheme) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans pb-20">
        <Header workbookData={WORKBOOK_DATA} />
        <main className="max-w-6xl mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Добредојде! 👋</h2>
          <p className="text-gray-600 mb-8">Избери тема за да започнеш со вежбање.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
            {WORKBOOK_DATA.themes.map(theme => (
              <button 
                key={theme.id}
                onClick={() => navigateToTheme(theme)}
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-indigo-300 transition-all text-left group"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{theme.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600">{theme.title}</h3>
                <p className="text-sm text-gray-500">{theme.description}</p>
                <div className="mt-4 flex items-center text-indigo-500 font-semibold text-sm">
                  Отвори тема <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-12 text-center">
             <button onClick={() => setActiveTab('docs')} className="text-gray-500 hover:text-indigo-600 underline">
               Информации за апликацијата
             </button>
             {activeTab === 'docs' && <div className="mt-8 text-left"><Documentation /></div>}
          </div>
        </main>
      </div>
    );
  }

  // VIEW 2: UNITS SELECTION
  if (selectedTheme && !selectedUnit) {
    return (
      <div className="min-h-screen bg-gray-50 font-sans pb-20">
        <Header workbookData={WORKBOOK_DATA} />
        <main className="max-w-6xl mx-auto px-4 py-8">
          {renderBreadcrumbs()}
          
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-3">
              <span>{selectedTheme.icon}</span>
              {selectedTheme.title}
            </h2>
            <p className="text-gray-600 mt-2">{selectedTheme.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 animate-fade-in-up">
            {selectedTheme.units.map((unit, idx) => (
              <button
                key={unit.id}
                onClick={() => navigateToUnit(unit)}
                className={`p-6 rounded-xl border text-left transition-all relative overflow-hidden
                  ${unit.lessons.length === 0 
                    ? 'bg-gray-100 border-gray-200 opacity-70 cursor-not-allowed' 
                    : 'bg-white border-gray-200 hover:border-indigo-500 hover:shadow-md cursor-pointer group'}
                `}
              >
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-500 mb-1">
                  Дел {idx + 1}
                </div>
                <h3 className="text-lg font-bold text-gray-800">{unit.title}</h3>
                <div className="mt-2 text-sm text-gray-500">
                  {unit.lessons.length > 0 ? `${unit.lessons.length} лекции` : 'Наскоро'}
                </div>
                {unit.lessons.length > 0 && (
                   <div className="absolute bottom-0 left-0 h-1 bg-indigo-500 w-0 group-hover:w-full transition-all duration-500" />
                )}
              </button>
            ))}
          </div>
        </main>
      </div>
    );
  }

  // VIEW 3: LESSON VIEW (WORKBOOK)
  const isProblemView = activeTab === 'regular' || activeTab === 'problems';
  const activeModeData = activeTab === 'regular' ? currentLessonData?.regular : currentLessonData?.problems;

  return (
    <div className="min-h-screen bg-gray-100 pb-20 relative font-sans">
      <Header workbookData={WORKBOOK_DATA} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        {renderBreadcrumbs()}

        <div className="flex justify-between items-start mb-4">
            <TabNavigation 
              activeTab={activeTab} 
              onTabChange={setActiveTab} 
              isProblemsLocked={isChallengesLocked}
            />
            {solvedProblems.size > 0 && (
                <button 
                  onClick={handleResetProgress}
                  className="text-xs text-gray-400 hover:text-red-500 underline transition-colors"
                >
                  Ресетирај напредок
                </button>
            )}
        </div>

        {activeTab === 'docs' && <Documentation />}

        {isProblemView && currentLessonData && activeModeData && (
          <div className="flex flex-col md:flex-row gap-6 items-start animate-fade-in-up">
            
            {/* --- LEFT SIDEBAR (Lessons) --- */}
            <aside className="w-full md:w-64 flex-shrink-0 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
              <div className={`p-4 border-b border-gray-100 ${activeTab === 'problems' ? 'bg-yellow-50' : 'bg-gray-50'}`}>
                <h3 className={`font-bold text-xs uppercase tracking-wider ${activeTab === 'problems' ? 'text-yellow-700' : 'text-gray-500'}`}>
                   Лекции
                </h3>
              </div>
              <div className="flex flex-col max-h-[70vh] overflow-y-auto">
                {lessonStats.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => !lesson.isLocked && setActiveLessonId(lesson.id)}
                    disabled={lesson.isLocked}
                    className={`
                      relative p-4 text-left transition-all duration-200 border-b last:border-0 flex items-center gap-3
                      ${activeLessonId === lesson.id 
                        ? (activeTab === 'problems' ? 'bg-yellow-50 border-l-4 border-l-yellow-500' : 'bg-indigo-50 border-l-4 border-l-indigo-600') 
                        : 'border-l-4 border-l-transparent hover:bg-gray-50'}
                      ${lesson.isLocked ? 'opacity-50 cursor-not-allowed bg-gray-50' : 'cursor-pointer'}
                    `}
                  >
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0
                      ${lesson.isComplete 
                        ? 'bg-green-100 text-green-700' 
                        : lesson.isLocked 
                          ? 'bg-gray-200 text-gray-400' 
                          : activeLessonId === lesson.id 
                             ? (activeTab === 'problems' ? 'bg-yellow-500 text-white' : 'bg-indigo-600 text-white')
                             : (activeTab === 'problems' ? 'bg-yellow-100 text-yellow-600' : 'bg-indigo-100 text-indigo-600')
                      }
                    `}>
                       {lesson.isComplete ? '✓' : lesson.isLocked ? '🔒' : lesson.id}
                    </div>

                    <div className="flex-1">
                      <div className={`font-bold text-sm ${activeLessonId === lesson.id ? 'text-gray-900' : 'text-gray-700'}`}>
                        {lesson.id}
                      </div>
                      <div className="text-xs text-gray-500 truncate max-w-[120px]">
                        {lesson.title}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </aside>

            {/* --- RIGHT CONTENT (Problem List) --- */}
            <div className="flex-1 w-full min-w-0">
               
               {/* Context Header */}
               <div className={`rounded-xl p-6 shadow-sm border mb-6 flex justify-between items-center
                  ${activeTab === 'problems' ? 'bg-white border-yellow-200 ring-1 ring-yellow-100' : 'bg-white border-gray-200'}
               `}>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                        <span className={activeTab === 'problems' ? 'text-yellow-600' : 'text-indigo-600'}>
                            {currentLessonData.id}
                        </span>
                        {currentLessonData.title}
                    </h2>
                    <p className="text-gray-500 text-sm">
                      Решени {activeModeData.solved} од вкупно {activeModeData.total} задачи
                    </p>
                  </div>
                  <div className="hidden sm:block w-32">
                     <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                       <div 
                         className={`h-full transition-all duration-500 ${activeTab === 'problems' ? 'bg-yellow-500' : 'bg-green-500'}`}
                         style={{ width: activeModeData.total > 0 ? `${(activeModeData.solved / activeModeData.total) * 100}%` : '0%' }}
                       />
                     </div>
                  </div>
               </div>

               <ProblemList 
                 problems={activeModeData.problems} 
                 onAskAI={handleAskAI} 
                 titlePrefix={activeTab === 'problems' ? 'ПРЕДИЗВИК' : `ЗАДАЧА`}
                 emptyMessage={`Нема ${activeTab === 'problems' ? 'предизвици' : 'задачи'} за оваа лекција.`}
                 onProblemSolved={handleProblemSolved}
               />
            </div>
          </div>
        )}
      </main>

      <AiTutor 
        isOpen={isAiOpen} 
        onClose={() => setIsAiOpen(false)} 
        context={currentContext} 
      />
    </div>
  );
};

export default App;

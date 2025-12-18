
import React, { useState, useEffect, useMemo } from 'react';
import { WORKBOOK_DATA } from './constants';
import Header from './components/Header';
import TabNavigation, { TabType } from './components/TabNavigation';
import ProblemList from './components/ProblemList';
import AiTutor from './components/AiTutor';
import Documentation from './components/Documentation';

// --- КОНФИГУРАЦИЈА ---

// Поставете на TRUE за финалната верзија (заклучување по ред).
// Поставете на FALSE додека развивате (сè е отворено).
const ENABLE_LOCKING = false; 

const App: React.FC = () => {
  const [isAiOpen, setIsAiOpen] = useState(false);
  const [currentContext, setCurrentContext] = useState<string>('');
  
  // Tabs: 'regular' (Lessons), 'problems' (Challenges), 'docs'
  const [activeTab, setActiveTab] = useState<TabType>('regular');
  
  // Navigation: Which topic is currently selected in the sidebar?
  // Default to the first topic available in the data
  const [activeTopicId, setActiveTopicId] = useState<string>(WORKBOOK_DATA.topics[0]?.id || '1.5');
  
  // Progress: IDs of solved problems - Initialized from localStorage if available
  const [solvedProblems, setSolvedProblems] = useState<Set<string>>(() => {
    try {
      const saved = localStorage.getItem('mathWorkbook_solved');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch (e) {
      console.warn("Could not load progress from storage", e);
      return new Set();
    }
  });

  // Save progress whenever it changes
  useEffect(() => {
    try {
      localStorage.setItem('mathWorkbook_solved', JSON.stringify(Array.from(solvedProblems)));
    } catch (e) {
      console.warn("Could not save progress", e);
    }
  }, [solvedProblems]);

  // Data Selectors
  const allPracticeProblems = useMemo(() => 
    WORKBOOK_DATA.problems.filter(p => p.category === 'practice'), 
  []);
  
  const allChallengeProblems = useMemo(() => 
    WORKBOOK_DATA.problems.filter(p => p.category === 'challenge'), 
  []);

  // 2. CALCULATE TOPIC STATUS (Locked/Unlocked/Completed)
  const topicStats = useMemo(() => {
    let previousTopicCompleted = true; // First topic starts unlocked

    // Use topics defined in the data instead of hardcoded config
    return WORKBOOK_DATA.topics.map(topic => {
      // Practice Stats
      const practiceProblems = allPracticeProblems.filter(p => p.topic === topic.db_topic);
      const practiceTotal = practiceProblems.length;
      const practiceSolved = practiceProblems.filter(p => solvedProblems.has(p.id)).length;
      const isPracticeComplete = practiceTotal > 0 && practiceSolved === practiceTotal;
      
      // Challenge Stats
      const challengeProblems = allChallengeProblems.filter(p => p.topic === topic.db_topic);
      const challengeTotal = challengeProblems.length;
      const challengeSolved = challengeProblems.filter(p => solvedProblems.has(p.id)).length;

      // Логика за заклучување (базирана на вежбите)
      const isLocked = ENABLE_LOCKING ? !previousTopicCompleted : false;
      
      // Update for next loop
      previousTopicCompleted = isPracticeComplete;

      return {
        ...topic,
        isLocked,
        // Data subdivided by mode
        regular: {
          problems: practiceProblems,
          total: practiceTotal,
          solved: practiceSolved,
          isComplete: isPracticeComplete
        },
        problems: { // 'problems' matches the tab key for Challenges
          problems: challengeProblems,
          total: challengeTotal,
          solved: challengeSolved
        }
      };
    });
  }, [allPracticeProblems, allChallengeProblems, solvedProblems]);

  // Global Challenge Lock
  const isChallengesLocked = useMemo(() => {
    // Ако е развојна фаза, секогаш отклучено
    if (!ENABLE_LOCKING) return false;

    const totalPractice = allPracticeProblems.length;
    const solvedPracticeCount = allPracticeProblems.filter(p => solvedProblems.has(p.id)).length;
    return solvedPracticeCount < totalPractice;
  }, [allPracticeProblems, solvedProblems]);

  // Handlers
  const handleAskAI = (context: string) => {
    setCurrentContext(context);
    setIsAiOpen(true);
  };

  const handleProblemSolved = (id: string) => {
    setSolvedProblems(prev => {
      const newSet = new Set(prev);
      newSet.add(id);
      return newSet;
    });
  };

  // Add a function to reset progress (useful for testing/users)
  const handleResetProgress = () => {
    if (confirm("Дали сте сигурни дека сакате да го избришете целиот напредок?")) {
      setSolvedProblems(new Set());
      localStorage.removeItem('mathWorkbook_solved');
    }
  };

  const handleTopicSelect = (topicId: string, isLocked: boolean) => {
    if (!isLocked) {
      setActiveTopicId(topicId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Determine current content based on selection
  const currentTopicData = topicStats.find(t => t.id === activeTopicId) || topicStats[0];
  
  // Safe check if we are in a mode that has problems (regular or challenges)
  const isProblemView = activeTab === 'regular' || activeTab === 'problems';
  
  // Get the relevant data subset (Practice or Challenge)
  const activeModeData = activeTab === 'regular' ? currentTopicData.regular : currentTopicData.problems;

  return (
    <div className="min-h-screen bg-gray-100 pb-20 relative font-sans">
      <Header workbookData={WORKBOOK_DATA} />

      <main className="max-w-6xl mx-auto px-4 py-8">
        
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

        {/* ===================== VIEW: DOCUMENTATION ===================== */}
        {activeTab === 'docs' && <Documentation />}

        {/* ===================== VIEW: PRACTICE & CHALLENGES (Unified Layout) ===================== */}
        {isProblemView && (
          <div className="flex flex-col md:flex-row gap-6 items-start animate-fade-in-up">
            
            {/* --- LEFT SIDEBAR (Navigation) --- */}
            <aside className="w-full md:w-64 flex-shrink-0 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden sticky top-24">
              <div className={`p-4 border-b border-gray-100 ${activeTab === 'problems' ? 'bg-yellow-50' : 'bg-gray-50'}`}>
                <h3 className={`font-bold text-xs uppercase tracking-wider ${activeTab === 'problems' ? 'text-yellow-700' : 'text-gray-500'}`}>
                   {activeTab === 'problems' ? 'Теми за Предизвик' : 'Содржина'}
                </h3>
              </div>
              <div className="flex flex-col">
                {topicStats.map((topic) => (
                  <button
                    key={topic.id}
                    onClick={() => handleTopicSelect(topic.id, topic.isLocked)}
                    disabled={topic.isLocked}
                    className={`
                      relative p-4 text-left transition-all duration-200 border-b last:border-0 flex items-center gap-3
                      ${activeTopicId === topic.id 
                        ? (activeTab === 'problems' ? 'bg-yellow-50 border-l-4 border-l-yellow-500' : 'bg-indigo-50 border-l-4 border-l-indigo-600') 
                        : 'border-l-4 border-l-transparent hover:bg-gray-50'}
                      ${topic.isLocked ? 'opacity-50 cursor-not-allowed bg-gray-50' : 'cursor-pointer'}
                    `}
                  >
                    {/* Status Icon */}
                    <div className={`
                      w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0
                      ${topic.regular.isComplete 
                        ? 'bg-green-100 text-green-700' 
                        : topic.isLocked 
                          ? 'bg-gray-200 text-gray-400' 
                          : activeTopicId === topic.id 
                             ? (activeTab === 'problems' ? 'bg-yellow-500 text-white' : 'bg-indigo-600 text-white')
                             : (activeTab === 'problems' ? 'bg-yellow-100 text-yellow-600' : 'bg-indigo-100 text-indigo-600')
                      }
                    `}>
                       {topic.regular.isComplete ? '✓' : topic.isLocked ? '🔒' : topic.id}
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <div className={`font-bold text-sm ${activeTopicId === topic.id ? 'text-gray-900' : 'text-gray-700'}`}>
                        {topic.id}
                      </div>
                      <div className="text-xs text-gray-500 truncate max-w-[120px]">
                        {topic.title}
                      </div>
                    </div>

                    {/* Active Indicator Arrow */}
                    {activeTopicId === topic.id && (
                      <div className={`absolute right-2 ${activeTab === 'problems' ? 'text-yellow-400' : 'text-indigo-400'}`}>
                        ➤
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </aside>

            {/* --- RIGHT CONTENT (Problem List) --- */}
            <div className="flex-1 w-full min-w-0">
               
               {/* Context Header Card */}
               <div className={`rounded-xl p-6 shadow-sm border mb-6 flex justify-between items-center
                  ${activeTab === 'problems' ? 'bg-white border-yellow-200 ring-1 ring-yellow-100' : 'bg-white border-gray-200'}
               `}>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                        {activeTab === 'problems' && (
                            <span className="bg-yellow-100 text-yellow-800 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
                                Предизвик
                            </span>
                        )}
                        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                            <span className={activeTab === 'problems' ? 'text-yellow-600' : 'text-indigo-600'}>
                                {currentTopicData.id}
                            </span>
                            {currentTopicData.title}
                        </h2>
                    </div>
                    <p className="text-gray-500 text-sm">
                      Решени {activeModeData.solved} од вкупно {activeModeData.total} задачи
                      {activeTab === 'problems' && " (предизвици)"}
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

               {/* Optional: Challenge Intro Banner */}
               {activeTab === 'problems' && (
                   <div className="mb-6 bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded shadow-sm text-sm text-yellow-800">
                      <strong>🎯 Предизвик зона!</strong> Овие задачи за тема {currentTopicData.id} бараат подлабоко размислување.
                   </div>
               )}

               {/* The List */}
               <ProblemList 
                 problems={activeModeData.problems} 
                 onAskAI={handleAskAI} 
                 titlePrefix={activeTab === 'problems' ? 'ПРЕДИЗВИК' : `${currentTopicData.id} ЗАДАЧА`}
                 emptyMessage={`Нема ${activeTab === 'problems' ? 'предизвици' : 'задачи'} за оваа тема.`}
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
      
      <style>{`
        @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
            animation: fadeInUp 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default App;

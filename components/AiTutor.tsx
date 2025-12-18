import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { getTutorHelp } from '../services/geminiService';

interface AiTutorProps {
  isOpen: boolean;
  onClose: () => void;
  context: string;
}

const AiTutor: React.FC<AiTutorProps> = ({ isOpen, onClose, context }) => {
  const [aiChat, setAiChat] = useState<{ role: string, text: string }[]>([]);
  const [userInput, setUserInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Reset or initialize chat when opened with new context
  useEffect(() => {
    if (isOpen && aiChat.length === 0) {
      setAiChat([{ role: 'model', text: 'Здраво! Јас сум твојот AI тутор. Како можам да ти помогнам со оваа задача?' }]);
    }
  }, [isOpen, context]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [aiChat, isOpen]);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newHistory = [...aiChat, { role: 'user', text: userInput }];
    setAiChat(newHistory);
    setUserInput('');
    setLoading(true);

    const response = await getTutorHelp(context, userInput, newHistory);
    
    setAiChat([...newHistory, { role: 'model', text: response }]);
    setLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center pointer-events-none">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-30 pointer-events-auto transition-opacity" 
        onClick={onClose}
      />
      
      {/* Chat Container */}
      <div className="pointer-events-auto bg-white w-full sm:w-[500px] h-[80vh] sm:h-[600px] sm:rounded-2xl shadow-2xl flex flex-col transform transition-transform">
        
        {/* Chat Header */}
        <div className="bg-indigo-600 text-white p-4 rounded-t-none sm:rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-indigo-400 rounded-full flex items-center justify-center">
                🤖
             </div>
             <span className="font-bold">AI Математички Тутор</span>
          </div>
          <button 
            onClick={onClose}
            className="hover:bg-indigo-700 p-1 rounded"
          >
            ✕
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50 space-y-4">
          {aiChat.map((msg, idx) => (
            <div 
              key={idx} 
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[80%] rounded-2xl px-4 py-3 shadow-sm text-sm ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-br-none' 
                    : 'bg-white text-gray-800 border border-gray-200 rounded-bl-none'
                }`}
              >
                <ReactMarkdown>{msg.text}</ReactMarkdown>
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-200 text-gray-500 rounded-2xl px-4 py-2 text-xs animate-pulse">
                Пишувам...
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 border-t bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Прашај нешто..."
              className="flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:border-indigo-500"
            />
            <button 
              onClick={sendMessage}
              disabled={loading || !userInput.trim()}
              className="bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-indigo-700 disabled:opacity-50 transition-colors"
            >
              ➤
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiTutor;
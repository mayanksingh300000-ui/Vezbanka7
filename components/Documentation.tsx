import React from 'react';

const Documentation: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-8 border border-gray-200 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-4">За Вежбанката (Documentation)</h2>
      
      <div className="space-y-8">
        <section>
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">Цел на апликацијата</h3>
          <p className="text-gray-700 leading-relaxed">
            Оваа интерактивна дигитална вежбанка е дизајнирана за ученици од 7-мо одделение за совладување на темата 
            <strong> "Броеви и операции со броеви"</strong>. Целта е да се замени традиционалниот лист хартија со 
            интерактивно искуство кое нуди моментална проверка на знаењето и помош од вештачка интелигенција.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">Структура на кодот (За програмери)</h3>
          <ul className="list-disc list-inside bg-gray-50 p-4 rounded-lg text-gray-700 space-y-2">
            <li><strong>App.tsx:</strong> Главната компонента која ги спојува сите делови.</li>
            <li><strong>Header.tsx:</strong> Горниот дел со насловот и јазичната поддршка.</li>
            <li><strong>TabNavigation.tsx:</strong> Менито за менување помеѓу видовите задачи.</li>
            <li><strong>ProblemList.tsx & ProblemCard.tsx:</strong> Приказ на задачите и логика за проверка.</li>
            <li><strong>AiTutor.tsx:</strong> Модален прозорец за чат со Gemini API.</li>
            <li><strong>services/geminiService.ts:</strong> Логика за комуникација со Google Gemini.</li>
          </ul>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">Како се користи?</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="border p-4 rounded-lg">
              <h4 className="font-bold text-gray-800">1. Решавање задачи</h4>
              <p className="text-sm text-gray-600 mt-2">
                Внесете го вашиот одговор во полињата или изберете опција. Кликнете "Провери" за моментален фидбек.
              </p>
            </div>
            <div className="border p-4 rounded-lg">
              <h4 className="font-bold text-gray-800">2. AI Помош</h4>
              <p className="text-sm text-gray-600 mt-2">
                Ако заглавите, кликнете на "AI Помош" во горниот десен агол на секоја картичка. Туторот ќе ви помогне без да го даде решението веднаш.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-indigo-700 mb-3">Технологии</h3>
          <div className="flex gap-2 flex-wrap">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">React</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">TypeScript</span>
            <span className="px-3 py-1 bg-teal-100 text-teal-800 rounded-full text-sm">Tailwind CSS</span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Google Gemini API</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm">KaTeX</span>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Documentation;
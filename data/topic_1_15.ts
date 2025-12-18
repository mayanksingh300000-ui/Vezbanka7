

import { Problem } from '../types';

export const PROBLEMS_1_15: Problem[] = [
  // --- PRACTICE ---
  {
    "id": "FRACTIONS_1_15_1",
    "category": "practice",
    "topic": "1.15. ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ ДРОПКИ",
    "problem_type": "text_input",
    "text_mk": "а) Сведи ги дропките на најмал заеднички именител.\nб) Сведи ги дропките на најмал заеднички броител.\n\n*(Внеси ги броевите одделени со запирка, на пример: 1/4, 2/4)*",
    "parts": [
      {
        "part_id": "1a",
        "text_mk": "а)",
        "latex": "\\frac{1}{5}, \\frac{7}{10}, \\frac{1}{2}, \\frac{3}{4}",
        "answer": "4/20, 14/20, 10/20, 15/20"
      },
      {
        "part_id": "1b",
        "text_mk": "б)",
        "latex": "\\frac{3}{4}, \\frac{1}{8}, \\frac{2}{3}, \\frac{1}{2}, \\frac{2}{5}",
        "answer": "6/8, 6/48, 6/9, 6/12, 6/15" // Најмал заеднички броител е 6
      }
    ]
  },
  {
    "id": "FRACTIONS_1_15_2",
    "category": "practice",
    "topic": "1.15. ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ ДРОПКИ",
    "problem_type": "text_input",
    "text_mk": "Подреди ги дропките (оддели ги со запирка):",
    "parts": [
      {
        "part_id": "2a",
        "text_mk": "а) во растечки редослед",
        "latex": "\\frac{1}{15}, \\frac{2}{5}, \\frac{7}{15}, \\frac{1}{3}",
        "answer": "1/15, 1/3, 2/5, 7/15"
      },
      {
        "part_id": "2b",
        "text_mk": "б) во опаѓачки редослед",
        "latex": "\\frac{7}{10}, \\frac{4}{5}, \\frac{63}{100}, \\frac{1}{2}",
        "answer": "4/5, 7/10, 63/100, 1/2"
      }
    ]
  },
  {
    "id": "FRACTIONS_1_15_3",
    "category": "practice",
    "topic": "1.15. ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ ДРОПКИ",
    "problem_type": "multiple_choice",
    "text_mk": "Кој е децималниот запис на рационалниот број $\\frac{907}{45}$?",
    "options": [
      { "option_id": "a", "text_mk": "20,1(5)" },
      { "option_id": "b", "text_mk": "20,10(5)" },
      { "option_id": "c", "text_mk": "2,1(5)" },
      { "option_id": "d", "text_mk": "2,10(5)" }
    ],
    "answer": "a"
  },
  {
    "id": "FRACTIONS_1_15_4",
    "category": "practice",
    "topic": "1.15. ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ ДРОПКИ",
    "problem_type": "drag_drop_comparison",
    "text_mk": "Спореди ги броевите на тој начин што ќе ја запишеш дропката како децимален број (влечи ги знаците):",
    "drag_items": ["<", ">", "="],
    "parts": [
      {
        "part_id": "4a",
        "text_mk": "а)",
        "latex": "\\frac{3}{25}",
        "latex_suffix": "0,15",
        "answer": "<" // 0.12 < 0.15
      },
      {
        "part_id": "4b",
        "text_mk": "б)",
        "latex": "\\frac{1}{8}",
        "latex_suffix": "0,12",
        "answer": ">" // 0.125 > 0.12
      }
    ]
  },
  {
    "id": "FRACTIONS_1_15_5",
    "category": "practice",
    "topic": "1.15. ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ ДРОПКИ",
    "problem_type": "text_input",
    "text_mk": "Една атлетичарка учествувала на две трки. На првата трка меѓу 35 натпреварувачи го зазела 13. место, а на втората трка меѓу 30 натпреварувачи го зазела 11. место. На која трка била поуспешна? (Одговори со: Првата или Втората)",
    "answer": "Втората"
  },

  // --- CHALLENGES ---

  {
    "id": "CHALLENGE_1_15_1",
    "category": "challenge",
    "topic": "1.15. ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ ДРОПКИ",
    "problem_type": "text_input",
    "text_mk": "На сликата, вредноста на **D** е еднаква на најголемиот од рационалните броеви **M**, **L** и **K**. Пресметај ја вредноста на D како дропка.",
    "answer": "3/8",
    "svg": `<svg viewBox="0 0 500 250" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
       <defs>
         <marker id="arrowHead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
           <polygon points="0 0, 10 3.5, 0 7" fill="#555" />
         </marker>
       </defs>
       
       <!-- M -->
       <g transform="translate(50, 30)">
          <rect x="0" y="0" width="80" height="60" rx="10" fill="#E3F2FD" stroke="#2196F3" stroke-width="2" />
          <text x="40" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#1565C0">M</text>
          <text x="40" y="45" text-anchor="middle" font-weight="bold" font-size="18" fill="#333">1/3</text>
       </g>

       <!-- L -->
       <g transform="translate(210, 30)">
          <rect x="0" y="0" width="80" height="60" rx="10" fill="#E8F5E9" stroke="#4CAF50" stroke-width="2" />
          <text x="40" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#2E7D32">L</text>
          <text x="40" y="45" text-anchor="middle" font-weight="bold" font-size="18" fill="#333">0.35</text>
       </g>

       <!-- K -->
       <g transform="translate(370, 30)">
          <rect x="0" y="0" width="80" height="60" rx="10" fill="#FFF3E0" stroke="#FF9800" stroke-width="2" />
          <text x="40" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#EF6C00">K</text>
          <text x="40" y="45" text-anchor="middle" font-weight="bold" font-size="18" fill="#333">3/8</text>
       </g>

       <!-- D -->
       <g transform="translate(210, 160)">
          <rect x="0" y="0" width="80" height="60" rx="10" fill="#F3E5F5" stroke="#9C27B0" stroke-width="2" />
          <text x="40" y="35" text-anchor="middle" font-weight="bold" font-size="24" fill="#7B1FA2">D</text>
       </g>

       <!-- Arrows -->
       <path d="M90 90 L 210 160" stroke="#555" stroke-width="2" marker-end="url(#arrowHead)" />
       <path d="M250 90 L 250 160" stroke="#555" stroke-width="2" marker-end="url(#arrowHead)" />
       <path d="M410 90 L 290 160" stroke="#555" stroke-width="2" marker-end="url(#arrowHead)" />

       <text x="250" y="140" text-anchor="middle" font-size="12" fill="#555" font-style="italic">Max(M, L, K)</text>
    </svg>`
  },
  {
    "id": "CHALLENGE_1_15_2",
    "category": "challenge",
    "topic": "1.15. ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ ДРОПКИ",
    "problem_type": "custom_visual_data", 
    "text_mk": "Обој ги полињата (кликни на нив) во кои се запишани рационалните броеви кои имаат **периодичен (бескраен) децимален запис**.",
    "custom_visual_data": {
        "type": "grid_of_fractions",
        "fractions": ["1/3", "15/4", "4/9", "17/25", "7/9", "1/125", "17/3", "2/5", "4/11"],
        "correct_items": ["1/3", "4/9", "7/9", "17/3", "4/11"]
    },
    "answer": "1/3, 4/9, 7/9, 17/3, 4/11" 
  },
  {
    "id": "CHALLENGE_1_15_3",
    "category": "challenge",
    "topic": "1.15. ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ ДРОПКИ",
    "problem_type": "text_input",
    "text_mk": "На сликата се прикажани кутии А и B, од кои секоја собира по 10 јајца. За да се дополни кутијата B до врв, колкав дел од јајцата што моментално се наоѓаат во кутијата А треба да се префрлат во кутијата B? (Запиши како дропка)",
    "svg": `<svg viewBox="0 0 600 200" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
       <!-- Box A -->
       <g transform="translate(20, 20)">
         <rect x="0" y="0" width="250" height="120" rx="10" fill="#D7CCC8" stroke="#5D4037" stroke-width="2" />
         <text x="125" y="150" text-anchor="middle" font-weight="bold" font-size="16">Кутија А (7 јајца)</text>
         <!-- 10 Slots in 2 rows -->
         <!-- Filled: 7 -->
         <g transform="translate(25, 25)">
            <circle cx="20" cy="20" r="15" fill="#FFECB3" stroke="#FFB300" />
            <circle cx="70" cy="20" r="15" fill="#FFECB3" stroke="#FFB300" />
            <circle cx="120" cy="20" r="15" fill="#FFECB3" stroke="#FFB300" />
            <circle cx="170" cy="20" r="15" fill="#FFECB3" stroke="#FFB300" />
            <circle cx="220" cy="20" r="15" fill="#FFECB3" stroke="#FFB300" />
            
            <circle cx="20" cy="70" r="15" fill="#FFECB3" stroke="#FFB300" />
            <circle cx="70" cy="70" r="15" fill="#FFECB3" stroke="#FFB300" />
            <!-- Empty -->
            <circle cx="120" cy="70" r="12" fill="#5D4037" opacity="0.1" />
            <circle cx="170" cy="70" r="12" fill="#5D4037" opacity="0.1" />
            <circle cx="220" cy="70" r="12" fill="#5D4037" opacity="0.1" />
         </g>
       </g>

       <!-- Box B -->
       <g transform="translate(330, 20)">
         <rect x="0" y="0" width="250" height="120" rx="10" fill="#D7CCC8" stroke="#5D4037" stroke-width="2" />
         <text x="125" y="150" text-anchor="middle" font-weight="bold" font-size="16">Кутија B (4 јајца)</text>
         <!-- Filled: 4, Empty: 6 -->
         <g transform="translate(25, 25)">
            <circle cx="20" cy="20" r="15" fill="#FFECB3" stroke="#FFB300" />
            <circle cx="70" cy="20" r="15" fill="#FFECB3" stroke="#FFB300" />
            <circle cx="120" cy="20" r="15" fill="#FFECB3" stroke="#FFB300" />
            <circle cx="170" cy="20" r="15" fill="#FFECB3" stroke="#FFB300" />
            <!-- Empty -->
            <circle cx="220" cy="20" r="12" fill="#5D4037" opacity="0.1" />
            
            <circle cx="20" cy="70" r="12" fill="#5D4037" opacity="0.1" />
            <circle cx="70" cy="70" r="12" fill="#5D4037" opacity="0.1" />
            <circle cx="120" cy="70" r="12" fill="#5D4037" opacity="0.1" />
            <circle cx="170" cy="70" r="12" fill="#5D4037" opacity="0.1" />
            <circle cx="220" cy="70" r="12" fill="#5D4037" opacity="0.1" />
         </g>
       </g>
    </svg>`,
    "answer": "6/7" // B needs 6. A has 7. We take 6 out of A's 7.
  },
  {
    "id": "CHALLENGE_1_15_4",
    "category": "challenge",
    "topic": "1.15. ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ ДРОПКИ",
    "problem_type": "text_input", 
    "text_mk": "Пресметај ја шифрата за секој катанец користејќи го правилото: Ако дропката $\\frac{a}{b}$ е еднаква на децималниот број $c,d$, тогаш шифрата е $c \\cdot d$.",
    "parts": [
        { "part_id": "4a", "text_mk": "Шифра за 14/5:", "answer": "16" }, // 2.8 -> 2*8=16
        { "part_id": "4b", "text_mk": "Шифра за 9/2:", "answer": "20" }, // 4.5 -> 4*5=20
        { "part_id": "4c", "text_mk": "Шифра за 27/10:", "answer": "14" } // 2.7 -> 2*7=14
    ],
    "svg": `<svg viewBox="0 0 600 200" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
       <!-- Lock 1 -->
       <g transform="translate(50, 40)">
          <rect x="10" y="40" width="80" height="70" rx="5" fill="#FFCC80" stroke="#EF6C00" stroke-width="2" />
          <path d="M25 40 L25 20 A 25 25 0 0 1 75 20 L 75 40" fill="none" stroke="#555" stroke-width="6" />
          <text x="50" y="80" text-anchor="middle" font-weight="bold" font-size="20">14/5</text>
          <text x="50" y="130" text-anchor="middle" font-size="12" fill="#555">Шифра?</text>
       </g>

       <!-- Lock 2 -->
       <g transform="translate(250, 40)">
          <rect x="10" y="40" width="80" height="70" rx="5" fill="#90CAF9" stroke="#1565C0" stroke-width="2" />
          <path d="M25 40 L25 20 A 25 25 0 0 1 75 20 L 75 40" fill="none" stroke="#555" stroke-width="6" />
          <text x="50" y="80" text-anchor="middle" font-weight="bold" font-size="20">9/2</text>
          <text x="50" y="130" text-anchor="middle" font-size="12" fill="#555">Шифра?</text>
       </g>

       <!-- Lock 3 -->
       <g transform="translate(450, 40)">
          <rect x="10" y="40" width="80" height="70" rx="5" fill="#A5D6A7" stroke="#2E7D32" stroke-width="2" />
          <path d="M25 40 L25 20 A 25 25 0 0 1 75 20 L 75 40" fill="none" stroke="#555" stroke-width="6" />
          <text x="50" y="80" text-anchor="middle" font-weight="bold" font-size="20">27/10</text>
          <text x="50" y="130" text-anchor="middle" font-size="12" fill="#555">Шифра?</text>
       </g>

       <g transform="translate(250, 0)">
          <text x="50" y="0" text-anchor="middle" font-size="12" fill="#777">Пример: 12/5 = 2.4 => Шифра: 8</text>
       </g>
    </svg>`
  }
];

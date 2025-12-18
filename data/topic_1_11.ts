
import { Problem } from '../types';

export const PROBLEMS_1_11: Problem[] = [
  {
    "id": "DIVISION_1_11_1",
    "category": "practice",
    "topic": "1.11. ДЕЛЕЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "expression_calculation",
    "text_mk": "Најди го количникот:",
    "parts": [
      {
        "part_id": "1a",
        "text_mk": "а)",
        "latex": "40 : (-5)",
        "answer": "-8"
      },
      {
        "part_id": "1b",
        "text_mk": "б)",
        "latex": "-1000 : (-10)",
        "answer": "100"
      },
      {
        "part_id": "1c",
        "text_mk": "в)",
        "latex": "5500 : (-11)",
        "answer": "-500"
      },
      {
        "part_id": "1d",
        "text_mk": "г)",
        "latex": "-1000 : (-1)",
        "answer": "1000"
      }
    ]
  },
  {
    "id": "DIVISION_1_11_2",
    "category": "practice",
    "topic": "1.11. ДЕЛЕЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "expression_calculation",
    "text_mk": "Ако m = –3, пресметај ја вредноста на изразот:",
    "latex_math": "54 : (2 \\cdot m)",
    "answer": "-9"
  },
  {
    "id": "DIVISION_1_11_3",
    "category": "practice",
    "topic": "1.11. ДЕЛЕЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "equation_solving",
    "text_mk": "Реши ги равенките:",
    "parts": [
      {
        "part_id": "3a",
        "text_mk": "а)",
        "latex": "-2 \\cdot x + 3 = -9",
        "answer": "6"
      },
      {
        "part_id": "3b",
        "text_mk": "б)",
        "latex": "-6 \\cdot x + 1 = 19",
        "answer": "-3"
      }
    ]
  },
  {
    "id": "DIVISION_1_11_4",
    "category": "practice",
    "topic": "1.11. ДЕЛЕЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "expression_calculation",
    "text_mk": "Пресметај ги следниве задачи:",
    "parts": [
      {
        "part_id": "4a",
        "text_mk": "а)",
        "latex": "(7 + 7) \\cdot (-7 - 7) : (-7)",
        "answer": "28"
      },
      {
      "part_id": "4b",
        "text_mk": "б)",
        "latex": "-7 + (-7 \\cdot 7 - 7 ) : 7",
        "answer": "-15"
      },
      {
        "part_id": "4c",
        "text_mk": "в)",
        "latex": "7 - 7 \\cdot (7 - 7 : 7)",
        "answer": "-35"
      },
      {
        "part_id": "4d",
        "text_mk": "г)",
        "latex": "(-7 + 7 \\cdot (-7) - 7) : (-7)",
        "answer": "9"
      }
    ]
  },
  {
    "id": "DIVISION_1_11_5",
    "category": "practice",
    "topic": "1.11. ДЕЛЕЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "text_input",
    "text_mk": "Бројот 12 се дели посебно со секој од целите броеви што се наоѓаат помеѓу –1 и –4, а добиените резултати се множат меѓусебно.\n\n**Кој е резултатот од оваа операција?**",
    "answer": "24"
  },

  // --- CHALLENGES ---

  {
    "id": "CHALLENGE_1_11_1",
    "category": "challenge",
    "topic": "1.11. ДЕЛЕЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "text_input",
    "text_mk": "Една машина за пресметување работи според правилата прикажани на картичките. Ако на машината се внесат броевите **4** и **–5**, колку ќе изнесува производот на резултатите добиени на излезот?",
    "answer": "-44",
    "svg": `<svg viewBox="0 0 600 280" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>

      <!-- Machine Graphic (Left) -->
      <g transform="translate(20, 40) scale(0.8)">
        <rect x="0" y="0" width="200" height="180" rx="10" fill="#4FC3F7" stroke="#0277BD" stroke-width="3" />
        <rect x="0" y="120" width="200" height="60" rx="10" fill="#E1F5FE" stroke="#0277BD" stroke-width="1" />
        <rect x="10" y="10" width="180" height="50" rx="5" fill="#FFECB3" stroke="#FFA000" stroke-width="2" />
        <text x="100" y="45" text-anchor="middle" font-family="monospace" font-weight="bold" font-size="24" fill="#333">MACHINE</text>
        <circle cx="160" cy="30" r="8" fill="white" stroke="#555" />
        <line x1="160" y1="30" x2="166" y2="24" stroke="#555" stroke-width="2" />
        <rect x="20" y="90" width="160" height="25" rx="2" fill="#2E7D32" stroke="#1B5E20" />
        <g transform="translate(100, 140)">
           <rect x="0" y="0" width="15" height="15" fill="#F44336" rx="2" />
           <rect x="20" y="0" width="15" height="15" fill="#FFEB3B" rx="2" />
           <rect x="40" y="0" width="15" height="15" fill="#2196F3" rx="2" />
           <rect x="0" y="20" width="15" height="15" fill="#9C27B0" rx="2" />
           <rect x="20" y="20" width="15" height="15" fill="#FF9800" rx="2" />
           <rect x="40" y="20" width="15" height="15" fill="#4CAF50" rx="2" />
        </g>
        <rect x="180" y="130" width="10" height="40" fill="#CCC" stroke="#555" />
        <circle cx="185" cy="130" r="8" fill="#F44336" stroke="#B71C1C" />
      </g>

      <!-- Rule Card: EVEN (Middle) -->
      <g transform="translate(220, 20)">
         <rect x="0" y="0" width="170" height="160" fill="#E8EAF6" stroke="#3F51B5" stroke-width="1" rx="8" filter="url(#shadow)" />
         <path d="M0 8 A8 8 0 0 1 8 0 L162 0 A8 8 0 0 1 170 8 L170 40 L0 40 Z" fill="#3F51B5" />
         <text x="85" y="28" text-anchor="middle" font-weight="bold" font-size="14" fill="white">Ако бројот е ПАРЕН</text>
         
         <g transform="translate(20, 60)">
           <circle cx="0" cy="5" r="3" fill="#3F51B5" />
           <text x="10" y="10" font-size="13" fill="#333">Множи со (-3)</text>
           
           <circle cx="0" cy="35" r="3" fill="#3F51B5" />
           <text x="10" y="40" font-size="13" fill="#333">Додај 4</text>
           
           <circle cx="0" cy="65" r="3" fill="#3F51B5" />
           <text x="10" y="70" font-size="13" fill="#333">Дели со 2</text>
         </g>
      </g>

      <!-- Rule Card: ODD (Right) -->
      <g transform="translate(410, 20)">
         <rect x="0" y="0" width="170" height="160" fill="#FFF3E0" stroke="#EF6C00" stroke-width="1" rx="8" filter="url(#shadow)" />
         <path d="M0 8 A8 8 0 0 1 8 0 L162 0 A8 8 0 0 1 170 8 L170 40 L0 40 Z" fill="#EF6C00" />
         <text x="85" y="28" text-anchor="middle" font-weight="bold" font-size="14" fill="white">Ако е НЕПАРЕН</text>
         
         <g transform="translate(20, 60)">
           <circle cx="0" cy="5" r="3" fill="#EF6C00" />
           <text x="10" y="10" font-size="13" fill="#333">Множи со 4</text>
           
           <circle cx="0" cy="35" r="3" fill="#EF6C00" />
           <text x="10" y="40" font-size="13" fill="#333">Одземи 2</text>
           
           <circle cx="0" cy="65" r="3" fill="#EF6C00" />
           <text x="10" y="70" font-size="13" fill="#333">Дели со (-2)</text>
         </g>
      </g>
    </svg>`
  },
  {
    "id": "CHALLENGE_1_11_2",
    "category": "challenge",
    "topic": "1.11. ДЕЛЕЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "expression_calculation",
    "text_mk": "Одреди ја вредноста на количникот **a : b**, користејќи ги вредностите дефинирани на картичките:",
    "answer": "-2",
    "svg": `<svg viewBox="0 0 500 140" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow2" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>

      <!-- Card A -->
      <g transform="translate(20, 20)">
         <rect x="0" y="0" width="200" height="100" fill="#E8F5E9" stroke="#4CAF50" stroke-width="1" rx="6" filter="url(#shadow2)" />
         <text x="100" y="35" text-anchor="middle" font-weight="bold" font-size="18" fill="#2E7D32">Вредност a</text>
         <line x1="20" y1="45" x2="180" y2="45" stroke="#4CAF50" stroke-dasharray="4,2" />
         <text x="100" y="75" text-anchor="middle" font-family="monospace" font-size="20" fill="#1B5E20">a = (-16) : 2</text>
      </g>

      <!-- Card B -->
      <g transform="translate(250, 20)">
         <rect x="0" y="0" width="200" height="100" fill="#E3F2FD" stroke="#2196F3" stroke-width="1" rx="6" filter="url(#shadow2)" />
         <text x="100" y="35" text-anchor="middle" font-weight="bold" font-size="18" fill="#1565C0">Вредност b</text>
         <line x1="20" y1="45" x2="180" y2="45" stroke="#2196F3" stroke-dasharray="4,2" />
         <text x="100" y="75" text-anchor="middle" font-family="monospace" font-size="20" fill="#0D47A1">b = (-12) : (-3)</text>
      </g>
    </svg>`
  },
  {
    "id": "CHALLENGE_1_11_3",
    "category": "challenge",
    "topic": "1.11. ДЕЛЕЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "text_input",
    "text_mk": "Рамиз сакал да ја пресмета аритметичката средина на броевите –20 и –40. Наместо да ги собере и да го подели збирот со два, тој ги помножил броевите и производот го поделил со два. Колку е поголем резултатот што го добил Рамиз од резултатот што требало да го добие?",
    "answer": "430"
  },
  {
    "id": "CHALLENGE_1_11_4",
    "category": "challenge",
    "topic": "1.11. ДЕЛЕЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "text_input",
    "text_mk": "Анализирај ги податоците од картичките подолу за да ги откриеш вредностите на броевите A, B и C.\n\n**Која е најголемата можна вредност на бројот A?**",
    "svg": `<svg viewBox="0 0 600 160" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadow" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>

      <!-- Card C -->
      <g transform="translate(20, 20)">
         <rect x="0" y="0" width="160" height="120" fill="#FFF9C4" stroke="#FBC02D" stroke-width="1" rx="5" filter="url(#shadow)" />
         <circle cx="80" cy="15" r="8" fill="#FBC02D" /> 
         <text x="80" y="45" text-anchor="middle" font-weight="bold" font-size="16" fill="#F57F17">Број C</text>
         <line x1="20" y1="55" x2="140" y2="55" stroke="#FBC02D" stroke-dasharray="4,4" />
         <text x="80" y="80" text-anchor="middle" font-size="14" fill="#333">Апсолутната</text>
         <text x="80" y="100" text-anchor="middle" font-size="14" fill="#333">вредност е 6.</text>
      </g>

      <!-- Card B -->
      <g transform="translate(200, 20)">
         <rect x="0" y="0" width="180" height="120" fill="#E1F5FE" stroke="#03A9F4" stroke-width="1" rx="5" filter="url(#shadow)" />
         <circle cx="90" cy="15" r="8" fill="#03A9F4" />
         <text x="90" y="45" text-anchor="middle" font-weight="bold" font-size="16" fill="#0277BD">Број B</text>
         <line x1="20" y1="55" x2="160" y2="55" stroke="#03A9F4" stroke-dasharray="4,4" />
         <text x="90" y="75" text-anchor="middle" font-size="13" fill="#333">Спротивен на бројот</text>
         <text x="90" y="95" text-anchor="middle" font-size="13" fill="#333">што е за 10 помал од C.</text>
      </g>

      <!-- Card A -->
      <g transform="translate(400, 20)">
         <rect x="0" y="0" width="180" height="120" fill="#E8F5E9" stroke="#4CAF50" stroke-width="1" rx="5" filter="url(#shadow)" />
         <circle cx="90" cy="15" r="8" fill="#4CAF50" />
         <text x="90" y="45" text-anchor="middle" font-weight="bold" font-size="16" fill="#2E7D32">Број A</text>
         <line x1="20" y1="55" x2="160" y2="55" stroke="#4CAF50" stroke-dasharray="4,4" />
         <text x="90" y="75" text-anchor="middle" font-size="13" fill="#333">За 7 поголем од</text>
         <text x="90" y="95" text-anchor="middle" font-size="13" fill="#333">трикратниот B.</text>
      </g>
    </svg>`
  }
];

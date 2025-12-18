

import { Problem } from '../types';

export const PROBLEMS_1_13: Problem[] = [
  // --- PRACTICE ---
  {
    "id": "EXPONENT_1_13_1",
    "category": "practice",
    "topic": "1.13. СТЕПЕН СО ПОКАЗАТЕЛ ПРИРОДЕН БРОЈ",
    "problem_type": "text_input",
    "text_mk": "Пополни ги празните места со соодветните математички термини (оддели ги со запирка):",
    "parts": [
      {
        "part_id": "1a",
        "text_mk": "а) Во записот 9³ , бројот 9 се вика ______, бројот 3 се вика _______ , а целиот запис 9³ се вика _________.",
        "answer": "основа, експонент, степен"
      },
      {
        "part_id": "1b",
        "text_mk": "б) Во записот (–9)³ , основа е ______, експонент е _____ , а целиот запис (–9)³ се вика _________.",
        "answer": "-9, 3, степен"
      },
      {
        "part_id": "1c",
        "text_mk": "в) Во записот x⁵ , бројот x се вика__________ а бројот 5 се вика ______________.",
        "answer": "основа, експонент"
      },
      {
        "part_id": "1d",
        "text_mk": "г) Во записот 0,2⁵ експонент е ____ , a основа е ______.",
        "answer": "5, 0.2"
      }
    ]
  },
  {
    "id": "EXPONENT_1_13_2",
    "category": "practice",
    "topic": "1.13. СТЕПЕН СО ПОКАЗАТЕЛ ПРИРОДЕН БРОЈ",
    "problem_type": "expression_calculation",
    "text_mk": "Запиши како производ и пресметај ја вредноста на степените:",
    "parts": [
      {
        "part_id": "2a",
        "text_mk": "а)",
        "latex": "2^4",
        "answer": "16" 
      },
      {
        "part_id": "2b",
        "text_mk": "б)",
        "latex": "4^2",
        "answer": "16" 
      },
      {
        "part_id": "2c",
        "text_mk": "в)",
        "latex": "5^3",
        "answer": "125" 
      },
      {
        "part_id": "2d",
        "text_mk": "г)",
        "latex": "3^5",
        "answer": "243" 
      },
      {
        "part_id": "2e",
        "text_mk": "д)",
        "latex": "0.5^2",
        "answer": "0.25"
      },
      {
        "part_id": "2f",
        "text_mk": "ѓ)",
        "latex": "1.5^3",
        "answer": "3.375"
      }
    ]
  },
  {
    "id": "EXPRESSION_VALUE_1_13_3",
    "category": "practice",
    "topic": "1.13. СТЕПЕН СО ПОКАЗАТЕЛ ПРИРОДЕН БРОЈ",
    "problem_type": "expression_calculation",
    "text_mk": "Пресметај ја вредноста на изразите:",
    "parts": [
      {
        "part_id": "3a",
        "text_mk": "а)",
        "latex": "10^2 - 3^2",
        "answer": "91" 
      },
      {
        "part_id": "3b",
        "text_mk": "б)",
        "latex": "(10 - 3)^2",
        "answer": "49" 
      },
      {
        "part_id": "3c",
        "text_mk": "в)",
        "latex": "-8^2 + 2^3",
        "answer": "-56" 
      },
      {
        "part_id": "3d",
        "text_mk": "г)",
        "latex": "6^3 - 4^4",
        "answer": "-70" 
      },
      {
        "part_id": "3e",
        "text_mk": "д)",
        "latex": "-3 \\cdot 2^5",
        "answer": "-96" 
      },
      {
        "part_id": "3f",
        "text_mk": "ѓ)",
        "latex": "1^3 + 2^3 + 3^3 + 4^3 + 5^3",
        "answer": "225" 
      }
    ]
  },
  {
    "id": "EXPONENT_1_13_4",
    "category": "practice",
    "topic": "1.13. СТЕПЕН СО ПОКАЗАТЕЛ ПРИРОДЕН БРОЈ",
    "problem_type": "text_input",
    "text_mk": "Ако е $4^3 < M < 5^3$, колку цели броеви може да се запишат на местото на M?",
    "latex_math": "4^3 < M < 5^3",
    "answer": "60" 
  },
  {
    "id": "EXPONENT_1_13_5",
    "category": "practice",
    "topic": "1.13. СТЕПЕН СО ПОКАЗАТЕЛ ПРИРОДЕН БРОЈ",
    "problem_type": "equation_solving",
    "text_mk": "За која вредност на x ќе биде точно равенството?",
    "parts": [
      {
        "part_id": "5a",
        "text_mk": "а)",
        "latex": "x^3 = 1",
        "answer": "1"
      },
      {
        "part_id": "5b",
        "text_mk": "б)",
        "latex": "3^x = 27",
        "answer": "3"
      },
      {
        "part_id": "5c",
        "text_mk": "в)",
        "latex": "x^1 = 15",
        "answer": "15"
      },
      {
        "part_id": "5d",
        "text_mk": "г)",
        "latex": "2^x = 16",
        "answer": "4"
      }
    ]
  },
  
  // --- CHALLENGES ---
  
  {
    "id": "CHALLENGE_1_13_1",
    "category": "challenge",
    "topic": "1.13. СТЕПЕН СО ПОКАЗАТЕЛ ПРИРОДЕН БРОЈ",
    "problem_type": "text_input",
    "text_mk": "Дадени се бели и сиви жетони. Се формираат степени така што броевите напишани на белите жетони се основа, а броевите на сивите жетони се показател (експонент). Секој жетон со која било боја се користи само еднаш. Формирај ја најголемата можна разлика помеѓу вредностите на формираните степени?",
    "svg": `<svg viewBox="0 0 400 180" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
       <g font-family="sans-serif" text-anchor="middle" font-weight="bold" font-size="24">
         <!-- White Tokens (Base) -->
         <g transform="translate(80, 60)">
           <circle cx="0" cy="0" r="30" fill="white" stroke="#333" stroke-width="3" />
           <text x="0" y="8" fill="#333">2</text>
         </g>
         <g transform="translate(160, 60)">
           <circle cx="0" cy="0" r="30" fill="white" stroke="#333" stroke-width="3" />
           <text x="0" y="8" fill="#333">5</text>
         </g>
         <text x="120" y="110" font-size="14" fill="#666">Основи (Бели)</text>

         <!-- Grey Tokens (Exponent) -->
         <g transform="translate(240, 60)">
           <circle cx="0" cy="0" r="30" fill="#B0BEC5" stroke="#455A64" stroke-width="3" />
           <text x="0" y="8" fill="#fff">4</text>
         </g>
         <g transform="translate(320, 60)">
           <circle cx="0" cy="0" r="30" fill="#B0BEC5" stroke="#455A64" stroke-width="3" />
           <text x="0" y="8" fill="#fff">3</text>
         </g>
         <text x="280" y="110" font-size="14" fill="#666">Експоненти (Сиви)</text>
       </g>
    </svg>`,
    "answer": "617" 
  },
  {
    "id": "CHALLENGE_1_13_2",
    "category": "challenge",
    "topic": "1.13. СТЕПЕН СО ПОКАЗАТЕЛ ПРИРОДЕН БРОЈ",
    "problem_type": "expression_calculation",
    "text_mk": "Бројот добиен од повеќекратното множење $\\Delta \\cdot \\Delta \\cdot \\Delta \\cdot \\Delta \\cdot \\Delta$ е за 5 поголем од бројот добиен од повеќекратното множење $3 \\cdot 3 \\cdot 3$.",
    "parts": [
      {
        "part_id": "P2a",
        "text_mk": "а) Колку е вредноста на $\\Delta$?",
        "latex": "\\Delta^5 = 3^3 + 5",
        "answer": "2"
      },
      {
        "part_id": "P2b",
        "text_mk": "б) Колку е вредноста на изразот $\\Delta^3 - \\Delta^2$?",
        "answer": "4"
      }
    ]
  },
  {
    "id": "CHALLENGE_1_13_3",
    "category": "challenge",
    "topic": "1.13. СТЕПЕН СО ПОКАЗАТЕЛ ПРИРОДЕН БРОЈ",
    "problem_type": "text_input",
    "text_mk": "Со користење на броевите од дадените картички на местата на А и B, се формираат степените $A^2$ и $B^3$. Ако резултатот од операцијата $A^2 - B^3$ е позитивен цел број, запишете ги целите броеви што можат да се постават на местата на А и B (формат: A, B).",
    "svg": `<svg viewBox="0 0 500 150" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
       <defs>
          <filter id="shadowCard" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="2" dy="2" stdDeviation="2" flood-color="#000" flood-opacity="0.2"/>
          </filter>
       </defs>
       <g font-family="monospace" font-weight="bold" font-size="28" text-anchor="middle">
         <g transform="translate(50, 20)" filter="url(#shadowCard)">
            <rect width="80" height="100" rx="8" fill="white" stroke="#333" stroke-width="2"/>
            <text x="40" y="60" fill="#333">+4</text>
         </g>
         <g transform="translate(150, 20)" filter="url(#shadowCard)">
            <rect width="80" height="100" rx="8" fill="white" stroke="#333" stroke-width="2"/>
            <text x="40" y="60" fill="#333">+1</text>
         </g>
         <g transform="translate(250, 20)" filter="url(#shadowCard)">
            <rect width="80" height="100" rx="8" fill="white" stroke="#333" stroke-width="2"/>
            <text x="40" y="60" fill="#333">-2</text>
         </g>
         <g transform="translate(350, 20)" filter="url(#shadowCard)">
            <rect width="80" height="100" rx="8" fill="white" stroke="#333" stroke-width="2"/>
            <text x="40" y="60" fill="#333">+3</text>
         </g>
       </g>
    </svg>`,
    "answer": "3, -2" 
  },
  {
    "id": "CHALLENGE_1_13_4",
    "category": "challenge",
    "topic": "1.13. СТЕПЕН СО ПОКАЗАТЕЛ ПРИРОДЕН БРОЈ",
    "problem_type": "text_input",
    "text_mk": "Од 10 складни сини правоаголници, секој со должини на страните $2^5$ cm и $2^6$ cm, е формиран правоаголникот ABCD, така што нивните страни се допираат како што е прикажано на сликата. Според даденото, колкав е периметарот на правоаголникот EFGH во внатрешноста на правоаголникот ABCD, изразен во центиметри?",
    "svg": `<svg viewBox="0 0 400 300" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
       <!-- 
          Layout Logic:
          Small Rect: 32 x 64 (scaled down by factor)
          Top Row: 3 horizontal (width 192)
          Bottom Row: 3 horizontal (width 192)
          Left Col: 2 vertical (height 128)
          Right Col: 2 vertical (height 128)
          Total Width = 192, Total Height = 192
       -->
       <rect x="50" y="50" width="300" height="300" fill="none" stroke="#333" stroke-width="1" stroke-dasharray="4,4"/> <!-- ABCD bounds visual aid -->
       
       <g stroke="white" stroke-width="2" fill="#1976D2">
         <!-- Top Row (3 horizontal) -->
         <rect x="50" y="50" width="100" height="50" />
         <rect x="150" y="50" width="100" height="50" />
         <rect x="250" y="50" width="100" height="50" />

         <!-- Left Column (2 vertical) -->
         <rect x="50" y="100" width="50" height="100" />
         <rect x="50" y="200" width="50" height="100" />

         <!-- Right Column (2 vertical) -->
         <rect x="300" y="100" width="50" height="100" />
         <rect x="300" y="200" width="50" height="100" />

         <!-- Bottom Row (3 horizontal) -->
         <rect x="50" y="300" width="100" height="50" />
         <rect x="150" y="300" width="100" height="50" />
         <rect x="250" y="300" width="100" height="50" />
       </g>

       <!-- Labels -->
       <text x="40" y="45" font-weight="bold" font-size="16">A</text>
       <text x="360" y="45" font-weight="bold" font-size="16">B</text>
       <text x="360" y="365" font-weight="bold" font-size="16">C</text>
       <text x="40" y="365" font-weight="bold" font-size="16">D</text>

       <!-- Inner Hole EFGH -->
       <rect x="100" y="100" width="200" height="200" fill="#E3F2FD" stroke="#333" stroke-width="2" stroke-dasharray="4,4" />
       <text x="110" y="120" font-weight="bold" font-size="14">E</text>
       <text x="290" y="120" font-weight="bold" font-size="14">F</text>
       <text x="290" y="290" font-weight="bold" font-size="14">G</text>
       <text x="110" y="290" font-weight="bold" font-size="14">H</text>

       <!-- Dimensions Hint -->
       <text x="200" y="80" text-anchor="middle" fill="white" font-size="12">64</text>
       <text x="250" y="250" text-anchor="middle" fill="white" font-size="12" transform="rotate(90 250 250)">64</text>
    </svg>`,
    "answer": "512" 
  }
];

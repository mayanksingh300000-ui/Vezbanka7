
import { Problem } from '../types';

export const PROBLEMS_1_5: Problem[] = [
    // --- PRACTICE ---
    {
      "id": "PROBLEM_5",
      "category": "practice",
      "topic": "1.5. ЦЕЛИ БРОЕВИ ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ",
      "problem_type": "number_line_identification",
      "text_mk": "Кој цел број е претставен на бројната права? Напиши го тој број и неговиот спротивен број (одделени со запирка).",
      "parts": [
        {
          "part_id": "5a",
          "text_mk": "а)",
          "answer": "2, -2",
          "svg": `<svg viewBox="0 0 400 60" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
             <line x1="20" y1="30" x2="380" y2="30" stroke="black" stroke-width="2" />
             <g font-family="sans-serif" font-size="12" text-anchor="middle">
               ${[-5,-4,-3,-2,-1,0,1,2,3,4,5].map((n, i) => {
                 const x = 20 + i * 36;
                 return `<line x1="${x}" y1="25" x2="${x}" y2="35" stroke="black" /><text x="${x}" y="50">${n}</text>`;
               }).join('')}
             </g>
             <circle cx="${20 + (2 - (-5)) * 36}" cy="30" r="5" fill="black" />
           </svg>`
        },
        {
          "part_id": "5b",
          "text_mk": "б)",
          "answer": "-3, 3",
          "svg": `<svg viewBox="0 0 400 60" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
             <line x1="20" y1="30" x2="380" y2="30" stroke="black" stroke-width="2" />
             <g font-family="sans-serif" font-size="12" text-anchor="middle">
               ${[-5,-4,-3,-2,-1,0,1,2,3,4,5].map((n, i) => {
                 const x = 20 + i * 36;
                 return `<line x1="${x}" y1="25" x2="${x}" y2="35" stroke="black" /><text x="${x}" y="50">${n}</text>`;
               }).join('')}
             </g>
             <circle cx="${20 + (-3 - (-5)) * 36}" cy="30" r="5" fill="black" />
           </svg>`
        }
      ]
    },
    {
      "id": "PROBLEM_6",
      "category": "practice",
      "topic": "1.5. ЦЕЛИ БРОЕВИ ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ",
      "problem_type": "writing_inequalities",
      "text_mk": "Напиши неравенство што ги споредува двата цели броеви обележани на следните бројни прави (на пример: -2 < 5):",
      "parts": [
        {
          "part_id": "6a",
          "text_mk": "а)",
          "answer": "-4 < 6",
          "svg": `<svg viewBox="0 0 500 60" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
             <line x1="20" y1="30" x2="470" y2="30" stroke="black" stroke-width="2" />
             <g font-family="sans-serif" font-size="12" text-anchor="middle">
               ${Array.from({length: 15}, (_, i) => i - 7).map((n) => {
                 const x = 20 + (n + 7) * 32; 
                 return `<line x1="${x}" y1="25" x2="${x}" y2="35" stroke="black" /><text x="${x}" y="50">${n}</text>`;
               }).join('')}
             </g>
             <circle cx="${20 + (-4 + 7) * 32}" cy="30" r="5" fill="black" />
             <circle cx="${20 + (6 + 7) * 32}" cy="30" r="5" fill="black" />
           </svg>`
        },
        {
          "part_id": "6b",
          "text_mk": "б)",
          "answer": "-4 < -2",
          "svg": `<svg viewBox="0 0 500 60" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
             <line x1="20" y1="30" x2="470" y2="30" stroke="black" stroke-width="2" />
             <g font-family="sans-serif" font-size="12" text-anchor="middle">
               ${Array.from({length: 15}, (_, i) => i - 7).map((n) => {
                 const x = 20 + (n + 7) * 32;
                 return `<line x1="${x}" y1="25" x2="${x}" y2="35" stroke="black" /><text x="${x}" y="50">${n}</text>`;
               }).join('')}
             </g>
             <circle cx="${20 + (-4 + 7) * 32}" cy="30" r="5" fill="black" />
             <circle cx="${20 + (-2 + 7) * 32}" cy="30" r="5" fill="black" />
           </svg>`
        }
      ]
    },
    {
      "id": "PROBLEM_7",
      "category": "practice",
      "topic": "1.5. ЦЕЛИ БРОЕВИ ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ",
      "problem_type": "counting_integers",
      "text_mk": "На бројната оска на сликата, на некои од точките што одговараат на целите броеви помеѓу (–7) и (+3), се нацртани ленти. Колкав е вкупниот број на ленти нацртани на негативните цели броеви?",
      "range_mk": "Цели броеви помеѓу (–7) и (+3)",
      "answer": "7b",
      "svg": `<svg viewBox="0 0 460 100" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
         <line x1="20" y1="80" x2="440" y2="80" stroke="black" stroke-width="2" />
         ${Array.from({length: 11}, (_, i) => {
           const val = i - 7;
           const x = 30 + i * 40;
           let elements = '';
           elements += `<circle cx="${x}" cy="80" r="3" fill="black" />`;
           if (val === -7) elements += `<text x="${x}" y="95" text-anchor="middle" font-family="sans-serif" font-size="14">-7</text>`;
           if (val === 3) elements += `<text x="${x}" y="95" text-anchor="middle" font-family="sans-serif" font-size="14">+3</text>`;
           if ([-6, -4, -2, 0, 2].includes(val)) {
              elements += `<rect x="${x-3}" y="20" width="6" height="60" fill="#00AEEF" />`;
           }
           return elements;
         }).join('')}
       </svg>`,
      "options": [
        {"option_id": "7a", "text_mk": "2"},
        {"option_id": "7b", "text_mk": "3"},
        {"option_id": "7c", "text_mk": "4"},
        {"option_id": "7d", "text_mk": "5"}
      ]
    },
    {
      "id": "PROBLEM_8",
      "category": "practice",
      "topic": "1.5. ЦЕЛИ БРОЕВИ ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ",
      "problem_type": "comparison_of_integers",
      "text_mk": "Спореди ги броевите (впиши <, > или =):",
      "parts": [
        {"part_id": "8a", "text_mk": "а)", "latex": "-4", "latex_suffix": "5", "answer": "<"},
        {"part_id": "8b", "text_mk": "б)", "latex": "-25", "latex_suffix": "-27", "answer": ">"},
        {"part_id": "8c", "text_mk": "в)", "latex": "0", "latex_suffix": "-33", "answer": ">"},
        {"part_id": "8d", "text_mk": "г)", "latex": "-99", "latex_suffix": "-88", "answer": "<"},
        {"part_id": "8e", "text_mk": "д)", "latex": "-34", "latex_suffix": "-43", "answer": ">"},
        {"part_id": "8f", "text_mk": "ѓ)", "latex": "2", "latex_suffix": "-10", "answer": ">"}
      ]
    },
    {
      "id": "PROBLEM_9",
      "category": "practice",
      "topic": "1.5. ЦЕЛИ БРОЕВИ ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ",
      "problem_type": "ordering_of_integers",
      "text_mk": "Подреди ги броевите (оддели ги со запирка):",
      "parts": [
        {
          "part_id": "9a",
          "text_mk": "а) Подреди ги броевите по големина, почнувајќи од најмалиот",
          "latex_numbers": "3, -45, -6, 2, -33, -42, -7, 0",
          "answer": "-45, -42, -33, -7, -6, 0, 2, 3"
        },
        {
          "part_id": "9b",
          "text_mk": "б) Подреди ги броевите по големина, почнувајќи од најголемиот",
          "latex_numbers": "-76, -56, 45, -34, 34, -1, -23",
          "answer": "45, 34, -1, -23, -34, -56, -76"
        }
      ]
    },
    {
      "id": "PROBLEM_10",
      "category": "practice",
      "topic": "1.5. ЦЕЛИ БРОЕВИ ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ",
      "problem_type": "set_theory_drag_drop",
      "text_mk": "Пополни ги празните полиња така што да бидат точни равенствата (влечи ги картичките):",
      "drag_items": ["\\mathbb{Z}^-", "\\emptyset", "\\{0\\}", "\\mathbb{N}_0"],
      "parts": [
        {
          "part_id": "10a",
          "text_mk": "а)",
          "latex": "\\mathbb{Z} \\setminus \\mathbb{N}_0 =",
          "answer": "\\mathbb{Z}^-"
        },
        {
          "part_id": "10b",
          "text_mk": "б)",
          "latex": "\\mathbb{Z}^+ \\cap \\mathbb{Z}^- =",
          "answer": "\\emptyset"
        },
        {
          "part_id": "10c",
          "text_mk": "в)",
          "latex": "\\mathbb{Z}^+ \\cup \\mathbb{Z}^- \\cup",
          "latex_suffix": "= \\mathbb{Z}",
          "answer": "\\{0\\}"
        },
        {
          "part_id": "10d",
          "text_mk": "г)",
          "latex": "\\mathbb{Z}^+ \\cup \\{0\\} =",
          "answer": "\\mathbb{N}_0"
        }
      ]
    },
    // --- CHALLENGES ---
    {
      "id": "PROBLEM_1",
      "category": "challenge",
      "topic": "1.5. ЦЕЛИ БРОЕВИ ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ",
      "problem_type": "equation_solving",
      "text_mk": "За кој цел број х е точно:",
      "parts": [
        {
          "part_id": "1a",
          "text_mk": "а)",
          "latex": "-x = 2",
          "answer": "-2"
        },
        {
          "part_id": "1b",
          "text_mk": "б)",
          "latex": "-x = -5",
          "answer": "5"
        },
        {
          "part_id": "1c",
          "text_mk": "в)",
          "latex": "-(-x) = 6",
          "answer": "6"
        }
      ]
    },
    {
      "id": "PROBLEM_2",
      "category": "challenge",
      "topic": "1.5. ЦЕЛИ БРОЕВИ ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ",
      "problem_type": "data_analysis_and_comparison",
      "text_mk": "Во табелата се прикажани најниските и највисоките температури на воздухот, измерени во ист ден во четири различни града. Според податоците, кое од следниве тврдења е точно?",
      "answer": "2d",
      "custom_visual_data": {
        "cities": [
          { "name": "Скопје", "min": -10, "max": -1 },
          { "name": "Прилеп", "min": -11, "max": 2 },
          { "name": "Крива Паланка", "min": -19, "max": -5 },
          { "name": "Тетово", "min": -4, "max": 3 }
        ]
      },
      "options": [
        {
          "option_id": "2a",
          "text_mk": "Највисоката температура измерена во Скопје е за 5°C повисока од најниската температура измерена во Тетово."
        },
        {
          "option_id": "2b",
          "text_mk": "Најниската температура измерена во Прилеп е за 6°C повисока од највисоката температура измерена во Крива Паланка."
        },
        {
          "option_id": "2c",
          "text_mk": "Највисоката температура измерена во Тетово е за 1°C пониска од највисоката температура измерена во Прилеп."
        },
        {
          "option_id": "2d",
          "text_mk": "Најниската температура измерена во Крива Паланка е за 9°C пониска од најниската температура измерена во Скопје."
        }
      ]
    },
    {
      "id": "PROBLEM_3",
      "category": "challenge",
      "topic": "1.5. ЦЕЛИ БРОЕВИ ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ",
      "problem_type": "number_line_geometry",
      "text_mk": "Седум идентични правоаголници се поставени на бројна оска еден до друг, без празнини и преклопување, како што е прикажано на сликата. Некои од броевите што одговараат на темињата на овие правоаголници на бројната оска се (-4), (-1), (+3) и ★. Која е вредноста на ★?",
      "latex_math": "(-4), (-1), (+3), \\text{★}",
      "answer": "6",
      "svg": `<svg viewBox="0 0 500 120" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
        <line x1="20" y1="100" x2="480" y2="100" stroke="black" stroke-width="2" />
        <path d="M475 95 L480 100 L475 105" fill="none" stroke="black" stroke-width="2" />
        <path d="M25 95 L20 100 L25 105" fill="none" stroke="black" stroke-width="2" />

        <rect x="50" y="70" width="40" height="30" fill="white" stroke="#00AEEF" stroke-width="1.5" />
        <rect x="90" y="40" width="80" height="60" fill="white" stroke="#00AEEF" stroke-width="1.5" />
        <rect x="170" y="70" width="40" height="30" fill="white" stroke="#00AEEF" stroke-width="1.5" />
        <rect x="210" y="40" width="80" height="60" fill="white" stroke="#00AEEF" stroke-width="1.5" />
        <rect x="290" y="70" width="40" height="30" fill="white" stroke="#00AEEF" stroke-width="1.5" />
        <rect x="330" y="40" width="80" height="60" fill="white" stroke="#00AEEF" stroke-width="1.5" />
        <rect x="410" y="70" width="40" height="30" fill="white" stroke="#00AEEF" stroke-width="1.5" />

        <circle cx="50" cy="100" r="3" fill="black" />
        <text x="50" y="115" text-anchor="middle" font-family="sans-serif" font-weight="bold">-4</text>
        <circle cx="170" cy="100" r="3" fill="black" />
        <text x="170" y="115" text-anchor="middle" font-family="sans-serif" font-weight="bold">-1</text>
        <circle cx="330" cy="100" r="3" fill="black" />
        <text x="330" y="115" text-anchor="middle" font-family="sans-serif" font-weight="bold">+3</text>
        <circle cx="450" cy="100" r="3" fill="#E91E63" />
        <text x="450" y="115" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#E91E63">★</text>
      </svg>`
    },
    {
      "id": "PROBLEM_4",
      "category": "challenge",
      "topic": "1.5. ЦЕЛИ БРОЕВИ ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ",
      "problem_type": "inequalities",
      "text_mk": "Ако А> –3 , B>4 и C< –2, кои од следниве броеви може да бидат целите броеви А, B и C?",
      "latex_conditions": "A > -3, \\quad B > 4, \\quad C < -2",
      "answer": "4c",
      "options": [
        {"option_id": "4a", "latex": "A=-2, B=3, C=-1"},
        {"option_id": "4b", "latex": "A=-4, B=3, C=-1"},
        {"option_id": "4c", "latex": "A=-2, B=5, C=-3"},
        {"option_id": "4d", "latex": "A=-4, B=5, C=-3"}
      ]
    }
];

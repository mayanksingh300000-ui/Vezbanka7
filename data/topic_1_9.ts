
import { Problem } from '../types';

export const PROBLEMS_1_9: Problem[] = [
  // --- PRACTICE ---
  {
    "id": "SUBTRACTION_1_9_1",
    "category": "practice",
    "topic": "1.9. ОДЗЕМАЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "equation_solving",
    "text_mk": "Искористи ја бројната права за одземање на следниве цели броеви.",
    "parts": [
      {
        "part_id": "1a",
        "text_mk": "а)",
        "latex": "8 - 10",
        "answer": "-2",
        "svg": `<svg viewBox="0 0 550 80" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
           <!-- Axis Line -->
           <line x1="25" y1="40" x2="525" y2="40" stroke="black" stroke-width="2" />
           
           <!-- Ticks and Numbers -->
           <g font-family="sans-serif" font-size="14" text-anchor="middle">
             ${Array.from({length: 21}, (_, i) => i - 10).map((n) => {
               const x = 25 + (n + 10) * 25;
               const isMajor = n % 5 === 0;
               const tickHeight = isMajor ? 14 : 8;
               let el = `<line x1="${x}" y1="${40 - tickHeight/2}" x2="${x}" y2="${40 + tickHeight/2}" stroke="black" stroke-width="${isMajor ? 2 : 1}" />`;
               if (isMajor) {
                 el += `<text x="${x}" y="65">${n}</text>`;
               }
               return el;
             }).join('')}
           </g>
           
           <!-- Point at 8 -->
           <circle cx="${25 + (8 + 10) * 25}" cy="40" r="6" fill="black" />
         </svg>`
      },
      {
        "part_id": "1b",
        "text_mk": "б)",
        "latex": "7 - 9",
        "answer": "-2",
        "svg": `<svg viewBox="0 0 550 80" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
           <!-- Axis Line -->
           <line x1="25" y1="40" x2="525" y2="40" stroke="black" stroke-width="2" />
           
           <!-- Ticks and Numbers -->
           <g font-family="sans-serif" font-size="14" text-anchor="middle">
             ${Array.from({length: 21}, (_, i) => i - 10).map((n) => {
               const x = 25 + (n + 10) * 25;
               const isMajor = n % 5 === 0;
               const tickHeight = isMajor ? 14 : 8;
               let el = `<line x1="${x}" y1="${40 - tickHeight/2}" x2="${x}" y2="${40 + tickHeight/2}" stroke="black" stroke-width="${isMajor ? 2 : 1}" />`;
               if (isMajor) {
                 el += `<text x="${x}" y="65">${n}</text>`;
               }
               return el;
             }).join('')}
           </g>
           
           <!-- Point at 7 -->
           <circle cx="${25 + (7 + 10) * 25}" cy="40" r="6" fill="black" />
         </svg>`
      }
    ]
  },
  {
    "id": "SUBTRACTION_1_9_2",
    "category": "practice",
    "topic": "1.9. ОДЗЕМАЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "expression_calculation",
    "text_mk": "Пресметај без бројна права:",
    "parts": [
      {
        "part_id": "2a",
        "text_mk": "а)",
        "latex": "(+12) - (+3)",
        "answer": "9"
      },
      {
        "part_id": "2b",
        "text_mk": "б)",
        "latex": "9 - (-13)",
        "answer": "22"
      },
      {
        "part_id": "2c",
        "text_mk": "в)",
        "latex": "-11 - (+11)",
        "answer": "-22"
      },
      {
        "part_id": "2d",
        "text_mk": "г)",
        "latex": "13 - (+13)",
        "answer": "0"
      }
    ]
  },
  {
    "id": "SUBTRACTION_1_9_3",
    "category": "practice",
    "topic": "1.9. ОДЗЕМАЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "text_input",
    "text_mk": "Подморницата е 148 метри под морското ниво. Таа се издигнува за 34 метри, потоа потонува за 47 метри. Пресметај колку метри под морското ниво е подморницата.",
    "latex_math": "-148 + 34 - 47",
    "answer": "-161",
    "svg": `<svg viewBox="0 0 500 400" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
       <defs>
         <marker id="arrowRed" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
           <polygon points="0 0, 10 3.5, 0 7" fill="#d32f2f" />
         </marker>
       </defs>
       <!-- Sky -->
       <rect x="60" y="0" width="440" height="50" fill="#E1F5FE" />
       <!-- Water -->
       <rect x="60" y="50" width="440" height="350" fill="#B3E5FC" opacity="0.9" />
       <!-- Sea Level Line -->
       <line x1="60" y1="50" x2="500" y2="50" stroke="#0277BD" stroke-width="2" />
       <text x="490" y="40" text-anchor="end" font-size="12" fill="#0277BD">морско ниво</text>

       <!-- Y Axis -->
       <line x1="60" y1="20" x2="60" y2="380" stroke="black" stroke-width="2" />
       
       <!-- Ticks -->
       <!-- 0 -->
       <line x1="55" y1="50" x2="65" y2="50" stroke="black" stroke-width="2" />
       <text x="50" y="55" text-anchor="end" font-size="12">0</text>
       
       <!-- -148 (Scale approx 1.5px per meter) -> y = 50 + 148*1.5 = 272 -->
       <line x1="55" y1="272" x2="65" y2="272" stroke="black" stroke-width="2" />
       <text x="50" y="277" text-anchor="end" font-size="12" font-weight="bold">-148</text>

       <!-- Submarine at -148 -->
       <g transform="translate(250, 272)">
         <ellipse cx="0" cy="0" rx="60" ry="20" fill="#546E7A" stroke="#263238" stroke-width="2" />
         <rect x="-10" y="-30" width="20" height="15" fill="#546E7A" stroke="#263238" stroke-width="2" />
         <line x1="0" y1="-30" x2="0" y2="-45" stroke="#263238" stroke-width="3" />
         <line x1="0" y1="-45" x2="10" y2="-45" stroke="#263238" stroke-width="3" />
         <circle cx="-30" cy="0" r="4" fill="#CFD8DC" />
         <circle cx="0" cy="0" r="4" fill="#CFD8DC" />
         <circle cx="30" cy="0" r="4" fill="#CFD8DC" />
       </g>
       
       <!-- Dashed line to axis -->
       <line x1="60" y1="272" x2="190" y2="272" stroke="#455A64" stroke-dasharray="4,4" />

       <!-- Arrow +34 (Up) -->
       <!-- Position: Above sub. Length approx 50px (~34m scaled) -->
       <line x1="250" y1="230" x2="250" y2="180" stroke="#d32f2f" stroke-width="3" marker-end="url(#arrowRed)" />
       <text x="260" y="210" font-size="16" fill="#d32f2f" font-weight="bold">+ 34 m</text>
       
       <!-- Arrow -47 (Down) -->
       <!-- Position: Below sub. Length approx 70px (~47m scaled) -->
       <line x1="250" y1="310" x2="250" y2="380" stroke="#d32f2f" stroke-width="3" marker-end="url(#arrowRed)" />
       <text x="260" y="350" font-size="16" fill="#d32f2f" font-weight="bold">- 47 m</text>

    </svg>`
  },
  {
    "id": "SUBTRACTION_1_9_4",
    "category": "practice",
    "topic": "1.9. ОДЗЕМАЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "drag_drop_comparison",
    "text_mk": "Дали изразите имаат иста вредност? Повлечи го соодветниот знак (= или ≠) во празното поле.",
    "drag_items": ["=", "\\neq"],
    "parts": [
      {
        "part_id": "4a",
        "text_mk": "а)",
        "latex": "-3 - 2",
        "latex_suffix": "-3 + (+2)",
        "answer": "=" 
      },
      {
        "part_id": "4b",
        "text_mk": "б)",
        "latex": "0 - (-1)",
        "latex_suffix": "0 + 1",
        "answer": "=" 
      },
      {
        "part_id": "4c",
        "text_mk": "в)",
        "latex": "-6 - 10",
        "latex_suffix": "-15 + (-2)",
        "answer": "\\neq" 
      }
    ]
  },
  {
    "id": "SUBTRACTION_1_9_5",
    "category": "practice",
    "topic": "1.9. ОДЗЕМАЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "multiple_choice",
    "text_mk": "Во која од понудените опции, разликата на броевите напишани во круговите (првиот минус вториот) е најмала?",
    "note_mk": "Разликата (a-b) може да биде негативна.",
    "svg": `<svg viewBox="0 0 700 120" class="w-full max-w-4xl mx-auto" xmlns="http://www.w3.org/2000/svg">
       <style>
         .circle-group { font-family: sans-serif; }
         .option-label { font-weight: bold; font-size: 16px; }
         .num-circle { fill: #cfd8dc; stroke: #37474f; stroke-width: 2px; }
         .num-text { font-size: 20px; font-weight: bold; text-anchor: middle; dominant-baseline: middle; fill: black; }
       </style>
       
       <!-- Option A -->
       <g transform="translate(20, 30)" class="circle-group">
         <text x="0" y="30" class="option-label">а)</text>
         <g transform="translate(40, 30)">
            <circle cx="0" cy="0" r="22" class="num-circle" />
            <text x="0" y="2" class="num-text">-2</text>
         </g>
         <g transform="translate(90, 30)">
            <circle cx="0" cy="0" r="22" class="num-circle" />
            <text x="0" y="2" class="num-text">7</text>
         </g>
       </g>

       <!-- Option B -->
       <g transform="translate(190, 30)" class="circle-group">
         <text x="0" y="30" class="option-label">б)</text>
         <g transform="translate(40, 30)">
            <circle cx="0" cy="0" r="22" class="num-circle" />
            <text x="0" y="2" class="num-text">-5</text>
         </g>
         <g transform="translate(90, 30)">
            <circle cx="0" cy="0" r="22" class="num-circle" />
            <text x="0" y="2" class="num-text">-9</text>
         </g>
       </g>

       <!-- Option V -->
       <g transform="translate(360, 30)" class="circle-group">
         <text x="0" y="30" class="option-label">в)</text>
         <g transform="translate(40, 30)">
            <circle cx="0" cy="0" r="22" class="num-circle" />
            <text x="0" y="2" class="num-text">12</text>
         </g>
         <g transform="translate(90, 30)">
            <circle cx="0" cy="0" r="22" class="num-circle" />
            <text x="0" y="2" class="num-text">-6</text>
         </g>
       </g>
       
       <!-- Option G -->
       <g transform="translate(530, 30)" class="circle-group">
         <text x="0" y="30" class="option-label">г)</text>
         <g transform="translate(40, 30)">
            <circle cx="0" cy="0" r="22" class="num-circle" />
            <text x="0" y="2" class="num-text">0</text>
         </g>
         <g transform="translate(90, 30)">
            <circle cx="0" cy="0" r="22" class="num-circle" />
            <text x="0" y="2" class="num-text">-8</text>
         </g>
       </g>
    </svg>`,
    "options": [
      {
        "option_id": "a",
        "text_mk": "Опција под а)"
      },
      {
        "option_id": "b",
        "text_mk": "Опција под б)"
      },
      {
        "option_id": "c",
        "text_mk": "Опција под в)"
      },
      {
        "option_id": "d",
        "text_mk": "Опција под г)"
      }
    ],
    "answer": "a"
  },

  // --- CHALLENGES ---

  {
    "id": "CHALLENGE_1_9_1",
    "category": "challenge",
    "topic": "1.9. ОДЗЕМАЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "equation_solving",
    "text_mk": "За која вредност на х изразот (х+6)–11 има вредност –20?",
    "answer": "-15"
  },
  {
    "id": "CHALLENGE_1_9_2",
    "category": "challenge",
    "topic": "1.9. ОДЗЕМАЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "text_input",
    "text_mk": "Секоја недела Лина добива џепарлак врз основа на нејзината возраст и колку задачи завршила таа недела. Џепарлакот се состои од 1$ за секоја година од нејзината возраст, 2$ за секоја задача што ја завршила во текот на неделата и се намалува за 4$ за секоја задача што заборавила да ја заврши. Лина има 11 години, завршила 4 задачи во текот на неделата, но заборавила да заврши една задача.\n\n**Колкав ќе биде нејзиниот џепарлак таа недела?**",
    "answer": "15"
  },
  {
    "id": "CHALLENGE_1_9_3",
    "category": "challenge",
    "topic": "1.9. ОДЗЕМАЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "equation_solving",
    "text_mk": "Одреди го множеството решенија на равенката (запиши ги во множество, пр. {1, 2}):",
    "parts": [
      {
        "part_id": "P3a",
        "text_mk": "а)",
        "latex": "|x| = 6",
        "answer": "{-6, 6}"
      },
      {
        "part_id": "P3b",
        "text_mk": "б)",
        "latex": "|x - 5| = 3",
        "answer": "{2, 8}"
      }
    ]
  },
  {
    "id": "CHALLENGE_1_9_4",
    "category": "challenge",
    "topic": "1.9. ОДЗЕМАЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "expression_calculation",
    "text_mk": "Прочитај го овој извештај на приватниот детектив кој од 8 часот наутро до 8 часот навечер скришно го следел ресторанот:\n\n🕗 **11:00** ⮕ влегле 6 луѓе\n🕛 **12:00** ⮕ влегле уште 7 луѓе\n🕐 **13:00** ⮕ излегле 9 луѓе\n🕑 **14:00** ⮕ влегла група од 8 луѓе\n🕒 **15:00** ⮕ излегле 7 луѓе\n🕓 **16:00** ⮕ влегле 5 луѓе\n🕔 **17:00** ⮕ излегле 10 луѓе",
    "svg": `<svg viewBox="0 0 500 250" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="brick" x="0" y="0" width="20" height="10" patternUnits="userSpaceOnUse">
          <rect width="18" height="8" fill="#e57373" stroke="#b71c1c" stroke-width="1" />
        </pattern>
      </defs>
      
      <!-- Pavement -->
      <rect x="0" y="220" width="500" height="30" fill="#90a4ae" />
      
      <!-- Building -->
      <rect x="100" y="40" width="300" height="180" fill="url(#brick)" stroke="#3e2723" stroke-width="2" />
      <rect x="100" y="40" width="300" height="20" fill="#3e2723" />
      
      <!-- Roof Decor -->
      <path d="M90 40 L100 20 L400 20 L410 40 Z" fill="#5d4037" />
      
      <!-- Sign -->
      <rect x="180" y="60" width="140" height="30" fill="#fff9c4" stroke="#fbc02d" stroke-width="2" rx="5" />
      <text x="250" y="82" text-anchor="middle" font-family="serif" font-weight="bold" font-size="18" fill="#d84315">РЕСТОРАН</text>
      
      <!-- Door -->
      <rect x="220" y="130" width="60" height="90" fill="#8d6e63" stroke="#3e2723" stroke-width="2" />
      <rect x="225" y="135" width="20" height="35" fill="#d7ccc8" opacity="0.7" /> <!-- Glass L -->
      <rect x="255" y="135" width="20" height="35" fill="#d7ccc8" opacity="0.7" /> <!-- Glass R -->
      <circle cx="275" cy="180" r="3" fill="#ffeb3b" /> <!-- Handle -->
      
      <!-- Windows -->
      <rect x="130" y="130" width="50" height="50" fill="#b3e5fc" stroke="#0277bd" stroke-width="2" />
      <line x1="155" y1="130" x2="155" y2="180" stroke="#0277bd" stroke-width="2" />
      <line x1="130" y1="155" x2="180" y2="155" stroke="#0277bd" stroke-width="2" />
      
      <rect x="320" y="130" width="50" height="50" fill="#b3e5fc" stroke="#0277bd" stroke-width="2" />
      <line x1="345" y1="130" x2="345" y2="180" stroke="#0277bd" stroke-width="2" />
      <line x1="320" y1="155" x2="370" y2="155" stroke="#0277bd" stroke-width="2" />

      <!-- People Icons -->
      <g transform="translate(180, 200)">
         <circle cx="0" cy="0" r="5" fill="#4caf50" />
         <path d="M-5 5 L5 5 L0 12 Z" fill="#4caf50" />
         <text x="0" y="25" text-anchor="middle" font-size="10" font-weight="bold" fill="#4caf50">ВЛЕЗ</text>
         <path d="M10 5 L18 5 L14 0 Z" fill="#4caf50" transform="rotate(90 14 2.5)" />
      </g>
      
      <g transform="translate(320, 200)">
         <circle cx="0" cy="0" r="5" fill="#f44336" />
         <path d="M-5 5 L5 5 L0 12 Z" fill="#f44336" />
         <text x="0" y="25" text-anchor="middle" font-size="10" font-weight="bold" fill="#f44336">ИЗЛЕЗ</text>
         <path d="M10 5 L18 5 L14 0 Z" fill="#f44336" transform="rotate(-90 14 2.5)" />
      </g>

    </svg>`,
    "parts": [
      {
        "part_id": "P4a",
        "text_mk": "а) Колку луѓе останале во ресторанот по 20 часот (претпостави дека бил празен на почетокот)?",
        "answer": "0"
      },
      {
        "part_id": "P4b",
        "text_mk": "б) Што можеш да заклучиш за бројот на влезени vs излезени луѓе? (Ова е прашање за размислување.)",
        "answer": "Ист број" 
      }
    ]
  }
];

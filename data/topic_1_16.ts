
import { Problem } from '../types';

export const PROBLEMS_1_16: Problem[] = [
  // --- PRACTICE ---
  {
    "id": "DECIMAL_1_16_1",
    "category": "practice",
    "topic": "1.16. ДЕЦИМАЛНИ БРОЕВИ, ПЕРИОДИЧНИ ДЕЦИМАЛНИ БРОЕВИ",
    "problem_type": "text_input",
    "text_mk": "Во речениците подолу се дадени различни записи на броеви. Поврзи ги соодветните парови (децимален број со дропка) за да го откриеш натрапникот.",
    "parts": [
        {
            "part_id": "1a",
            "text_mk": "а) Температурата е 27,72 °C. Која дропка одговара?",
            "answer": "305/11" 
        },
        {
            "part_id": "1b",
            "text_mk": "б) Тежината е 10,9 kg. Која дропка одговара?",
            "answer": "109/10"
        },
        {
            "part_id": "1c",
            "text_mk": "в) Потрошени се 15,25 L вода. Која дропка одговара?",
            "answer": "61/4"
        },
        {
            "part_id": "1d",
            "text_mk": "г) Цената е 3,75 денари. Која дропка одговара?",
            "answer": "15/4"
        },
        {
            "part_id": "1e",
            "text_mk": "д) Кој број од листата (305/11, 109/10, 61/4, 15/4, 3,375) остана како натрапник?",
            "answer": "3,375"
        }
    ]
  },
  {
    "id": "DECIMAL_1_16_2",
    "category": "practice",
    "topic": "1.16. ДЕЦИМАЛНИ БРОЕВИ, ПЕРИОДИЧНИ ДЕЦИМАЛНИ БРОЕВИ",
    "problem_type": "multiple_choice",
    "text_mk": "Децималниот број $63,*$ заокружен на единици е 64. Која вредност може да стои на местото на * (ѕвездичката)?",
    "options": [
      { "option_id": "a", "text_mk": "439" },
      { "option_id": "b", "text_mk": "389" },
      { "option_id": "c", "text_mk": "53" }, // 63.53 -> 64
      { "option_id": "d", "text_mk": "43" }
    ],
    "answer": "c"
  },
  {
    "id": "DECIMAL_1_16_3",
    "category": "practice",
    "topic": "1.16. ДЕЦИМАЛНИ БРОЕВИ, ПЕРИОДИЧНИ ДЕЦИМАЛНИ БРОЕВИ",
    "problem_type": "multiple_choice",
    "text_mk": "Ако $104,8*$ заокружено на десетинки е $104,9$, колкав е збирот на сите можни цифри што може да стојат на местото на *?",
    "note_mk": "Можни цифри се 5, 6, 7, 8, 9.",
    "options": [
      { "option_id": "a", "text_mk": "35" },
      { "option_id": "b", "text_mk": "30" },
      { "option_id": "c", "text_mk": "26" },
      { "option_id": "d", "text_mk": "15" }
    ],
    "answer": "a"
  },
  {
    "id": "DECIMAL_1_16_4",
    "category": "practice",
    "topic": "1.16. ДЕЦИМАЛНИ БРОЕВИ, ПЕРИОДИЧНИ ДЕЦИМАЛНИ БРОЕВИ",
    "problem_type": "multiple_choice",
    "text_mk": "Уличните светилки на една улица се поставени на еднакво растојание од **7,9 m**. Која е најблиската проценка за растојанието помеѓу автомобилите прикажани на сликата?",
    "svg": `<svg viewBox="0 0 600 200" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
       <!-- Pavement -->
       <rect x="0" y="150" width="600" height="50" fill="#9E9E9E" />
       <line x1="0" y1="150" x2="600" y2="150" stroke="#616161" stroke-width="2" />

       <!-- Lamp 1 -->
       <g transform="translate(100, 150)">
          <line x1="0" y1="0" x2="0" y2="-100" stroke="#424242" stroke-width="4" />
          <circle cx="0" cy="-100" r="10" fill="#FFEB3B" stroke="#FBC02D" />
       </g>

       <!-- Lamp 2 -->
       <g transform="translate(300, 150)">
          <line x1="0" y1="0" x2="0" y2="-100" stroke="#424242" stroke-width="4" />
          <circle cx="0" cy="-100" r="10" fill="#FFEB3B" stroke="#FBC02D" />
       </g>

       <!-- Lamp 3 -->
       <g transform="translate(500, 150)">
          <line x1="0" y1="0" x2="0" y2="-100" stroke="#424242" stroke-width="4" />
          <circle cx="0" cy="-100" r="10" fill="#FFEB3B" stroke="#FBC02D" />
       </g>

       <!-- Distance Indicators -->
       <line x1="100" y1="40" x2="300" y2="40" stroke="#666" stroke-width="1" marker-start="url(#arrow)" marker-end="url(#arrow)" />
       <text x="200" y="35" text-anchor="middle" font-size="12" fill="#666">7,9 m</text>

       <line x1="300" y1="40" x2="500" y2="40" stroke="#666" stroke-width="1" marker-start="url(#arrow)" marker-end="url(#arrow)" />
       <text x="400" y="35" text-anchor="middle" font-size="12" fill="#666">7,9 m</text>

       <!-- Car 1 (Left) -->
       <g transform="translate(80, 130)">
          <path d="M0 20 L60 20 L60 10 L45 0 L10 0 L0 10 Z" fill="#F44336" />
          <circle cx="15" cy="20" r="6" fill="#333" />
          <circle cx="45" cy="20" r="6" fill="#333" />
       </g>

       <!-- Car 2 (Right) -->
       <g transform="translate(480, 130)">
          <path d="M0 20 L60 20 L60 10 L45 0 L10 0 L0 10 Z" fill="#2196F3" />
          <circle cx="15" cy="20" r="6" fill="#333" />
          <circle cx="45" cy="20" r="6" fill="#333" />
       </g>

       <defs>
          <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
             <path d="M0,0 L10,5 L0,10" fill="none" stroke="#666" stroke-width="1" />
          </marker>
       </defs>
    </svg>`,
    "options": [
      { "option_id": "a", "text_mk": "8 m" },
      { "option_id": "b", "text_mk": "12 m" },
      { "option_id": "c", "text_mk": "16 m" },
      { "option_id": "d", "text_mk": "20 m" }
    ],
    "answer": "c"
  },

  // --- CHALLENGES ---

  {
    "id": "CHALLENGE_1_16_1",
    "category": "challenge",
    "topic": "1.16. ДЕЦИМАЛНИ БРОЕВИ, ПЕРИОДИЧНИ ДЕЦИМАЛНИ БРОЕВИ",
    "problem_type": "text_input",
    "text_mk": "Во теглата има топчиња со цифри од 0 до 9. Играчите извлекуваат по 3 топчиња и ги враќаат назад. Ако првото топче е **A**, второто **B** и третото **C**, се формира децимален број **A,BC**. Пополни ја табелата со децималниот запис и соодветниот рационален број (дропка).",
    "svg": `<svg viewBox="0 0 200 250" class="w-full max-w-[200px] mx-auto mb-4" xmlns="http://www.w3.org/2000/svg">
       <!-- Jar Body -->
       <path d="M50 20 L150 20 L160 50 L160 220 Q160 240 100 240 Q40 240 40 220 L40 50 Z" fill="#E0F7FA" stroke="#00BCD4" stroke-width="2" opacity="0.8" />
       <!-- Lid -->
       <rect x="45" y="5" width="110" height="20" rx="3" fill="#B0BEC5" stroke="#78909C" />
       
       <!-- Balls -->
       <g font-family="sans-serif" font-weight="bold" font-size="14" text-anchor="middle">
          <circle cx="80" cy="200" r="12" fill="#FFCDD2" stroke="#E57373" /><text x="80" y="205">2</text>
          <circle cx="120" cy="200" r="12" fill="#C8E6C9" stroke="#81C784" /><text x="120" y="205">5</text>
          <circle cx="100" cy="170" r="12" fill="#BBDEFB" stroke="#64B5F6" /><text x="100" y="175">8</text>
          <circle cx="60" cy="150" r="12" fill="#FFF9C4" stroke="#FFF176" /><text x="60" y="155">0</text>
          <circle cx="140" cy="150" r="12" fill="#E1BEE7" stroke="#BA68C8" /><text x="140" y="155">9</text>
          <circle cx="90" cy="120" r="12" fill="#FFE0B2" stroke="#FFB74D" /><text x="90" y="125">1</text>
          <circle cx="130" cy="100" r="12" fill="#B2DFDB" stroke="#4DB6AC" /><text x="130" y="105">3</text>
       </g>
    </svg>`,
    "custom_visual_data": {
       "type": "interactive_table",
       "headers": ["Име", "Топчиња", "Децимален", "Дропка"],
       "rows": [
          [
             { value: "Ана" }, { value: "2, 5, 8" }, 
             { id: "P1a_dec", answer: "2,58" }, 
             { id: "P1a_frac", answer: "129/50" }
          ],
          [
             { value: "Нермин" }, { value: "0, 0, 9" }, 
             { id: "P1b_dec", answer: "0,09" }, 
             { id: "P1b_frac", answer: "9/100" }
          ],
          [
             { value: "Борис" }, { value: "5, 2, 5" }, 
             { id: "P1c_dec", answer: "5,25" }, 
             { id: "P1c_frac", answer: "21/4" }
          ],
          [
             { value: "Кети" }, { value: "1, 0, 3" }, 
             { id: "P1d_dec", answer: "1,03" }, 
             { id: "P1d_frac", answer: "103/100" }
          ]
       ]
    }
  },
  {
    "id": "CHALLENGE_1_16_2",
    "category": "challenge",
    "topic": "1.16. ДЕЦИМАЛНИ БРОЕВИ, ПЕРИОДИЧНИ ДЕЦИМАЛНИ БРОЕВИ",
    "problem_type": "text_input",
    "text_mk": "Ана и пријателите планираат тридневна тура. Должините на патеките се: **Ден 1: 5 km**, **Ден 2: 8,65 km**, **Ден 3: 8,55 km**. Вкупното време на движење е **7,25 часа**.",
    "parts": [
      {
        "part_id": "P2a",
        "text_mk": "а) Подреди ги патеките според должината (на пр. Ден 1, Ден 2, Ден 3):",
        "answer": "Ден 1, Ден 3, Ден 2" // 5 < 8.55 < 8.65
      },
      {
        "part_id": "P2b",
        "text_mk": "б) Која е просечната брзина (km/h)? Заокружи на две децимали.",
        "answer": "3,06" // 22.2 / 7.25 = 3.062...
      },
      {
        "part_id": "P2c",
        "text_mk": "в) Дали е исполнет условот за брзина од најмалку 3,5 km/h? (Да/Не)",
        "answer": "Не"
      }
    ]
  }
];

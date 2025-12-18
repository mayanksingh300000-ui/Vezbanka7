
import { Problem } from '../types';

export const PROBLEMS_1_16: Problem[] = [
  // --- PRACTICE ---
  {
    "id": "DECIMAL_1_16_1",
    "category": "practice",
    "topic": "1.16. ДЕЦИМАЛНИ БРОЕВИ, ПЕРИОДИЧНИ ДЕЦИМАЛНИ БРОЕВИ",
    "problem_type": "fill_in_the_blanks",
    "text_mk": "Во речениците подолу, различните начини на запишување на броевите се дадени измешано. Еден од броевите е натрапник!\n\n**Повлечи ги картичките (броевите) во соодветните полиња за да ги поврзеш паровите.**",
    "drag_items": ["$\\frac{61}{4}$", "$3,375$", "$3,75$", "$\\frac{305}{25}$", "$\\frac{109}{10}$"],
    "parts": [
        {
            "part_id": "1a",
            "text_mk": "Денес температурата на воздухот е $\\frac{27}{8}$ °C. Ова е исто што и: {{}}",
            "answer": "3,375"
        },
        {
            "part_id": "1b",
            "text_mk": "Тежината на Емил е $10,9$ kg. Ова е исто што и: {{}}",
            "answer": "\\frac{109}{10}"
        },
        {
            "part_id": "1c",
            "text_mk": "Елена потроши $15,25$ L вода за да ги наводнува овошките. Ова е исто што и: {{}}",
            "answer": "\\frac{61}{4}"
        },
        {
            "part_id": "1d",
            "text_mk": "Во маркетот, еден килограм јаболка чини $\\frac{15}{4}$ ден. Ова е исто што и: {{}}",
            "answer": "3,75"
        },
        {
            "part_id": "1e",
            "text_mk": "Преостанатиот број (натрапникот) е: {{}}",
            "answer": "\\frac{305}{25}"
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
    "text_mk": "Уличните светилки на една улица се поставени на еднакво растојание. Растојанието помеѓу две соседни светилки е 7,9 m. Која е најблиската проценка за растојанието помеѓу автомобилите прикажани на сликата?",
    "svg": `<svg viewBox="0 0 800 300" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
          <path d="M0,0 L10,5 L0,10" fill="none" stroke="black" stroke-width="2" />
        </marker>
      </defs>
      <rect width="100%" height="100%" fill="white" />
      
      <!-- Ground -->
      <line x1="50" y1="200" x2="750" y2="200" stroke="black" stroke-width="2" />

      <!-- Poles (Distance 150px) -->
      <!-- Pole 1 at x=100 -->
      <path d="M100 200 L100 50 Q100 20 150 30" fill="none" stroke="black" stroke-width="2" />
      <path d="M150 30 L170 40 L150 50 L130 40 Z" fill="white" stroke="black" stroke-width="2" />

      <!-- Pole 2 at x=250 -->
      <path d="M250 200 L250 50 Q250 20 300 30" fill="none" stroke="black" stroke-width="2" />
      <path d="M300 30 L320 40 L300 50 L280 40 Z" fill="white" stroke="black" stroke-width="2" />

      <!-- Pole 3 at x=400 -->
      <path d="M400 200 L400 50 Q400 20 450 30" fill="none" stroke="black" stroke-width="2" />
      <path d="M450 30 L470 40 L450 50 L430 40 Z" fill="white" stroke="black" stroke-width="2" />

      <!-- Pole 4 at x=550 -->
      <path d="M550 200 L550 50 Q550 20 600 30" fill="none" stroke="black" stroke-width="2" />
      <path d="M600 30 L620 40 L600 50 L580 40 Z" fill="white" stroke="black" stroke-width="2" />

      <!-- Pole 5 at x=700 -->
      <path d="M700 200 L700 50 Q700 20 750 30" fill="none" stroke="black" stroke-width="2" />
      <path d="M750 30 L770 40 L750 50 L730 40 Z" fill="white" stroke="black" stroke-width="2" />

      <!-- CARS -->
      <g transform="translate(250, 185)">
         <path d="M0 15 L70 15 L70 10 L55 0 L15 0 L0 10 Z" fill="#90A4AE" stroke="black" stroke-width="1.5"/>
         <circle cx="15" cy="15" r="6" fill="#333" />
         <circle cx="55" cy="15" r="6" fill="#333" />
      </g>
      <!-- Reference line for Left Car End (Rear) - Pole 2 -->
      <line x1="250" y1="200" x2="250" y2="230" stroke="black" stroke-dasharray="4,4" />

      <!-- Right Car: End (Rear) is middle between Pole 4 (550) and Pole 5 (700). Midpoint = 625. -->
      <g transform="translate(625, 185)">
         <path d="M0 15 L70 15 L70 10 L55 0 L15 0 L0 10 Z" fill="#90A4AE" stroke="black" stroke-width="1.5"/>
         <circle cx="15" cy="15" r="6" fill="#333" />
         <circle cx="55" cy="15" r="6" fill="#333" />
      </g>
      <!-- Reference line for Right Car End (Rear) - Midpoint 4-5 -->
      <line x1="625" y1="200" x2="625" y2="230" stroke="black" stroke-dasharray="4,4" />

      <!-- DIMENSION LINE -->
      <line x1="320" y1="200" x2="320" y2="230" stroke="black" stroke-dasharray="4,4" />
      
      <line x1="320" y1="225" x2="625" y2="225" stroke="black" stroke-width="2" stroke-dasharray="6,4" marker-start="url(#arrow)" marker-end="url(#arrow)" />
      
      <text x="472" y="250" text-anchor="middle" font-size="24" font-weight="bold">?</text>

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
    "text_mk": "Во теглата има десет еднакви топчиња на кои се напишани цифри. Внимателно разгледај ги правилата на играта (на картичките) и пополни ја табелата подолу.",
    "note_mk": "Рационалниот број (дропката) задолжително запиши го во нескратлива форма!",
    "svg": `<svg viewBox="0 0 250 300" class="w-full max-w-[250px] mx-auto mb-4" xmlns="http://www.w3.org/2000/svg">
       <defs>
         <radialGradient id="ballGrad" cx="30%" cy="30%" r="70%">
            <stop offset="0%" style="stop-color:#4FC3F7;stop-opacity:1" />
            <stop offset="100%" style="stop-color:#0288D1;stop-opacity:1" />
         </radialGradient>
       </defs>
       
       <!-- Jar Body -->
       <path d="M50 40 L200 40 L210 70 L210 250 Q210 280 125 280 Q40 280 40 250 L40 70 Z" fill="#E1F5FE" stroke="#B0BEC5" stroke-width="2" opacity="0.9" />
       
       <!-- Lid (Red) -->
       <rect x="45" y="15" width="160" height="25" rx="5" fill="#D32F2F" stroke="#B71C1C" />
       <rect x="50" y="35" width="150" height="10" fill="#B71C1C" />

       <!-- Balls -->
       <g font-family="sans-serif" font-weight="bold" font-size="18" text-anchor="middle" fill="white">
          <!-- 5 --> <circle cx="125" cy="100" r="20" fill="url(#ballGrad)" stroke="#01579B"/><text x="125" y="106">5</text>
          
          <!-- 1 --> <circle cx="80" cy="140" r="20" fill="url(#ballGrad)" stroke="#01579B"/><text x="80" y="146">1</text>
          <!-- 9 --> <circle cx="125" cy="140" r="20" fill="url(#ballGrad)" stroke="#01579B"/><text x="125" y="146">9</text>
          <!-- 7 --> <circle cx="170" cy="140" r="20" fill="url(#ballGrad)" stroke="#01579B"/><text x="170" y="146">7</text>

          <!-- 0 --> <circle cx="60" cy="180" r="20" fill="url(#ballGrad)" stroke="#01579B"/><text x="60" y="186">0</text>
          <!-- 6 --> <circle cx="105" cy="180" r="20" fill="url(#ballGrad)" stroke="#01579B"/><text x="105" y="186">6</text>
          <!-- 4 --> <circle cx="150" cy="180" r="20" fill="url(#ballGrad)" stroke="#01579B"/><text x="150" y="186">4</text>

          <!-- 8 --> <circle cx="80" cy="220" r="20" fill="url(#ballGrad)" stroke="#01579B"/><text x="80" y="226">8</text>
          <!-- 3 --> <circle cx="125" cy="220" r="20" fill="url(#ballGrad)" stroke="#01579B"/><text x="125" y="226">3</text>
          <!-- 2 --> <circle cx="170" cy="220" r="20" fill="url(#ballGrad)" stroke="#01579B"/><text x="170" y="226">2</text>
       </g>
    </svg>`,
    "custom_visual_data": {
       "type": "interactive_table",
       "rules": [
         "Од теглата ќе се извлечат 3 топчиња.",
         "Секое извлечено топче се враќа назад во теглата.",
         "Ако првото топче е $\\textcolor{red}{\\triangle}$, второто $\\textcolor{#eab308}{\\square}$ и третото $\\textcolor{green}{\\heartsuit}$, се формира децимален број $\\textcolor{#eab308}{\\square},\\textcolor{red}{\\triangle}\\textcolor{green}{\\heartsuit}$."
       ],
       "headers": ["Име", "Прво топче", "Второ топче", "Трето топче", "Децимален запис", "Рационален број"],
       "rows": [
          [
             { value: "Ана" }, { value: "2" }, { value: "5" }, { value: "8" },
             { id: "P1a_dec", answer: "5,28" }, 
             { id: "P1a_frac", answer: "132/25", type: "fraction" }
          ],
          [
             { value: "Нермин" }, { value: "0" }, { value: "0" }, { value: "9" },
             { id: "P1b_dec", answer: "0,09" }, 
             { id: "P1b_frac", answer: "9/100", type: "fraction" }
          ],
          [
             { value: "Борис" }, { value: "5" }, { value: "2" }, { value: "5" },
             { id: "P1c_dec", answer: "2,55" }, 
             { id: "P1c_frac", answer: "51/20", type: "fraction" }
          ],
          [
             { value: "Кети" }, { value: "1" }, { value: "0" }, { value: "3" },
             { id: "P1d_dec", answer: "0,13" }, 
             { id: "P1d_frac", answer: "13/100", type: "fraction" }
          ]
       ]
    }
  },
  {
    "id": "CHALLENGE_1_16_2",
    "category": "challenge",
    "topic": "1.16. ДЕЦИМАЛНИ БРОЕВИ, ПЕРИОДИЧНИ ДЕЦИМАЛНИ БРОЕВИ",
    "problem_type": "fill_in_the_blanks",
    "text_mk": "Ана и нејзините пријатели планираат тридневна планинска тура. Тие имаат карта со три различни патеки кои треба да ги поминат, по една за секој ден. За да се подготват добро, треба да направат неколку пресметки.",
    "drag_items": ["Ден 1", "Ден 2", "Ден 3"],
    "custom_visual_data": {
      "type": "info_cards",
      "cards": [
        { "title": "Ден 1", "subtitle": "Патека „Орлов Поглед“", "value": "8 \\frac{3}{4} \\text{ km}", "icon": "🦅" },
        { "title": "Ден 2", "subtitle": "Патека „Езерски Срт“", "value": "8650 \\text{ m}", "icon": "🌊" },
        { "title": "Ден 3", "subtitle": "Патека „Волчји Врв“", "value": "8,55 \\text{ km}", "icon": "🐺" }
      ],
      "extra_info": "Вкупното време на активно пешачење за целата тура е 7 часа и 15 минути."
    },
    "parts": [
      {
        "part_id": "P2a",
        "text_mk": "а) **Кој ден е најпредизвикувачки?** \nПодреди ги патеките според должината (од најкратка кон најдолга). Влечи ги имињата на деновите: \n {{}} < {{}} < {{}}",
        "answer": "Ден 3, Ден 2, Ден 1" // 8.55 < 8.65 < 8.75
      },
      {
        "part_id": "P2b",
        "text_mk": "б) **Која е просечната брзина?** \nКористи ја формулата: $v = \\frac{\\text{Вкупно растојание (km)}}{\\text{Вкупно време (h)}}$. \nБрзината е: {{}} km/h (заокружи на 2 децимали).",
        "answer": "3,58"
      },
      {
        "part_id": "P2c",
        "text_mk": "в) Водичот препорачува брзина од најмалку **3,5 km/h**. Врз основа на твојата пресметка, дали групата го исполнува условот? (Одговори со **Да** или **Не**): {{}}",
        "answer": "Да"
      }
    ]
  }
];


import { Problem } from '../types';

export const PROBLEMS_1_8: Problem[] = [
  // --- PRACTICE ---
  {
    "id": "PROPERTIES_1_8_1",
    "category": "practice",
    "topic": "1.8. СВОЈСТВА НА СОБИРАЊЕТО ЦЕЛИ БРОЕВИ",
    "problem_type": "expression_calculation",
    "text_mk": "Внеси го бројот кој недостига и пресметај ја вредноста на изразот (оддели ги со запирка, на пр. -5, 10):",
    "parts": [
      {
        "part_id": "1a",
        "text_mk": "а)",
        "latex_numbers": "(-38) + (-42) = (-42) + \\underline{\\hspace{1.5cm}} = \\underline{\\hspace{1.5cm}}",
        "answer": "-38, -80" 
      },
      {
        "part_id": "1b",
        "text_mk": "б)",
        "latex_numbers": "(-7 + 3) + 13 = -7 + ( \\underline{\\hspace{1.5cm}} + 13) = \\underline{\\hspace{1.5cm}}",
        "answer": "3, 9"
      }
    ]
  },
  {
    "id": "PROPERTIES_1_8_2",
    "category": "practice",
    "topic": "1.8. СВОЈСТВА НА СОБИРАЊЕТО ЦЕЛИ БРОЕВИ",
    "problem_type": "expression_calculation",
    "text_mk": "Пресметај ја вредноста на секој од изразите:",
    "parts": [
      {
        "part_id": "2a",
        "text_mk": "а)",
        "latex": "-5 + (-2) + (-7)",
        "answer": "-14" 
      },
      {
        "part_id": "2b",
        "text_mk": "б)",
        "latex": "(-9) - 2 - (-8)",
        "answer": "-3" 
      },
      {
        "part_id": "2c",
        "text_mk": "в)",
        "latex": "-(-5) - (-2) - (-10)",
        "answer": "17" 
      },
      {
        "part_id": "2d",
        "text_mk": "д)",
        "latex": "[(-13) - (+9)] - [(-7) + (-4)]",
        "answer": "-11" 
      },
      {
        "part_id": "2e",
        "text_mk": "ѓ)",
        "latex": "2003 - 5 - 1999 + 2",
        "answer": "1" 
      },
      {
        "part_id": "2f",
        "text_mk": "е)",
        "latex": "-8 - (-3) + (-2) + (+4)",
        "answer": "-3" 
      }
    ]
  },
  {
    "id": "PROPERTIES_1_8_3",
    "category": "practice",
    "topic": "1.8. СВОЈСТВА НА СОБИРАЊЕТО ЦЕЛИ БРОЕВИ",
    "problem_type": "text_input",
    "text_mk": "Во еден квиз, за секој точен одговор се добиваат +3 поени, а за секој неточен одговор се одземаат –2 поени. Ана учествувала на квизот и одговорила на сите 5 прашања. На крајот, Ана освоила 10 поени.\n\n**Според тоа, на колку прашања Ана одговорила точно?**",
    "answer": "4" 
  },
  {
    "id": "PROPERTIES_1_8_4",
    "category": "practice",
    "topic": "1.8. СВОЈСТВА НА СОБИРАЊЕТО ЦЕЛИ БРОЕВИ",
    "problem_type": "expression_calculation",
    "text_mk": "Пресметај и пополни ја табелата за дадените вредности на $a$ и $b$:",
    "custom_visual_data": {
       "type": "interactive_table",
       "headers": ["a", "b", "a+b", "-(a+b)", "-a", "-b", "(-a)+(-b)"],
       "rows": [
          // Row 1
          [
             { value: "8" }, { value: "3" }, 
             { id: "r1c3", answer: "11" }, 
             { id: "r1c4", answer: "-11" }, 
             { id: "r1c5", answer: "-8" }, 
             { id: "r1c6", answer: "-3" }, 
             { id: "r1c7", answer: "-11" }
          ],
          // Row 2
          [
             { value: "-8" }, { value: "-3" }, 
             { id: "r2c3", answer: "-11" }, 
             { id: "r2c4", answer: "11" }, 
             { id: "r2c5", answer: "8" }, 
             { id: "r2c6", answer: "3" }, 
             { id: "r2c7", answer: "11" }
          ],
          // Row 3
          [
             { value: "-8" }, { value: "3" }, 
             { id: "r3c3", answer: "-5" }, 
             { id: "r3c4", answer: "5" }, 
             { id: "r3c5", answer: "8" }, 
             { id: "r3c6", answer: "-3" }, 
             { id: "r3c7", answer: "5" }
          ],
          // Row 4
          [
             { value: "8" }, { value: "-3" }, 
             { id: "r4c3", answer: "5" }, 
             { id: "r4c4", answer: "-5" }, 
             { id: "r4c5", answer: "-8" }, 
             { id: "r4c6", answer: "3" }, 
             { id: "r4c7", answer: "-5" }
          ]
       ]
    }
  },
  {
    "id": "PROPERTIES_1_8_5",
    "category": "practice",
    "topic": "1.8. СВОЈСТВА НА СОБИРАЊЕТО ЦЕЛИ БРОЕВИ",
    "problem_type": "text_input",
    "text_mk": "Авионот на сликата се наоѓа на висина од 8 537 метри над нивото на морето, додека подморницата се наоѓа 248 метри под нивото на морето.\n\n**Според тоа, колку метри има меѓу авионот и подморницата?**",
    "answer": "8785",
    "svg": `<svg viewBox="0 0 400 300" class="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
       <!-- Sky -->
       <rect width="400" height="150" fill="#E0F7FA" />
       <!-- Cloud -->
       <path d="M50 40 Q70 20 90 40 Q110 30 130 50 Q110 70 90 60 Q70 70 50 50 Q30 60 10 40 Q30 20 50 40" fill="white" opacity="0.8"/>
       
       <!-- Sea -->
       <rect y="150" width="400" height="150" fill="#0288D1" opacity="0.8" />
       <!-- Waves -->
       <path d="M0 150 Q 50 140, 100 150 T 200 150 T 300 150 T 400 150" fill="#0288D1" stroke="none" />
       
       <!-- Plane (Improved) -->
       <g transform="translate(150, 60)">
         <!-- Fuselage -->
         <path d="M0 10 Q10 0 50 5 L60 0 L60 10 L50 15 Q10 20 0 10 Z" fill="#555" />
         <!-- Wing -->
         <path d="M25 10 L35 25 L25 15 Z" fill="#333" />
         <path d="M25 8 L35 -5 L25 5 Z" fill="#333" />
         <!-- Tail -->
         <path d="M55 5 L65 -5 L60 5 Z" fill="#333" />
         <text x="30" y="-15" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="#333" font-size="14">Авион</text>
       </g>

       <!-- Axis Line -->
       <line x1="300" y1="50" x2="300" y2="250" stroke="#333" stroke-dasharray="5,5" />
       <line x1="290" y1="150" x2="310" y2="150" stroke="black" stroke-width="2" />
       <text x="315" y="155" font-size="12">0</text>

       <!-- Submarine (Improved) -->
       <g transform="translate(80, 220)">
         <!-- Body -->
         <ellipse cx="60" cy="15" rx="50" ry="15" fill="#333" />
         <!-- Tower -->
         <path d="M50 5 L50 -10 L70 -10 L70 5" fill="#333" />
         <!-- Periscope -->
         <path d="M60 -10 L60 -18 L70 -18" fill="none" stroke="#333" stroke-width="3" />
         <!-- Propeller -->
         <path d="M10 15 L0 5 M10 15 L0 25" stroke="#333" stroke-width="2" />
         <text x="60" y="50" text-anchor="middle" font-family="sans-serif" font-weight="bold" fill="white" font-size="14">Подморница</text>
       </g>
    </svg>`
  },

  // --- CHALLENGES ---

  {
    "id": "CHALLENGE_1_8_1",
    "category": "challenge",
    "topic": "1.8. СВОЈСТВА НА СОБИРАЊЕТО ЦЕЛИ БРОЕВИ",
    "problem_type": "expression_calculation",
    "text_mk": "Пресметај ја вредноста на изразите:",
    "parts": [
      {
        "part_id": "P1a",
        "text_mk": "а)",
        "latex": "-101 - 99 - 97 - \\dots - 3 - 1 + 0 + 2 + 4 + \\dots + 100",
        "answer": "49" 
      },
      {
        "part_id": "P1b",
        "text_mk": "б)",
        "latex": "-1 - (-2) + (-3) - (-4) + (-5) - (-6) + \\dots - (-100)",
        "answer": "50" 
      }
    ]
  },
  {
    "id": "CHALLENGE_1_8_2",
    "category": "challenge",
    "topic": "1.8. СВОЈСТВА НА СОБИРАЊЕТО ЦЕЛИ БРОЕВИ",
    "problem_type": "multiple_choice",
    "text_mk": "Еден наставник поставил картички со цели броеви на точките А, B и C, а на учениците им дал по една картичка за да играат игра. Ученик тргнува од почетната точка со картичката **(-2)** и оди редоследно до точките А, B и C. На секоја точка го споредува бројот на картичката на таа точка со бројот на картичката што ја има во рака:\n\n*   Ако бројот на точката е **поголем**, го одзема помалиот број од поголемиот.\n*   Ако бројот на точката е **помал**, ги собира двата броја.\n\nУченикот ги запишува во тетратка броевите добиени со примена на ова правило.\n**Кој од следниве броеви НЕ МОЖЕ да биде еден од броевите што ги запишал во тетратката?**",
    "svg": `<svg viewBox="0 0 600 200" class="w-full max-w-3xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Ground Line -->
      <line x1="20" y1="150" x2="580" y2="150" stroke="black" stroke-width="2" />

      <!-- Start Point -->
      <g transform="translate(60, 100)">
        <!-- Girl Figure -->
        <g transform="translate(0, 0)">
           <path d="M-15 50 Q-20 40 -15 20 L-20 20 L-25 40" stroke="#f5d0b0" stroke-width="4" stroke-linecap="round" />
           <path d="M15 50 Q20 40 15 20 L20 20 L25 40" stroke="#f5d0b0" stroke-width="4" stroke-linecap="round" />
           <path d="M-15 50 L15 50 L20 20 L-20 20 Z" fill="#3F51B5" /> <!-- Shirt -->
           <circle cx="0" cy="10" r="12" fill="#f5d0b0" /> <!-- Head -->
           <path d="M-12 10 Q-15 -5 0 -5 Q 15 -5 12 10" fill="#FFC107" /> <!-- Hair -->
           <circle cx="-15" cy="10" r="5" fill="#FFC107" /> <!-- Pigtail L -->
           <circle cx="15" cy="10" r="5" fill="#FFC107" /> <!-- Pigtail R -->
        </g>
        <!-- Card in Hand -->
        <g transform="translate(30, 20)">
           <circle cx="0" cy="0" r="22" fill="#E0F7FA" stroke="#00BCD4" stroke-width="2" />
           <text x="0" y="5" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="black">-2</text>
        </g>
        <text x="0" y="80" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="14">Почеток</text>
      </g>

      <!-- Point A -->
      <g transform="translate(200, 100)">
        <line x1="0" y1="25" x2="0" y2="50" stroke="black" stroke-width="2" />
        <circle cx="0" cy="0" r="22" fill="#E0F7FA" stroke="#00BCD4" stroke-width="2" />
        <text x="0" y="5" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="black">-5</text>
        <text x="0" y="80" text-anchor="middle" font-family="sans-serif" font-size="20">A</text>
      </g>

      <!-- Point B -->
      <g transform="translate(340, 100)">
        <line x1="0" y1="25" x2="0" y2="50" stroke="black" stroke-width="2" />
        <circle cx="0" cy="0" r="22" fill="#E0F7FA" stroke="#00BCD4" stroke-width="2" />
        <text x="0" y="5" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="black">+2</text>
        <text x="0" y="80" text-anchor="middle" font-family="sans-serif" font-size="20">B</text>
      </g>

      <!-- Point C -->
      <g transform="translate(480, 100)">
        <line x1="0" y1="25" x2="0" y2="50" stroke="black" stroke-width="2" />
        <circle cx="0" cy="0" r="22" fill="#E0F7FA" stroke="#00BCD4" stroke-width="2" />
        <text x="0" y="5" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="black">-4</text>
        <text x="0" y="80" text-anchor="middle" font-family="sans-serif" font-size="20">C</text>
      </g>

    </svg>`,
    "options": [
      { "option_id": "a", "text_mk": "-7" },
      { "option_id": "b", "text_mk": "-6" },
      { "option_id": "c", "text_mk": "-4" },
      { "option_id": "d", "text_mk": "+4" }
    ], 
    "answer": "c"
  },
  {
    "id": "CHALLENGE_1_8_3",
    "category": "challenge",
    "topic": "1.8. СВОЈСТВА НА СОБИРАЊЕТО ЦЕЛИ БРОЕВИ",
    "problem_type": "expression_calculation",
    "text_mk": "Пресметај го збирот А+В ако:",
    "latex_math": "A = (1-2) + (3-4) + \\dots + (23-24) + 25 \\\\ B = (4-5) + (6-7) + \\dots + (28-29)",
    "answer": "1" 
  }
];


import { Problem } from '../types';

export const PROBLEMS_1_12: Problem[] = [
  // --- PRACTICE ---
  {
    "id": "EXPRESSION_VALUE_1_12_1",
    "category": "practice",
    "topic": "1.12. ВРЕДНОСТ НА БРОЕН ИЗРАЗ",
    "problem_type": "expression_calculation",
    "text_mk": "Пресметај ја вредноста на изразите:",
    "parts": [
      {
        "part_id": "1a",
        "text_mk": "а)",
        "latex": "33 - [12 - (7 - 15)]",
        "answer": "13"
      },
      {
        "part_id": "1b",
        "text_mk": "б)",
        "latex": "[5 - (-6)] - (79 - 81)",
        "answer": "13"
      },
      {
        "part_id": "1c",
        "text_mk": "в)",
        "latex": "18 + [45 - (18 + 50)]",
        "answer": "-5"
      },
      {
        "part_id": "1d",
        "text_mk": "г)",
        "latex": "-17 - [(24 - 27) + (-3)]",
        "answer": "-11"
      }
    ]
  },
  {
    "id": "EXPRESSION_VALUE_1_12_2",
    "category": "practice",
    "topic": "1.12. ВРЕДНОСТ НА БРОЕН ИЗРАЗ",
    "problem_type": "expression_calculation",
    "text_mk": "Внимавај на редоследот на операциите. Пресметај:",
    "parts": [
      {
        "part_id": "2a",
        "text_mk": "а)",
        "latex": "33 - [12 - (27 : (-3))]",
        "answer": "12"
      },
      {
        "part_id": "2b",
        "text_mk": "б)",
        "latex": "1 + 5 \\cdot (-6) - (79 - 81)",
        "answer": "-27"
      },
      {
        "part_id": "2c",
        "text_mk": "в)",
        "latex": "-18 : (-3) + [45 - (18 + 50)]",
        "answer": "-17"
      },
      {
        "part_id": "2d",
        "text_mk": "г)",
        "latex": "-17 - [(24 \\cdot (-12)) + (-3)]",
        "answer": "274"
      }
    ]
  },
  {
    "id": "EXPRESSION_VALUE_1_12_3",
    "category": "practice",
    "topic": "1.12. ВРЕДНОСТ НА БРОЕН ИЗРАЗ",
    "problem_type": "text_input",
    "text_mk": "Во текот на пет работни дена во седмицата една фирма тргувала на берзата. Податоците за секој ден се прикажани на картичките подолу.\n\n**Пресметај ја состојбата на фирмата по сите направени трансакции.**",
    "answer": "66400",
    "svg": `<svg viewBox="0 0 750 140" class="w-full max-w-5xl mx-auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="cardShadow" x="-10%" y="-10%" width="120%" height="120%">
            <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
            <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
            <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
          </filter>
        </defs>
        
        <!-- Mon -->
        <g transform="translate(10, 10)" filter="url(#cardShadow)">
           <rect width="130" height="110" rx="10" fill="white" stroke="#4CAF50" stroke-width="2" />
           <path d="M0 10 Q0 0 10 0 L120 0 Q130 0 130 10 L130 35 L0 35 Z" fill="#E8F5E9" />
           <text x="65" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#2E7D32">Понеделник</text>
           <text x="65" y="65" text-anchor="middle" font-size="12" fill="#555">Заработила</text>
           <text x="65" y="90" text-anchor="middle" font-weight="bold" font-size="16" fill="#2E7D32">74 400</text>
        </g>
        <!-- Tue -->
        <g transform="translate(150, 10)" filter="url(#cardShadow)">
           <rect width="130" height="110" rx="10" fill="white" stroke="#E53935" stroke-width="2" />
           <path d="M0 10 Q0 0 10 0 L120 0 Q130 0 130 10 L130 35 L0 35 Z" fill="#FFEBEE" />
           <text x="65" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#C62828">Вторник</text>
           <text x="65" y="65" text-anchor="middle" font-size="12" fill="#555">Загубила</text>
           <text x="65" y="90" text-anchor="middle" font-weight="bold" font-size="16" fill="#C62828">32 500</text>
        </g>
        <!-- Wed -->
        <g transform="translate(290, 10)" filter="url(#cardShadow)">
           <rect width="130" height="110" rx="10" fill="white" stroke="#E53935" stroke-width="2" />
           <path d="M0 10 Q0 0 10 0 L120 0 Q130 0 130 10 L130 35 L0 35 Z" fill="#FFEBEE" />
           <text x="65" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#C62828">Среда</text>
           <text x="65" y="65" text-anchor="middle" font-size="12" fill="#555">Загубила</text>
           <text x="65" y="90" text-anchor="middle" font-weight="bold" font-size="16" fill="#C62828">21 000</text>
        </g>
        <!-- Thu -->
        <g transform="translate(430, 10)" filter="url(#cardShadow)">
           <rect width="130" height="110" rx="10" fill="white" stroke="#4CAF50" stroke-width="2" />
           <path d="M0 10 Q0 0 10 0 L120 0 Q130 0 130 10 L130 35 L0 35 Z" fill="#E8F5E9" />
           <text x="65" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#2E7D32">Четврток</text>
           <text x="65" y="65" text-anchor="middle" font-size="12" fill="#555">Добила</text>
           <text x="65" y="90" text-anchor="middle" font-weight="bold" font-size="16" fill="#2E7D32">22 750</text>
        </g>
        <!-- Fri -->
        <g transform="translate(570, 10)" filter="url(#cardShadow)">
           <rect width="130" height="110" rx="10" fill="white" stroke="#4CAF50" stroke-width="2" />
           <path d="M0 10 Q0 0 10 0 L120 0 Q130 0 130 10 L130 35 L0 35 Z" fill="#E8F5E9" />
           <text x="65" y="25" text-anchor="middle" font-weight="bold" font-size="14" fill="#2E7D32">Петок</text>
           <text x="65" y="65" text-anchor="middle" font-size="12" fill="#555">Добила</text>
           <text x="65" y="90" text-anchor="middle" font-weight="bold" font-size="16" fill="#2E7D32">22 750</text>
        </g>
      </svg>`
  },
  {
    "id": "EXPRESSION_VALUE_1_12_4",
    "category": "practice",
    "topic": "1.12. ВРЕДНОСТ НА БРОЕН ИЗРАЗ",
    "problem_type": "multiple_choice",
    "text_mk": "Кое од следниве равенства е **неточно**?",
    "options": [
      {
        "option_id": "a",
        "latex": "(-25) + 0 = -25"
      },
      {
        "option_id": "b",
        "latex": "18 + (-18) = 0"
      },
      {
        "option_id": "c",
        "latex": "[(-3) + 2] + (-1) = (-3) + [2 + (-1)]"
      },
      {
        "option_id": "d",
        "latex": "6 + (-3) = 3 + (-6)"
      }
    ],
    "answer": "d"
  },

  // --- CHALLENGES ---

  {
    "id": "CHALLENGE_1_12_1",
    "category": "challenge",
    "topic": "1.12. ВРЕДНОСТ НА БРОЕН ИЗРАЗ",
    "problem_type": "expression_calculation",
    "text_mk": "Метин, Ива и Бесник учествуваат во квиз со 6 прашања. Правилата за бодување и резултатите на натпреварувачите се прикажани на табелата подолу. \n\n**Пресметај ги вкупните поени за секој натпреварувач и одреди го победникот.**",
    "svg": `<svg viewBox="0 0 750 280" class="w-full max-w-4xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="shadowTable" x="0" y="0" width="200%" height="200%">
          <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="2" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>

      <!-- LEGEND (Top) -->
      <g transform="translate(175, 10)">
        <rect x="0" y="0" width="400" height="40" rx="10" fill="#f5f5f5" stroke="#ddd" />
        
        <g transform="translate(30, 10)">
          <circle cx="10" cy="10" r="8" fill="#4CAF50" />
          <path d="M6 10 L8 12 L13 7" stroke="white" stroke-width="2" fill="none" />
          <text x="25" y="15" font-weight="bold" font-size="12" fill="#2E7D32">Точен (+5)</text>
        </g>
        
        <g transform="translate(150, 10)">
          <circle cx="10" cy="10" r="8" fill="#F44336" />
          <path d="M7 7 L13 13 M7 13 L13 7" stroke="white" stroke-width="2" />
          <text x="25" y="15" font-weight="bold" font-size="12" fill="#C62828">Неточен (-3)</text>
        </g>

        <g transform="translate(280, 10)">
          <circle cx="10" cy="10" r="8" fill="#BDBDBD" />
          <text x="10" y="13" text-anchor="middle" fill="white" font-weight="bold" font-size="10">?</text>
          <text x="25" y="15" font-weight="bold" font-size="12" fill="#616161">Без одг. (0)</text>
        </g>
      </g>

      <!-- TABLE HEADER -->
      <g transform="translate(20, 70)">
         <rect x="0" y="0" width="140" height="30" fill="#3F51B5" rx="5" />
         <text x="70" y="20" text-anchor="middle" fill="white" font-weight="bold">Натпреварувач</text>
         
         <rect x="150" y="0" width="580" height="30" fill="#3F51B5" rx="5" />
         <text x="440" y="20" text-anchor="middle" fill="white" font-weight="bold">Резултати (Прашања 1-6)</text>
      </g>

      <!-- ROW 1: METIN -->
      <g transform="translate(20, 110)">
         <rect x="0" y="0" width="710" height="45" fill="white" stroke="#eee" rx="5" filter="url(#shadowTable)" />
         <text x="70" y="28" text-anchor="middle" font-weight="bold" font-size="16" fill="#333">МЕТИН</text>
         
         <!-- Metin Sequence: T, N, No, T, N, T -->
         <g transform="translate(180, 12)">
            <!-- Q1: T --> <g transform="translate(0,0)"><circle cx="10" cy="10" r="12" fill="#4CAF50" /><path d="M5 10 L9 14 L15 6" stroke="white" stroke-width="2" fill="none"/></g>
            <!-- Q2: N --> <g transform="translate(80,0)"><circle cx="10" cy="10" r="12" fill="#F44336" /><path d="M6 6 L14 14 M6 14 L14 6" stroke="white" stroke-width="2"/></g>
            <!-- Q3: ? --> <g transform="translate(160,0)"><circle cx="10" cy="10" r="12" fill="#BDBDBD" /><text x="10" y="14" text-anchor="middle" fill="white" font-size="12" font-weight="bold">?</text></g>
            <!-- Q4: T --> <g transform="translate(240,0)"><circle cx="10" cy="10" r="12" fill="#4CAF50" /><path d="M5 10 L9 14 L15 6" stroke="white" stroke-width="2" fill="none"/></g>
            <!-- Q5: N --> <g transform="translate(320,0)"><circle cx="10" cy="10" r="12" fill="#F44336" /><path d="M6 6 L14 14 M6 14 L14 6" stroke="white" stroke-width="2"/></g>
            <!-- Q6: T --> <g transform="translate(400,0)"><circle cx="10" cy="10" r="12" fill="#4CAF50" /><path d="M5 10 L9 14 L15 6" stroke="white" stroke-width="2" fill="none"/></g>
         </g>
      </g>

      <!-- ROW 2: IVA -->
      <g transform="translate(20, 165)">
         <rect x="0" y="0" width="710" height="45" fill="white" stroke="#eee" rx="5" filter="url(#shadowTable)" />
         <text x="70" y="28" text-anchor="middle" font-weight="bold" font-size="16" fill="#333">ИВА</text>
         
         <!-- Iva Sequence: No, No, T, T, N, T -->
         <g transform="translate(180, 12)">
            <!-- Q1: ? --> <g transform="translate(0,0)"><circle cx="10" cy="10" r="12" fill="#BDBDBD" /><text x="10" y="14" text-anchor="middle" fill="white" font-size="12" font-weight="bold">?</text></g>
            <!-- Q2: ? --> <g transform="translate(80,0)"><circle cx="10" cy="10" r="12" fill="#BDBDBD" /><text x="10" y="14" text-anchor="middle" fill="white" font-size="12" font-weight="bold">?</text></g>
            <!-- Q3: T --> <g transform="translate(160,0)"><circle cx="10" cy="10" r="12" fill="#4CAF50" /><path d="M5 10 L9 14 L15 6" stroke="white" stroke-width="2" fill="none"/></g>
            <!-- Q4: T --> <g transform="translate(240,0)"><circle cx="10" cy="10" r="12" fill="#4CAF50" /><path d="M5 10 L9 14 L15 6" stroke="white" stroke-width="2" fill="none"/></g>
            <!-- Q5: N --> <g transform="translate(320,0)"><circle cx="10" cy="10" r="12" fill="#F44336" /><path d="M6 6 L14 14 M6 14 L14 6" stroke="white" stroke-width="2"/></g>
            <!-- Q6: T --> <g transform="translate(400,0)"><circle cx="10" cy="10" r="12" fill="#4CAF50" /><path d="M5 10 L9 14 L15 6" stroke="white" stroke-width="2" fill="none"/></g>
         </g>
      </g>

      <!-- ROW 3: BESNIK -->
      <g transform="translate(20, 220)">
         <rect x="0" y="0" width="710" height="45" fill="white" stroke="#eee" rx="5" filter="url(#shadowTable)" />
         <text x="70" y="28" text-anchor="middle" font-weight="bold" font-size="16" fill="#333">БЕСНИК</text>
         
         <!-- Besnik Sequence: T, T, N, N, N, T -->
         <g transform="translate(180, 12)">
            <!-- Q1: T --> <g transform="translate(0,0)"><circle cx="10" cy="10" r="12" fill="#4CAF50" /><path d="M5 10 L9 14 L15 6" stroke="white" stroke-width="2" fill="none"/></g>
            <!-- Q2: T --> <g transform="translate(80,0)"><circle cx="10" cy="10" r="12" fill="#4CAF50" /><path d="M5 10 L9 14 L15 6" stroke="white" stroke-width="2" fill="none"/></g>
            <!-- Q3: N --> <g transform="translate(160,0)"><circle cx="10" cy="10" r="12" fill="#F44336" /><path d="M6 6 L14 14 M6 14 L14 6" stroke="white" stroke-width="2"/></g>
            <!-- Q4: N --> <g transform="translate(240,0)"><circle cx="10" cy="10" r="12" fill="#F44336" /><path d="M6 6 L14 14 M6 14 L14 6" stroke="white" stroke-width="2"/></g>
            <!-- Q5: N --> <g transform="translate(320,0)"><circle cx="10" cy="10" r="12" fill="#F44336" /><path d="M6 6 L14 14 M6 14 L14 6" stroke="white" stroke-width="2"/></g>
            <!-- Q6: T --> <g transform="translate(400,0)"><circle cx="10" cy="10" r="12" fill="#4CAF50" /><path d="M5 10 L9 14 L15 6" stroke="white" stroke-width="2" fill="none"/></g>
         </g>
      </g>

    </svg>`,
    "parts": [
      {
        "part_id": "P1a_i",
        "text_mk": "а) Вкупно поени на Метин:",
        "answer": "9"
      },
      {
        "part_id": "P1a_ii",
        "text_mk": "б) Вкупно поени на Ива:",
        "answer": "12"
      },
      {
        "part_id": "P1a_iii",
        "text_mk": "в) Вкупно поени на Бесник:",
        "answer": "6"
      },
      {
        "part_id": "P1b",
        "text_mk": "г) Кој победил во квизот?",
        "answer": "Ива"
      }
    ]
  },
  {
    "id": "CHALLENGE_1_12_2",
    "category": "challenge",
    "topic": "1.12. ВРЕДНОСТ НА БРОЕН ИЗРАЗ",
    "problem_type": "text_input",
    "text_mk": "Дадени се 3 кутии, секоја со по четири топчиња на кои е напишан по еден цел број. Од секоја од овие кутии се зема по едно топче, така што **збирот на броевите на преостанатите топчиња во секоја кутија е еднаков**.\n\n**Колку изнесува производот на броевите напишани на земените топчиња?**",
    "answer": "10",
    "svg": `<svg viewBox="0 0 600 220" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="purpleShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feOffset result="offOut" in="SourceAlpha" dx="2" dy="2" />
          <feGaussianBlur result="blurOut" in="offOut" stdDeviation="1" />
          <feBlend in="SourceGraphic" in2="blurOut" mode="normal" />
        </filter>
      </defs>

      <!-- Box 1 -->
      <g transform="translate(20, 20)">
        <rect x="0" y="0" width="160" height="160" fill="white" stroke="#9C27B0" stroke-width="2" />
        <!-- Top Row -->
        <g transform="translate(40, 40)" filter="url(#purpleShadow)">
           <circle cx="0" cy="0" r="25" fill="#9C27B0" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="20" fill="white">-6</text>
        </g>
        <g transform="translate(120, 40)" filter="url(#purpleShadow)">
           <circle cx="0" cy="0" r="25" fill="#9C27B0" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="20" fill="white">+3</text>
        </g>
        <!-- Bottom Row -->
        <g transform="translate(40, 120)" filter="url(#purpleShadow)">
           <circle cx="0" cy="0" r="25" fill="#9C27B0" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="20" fill="white">-2</text>
        </g>
        <g transform="translate(120, 120)" filter="url(#purpleShadow)">
           <circle cx="0" cy="0" r="25" fill="#9C27B0" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="20" fill="white">-7</text>
        </g>
        <!-- Connector line right -->
        <line x1="160" y1="20" x2="160" y2="140" stroke="#9C27B0" stroke-width="2" /> 
      </g>

      <!-- Box 2 -->
      <g transform="translate(220, 20)">
        <rect x="0" y="0" width="160" height="160" fill="white" stroke="#9C27B0" stroke-width="2" />
        <!-- Top Row -->
        <g transform="translate(40, 40)" filter="url(#purpleShadow)">
           <circle cx="0" cy="0" r="25" fill="#9C27B0" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="20" fill="white">-8</text>
        </g>
        <g transform="translate(120, 40)" filter="url(#purpleShadow)">
           <circle cx="0" cy="0" r="25" fill="#9C27B0" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="20" fill="white">+5</text>
        </g>
        <!-- Bottom Row -->
        <g transform="translate(40, 120)" filter="url(#purpleShadow)">
           <circle cx="0" cy="0" r="25" fill="#9C27B0" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="20" fill="white">-4</text>
        </g>
        <g transform="translate(120, 120)" filter="url(#purpleShadow)">
           <circle cx="0" cy="0" r="25" fill="#9C27B0" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="20" fill="white">+2</text>
        </g>
      </g>

      <!-- Box 3 -->
      <g transform="translate(420, 20)">
        <rect x="0" y="0" width="160" height="160" fill="white" stroke="#9C27B0" stroke-width="2" />
        <!-- Top Row -->
        <g transform="translate(40, 40)" filter="url(#purpleShadow)">
           <circle cx="0" cy="0" r="25" fill="#9C27B0" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="20" fill="white">+1</text>
        </g>
        <g transform="translate(120, 40)" filter="url(#purpleShadow)">
           <circle cx="0" cy="0" r="25" fill="#9C27B0" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="18" fill="white">-15</text>
        </g>
        <!-- Bottom Row -->
        <g transform="translate(40, 120)" filter="url(#purpleShadow)">
           <circle cx="0" cy="0" r="25" fill="#9C27B0" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="20" fill="white">+4</text>
        </g>
        <g transform="translate(120, 120)" filter="url(#purpleShadow)">
           <circle cx="0" cy="0" r="25" fill="#9C27B0" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="20" fill="white">-1</text>
        </g>
        <!-- Connector line left -->
        <line x1="0" y1="20" x2="0" y2="140" stroke="#9C27B0" stroke-width="2" /> 
      </g>
      
    </svg>`
  },
  {
    "id": "CHALLENGE_1_12_3",
    "category": "challenge",
    "topic": "1.12. ВРЕДНОСТ НА БРОЕН ИЗРАЗ",
    "problem_type": "multiple_choice",
    "text_mk": "Душан сакал да го пресмета изразот **20 + (–4) · 12**. Тој редоследно ги притиснал копчињата:\n\nОткако го видел резултатот, сфатил дека неговиот калкулатор има **системска грешка** која ги заменила операциите.\n\n**Колкава е разликата помеѓу резултатот што го добил Душан со расипаниот калкулатор и точниот резултат што требало да го добие?**",
    "svg": `<svg viewBox="0 0 750 380" class="w-full max-w-4xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="calcBody" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#333;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#111;stop-opacity:1" />
        </linearGradient>
        
        <!-- Button Styles -->
        <filter id="btn3d">
            <feGaussianBlur in="SourceAlpha" stdDeviation="1" result="blur"/>
            <feOffset in="blur" dx="1" dy="2" result="shadow"/>
            <feSpecularLighting in="blur" surfaceScale="2" specularConstant="1" specularExponent="20" lighting-color="#ffffff" result="specular">
                <fePointLight x="-5000" y="-10000" z="20000"/>
            </feSpecularLighting>
            <feComposite in="specular" in2="SourceAlpha" operator="in" result="specular"/>
            <feComposite in="SourceGraphic" in2="specular" operator="arithmetic" k1="0" k2="1" k3="1" k4="0"/>
        </filter>
        
        <!-- Card Shadow -->
        <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="2" dy="2" stdDeviation="3" flood-color="#000000" flood-opacity="0.2"/>
        </filter>
      </defs>

      <!-- TOP ROW: THE SEQUENCE -->
      <g transform="translate(100, 10)">
         <text x="-80" y="30" font-weight="bold" fill="#555" font-size="16">Притиснал:</text>
         
         <!-- -4 -->
         <g transform="translate(0, 0)">
            <rect width="45" height="40" rx="6" fill="#555" filter="url(#btn3d)" />
            <text x="22.5" y="26" text-anchor="middle" fill="white" font-weight="bold" font-size="18">-4</text>
         </g>

         <!-- X -->
         <g transform="translate(65, 0)">
            <rect width="45" height="40" rx="6" fill="#1E88E5" filter="url(#btn3d)" />
            <text x="22.5" y="26" text-anchor="middle" fill="white" font-weight="bold" font-size="18">×</text>
         </g>

         <!-- 12 -->
         <g transform="translate(130, 0)">
            <rect width="45" height="40" rx="6" fill="#555" filter="url(#btn3d)" />
            <text x="22.5" y="26" text-anchor="middle" fill="white" font-weight="bold" font-size="18">12</text>
         </g>

         <!-- = -->
         <g transform="translate(195, 0)">
            <rect width="45" height="40" rx="6" fill="#43A047" filter="url(#btn3d)" />
            <text x="22.5" y="26" text-anchor="middle" fill="white" font-weight="bold" font-size="18">=</text>
         </g>

         <!-- + -->
         <g transform="translate(260, 0)">
            <rect width="45" height="40" rx="6" fill="#1E88E5" filter="url(#btn3d)" />
            <text x="22.5" y="26" text-anchor="middle" fill="white" font-weight="bold" font-size="18">+</text>
         </g>

         <!-- 20 -->
         <g transform="translate(325, 0)">
            <rect width="45" height="40" rx="6" fill="#555" filter="url(#btn3d)" />
            <text x="22.5" y="26" text-anchor="middle" fill="white" font-weight="bold" font-size="18">20</text>
         </g>
      </g>

      <!-- SEPARATOR LINE -->
      <line x1="50" y1="70" x2="700" y2="70" stroke="#ddd" stroke-width="2" stroke-dasharray="5,5" />

      <!-- BOTTOM AREA CONTAINER -->
      <g transform="translate(80, 100)">
          
          <!-- CALCULATOR (LEFT) -->
          <g transform="translate(0, 0)">
             <rect x="0" y="0" width="200" height="240" rx="15" fill="url(#calcBody)" stroke="#555" stroke-width="2" />
             
             <!-- Screen -->
             <rect x="20" y="20" width="160" height="50" rx="4" fill="#C5E1A5" stroke="#888" stroke-width="1" />
             <text x="170" y="55" text-anchor="end" font-family="monospace" font-size="28" fill="#33691E">160</text>

             <!-- Keypad -->
             <g transform="translate(20, 90)">
                 <!-- Row 7,8,9, / -->
                 <g transform="translate(0,0)">
                    <rect width="35" height="30" rx="4" fill="#555" filter="url(#btn3d)" /> <text x="17.5" y="20" text-anchor="middle" fill="white" font-weight="bold">7</text>
                    <rect x="42" width="35" height="30" rx="4" fill="#555" filter="url(#btn3d)" /> <text x="59.5" y="20" text-anchor="middle" fill="white" font-weight="bold">8</text>
                    <rect x="84" width="35" height="30" rx="4" fill="#555" filter="url(#btn3d)" /> <text x="101.5" y="20" text-anchor="middle" fill="white" font-weight="bold">9</text>
                    <rect x="126" width="34" height="30" rx="4" fill="#FB8C00" filter="url(#btn3d)" /> <text x="143" y="20" text-anchor="middle" fill="white" font-weight="bold">÷</text>
                 </g>
                 <!-- Row 4,5,6, X -->
                 <g transform="translate(0,38)">
                    <rect width="35" height="30" rx="4" fill="#555" filter="url(#btn3d)" /> <text x="17.5" y="20" text-anchor="middle" fill="white" font-weight="bold">4</text>
                    <rect x="42" width="35" height="30" rx="4" fill="#555" filter="url(#btn3d)" /> <text x="59.5" y="20" text-anchor="middle" fill="white" font-weight="bold">5</text>
                    <rect x="84" width="35" height="30" rx="4" fill="#555" filter="url(#btn3d)" /> <text x="101.5" y="20" text-anchor="middle" fill="white" font-weight="bold">6</text>
                    <rect x="126" width="34" height="30" rx="4" fill="#1E88E5" filter="url(#btn3d)" /> <text x="143" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="18">×</text>
                 </g>
                 <!-- Row 1,2,3, - -->
                 <g transform="translate(0,76)">
                    <rect width="35" height="30" rx="4" fill="#555" filter="url(#btn3d)" /> <text x="17.5" y="20" text-anchor="middle" fill="white" font-weight="bold">1</text>
                    <rect x="42" width="35" height="30" rx="4" fill="#555" filter="url(#btn3d)" /> <text x="59.5" y="20" text-anchor="middle" fill="white" font-weight="bold">2</text>
                    <rect x="84" width="35" height="30" rx="4" fill="#555" filter="url(#btn3d)" /> <text x="101.5" y="20" text-anchor="middle" fill="white" font-weight="bold">3</text>
                    <rect x="126" width="34" height="30" rx="4" fill="#FB8C00" filter="url(#btn3d)" /> <text x="143" y="20" text-anchor="middle" fill="white" font-weight="bold">-</text>
                 </g>
                 <!-- Row 0, =, + -->
                 <g transform="translate(0,114)">
                    <rect width="77" height="30" rx="4" fill="#555" filter="url(#btn3d)" /> <text x="38.5" y="20" text-anchor="middle" fill="white" font-weight="bold">0</text>
                    <rect x="84" width="35" height="30" rx="4" fill="#1E88E5" filter="url(#btn3d)" /> <text x="101.5" y="22" text-anchor="middle" fill="white" font-weight="bold" font-size="18">+</text>
                    <rect x="126" width="34" height="30" rx="4" fill="#43A047" filter="url(#btn3d)" /> <text x="143" y="20" text-anchor="middle" fill="white" font-weight="bold">=</text>
                 </g>
             </g>
          </g>

          <!-- SYSTEM ERROR AREA (RIGHT) -->
          <g transform="translate(240, 0)">
             <!-- Header -->
             <rect x="0" y="0" width="300" height="40" rx="5" fill="#FFEBEE" stroke="#EF5350" stroke-width="1" />
             <text x="150" y="26" text-anchor="middle" font-weight="bold" font-size="16" fill="#C62828">⚠ ГРЕШКА ВО СИСТЕМОТ</text>

             <!-- Logic Card 1 -->
             <g transform="translate(0, 60)" filter="url(#cardShadow)">
                <rect x="0" y="0" width="300" height="70" rx="8" fill="white" />
                <path d="M0 8 A8 8 0 0 1 8 0 L10 0 L10 70 L8 70 A8 8 0 0 1 0 62 Z" fill="#1E88E5" />
                
                <g transform="translate(40, 35)">
                   <rect x="-20" y="-20" width="40" height="40" rx="5" fill="#1E88E5" />
                   <text x="0" y="8" text-anchor="middle" fill="white" font-weight="bold" font-size="24">×</text>
                   <text x="0" y="35" text-anchor="middle" font-size="10" fill="#666">Копче</text>
                </g>

                <path d="M80 35 L120 35" stroke="#333" stroke-width="2" marker-end="url(#arrow)" />
                <text x="100" y="25" text-anchor="middle" font-size="10" fill="#333" font-weight="bold">Всушност прави</text>

                <g transform="translate(160, 35)">
                   <circle cx="0" cy="0" r="22" fill="#E3F2FD" stroke="#1E88E5" stroke-width="2" />
                   <text x="0" y="8" text-anchor="middle" fill="#1E88E5" font-weight="bold" font-size="24">+</text>
                   <text x="50" y="5" text-anchor="start" font-size="14" font-weight="bold" fill="#333">СОБИРАЊЕ</text>
                </g>
             </g>

             <!-- Logic Card 2 -->
             <g transform="translate(0, 150)" filter="url(#cardShadow)">
                <rect x="0" y="0" width="300" height="70" rx="8" fill="white" />
                <path d="M0 8 A8 8 0 0 1 8 0 L10 0 L10 70 L8 70 A8 8 0 0 1 0 62 Z" fill="#1E88E5" />
                
                <g transform="translate(40, 35)">
                   <rect x="-20" y="-20" width="40" height="40" rx="5" fill="#1E88E5" />
                   <text x="0" y="8" text-anchor="middle" fill="white" font-weight="bold" font-size="24">+</text>
                   <text x="0" y="35" text-anchor="middle" font-size="10" fill="#666">Копче</text>
                </g>

                <path d="M80 35 L120 35" stroke="#333" stroke-width="2" marker-end="url(#arrow)" />
                <text x="100" y="25" text-anchor="middle" font-size="10" fill="#333" font-weight="bold">Всушност прави</text>

                <g transform="translate(160, 35)">
                   <circle cx="0" cy="0" r="22" fill="#E3F2FD" stroke="#1E88E5" stroke-width="2" />
                   <text x="0" y="8" text-anchor="middle" fill="#1E88E5" font-weight="bold" font-size="20">×</text>
                   <text x="50" y="5" text-anchor="start" font-size="14" font-weight="bold" fill="#333">МНОЖЕЊЕ</text>
                </g>
             </g>

             <defs>
                <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                  <path d="M0,0 L0,6 L9,3 z" fill="#333" />
                </marker>
             </defs>
          </g>
      </g>
    </svg>`,
    "options": [
      { "option_id": "a", "text_mk": "32" },
      { "option_id": "b", "text_mk": "40" },
      { "option_id": "c", "text_mk": "132" },
      { "option_id": "d", "text_mk": "188" }
    ],
    "answer": "d"
  }
];

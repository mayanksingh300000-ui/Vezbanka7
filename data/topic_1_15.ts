
import { Problem } from '../types';

export const PROBLEMS_1_15: Problem[] = [
  // --- PRACTICE ---
  {
    "id": "FRACTIONS_1_15_1",
    "category": "practice",
    "topic": "1.15. ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ ДРОПКИ",
    "problem_type": "custom_visual_data",
    "text_mk": "Прошири ги дропките за да ги сведеш на ист именител или броител.",
    "custom_visual_data": {
      "type": "fraction_conversion",
      "tasks": [
        {
          "title": "а) Сведување на ист именител",
          "instruction": "Одреди го НЗС за именителите, а потоа прошири ги дропките.",
          "original_latex": ["\\frac{1}{5}", "\\frac{7}{10}", "\\frac{1}{2}", "\\frac{3}{4}"],
          "lcm_item": { "id": "1a_lcm", "answer": "20", "label": "НЗС (Именител)" },
          "fraction_items": [
            { "id": "1a_f1", "answer": "4/20" },
            { "id": "1a_f2", "answer": "14/20" },
            { "id": "1a_f3", "answer": "10/20" },
            { "id": "1a_f4", "answer": "15/20" }
          ]
        },
        {
          "title": "б) Сведување на ист броител",
          "instruction": "Одреди го НЗС за броителите, а потоа прошири ги дропките.",
          "original_latex": ["\\frac{3}{4}", "\\frac{1}{8}", "\\frac{2}{3}", "\\frac{1}{2}", "\\frac{2}{5}"],
          "lcm_item": { "id": "1b_lcm", "answer": "6", "label": "НЗС (Броител)" },
          "fraction_items": [
            { "id": "1b_f1", "answer": "6/8" },
            { "id": "1b_f2", "answer": "6/48" },
            { "id": "1b_f3", "answer": "6/9" },
            { "id": "1b_f4", "answer": "6/12" },
            { "id": "1b_f5", "answer": "6/15" }
          ]
        }
      ]
    }
  },
  {
    "id": "FRACTIONS_1_15_2",
    "category": "practice",
    "topic": "1.15. ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ ДРОПКИ",
    "problem_type": "ordering",
    "text_mk": "Подреди ги дропките (влечи ги картичките):",
    "parts": [
      {
        "part_id": "2a",
        "text_mk": "а) во растечки редослед",
        "latex_numbers": "\\frac{1}{15}, \\frac{2}{5}, \\frac{7}{15}, \\frac{1}{3}",
        "answer": "\\frac{1}{15}, \\frac{1}{3}, \\frac{2}{5}, \\frac{7}{15}"
      },
      {
        "part_id": "2b",
        "text_mk": "б) во опаѓачки редослед",
        "latex_numbers": "\\frac{7}{10}, \\frac{4}{5}, \\frac{63}{100}, \\frac{1}{2}",
        "answer": "\\frac{4}{5}, \\frac{7}{10}, \\frac{63}{100}, \\frac{1}{2}"
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
    "problem_type": "custom_visual_data",
    "text_mk": "На сликата (горе), вредноста на D е еднаква на најголемиот од рационалните броеви. Според даденото правило (D = Max), пополни ги празните полиња (долу) со **најголемиот** број од групата што води до тоа поле.",
    "custom_visual_data": {
      "type": "hierarchy_fill",
      "groups": [
        { "items": ["\\frac{9}{4}", "\\frac{58}{25}", "\\frac{49}{20}"] }, // Max is 49/20 (2.45) vs 2.25 vs 2.32
        { "items": ["\\frac{5}{2}", "\\frac{14}{5}", "\\frac{44}{20}"] }   // Max is 14/5 (2.8) vs 2.5 vs 2.2
      ],
      "middle_value": "\\frac{11}{4}", // 2.75
      "inputs": [
        { "id": "box_left", "answer": "49/20" },  // Result of Group 1
        { "id": "box_right", "answer": "14/5" },  // Result of Group 2
        { "id": "box_final", "answer": "14/5" }   // Max of (49/20, 11/4, 14/5) -> (2.45, 2.75, 2.8) -> 2.8
      ],
      "example_svg": `<svg viewBox="0 0 500 220" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
       <defs>
         <marker id="arrowHead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
           <polygon points="0 0, 10 3.5, 0 7" fill="#F43F5E" />
         </marker>
       </defs>
       
       <!-- Example Diagram -->
       <g transform="translate(130, 20)">
          
          <g transform="translate(0, 0)">
             <rect x="0" y="0" width="40" height="40" rx="4" fill="#FECDD3" stroke="#F43F5E" stroke-width="2" />
             <text x="20" y="25" text-anchor="middle" font-weight="bold" fill="#881337">M</text>
          </g>
          <g transform="translate(50, 0)">
             <rect x="0" y="0" width="40" height="40" rx="4" fill="#FECDD3" stroke="#F43F5E" stroke-width="2" />
             <text x="20" y="25" text-anchor="middle" font-weight="bold" fill="#881337">L</text>
          </g>
          <g transform="translate(100, 0)">
             <rect x="0" y="0" width="40" height="40" rx="4" fill="#FECDD3" stroke="#F43F5E" stroke-width="2" />
             <text x="20" y="25" text-anchor="middle" font-weight="bold" fill="#881337">K</text>
          </g>

          <g transform="translate(50, 80)">
             <rect x="0" y="0" width="40" height="40" rx="4" fill="#FECDD3" stroke="#F43F5E" stroke-width="2" />
             <text x="20" y="25" text-anchor="middle" font-weight="bold" fill="#881337">D</text>
          </g>

          <!-- Arrows -->
          <line x1="20" y1="45" x2="60" y2="75" stroke="#F43F5E" stroke-width="2" marker-end="url(#arrowHead)" />
          <line x1="70" y1="45" x2="70" y2="75" stroke="#F43F5E" stroke-width="2" marker-end="url(#arrowHead)" />
          <line x1="120" y1="45" x2="80" y2="75" stroke="#F43F5E" stroke-width="2" marker-end="url(#arrowHead)" />
          
          <text x="70" y="140" text-anchor="middle" font-size="14" fill="#555" font-weight="bold">D = Max(M, L, K)</text>
       </g>
    </svg>`
    }
  },
  {
    "id": "CHALLENGE_1_15_2",
    "category": "challenge",
    "topic": "1.15. ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ ДРОПКИ",
    "problem_type": "custom_visual_data", 
    "text_mk": "Обој ги полињата (кликни на нив) во кои се запишани дропките кои имаат **периодичен (бескраен) децимален запис**.",
    "custom_visual_data": {
        "type": "grid_of_fractions",
        "fractions": [
            "\\frac{1}{3}",   // Periodic (0.333...)
            "\\frac{15}{4}",  // Terminating (3.75)
            "\\frac{4}{9}",   // Periodic (0.444...)
            "\\frac{17}{25}", // Terminating (0.68)
            "\\frac{7}{9}",   // Periodic (0.777...)
            "\\frac{1}{125}", // Terminating (0.008)
            "\\frac{17}{3}",  // Periodic (5.666...)
            "\\frac{2}{5}",   // Terminating (0.4)
            "\\frac{4}{11}"   // Periodic (0.3636...)
        ],
        "correct_items": [
            "\\frac{1}{3}", 
            "\\frac{4}{9}", 
            "\\frac{7}{9}", 
            "\\frac{17}{3}", 
            "\\frac{4}{11}"
        ]
    },
    "answer": "1/3, 4/9, 7/9, 17/3, 4/11" 
  },
  {
    "id": "CHALLENGE_1_15_3",
    "category": "challenge",
    "topic": "1.15. ПОДРЕДУВАЊЕ И СПОРЕДУВАЊЕ ДРОПКИ",
    "problem_type": "custom_visual_data",
    "text_mk": "На сликата се прикажани две пакувања за јајца, од кои секое собира по 10 јајца.\n\nКолкав дел од јајцата што моментално се наоѓаат во **пакувањето А** треба да се префрлат во **пакувањето B** за тоа да се наполни до врв? (Запиши го одговорот како дропка во полињата долу)",
    "custom_visual_data": {
        "type": "fraction_input"
    },
    "svg": `<svg viewBox="0 0 660 220" class="w-full max-w-3xl mx-auto" xmlns="http://www.w3.org/2000/svg">
       <!-- Box A -->
       <g transform="translate(20, 20)">
         <rect x="0" y="0" width="280" height="120" rx="10" fill="#EFEBE9" stroke="#5D4037" stroke-width="2" />
         <text x="140" y="150" text-anchor="middle" font-weight="bold" font-size="16" fill="#3E2723">Пакување А (Има 7 јајца)</text>
         
         <g transform="translate(25, 25)">
            <!-- Top Row -->
            <circle cx="20" cy="20" r="16" fill="#FFECB3" stroke="#FFB300" stroke-width="2" />
            <circle cx="70" cy="20" r="16" fill="#FFECB3" stroke="#FFB300" stroke-width="2" />
            <circle cx="120" cy="20" r="16" fill="#FFECB3" stroke="#FFB300" stroke-width="2" />
            <circle cx="170" cy="20" r="16" fill="#FFECB3" stroke="#FFB300" stroke-width="2" />
            <circle cx="220" cy="20" r="16" fill="#FFECB3" stroke="#FFB300" stroke-width="2" />
            
            <!-- Bottom Row -->
            <circle cx="20" cy="70" r="16" fill="#FFECB3" stroke="#FFB300" stroke-width="2" />
            <circle cx="70" cy="70" r="16" fill="#FFECB3" stroke="#FFB300" stroke-width="2" />
            <!-- Empty slots (dashed) -->
            <circle cx="120" cy="70" r="14" fill="none" stroke="#BCAAA4" stroke-dasharray="4,2" />
            <circle cx="170" cy="70" r="14" fill="none" stroke="#BCAAA4" stroke-dasharray="4,2" />
            <circle cx="220" cy="70" r="14" fill="none" stroke="#BCAAA4" stroke-dasharray="4,2" />
         </g>
       </g>

       <!-- Arrow indicating movement (Updated to match original image style) -->
       <g transform="translate(315, 50)">
          <!-- Red wedge shape -->
          <path d="M0,30 L10,10 L35,25 L10,40 Z" fill="#FF5722" transform="rotate(-15 15 25)"/>
          <text x="18" y="70" text-anchor="middle" font-size="14" fill="#FF5722" font-weight="bold">?</text>
       </g>

       <!-- Box B -->
       <g transform="translate(360, 20)">
         <rect x="0" y="0" width="280" height="120" rx="10" fill="#EFEBE9" stroke="#5D4037" stroke-width="2" />
         <text x="140" y="150" text-anchor="middle" font-weight="bold" font-size="16" fill="#3E2723">Пакување B (Има 4 јајца)</text>
         
         <g transform="translate(25, 25)">
            <!-- Top Row -->
            <circle cx="20" cy="20" r="16" fill="#FFECB3" stroke="#FFB300" stroke-width="2" />
            <circle cx="70" cy="20" r="16" fill="#FFECB3" stroke="#FFB300" stroke-width="2" />
            <circle cx="120" cy="20" r="16" fill="#FFECB3" stroke="#FFB300" stroke-width="2" />
            <circle cx="170" cy="20" r="16" fill="#FFECB3" stroke="#FFB300" stroke-width="2" />
            <!-- Empty slots (dashed - needs filling) -->
            <circle cx="220" cy="20" r="14" fill="none" stroke="#FF5722" stroke-width="2" stroke-dasharray="4,2" opacity="0.6" />
            
            <!-- Bottom Row -->
            <circle cx="20" cy="70" r="14" fill="none" stroke="#FF5722" stroke-width="2" stroke-dasharray="4,2" opacity="0.6" />
            <circle cx="70" cy="70" r="14" fill="none" stroke="#FF5722" stroke-width="2" stroke-dasharray="4,2" opacity="0.6" />
            <circle cx="120" cy="70" r="14" fill="none" stroke="#FF5722" stroke-width="2" stroke-dasharray="4,2" opacity="0.6" />
            <circle cx="170" cy="70" r="14" fill="none" stroke="#FF5722" stroke-width="2" stroke-dasharray="4,2" opacity="0.6" />
            <circle cx="220" cy="70" r="14" fill="none" stroke="#FF5722" stroke-width="2" stroke-dasharray="4,2" opacity="0.6" />
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
    "text_mk": "Секој од клучевите подолу отвора еден катанец. Шифрата за рационалните броеви на катанците е клучот што го отвора тој катанец. Правило: Ако $\\frac{a}{b} = c,d$, тогаш шифрата е $c \\cdot d$. Внеси ја соодветната шифра за секој катанец.",
    "parts": [
        { "part_id": "4_lock1", "text_mk": "Катанец $\\frac{13}{5}$:", "answer": "12" }, // 2.6 -> 12
        { "part_id": "4_lock2", "text_mk": "Катанец $\\frac{48}{10}$:", "answer": "32" }, // 4.8 -> 32
        { "part_id": "4_lock3", "text_mk": "Катанец $\\frac{7}{2}$:", "answer": "15" }, // 3.5 -> 15
        { "part_id": "4_lock4", "text_mk": "Катанец $\\frac{6}{4}$:", "answer": "5" }, // 1.5 -> 5
        { "part_id": "4_lock5", "text_mk": "Катанец $\\frac{270}{100}$:", "answer": "14" } // 2.7 -> 14
    ],
    "svg": `<svg viewBox="0 0 750 250" class="w-full max-w-4xl mx-auto" xmlns="http://www.w3.org/2000/svg">
       <defs>
         <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
           <stop offset="0%" style="stop-color:#FFEB3B;stop-opacity:1" />
           <stop offset="100%" style="stop-color:#FBC02D;stop-opacity:1" />
         </linearGradient>
         <linearGradient id="silverGradient" x1="0%" y1="0%" x2="0%" y2="100%">
           <stop offset="0%" style="stop-color:#E0E0E0;stop-opacity:1" />
           <stop offset="100%" style="stop-color:#9E9E9E;stop-opacity:1" />
         </linearGradient>
       </defs>

       <!-- Rule Box (Beautiful Fraction Version) -->
       <g transform="translate(10, 10)">
          <rect x="0" y="0" width="730" height="36" rx="5" fill="#FFF3E0" stroke="#EF6C00" stroke-width="1" />
          
          <g transform="translate(365, 18)">
             <!-- "Пример: Бидејќи" -->
             <text x="-120" y="5" text-anchor="end" font-size="14" fill="#E65100" font-weight="bold">Пример: Бидејќи</text>
             
             <!-- Fraction 12/5 -->
             <g transform="translate(-110, -8)">
                <text x="10" y="0" text-anchor="middle" font-size="13" font-family="Times New Roman, serif" font-weight="bold" fill="#E65100">12</text>
                <line x1="0" y1="4" x2="20" y2="4" stroke="#E65100" stroke-width="1.5" />
                <text x="10" y="16" text-anchor="middle" font-size="13" font-family="Times New Roman, serif" font-weight="bold" fill="#E65100">5</text>
             </g>

             <!-- "= 2,4, шифрата е 2·4 = 8." -->
             <text x="-85" y="5" text-anchor="start" font-size="14" fill="#E65100" font-weight="bold"> = 2,4, шифрата е 2·4 = 8.</text>
          </g>
       </g>

       <!-- LOCKS ROW -->
       <g transform="translate(40, 60)">
          <!-- Lock 1: 13/5 -->
          <g transform="translate(0, 0)">
             <path d="M10 25 A 20 20 0 0 1 50 25" fill="none" stroke="url(#silverGradient)" stroke-width="6" />
             <rect x="0" y="25" width="60" height="50" rx="5" fill="url(#goldGradient)" stroke="#F57F17" stroke-width="1" />
             <line x1="10" y1="50" x2="50" y2="50" stroke="#333" stroke-width="2" />
             <!-- Beautiful Fraction -->
             <text x="30" y="44" text-anchor="middle" font-weight="bold" font-size="18" font-family="Times New Roman, serif">13</text>
             <text x="30" y="69" text-anchor="middle" font-weight="bold" font-size="18" font-family="Times New Roman, serif">5</text>
          </g>
          
          <!-- Lock 2: 48/10 -->
          <g transform="translate(140, 0)">
             <path d="M10 25 A 20 20 0 0 1 50 25" fill="none" stroke="url(#silverGradient)" stroke-width="6" />
             <rect x="0" y="25" width="60" height="50" rx="5" fill="url(#goldGradient)" stroke="#F57F17" stroke-width="1" />
             <line x1="10" y1="50" x2="50" y2="50" stroke="#333" stroke-width="2" />
             <text x="30" y="44" text-anchor="middle" font-weight="bold" font-size="18" font-family="Times New Roman, serif">48</text>
             <text x="30" y="69" text-anchor="middle" font-weight="bold" font-size="18" font-family="Times New Roman, serif">10</text>
          </g>

          <!-- Lock 3: 7/2 -->
          <g transform="translate(280, 0)">
             <path d="M10 25 A 20 20 0 0 1 50 25" fill="none" stroke="url(#silverGradient)" stroke-width="6" />
             <rect x="0" y="25" width="60" height="50" rx="5" fill="url(#goldGradient)" stroke="#F57F17" stroke-width="1" />
             <line x1="10" y1="50" x2="50" y2="50" stroke="#333" stroke-width="2" />
             <text x="30" y="44" text-anchor="middle" font-weight="bold" font-size="18" font-family="Times New Roman, serif">7</text>
             <text x="30" y="69" text-anchor="middle" font-weight="bold" font-size="18" font-family="Times New Roman, serif">2</text>
          </g>

          <!-- Lock 4: 6/4 -->
          <g transform="translate(420, 0)">
             <path d="M10 25 A 20 20 0 0 1 50 25" fill="none" stroke="url(#silverGradient)" stroke-width="6" />
             <rect x="0" y="25" width="60" height="50" rx="5" fill="url(#goldGradient)" stroke="#F57F17" stroke-width="1" />
             <line x1="10" y1="50" x2="50" y2="50" stroke="#333" stroke-width="2" />
             <text x="30" y="44" text-anchor="middle" font-weight="bold" font-size="18" font-family="Times New Roman, serif">6</text>
             <text x="30" y="69" text-anchor="middle" font-weight="bold" font-size="18" font-family="Times New Roman, serif">4</text>
          </g>

          <!-- Lock 5: 270/100 -->
          <g transform="translate(560, 0)">
             <path d="M10 25 A 20 20 0 0 1 50 25" fill="none" stroke="url(#silverGradient)" stroke-width="6" />
             <rect x="0" y="25" width="60" height="50" rx="5" fill="url(#goldGradient)" stroke="#F57F17" stroke-width="1" />
             <line x1="10" y1="50" x2="50" y2="50" stroke="#333" stroke-width="2" />
             <text x="30" y="44" text-anchor="middle" font-weight="bold" font-size="16" font-family="Times New Roman, serif">270</text>
             <text x="30" y="69" text-anchor="middle" font-weight="bold" font-size="16" font-family="Times New Roman, serif">100</text>
          </g>
       </g>

       <!-- KEYS ROW -->
       <g transform="translate(50, 160)">
          <!-- Key Template -->
          <defs>
             <g id="keyIcon">
                <circle cx="15" cy="15" r="14" fill="url(#goldGradient)" stroke="#F9A825" stroke-width="1" />
                <rect x="11" y="29" width="8" height="30" fill="url(#goldGradient)" stroke="#F9A825" stroke-width="1" />
                <path d="M11 45 L5 45 L5 50 L11 50 M11 53 L5 53 L5 58 L11 58" stroke="#F9A825" stroke-width="1" fill="none" />
             </g>
          </defs>

          <!-- Key 1: 32 -->
          <g transform="translate(0, 0)">
             <use href="#keyIcon" />
             <text x="15" y="20" text-anchor="middle" font-weight="bold" font-size="14">32</text>
          </g>
          <!-- Key 2: 14 -->
          <g transform="translate(110, 0)">
             <use href="#keyIcon" />
             <text x="15" y="20" text-anchor="middle" font-weight="bold" font-size="14">14</text>
          </g>
          <!-- Key 3: 5 -->
          <g transform="translate(220, 0)">
             <use href="#keyIcon" />
             <text x="15" y="20" text-anchor="middle" font-weight="bold" font-size="14">5</text>
          </g>
          <!-- Key 4: 12 -->
          <g transform="translate(330, 0)">
             <use href="#keyIcon" />
             <text x="15" y="20" text-anchor="middle" font-weight="bold" font-size="14">12</text>
          </g>
          <!-- Key 5: 15 -->
          <g transform="translate(440, 0)">
             <use href="#keyIcon" />
             <text x="15" y="20" text-anchor="middle" font-weight="bold" font-size="14">15</text>
          </g>
          <!-- Key 6: 20 -->
          <g transform="translate(550, 0)">
             <use href="#keyIcon" />
             <text x="15" y="20" text-anchor="middle" font-weight="bold" font-size="14">20</text>
          </g>
       </g>
    </svg>`
  }
];

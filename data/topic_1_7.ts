
import { Problem } from '../types';

export const PROBLEMS_1_7: Problem[] = [
    // --- PRACTICE ---
    {
      "id": "ABSOLUTE_1_7_1",
      "category": "practice",
      "topic": "1.7. СОБИРАЊЕ НА ЦЕЛИ БРОЕВИ",
      "problem_type": "multiple_choice",
      "text_mk": "На бројната оска подолу е претставен модел на операција собирање со цели броеви. Која од следниве операции е претставена со моделот?",
      "options": [
        { "option_id": "a", "latex": "(+2) + (–6) + (–1) = (–5)" },
        { "option_id": "b", "latex": "(+2) + (–6) + (+4) = 0" },
        { "option_id": "c", "latex": "(+3) + (–7) + (+4) = 0" },
        { "option_id": "d", "latex": "(+3) + (–7) + (–1) = (–5)" }
      ],
      "answer": "d",
      "svg": `<svg viewBox="0 -10 400 120" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
        </defs>
        <!-- Axis -->
        <line x1="20" y1="80" x2="380" y2="80" stroke="black" stroke-width="2" marker-end="url(#arrow)" />
        <g font-family="sans-serif" font-size="12" text-anchor="middle">
          ${Array.from({length: 13}, (_, i) => i - 7).map(n => {
            const x = 200 + n * 25;
            return `<line x1="${x}" y1="75" x2="${x}" y2="85" stroke="black" /><text x="${x}" y="100">${n}</text>`;
          }).join('')}
        </g>
        
        <!-- Move 1: 0 to +3 -->
        <path d="M 200 70 Q 237.5 40 275 70" fill="none" stroke="blue" stroke-width="2" marker-end="url(#arrow)" />
        
        <!-- Move 2: +3 to -4 (length 7 left) -->
        <path d="M 275 65 Q 187.5 10 100 65" fill="none" stroke="red" stroke-width="2" marker-end="url(#arrow)" />
        
        <!-- Move 3: -4 to -5 (length 1 left) -->
        <path d="M 100 70 Q 87.5 60 75 70" fill="none" stroke="red" stroke-width="2" marker-end="url(#arrow)" />

        <!-- Result dashed line -->
        <path d="M 200 85 Q 137.5 130 75 85" fill="none" stroke="gray" stroke-width="1.5" stroke-dasharray="4,4" marker-end="url(#arrow)" />
      </svg>`
    },
    {
      "id": "ABSOLUTE_1_7_2",
      "category": "practice",
      "topic": "1.7. СОБИРАЊЕ НА ЦЕЛИ БРОЕВИ",
      "problem_type": "expression_calculation",
      "text_mk": "Една вечер во Москва температурата паѓа до –3 °C. До пладне следниот ден се прогнозира дека температурата ќе биде 15 °C. Пресметај го очекуваното зголемување на температурата.",
      "answer": "18"
    },
    {
      "id": "ABSOLUTE_1_7_3",
      "category": "practice",
      "topic": "1.7. СОБИРАЊЕ НА ЦЕЛИ БРОЕВИ",
      "problem_type": "expression_calculation",
      "text_mk": "Пресметај:",
      "parts": [
        { "part_id": "3a", "text_mk": "а)", "latex": "-3 + 8", "answer": "5" },
        { "part_id": "3b", "text_mk": "б)", "latex": "+7 - 14", "answer": "-7" },
        { "part_id": "3c", "text_mk": "в)", "latex": "-9 + (-19) + 17", "answer": "-11" },
        { "part_id": "3d", "text_mk": "г)", "latex": "(-1) + (+2) + (-3) + (+4)", "answer": "2" },
        { "part_id": "3e", "text_mk": "д)", "latex": "(-6) + (+6) + (-5) + (+5)", "answer": "0" },
        { "part_id": "3f", "text_mk": "ѓ)", "latex": "(-1001) + (+1) + (-1002) + (+2) + (-1003) + (+3)", "answer": "-3000" }
      ]
    },
    {
      "id": "ABSOLUTE_1_7_4",
      "category": "practice",
      "topic": "1.7. СОБИРАЊЕ НА ЦЕЛИ БРОЕВИ",
      "problem_type": "expression_calculation",
      "text_mk": "Нена посакала да купи нов компјутер. Таа располагала со 40 000 денари лични средства и 30 000 денари дозволено пречекорување од банката. Компјутерот чинел 56 000 денари. Доколку го купи компјутерот, колкаво ќе биде салдото на нејзината сметка?",
      "answer": "-16000"
    },
    {
      "id": "ABSOLUTE_1_7_5",
      "category": "practice",
      "topic": "1.7. СОБИРАЊЕ НА ЦЕЛИ БРОЕВИ",
      "problem_type": "multiple_choice",
      "text_mk": "При решавањето на изразот (–7) + 5 + (–3), кој од понудените начини на решавање е неточен?",
      "options": [
        { "option_id": "a", "latex": "\\begin{aligned} (-7) + 5 + (-3) &= (-12) + (-3) \\\\ &= -15 \\end{aligned}" },
        { "option_id": "b", "latex": "\\begin{aligned} (-7) + 5 + (-3) &= (-2) + (-3) \\\\ &= -5 \\end{aligned}" },
        { "option_id": "c", "latex": "\\begin{aligned} (-7) + 5 + (-3) &= (-7) + (5 - 3) \\\\ &= (-7) + 2 = -5 \\end{aligned}" },
        { "option_id": "d", "latex": "\\begin{aligned} (-7) + 5 + (-3) &= (-7 - 3) + 5 \\\\ &= (-10) + 5 = -5 \\end{aligned}" }
      ],
      "answer": "a"
    },
    // --- CHALLENGES ---
    {
      "id": "PROBLEM_1_7_1",
      "category": "challenge",
      "topic": "1.7. СОБИРАЊЕ НА ЦЕЛИ БРОЕВИ",
      "problem_type": "expression_calculation",
      "text_mk": "Валентина скока од платформа која е 8 метри над нивото на водата. Таа се спушта 14 метри пред да се врати на површината на водата. Ако почетната позиција на платформата е претставена со бројот 8, со кој број ќе е претставена нејзината најниска позиција додека нурка под водата?",
      "svg": `<svg viewBox="0 0 400 500" class="w-full max-w-sm mx-auto" xmlns="http://www.w3.org/2000/svg">
        <!-- Sky -->
        <rect width="400" height="250" fill="#fcfbf7" />
        
        <!-- Water -->
        <rect y="250" width="400" height="250" fill="#6baed6" opacity="0.9" />
        <path d="M0 250 Q 50 240, 100 250 T 200 250 T 300 250 T 400 250" fill="#6baed6" stroke="none" />
        
        <!-- Platform (Left) at ~8m high -->
        <rect x="0" y="80" width="120" height="20" fill="#999" />
        <rect x="0" y="100" width="60" height="400" fill="#bbb" />
        
        <!-- Distance Marker 8m -->
        <line x1="140" y1="80" x2="140" y2="250" stroke="#333" stroke-width="2" marker-start="url(#dot)" marker-end="url(#dot)" />
        <text x="150" y="170" font-family="sans-serif" font-size="24" fill="#333">8 m</text>
        
        <!-- Distance Marker 14m -->
        <line x1="330" y1="280" x2="330" y2="400" stroke="#333" stroke-width="2" marker-end="url(#arrow)" />
        <text x="340" y="340" font-family="sans-serif" font-size="24" fill="#333">14 m</text>
        
        <!-- Diver 1 (Jumping) -->
        <g transform="translate(140, 60) rotate(45)">
           <circle cx="10" cy="0" r="10" fill="#f5d0b0" /> <!-- Head -->
           <path d="M0 10 L20 10 L25 50 L-5 50 Z" fill="#d32f2f" /> <!-- Body -->
           <path d="M25 50 L35 90 M-5 50 L-15 90" stroke="#f5d0b0" stroke-width="8" stroke-linecap="round" /> <!-- Legs -->
           <path d="M20 10 L40 -10 M0 10 L-20 -10" stroke="#f5d0b0" stroke-width="6" stroke-linecap="round" /> <!-- Arms -->
        </g>

        <!-- Diver 2 (Underwater) at lowest point -->
        <g transform="translate(260, 400) rotate(-10)">
           <circle cx="10" cy="0" r="10" fill="#f5d0b0" /> <!-- Head -->
           <path d="M0 10 L20 10 L25 50 L-5 50 Z" fill="#d32f2f" /> <!-- Body -->
           <path d="M20 10 L25 -20 M0 10 L-5 -20" stroke="#f5d0b0" stroke-width="6" stroke-linecap="round" /> <!-- Arms Up -->
        </g>
        
        <!-- Trajectory Line -->
        <path d="M 120 80 Q 250 0, 300 250 Q 310 320, 270 410" fill="none" stroke="#555" stroke-width="2" stroke-dasharray="8,8" />
        
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M 0 0 L 10 5 L 0 10 z" />
          </marker>
           <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="4" markerHeight="4">
            <circle cx="5" cy="5" r="5" fill="black" />
          </marker>
        </defs>
      </svg>`,
      "answer": "-6"
    },
    {
      "id": "PROBLEM_1_7_2",
      "category": "challenge",
      "topic": "1.7. СОБИРАЊЕ НА ЦЕЛИ БРОЕВИ",
      "problem_type": "text_input",
      "text_mk": "Нина и Бојана играат игра разменувајќи жетони на кои се напишани цели броеви. За збирот на броевите на жетоните што ги поседува секоја од нив да биде еднаков, кој жетон треба Бојана да ѝ го даде на Нина?",
      "svg": `<svg viewBox="0 0 600 250" xmlns="http://www.w3.org/2000/svg">
        <!-- Table -->
        <path d="M 50 180 L 550 180 L 580 240 L 20 240 Z" fill="#fff" stroke="#000" stroke-width="2" />
        
        <!-- Nina (Left) -->
        <g transform="translate(150, 80)">
          <!-- Head -->
          <path d="M -30 0 Q -30 -30 0 -30 Q 30 -30 30 0 Q 30 20 20 30 L -20 30 Q -30 20 -30 0" fill="#fff" stroke="#000" stroke-width="2" />
          <!-- Hair -->
          <path d="M -35 10 Q -40 -40 0 -45 Q 40 -40 35 10" fill="black" />
          <!-- Body -->
          <path d="M -35 30 L -45 100 L 45 100 L 35 30 Z" fill="#fff" stroke="#000" stroke-width="2" />
          <text x="0" y="-55" text-anchor="middle" font-weight="bold" font-size="16">НИНА</text>
        </g>

        <!-- Bojana (Right) -->
        <g transform="translate(450, 80)">
          <!-- Head -->
          <path d="M -30 0 Q -30 -30 0 -30 Q 30 -30 30 0 Q 30 20 20 30 L -20 30 Q -30 20 -30 0" fill="#fff" stroke="#000" stroke-width="2" />
          <!-- Hair (Longer) -->
          <path d="M -35 10 Q -40 -50 0 -45 Q 50 -40 45 40 L 35 0" fill="none" stroke="black" stroke-width="3" />
          <!-- Body -->
          <path d="M -35 30 L -45 100 L 45 100 L 35 30 Z" fill="black" stroke="#000" stroke-width="2" />
          <text x="0" y="-55" text-anchor="middle" font-weight="bold" font-size="16">БОЈАНА</text>
        </g>

        <!-- Tokens Nina -->
        <g transform="translate(100, 210)">
           <circle cx="0" cy="0" r="18" fill="#fff" stroke="#000" stroke-width="2" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="14">-5</text>
        </g>
        <g transform="translate(150, 200)">
           <circle cx="0" cy="0" r="18" fill="#fff" stroke="#000" stroke-width="2" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="14">+2</text>
        </g>
        <g transform="translate(120, 230)">
           <circle cx="0" cy="0" r="18" fill="#fff" stroke="#000" stroke-width="2" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="14">+4</text>
        </g>

        <!-- Tokens Bojana -->
        <g transform="translate(380, 200)">
           <circle cx="0" cy="0" r="18" fill="#fff" stroke="#000" stroke-width="2" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="14">-1</text>
        </g>
        <g transform="translate(430, 210)">
           <circle cx="0" cy="0" r="18" fill="#fff" stroke="#000" stroke-width="2" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="14">+3</text>
        </g>
        <g transform="translate(480, 200)">
           <circle cx="0" cy="0" r="18" fill="#fff" stroke="#000" stroke-width="2" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="14">+5</text>
        </g>
        <g transform="translate(405, 230)">
           <circle cx="0" cy="0" r="18" fill="#fff" stroke="#000" stroke-width="2" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="14">-6</text>
        </g>
        <g transform="translate(455, 230)">
           <circle cx="0" cy="0" r="18" fill="#fff" stroke="#000" stroke-width="2" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" font-size="14">-2</text>
        </g>

      </svg>`,
      "answer": "-1"
    },
    {
      "id": "PROBLEM_1_7_3",
      "category": "challenge",
      "topic": "1.7. СОБИРАЊЕ НА ЦЕЛИ БРОЕВИ",
      "problem_type": "multiple_choice",
      "text_mk": "Продавач на балони продава балони на кои е напишан по еден цел број. На едно лице кое ќе купи три балони, чиј збир на броевите е нула, продавачот му го подарува четвртиот балон. Лицето ги избрало балоните прикажани долу. Кој број е напишан на балонот што го добива како подарок?",
      "options": [
          { "option_id": "a", "text_mk": "+3" },
          { "option_id": "b", "text_mk": "-5" },
          { "option_id": "c", "text_mk": "+4" },
          { "option_id": "d", "text_mk": "+2" }
      ],
      "svg": `<svg viewBox="0 0 400 120" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
         <g transform="translate(50, 60)">
           <circle cx="0" cy="0" r="30" fill="#FF9800" opacity="0.9" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" fill="white" font-size="18">+3</text>
           <line x1="0" y1="30" x2="0" y2="55" stroke="#ccc" />
         </g>
         <g transform="translate(130, 50)">
           <circle cx="0" cy="0" r="30" fill="#F44336" opacity="0.9" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" fill="white" font-size="18">-5</text>
           <line x1="0" y1="30" x2="0" y2="65" stroke="#ccc" />
         </g>
         <g transform="translate(210, 60)">
           <circle cx="0" cy="0" r="30" fill="#4CAF50" opacity="0.9" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" fill="white" font-size="18">+4</text>
           <line x1="0" y1="30" x2="0" y2="55" stroke="#ccc" />
         </g>
         <g transform="translate(290, 50)">
           <circle cx="0" cy="0" r="30" fill="#2196F3" opacity="0.9" />
           <text x="0" y="5" text-anchor="middle" font-weight="bold" fill="white" font-size="18">+2</text>
           <line x1="0" y1="30" x2="0" y2="65" stroke="#ccc" />
         </g>
      </svg>`,
      "answer": "c"
    }
];

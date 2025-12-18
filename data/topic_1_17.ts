
import { Problem } from '../types';

export const PROBLEMS_1_17: Problem[] = [
  {
    "id": "WHOLE_PARTS_1_17_1",
    "category": "practice",
    "topic": "1.17. ОПИШУВАЊЕ, ПРЕСМЕТУВАЊЕ И СПОРЕДУВАЊЕ ДЕЛОВИ ОД ЦЕЛИНАТА СО ДРОПКИ И ПРОЦЕНТИ",
    "problem_type": "text_input",
    "text_mk": "Пронајди колку проценти од секоја фигура е обоениот дел и запиши го на празното место.",
    "svg": `<svg viewBox="0 0 800 180" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <!-- Figure 1: Square 1/4 -->
        <g transform="translate(50, 30)">
            <rect x="0" y="0" width="100" height="100" fill="white" stroke="black" stroke-width="2"/>
            <rect x="0" y="0" width="50" height="50" fill="#4CAF50" stroke="black" stroke-width="1"/>
            <line x1="50" y1="0" x2="50" y2="100" stroke="black"/>
            <line x1="0" y1="50" x2="100" y2="50" stroke="black"/>
            <text x="50" y="125" text-anchor="middle" font-weight="bold" font-size="14">1/4</text>
        </g>
        <!-- Figure 2: Rectangle 3/5 -->
        <g transform="translate(250, 30)">
            <rect x="0" y="0" width="100" height="100" fill="white" stroke="black" stroke-width="2"/>
            <rect x="0" y="0" width="60" height="100" fill="#2196F3" stroke="black" stroke-width="1"/>
            <line x1="20" y1="0" x2="20" y2="100" stroke="black"/>
            <line x1="40" y1="0" x2="40" y2="100" stroke="black"/>
            <line x1="60" y1="0" x2="60" y2="100" stroke="black"/>
            <line x1="80" y1="0" x2="80" y2="100" stroke="black"/>
            <text x="50" y="125" text-anchor="middle" font-weight="bold" font-size="14">3/5</text>
        </g>
        <!-- Figure 3: Circle 3/4 -->
        <g transform="translate(450, 30)">
            <circle cx="50" cy="50" r="50" fill="white" stroke="black" stroke-width="2"/>
            <path d="M50,50 L50,0 A50,50 0 1,1 0,50 Z" fill="#FF9800" stroke="black"/>
            <text x="50" y="125" text-anchor="middle" font-weight="bold" font-size="14">3/4</text>
        </g>
        <!-- Figure 4: Rectangle 1/2 -->
        <g transform="translate(650, 30)">
            <rect x="0" y="0" width="100" height="100" fill="white" stroke="black" stroke-width="2"/>
            <rect x="0" y="0" width="50" height="100" fill="#9C27B0" stroke="black" stroke-width="1"/>
            <line x1="50" y1="0" x2="50" y2="100" stroke="black"/>
            <text x="50" y="125" text-anchor="middle" font-weight="bold" font-size="14">1/2</text>
        </g>
    </svg>`,
    "parts": [
      { "part_id": "1a", "text_mk": "Прва фигура:", "answer": "25%" },
      { "part_id": "1b", "text_mk": "Втора фигура:", "answer": "60%" },
      { "part_id": "1c", "text_mk": "Трета фигура:", "answer": "75%" },
      { "part_id": "1d", "text_mk": "Четврта фигура:", "answer": "50%" }
    ]
  },
  {
    "id": "WHOLE_PARTS_1_17_2",
    "category": "practice",
    "topic": "1.17. ОПИШУВАЊЕ, ПРЕСМЕТУВАЊЕ И СПОРЕДУВАЊЕ ДЕЛОВИ ОД ЦЕЛИНАТА СО ДРОПКИ И ПРОЦЕНТИ",
    "problem_type": "expression_calculation",
    "text_mk": "Пресметај колку е:",
    "parts": [
      {
        "part_id": "2a",
        "text_mk": "а) 20% од 25?",
        "latex": "0.20 \\cdot 25",
        "answer": "5"
      },
      {
        "part_id": "2b",
        "text_mk": "б) 100% од 10?",
        "latex": "1.00 \\cdot 10",
        "answer": "10"
      },
      {
        "part_id": "2c",
        "text_mk": "в) 0,5% од 200?",
        "latex": "0.005 \\cdot 200",
        "answer": "1"
      },
      {
        "part_id": "2d",
        "text_mk": "г) 200% од 80?",
        "latex": "2.00 \\cdot 80",
        "answer": "160"
      }
    ]
  },
  {
    "id": "WHOLE_PARTS_1_17_3",
    "category": "practice",
    "topic": "1.17. ОПИШУВАЊЕ, ПРЕСМЕТУВАЊЕ И СПОРЕДУВАЊЕ ДЕЛОВИ ОД ЦЕЛИНАТА СО ДРОПКИ И ПРОЦЕНТИ",
    "problem_type": "expression_calculation",
    "text_mk": "Најди го бројот ако:",
    "parts": [
      {
        "part_id": "3a",
        "text_mk": "а) 50% од него се 12?",
        "latex": "12 : 0.50",
        "answer": "24"
      },
      {
        "part_id": "3b",
        "text_mk": "б) 15% од него се 30?",
        "latex": "30 : 0.15",
        "answer": "200"
      },
      {
        "part_id": "3c",
        "text_mk": "в) 10% од него е 1?",
        "latex": "1 : 0.10",
        "answer": "10"
      },
      {
        "part_id": "3d",
        "text_mk": "г) 5% се 40?",
        "latex": "40 : 0.05",
        "answer": "800"
      }
    ]
  },
  {
    "id": "WHOLE_PARTS_1_17_4",
    "category": "practice",
    "topic": "1.17. ОПИШУВАЊЕ, ПРЕСМЕТУВАЊЕ И СПОРЕДУВАЊЕ ДЕЛОВИ ОД ЦЕЛИНАТА СО ДРОПКИ И ПРОЦЕНТИ",
    "problem_type": "text_input",
    "text_mk": "Во една кутија има 300 разнобојни топчиња. Сините топчиња сочинуваат 4/15 од сите топчиња во кутијата, црвените топчиња се 3/20, а жолтите 2/25 од сите топчиња во кутијата.",
    "parts": [
      {
        "part_id": "4a",
        "text_mk": "а) Колку топчиња од секоја боја има во кутијата? (Сини, Црвени, Жолти)",
        "answer": "80, 45, 24"
      },
      {
        "part_id": "4b",
        "text_mk": "б) Колку проценти се црвените топчиња, а колку жолтите? (Црвени, Жолти)",
        "answer": "15%, 8%"
      },
      {
        "part_id": "4c",
        "text_mk": "в) Колку проценти се сини топчиња?",
        "answer": "26.67%"
      }
    ]
  },
  {
    "id": "WHOLE_PARTS_1_17_5",
    "category": "practice",
    "topic": "1.17. ОПИШУВАЊЕ, ПРЕСМЕТУВАЊЕ И СПОРЕДУВАЊЕ ДЕЛОВИ ОД ЦЕЛИНАТА СО ДРОПКИ И ПРОЦЕНТИ",
    "problem_type": "text_input",
    "text_mk": "Јана продала 3/5 од своите колачиња. Колку проценти од колачињата продала Јана? Колку проценти останале? (Продала, Останале)",
    "answer": "60%, 40%"
  },

  // --- CHALLENGES ---

  {
    "id": "CHALLENGE_1_17_1",
    "category": "challenge",
    "topic": "1.17. ОПИШУВАЊЕ, ПРЕСМЕТУВАЊЕ И СПОРЕДУВАЊЕ ДЕЛОВИ ОД ЦЕЛИНАТА СО ДРОПКИ И ПРОЦЕНТИ",
    "problem_type": "text_input",
    "text_mk": "Сите страни на еден шестаголник се со еднаква должина од 5 cm. Секоја страна на овој шестаголник се зголемува за 1 cm. Колку проценти е промената во периметарот на шестаголникот?",
    "answer": "20%"
  },
  {
    "id": "CHALLENGE_1_17_2",
    "category": "challenge",
    "topic": "1.17. ОПИШУВАЊЕ, ПРЕСМЕТУВАЊЕ И СПОРЕДУВАЊЕ ДЕЛОВИ ОД ЦЕЛИНАТА СО ДРОПКИ И ПРОЦЕНТИ",
    "problem_type": "text_input",
    "text_mk": "На сликата се прикажани возила паркирани во ист ред во еден паркинг. Информациите за растојанијата помеѓу возилата се дадени подолу. Растојанието помеѓу автомобилот и камионот е 20% од должината на камионот. Растојанието помеѓу камионот и карванот е 8% помало од должината на карванот. Растојанието помеѓу карванот и автобусот е 5% од збирот на должините на карванот и автобусот. Kолкаво е најголемото растојание помеѓу две соседни возила кои се наредени едно зад друго?",
    "note_mk": "Во моментов недостасуваат должините на возилата за пресметка. Ова е визуелен приказ.",
    "svg": `<svg viewBox="0 0 800 150" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <marker id="arrow" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <path d="M0,0 L10,5 L0,10" fill="none" stroke="black" />
            </marker>
        </defs>
        <!-- Ground -->
        <line x1="0" y1="130" x2="800" y2="130" stroke="gray" stroke-width="4"/>
        
        <!-- Car -->
        <g transform="translate(50, 90)">
            <rect x="0" y="10" width="60" height="20" fill="#E91E63" rx="5"/>
            <rect x="10" y="0" width="40" height="15" fill="#E91E63" rx="2"/>
            <circle cx="15" cy="30" r="8" fill="#333"/>
            <circle cx="45" cy="30" r="8" fill="#333"/>
        </g>
        
        <!-- Truck -->
        <g transform="translate(150, 70)">
            <rect x="0" y="0" width="80" height="50" fill="#3F51B5" rx="2"/>
            <rect x="82" y="20" width="25" height="30" fill="#3F51B5" rx="2"/>
            <circle cx="20" cy="50" r="10" fill="#333"/>
            <circle cx="60" cy="50" r="10" fill="#333"/>
            <circle cx="95" cy="50" r="10" fill="#333"/>
        </g>
        
        <!-- Caravan -->
        <g transform="translate(300, 80)">
            <rect x="0" y="0" width="70" height="40" fill="#FFC107" rx="5"/>
            <circle cx="35" cy="40" r="10" fill="#333"/>
        </g>
        
        <!-- Bus -->
        <g transform="translate(450, 60)">
            <rect x="0" y="0" width="120" height="60" fill="#009688" rx="5"/>
            <circle cx="30" cy="60" r="10" fill="#333"/>
            <circle cx="90" cy="60" r="10" fill="#333"/>
            <!-- Windows -->
            <rect x="10" y="10" width="20" height="20" fill="#E0F2F1"/>
            <rect x="40" y="10" width="20" height="20" fill="#E0F2F1"/>
            <rect x="70" y="10" width="20" height="20" fill="#E0F2F1"/>
        </g>
        
        <!-- Dimension Lines -->
        <line x1="110" y1="100" x2="150" y2="100" stroke="black" stroke-dasharray="4"/>
        <text x="130" y="95" text-anchor="middle" font-size="10">d1</text>
        
        <line x1="257" y1="100" x2="300" y2="100" stroke="black" stroke-dasharray="4"/>
        <text x="278" y="95" text-anchor="middle" font-size="10">d2</text>
        
        <line x1="370" y1="100" x2="450" y2="100" stroke="black" stroke-dasharray="4"/>
        <text x="410" y="95" text-anchor="middle" font-size="10">d3</text>
    </svg>`,
    "answer": "data_missing"
  },
  {
    "id": "CHALLENGE_1_17_3",
    "category": "challenge",
    "topic": "1.17. ОПИШУВАЊЕ, ПРЕСМЕТУВАЊЕ И СПОРЕДУВАЊЕ ДЕЛОВИ ОД ЦЕЛИНАТА СО ДРОПКИ И ПРОЦЕНТИ",
    "problem_type": "multiple_choice",
    "text_mk": "На отсечката AB се нацртани три рамнострани триаголници како на сликата. Периметарот на триаголникот A е 150 cm. Должината на страната на триаголникот Б е 80% од должината на страната на триаголникот А. Должината на страната на триаголникот В е 25% помала од должината на страната на триаголникот Б. Колку сантиметри е должината на отсечката МN?",
    "svg": `<svg viewBox="0 0 600 240" class="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                <path d="M0,0 L10,5 L0,10" fill="#F44336" />
            </marker>
        </defs>
        <!-- Line AB -->
        <line x1="50" y1="180" x2="550" y2="180" stroke="black" stroke-width="2"/>
        <text x="40" y="185" font-weight="bold">A</text>
        <text x="560" y="185" font-weight="bold">B</text>
        
        <!-- Triangle A (Side 100px) -->
        <path d="M50,180 L100,93.4 L150,180 Z" fill="#FFF176" stroke="black" stroke-width="2"/>
        <text x="100" y="150" text-anchor="middle" font-weight="bold" font-size="20">A</text>
        
        <!-- Triangle B (Side 80px) -->
        <path d="M150,180 L190,110.7 L230,180 Z" fill="#81C784" stroke="black" stroke-width="2"/>
        <text x="190" y="155" text-anchor="middle" font-weight="bold" font-size="18">Б</text>
        
        <!-- Triangle V (Side 60px) -->
        <path d="M230,180 L260,128 L290,180 Z" fill="#64B5F6" stroke="black" stroke-width="2"/>
        <text x="260" y="160" text-anchor="middle" font-weight="bold" font-size="16">В</text>
        
        <!-- Points M and N -->
        <circle cx="50" cy="180" r="4" fill="#F44336"/>
        <text x="50" y="200" font-weight="bold" fill="#F44336">M</text>
        
        <circle cx="290" cy="180" r="4" fill="#F44336"/>
        <text x="290" y="200" font-weight="bold" fill="#F44336">N</text>
        
        <!-- Bracket for MN -->
        <line x1="50" y1="210" x2="290" y2="210" stroke="#F44336" stroke-width="2" marker-start="url(#arrowRed)" marker-end="url(#arrowRed)"/>
        <text x="170" y="230" text-anchor="middle" fill="#F44336" font-weight="bold">?</text>
    </svg>`,
    "options": [
      { "option_id": "a", "text_mk": "120" },
      { "option_id": "b", "text_mk": "130" },
      { "option_id": "c", "text_mk": "140" },
      { "option_id": "d", "text_mk": "150" }
    ],
    "answer": "a"
  }
];

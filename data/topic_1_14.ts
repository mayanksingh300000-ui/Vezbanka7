
import { Problem } from '../types';

export const PROBLEMS_1_14: Problem[] = [
  // --- PRACTICE ---
  {
    "id": "SQUARES_1_14_1",
    "category": "practice",
    "topic": "1.14. КВАДРАТИ И КВАДРАТНИ КОРЕНИ НА ПРИРОДНИ БРОЕВИ ДО 100",
    "problem_type": "absolute_value_visual", 
    "text_mk": "Пресметај ги квадратите на дадените броеви и внеси го резултатот во соодветното поле:",
    "custom_visual_data": {
        "type": "value_cards",
        "description": "Квадрати на природни броеви",
        "items": [
           { "id": "sq_1", "latex": "1^2 =", "answer": "1" },
           { "id": "sq_2", "latex": "2^2 =", "answer": "4" },
           { "id": "sq_3", "latex": "3^2 =", "answer": "9" },
           { "id": "sq_4", "latex": "4^2 =", "answer": "16" },
           { "id": "sq_5", "latex": "5^2 =", "answer": "25" },
           { "id": "sq_6", "latex": "6^2 =", "answer": "36" },
           { "id": "sq_7", "latex": "7^2 =", "answer": "49" },
           { "id": "sq_8", "latex": "8^2 =", "answer": "64" },
           { "id": "sq_9", "latex": "9^2 =", "answer": "81" },
           { "id": "sq_10", "latex": "10^2 =", "answer": "100" },
           { "id": "sq_11", "latex": "11^2 =", "answer": "121" },
           { "id": "sq_12", "latex": "12^2 =", "answer": "144" },
           { "id": "sq_13", "latex": "13^2 =", "answer": "169" },
           { "id": "sq_14", "latex": "14^2 =", "answer": "196" },
           { "id": "sq_15", "latex": "15^2 =", "answer": "225" },
           { "id": "sq_20", "latex": "20^2 =", "answer": "400" },
           { "id": "sq_30", "latex": "30^2 =", "answer": "900" },
           { "id": "sq_40", "latex": "40^2 =", "answer": "1600" },
           { "id": "sq_50", "latex": "50^2 =", "answer": "2500" },
           { "id": "sq_60", "latex": "60^2 =", "answer": "3600" },
           { "id": "sq_70", "latex": "70^2 =", "answer": "4900" },
           { "id": "sq_80", "latex": "80^2 =", "answer": "6400" },
           { "id": "sq_90", "latex": "90^2 =", "answer": "8100" },
           { "id": "sq_100", "latex": "100^2 =", "answer": "10000" }
        ]
    }
  },
  {
    "id": "SQUARES_1_14_2",
    "category": "practice",
    "topic": "1.14. КВАДРАТИ И КВАДРАТНИ КОРЕНИ НА ПРИРОДНИ БРОЕВИ ДО 100",
    "problem_type": "text_input",
    "text_mk": "Провери ја вистинитоста на равенствата (одговори со 'Точно' или 'Неточно'):",
    "parts": [
      {
        "part_id": "2a",
        "text_mk": "а)",
        "latex": "10^2 + 11^2 + 12^2 = 13^2 + 14^2",
        "answer": "Точно"
      },
      {
        "part_id": "2b",
        "text_mk": "б)",
        "latex": "1^2 + 1,1^2 + 1,2^2 = 1,3^2 + 1,4^2",
        "answer": "Точно"
      }
    ]
  },
  {
    "id": "SQUARES_1_14_3",
    "category": "practice",
    "topic": "1.14. КВАДРАТИ И КВАДРАТНИ КОРЕНИ НА ПРИРОДНИ БРОЕВИ ДО 100",
    "problem_type": "expression_calculation",
    "text_mk": "Пресметај ја вредноста на изразите:",
    "parts": [
      {
        "part_id": "3a",
        "text_mk": "а)",
        "latex": "\\sqrt{16} + 3^2",
        "answer": "13"
      },
      {
        "part_id": "3b",
        "text_mk": "б)",
        "latex": "4^2 - \\sqrt{64}",
        "answer": "8"
      },
      {
        "part_id": "3c",
        "text_mk": "в)",
        "latex": "\\sqrt{1} + \\sqrt{4} + \\sqrt{9} + \\sqrt{16} + \\sqrt{25}",
        "answer": "15"
      },
      {
        "part_id": "3d",
        "text_mk": "г)",
        "latex": "\\sqrt{4+5} - \\sqrt{3 \\cdot 3}",
        "answer": "0"
      }
    ]
  },
  {
    "id": "SQUARES_1_14_4",
    "category": "practice",
    "topic": "1.14. КВАДРАТИ И КВАДРАТНИ КОРЕНИ НА ПРИРОДНИ БРОЕВИ ДО 100",
    "problem_type": "equation_solving",
    "text_mk": "Одреди го бројот x така што:",
    "parts": [
      {
        "part_id": "4a",
        "text_mk": "а)",
        "latex": "\\sqrt{x} = 9",
        "answer": "81"
      },
      {
        "part_id": "4b",
        "text_mk": "б)",
        "latex": "\\sqrt{x} = 4",
        "answer": "16"
      },
      {
        "part_id": "4c",
        "text_mk": "в)",
        "latex": "\\sqrt{x} = 10",
        "answer": "100"
      },
      {
        "part_id": "4d",
        "text_mk": "г)",
        "latex": "\\sqrt{x} = 20",
        "answer": "400"
      },
      {
        "part_id": "4e",
        "text_mk": "д)",
        "latex": "\\sqrt{x} = 30",
        "answer": "900"
      },
      {
        "part_id": "4f",
        "text_mk": "ѓ)",
        "latex": "\\sqrt{x} = 40",
        "answer": "1600"
      }
    ]
  },
  {
    "id": "SQUARES_1_14_5",
    "category": "practice",
    "topic": "1.14. КВАДРАТИ И КВАДРАТНИ КОРЕНИ НА ПРИРОДНИ БРОЕВИ ДО 100",
    "problem_type": "conditional_yes_no_equation",
    "text_mk": "Со разложување утврди дали бројот 46 225 е полн квадрат?",
    "parts": [
        {
            "part_id": "5_bool",
            "text_mk": "Дали е полн квадрат? (Да/Не)",
            "answer": "Да"
        },
        {
            "part_id": "5_val",
            "text_mk": "Запиши го како квадрат на број:",
            "latex": "46225 =",
            "latex_suffix": "^2",
            "answer": "215"
        }
    ]
  },

  // --- CHALLENGES ---

  {
    "id": "CHALLENGE_1_14_1",
    "category": "challenge",
    "topic": "1.14. КВАДРАТИ И КВАДРАТНИ КОРЕНИ НА ПРИРОДНИ БРОЕВИ ДО 100",
    "problem_type": "power_of_two",
    "text_mk": "Запиши ги како степен со основа 2 броевите (внеси го само степеновиот показател во малечкото квадратче горе):",
    "parts": [
      {
        "part_id": "P1a",
        "text_mk": "2",
        "answer": "1"
      },
      {
        "part_id": "P1b",
        "text_mk": "4",
        "answer": "2"
      },
      {
        "part_id": "P1c",
        "text_mk": "32",
        "answer": "5"
      },
      {
        "part_id": "P1d",
        "text_mk": "16",
        "answer": "4"
      },
      {
        "part_id": "P1e",
        "text_mk": "64",
        "answer": "6"
      },
      {
        "part_id": "P1f",
        "text_mk": "256",
        "answer": "8"
      }
    ]
  },
  {
    "id": "CHALLENGE_1_14_2",
    "category": "challenge",
    "topic": "1.14. КВАДРАТИ И КВАДРАТНИ КОРЕНИ НА ПРИРОДНИ БРОЕВИ ДО 100",
    "problem_type": "text_input",
    "text_mk": "Ако плоштината на еден квадрат е помеѓу $150 \\text{ cm}^2$ и $250 \\text{ cm}^2$, колку изнесува неговата страна?\n\n**Запиши ги сите можни природни броеви кои го исполнуваат овој услов.**",
    "answer": "13, 14, 15"
  },
  {
    "id": "CHALLENGE_1_14_3",
    "category": "challenge",
    "topic": "1.14. КВАДРАТИ И КВАДРАТНИ КОРЕНИ НА ПРИРОДНИ БРОЕВИ ДО 100",
    "problem_type": "text_input",
    "text_mk": "Дафне замислила број помеѓу $300$ и $400$. Квадратниот корен од тој број е цел број што ја содржи цифрата $6$.\n\n**Кој е бројот на Дафне?**",
    "answer": "361"
  },
  {
    "id": "CHALLENGE_1_14_4",
    "category": "challenge",
    "topic": "1.14. КВАДРАТИ И КВАДРАТНИ КОРЕНИ НА ПРИРОДНИ БРОЕВИ ДО 100",
    "problem_type": "multiple_choice",
    "text_mk": "Во еден маркет на производите им се даваат баркодови со 6 цифри. Софтверот ги множи цифрите оддесно кон лево со соодветните степени на бројот 3 и ги собира производите за да го добие ID бројот.\n\n**Пример:** Идентификациски број за баркод: $1 \\cdot 3^0 + 1 \\cdot 3^1 + 2 \\cdot 3^2 + 2 \\cdot 3^3 + 1 \\cdot 3^4 + 0 \\cdot 3^5 = 157$\n\n**Според ова, кој производ од скенерот долу има идентификациски број 37?**",
    "svg": `<svg viewBox="0 0 700 350" class="w-full max-w-3xl mx-auto" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="screenGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" style="stop-color:#e0f7fa;stop-opacity:1" />
          <stop offset="100%" style="stop-color:#b2ebf2;stop-opacity:1" />
        </linearGradient>
        <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
            </feMerge>
        </filter>
      </defs>

      <!-- Scanner Frame -->
      <rect x="10" y="10" width="680" height="330" rx="15" fill="#37474f" stroke="#263238" stroke-width="4" />
      
      <!-- Screen Area -->
      <rect x="30" y="60" width="640" height="260" rx="5" fill="url(#screenGrad)" stroke="#546e7a" stroke-width="2" />
      
      <!-- Header Bar -->
      <rect x="30" y="60" width="640" height="40" fill="#006064" opacity="0.9" />
      <text x="50" y="85" font-family="monospace" font-weight="bold" font-size="18" fill="#00e5ff" letter-spacing="2">BARCODE_SCANNER_V3.0</text>
      <circle cx="640" cy="80" r="6" fill="#00e5ff" filter="url(#glow)">
         <animate attributeName="opacity" values="0.5;1;0.5" dur="2s" repeatCount="indefinite" />
      </circle>

      <!-- Helper Scale (Powers of 3) -->
      <g transform="translate(130, 120)">
         <text x="-80" y="0" font-family="sans-serif" font-size="12" fill="#006064" font-weight="bold">ПОЗИЦИЈА:</text>
         <text x="0" y="0" text-anchor="middle" font-family="monospace" font-weight="bold" fill="#006064">3⁵</text>
         <text x="25" y="0" text-anchor="middle" font-family="monospace" font-weight="bold" fill="#006064">3⁴</text>
         <text x="50" y="0" text-anchor="middle" font-family="monospace" font-weight="bold" fill="#006064">3³</text>
         <text x="75" y="0" text-anchor="middle" font-family="monospace" font-weight="bold" fill="#006064">3²</text>
         <text x="100" y="0" text-anchor="middle" font-family="monospace" font-weight="bold" fill="#006064">3¹</text>
         <text x="125" y="0" text-anchor="middle" font-family="monospace" font-weight="bold" fill="#006064">3⁰</text>
         <line x1="-10" y1="5" x2="135" y2="5" stroke="#006064" stroke-width="1" />
      </g>

      <!-- Barcode A: 011210 -->
      <g transform="translate(50, 150)">
        <rect x="0" y="0" width="140" height="80" fill="white" stroke="#ccc" />
        <text x="5" y="20" font-weight="bold" font-size="14" fill="#333">A)</text>
        <g transform="translate(55, 15) scale(1.5, 1)">
            <rect x="0" y="0" width="2" height="35" fill="black" />
            <rect x="4" y="0" width="4" height="35" fill="black" />
            <rect x="10" y="0" width="2" height="35" fill="black" />
            <rect x="14" y="0" width="6" height="35" fill="black" />
            <rect x="22" y="0" width="2" height="35" fill="black" />
        </g>
        <text x="70" y="70" text-anchor="middle" font-family="monospace" font-size="18" letter-spacing="4">011210</text>
      </g>

      <!-- Barcode B: 001201 -->
      <g transform="translate(210, 150)">
        <rect x="0" y="0" width="140" height="80" fill="white" stroke="#ccc" />
        <text x="5" y="20" font-weight="bold" font-size="14" fill="#333">Б)</text>
         <g transform="translate(55, 15) scale(1.5, 1)">
            <rect x="2" y="0" width="1" height="35" fill="black" />
            <rect x="6" y="0" width="3" height="35" fill="black" />
            <rect x="12" y="0" width="5" height="35" fill="black" />
            <rect x="20" y="0" width="2" height="35" fill="black" />
        </g>
        <text x="70" y="70" text-anchor="middle" font-family="monospace" font-size="18" letter-spacing="4">001201</text>
      </g>

      <!-- Barcode C: 001101 -->
      <g transform="translate(370, 150)">
        <rect x="0" y="0" width="140" height="80" fill="white" stroke="#ccc" />
        <text x="5" y="20" font-weight="bold" font-size="14" fill="#333">В)</text>
         <g transform="translate(55, 15) scale(1.5, 1)">
            <rect x="0" y="0" width="4" height="35" fill="black" />
            <rect x="6" y="0" width="2" height="35" fill="black" />
            <rect x="10" y="0" width="6" height="35" fill="black" />
            <rect x="20" y="0" width="2" height="35" fill="black" />
        </g>
        <text x="70" y="70" text-anchor="middle" font-family="monospace" font-size="18" letter-spacing="4">001101</text>
      </g>

      <!-- Barcode D: 010100 -->
      <g transform="translate(530, 150)">
        <rect x="0" y="0" width="140" height="80" fill="white" stroke="#ccc" />
        <text x="5" y="20" font-weight="bold" font-size="14" fill="#333">Г)</text>
         <g transform="translate(55, 15) scale(1.5, 1)">
            <rect x="0" y="0" width="2" height="35" fill="black" />
            <rect x="4" y="0" width="2" height="35" fill="black" />
            <rect x="10" y="0" width="2" height="35" fill="black" />
            <rect x="14" y="0" width="2" height="35" fill="black" />
        </g>
        <text x="70" y="70" text-anchor="middle" font-family="monospace" font-size="18" letter-spacing="4">010100</text>
      </g>
      
      <!-- Scan Line Animation -->
      <rect x="30" y="130" width="640" height="2" fill="red" opacity="0.6">
        <animate attributeName="y" values="130;240;130" dur="3s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.6;0.2;0.6" dur="0.5s" repeatCount="indefinite" />
      </rect>

      <!-- Hint Text -->
      <text x="350" y="250" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#555" font-style="italic">Избери ја точната опција подолу за да го скенираш кодот.</text>

    </svg>`,
    "options": [
      {
        "option_id": "a",
        "text_mk": "A) 011210"
      },
      {
        "option_id": "b",
        "text_mk": "Б) 001201"
      },
      {
        "option_id": "c",
        "text_mk": "В) 001101"
      },
      {
        "option_id": "d",
        "text_mk": "Г) 010100"
      }
    ],
    "answer": "c"
  }
];


import { Problem } from '../types';

export const PROBLEMS_1_10: Problem[] = [
  // --- PRACTICE ---
  {
    "id": "MULTIPLICATION_1_10_1",
    "category": "practice",
    "topic": "1.10. МНОЖЕЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "text_input",
    "text_mk": "Одреди дали следните изрази ќе бидат позитивни или негативни (напиши **Позитивен** или **Негативен**):",
    "parts": [
      {
        "part_id": "1a",
        "text_mk": "а)",
        "latex": "(-147) \\cdot 183",
        "answer": "Негативен"
      },
      {
        "part_id": "1b",
        "text_mk": "б)",
        "latex": "(-151) \\cdot (-185)",
        "answer": "Позитивен"
      },
      {
        "part_id": "1c",
        "text_mk": "в)",
        "latex": "(-180) \\cdot (-168)",
        "answer": "Позитивен"
      },
      {
        "part_id": "1d",
        "text_mk": "г)",
        "latex": "157 \\cdot (-142)",
        "answer": "Негативен"
      }
    ]
  },
  {
    "id": "MULTIPLICATION_1_10_2",
    "category": "practice",
    "topic": "1.10. МНОЖЕЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "equation_solving",
    "text_mk": "Пополни со цел број така што да биде точно равенството:",
    "parts": [
      {
        "part_id": "2a",
        "text_mk": "а)",
        "latex_suffix": "\\cdot (-5) = 55",
        "answer": "-11"
      },
      {
        "part_id": "2b",
        "text_mk": "б)",
        "latex": "-6 \\cdot",
        "latex_suffix": "= -66",
        "answer": "11"
      },
      {
        "part_id": "2c",
        "text_mk": "в)",
        "latex_suffix": "\\cdot 8 = -56",
        "answer": "-7"
      },
      {
        "part_id": "2d",
        "text_mk": "г)",
        "latex": "7 \\cdot",
        "latex_suffix": "= -84",
        "answer": "-12"
      }
    ]
  },
  {
    "id": "MULTIPLICATION_1_10_3",
    "category": "practice",
    "topic": "1.10. МНОЖЕЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "equation_solving",
    "text_mk": "Пронајди ја вредноста на n во следните изјави:",
    "parts": [
      {
        "part_id": "3a",
        "text_mk": "а. Бројот n помножен со –3 дава 21.",
        "answer": "-7"
      },
      {
        "part_id": "3b",
        "text_mk": "б. Бројот n помножен со –10 дава –40.",
        "answer": "4"
      }
    ]
  },
  {
    "id": "MULTIPLICATION_1_10_4",
    "category": "practice",
    "topic": "1.10. МНОЖЕЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "expression_calculation",
    "text_mk": "Нека –4 е најмал од трите последователни цели броеви.\n\n**Пресметај го нивниот производ.**",
    "answer": "-24"
  },
  {
    "id": "MULTIPLICATION_1_10_5",
    "category": "practice",
    "topic": "1.10. МНОЖЕЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "expression_calculation",
    "text_mk": "Најди го производот:",
    "parts": [
      {
        "part_id": "5a",
        "text_mk": "а)",
        "latex": "(-1) \\cdot (+10) \\cdot (-100) \\cdot (+1000)",
        "answer": "1000000"
      },
      {
        "part_id": "5b",
        "text_mk": "б)",
        "latex": "10 \\cdot (-10) \\cdot 10 \\cdot (-10)",
        "answer": "10000"
      },
      {
        "part_id": "5c",
        "text_mk": "в)",
        "latex": "5 \\cdot 4 \\cdot 3 \\cdot 2 \\cdot 1",
        "answer": "120"
      },
      {
        "part_id": "5d",
        "text_mk": "г)",
        "latex": "(-5) \\cdot (-4) \\cdot (-3) \\cdot (-2) \\cdot (-1)",
        "answer": "-120"
      }
    ]
  },
  
  // --- CHALLENGES ---
  
  {
    "id": "CHALLENGE_1_10_1",
    "category": "challenge",
    "topic": "1.10. МНОЖЕЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "text_input",
    "text_mk": "На сликата се прикажани две торби во кои има вкупно осум топчиња. Од овие торби е земено по едно топче (едно од Торба А, едно од Торба Б). Производот на броевите напишани на земените топчиња е –12.\n\n**Колку изнесува најмалиот можен ЗБИР на овие два броја?**",
    "answer": "-4",
    "svg": `<svg viewBox="0 0 500 220" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Bag A -->
      <g transform="translate(80, 20)">
         <path d="M10 40 Q 50 0, 90 40 L 90 140 Q 50 160, 10 140 Z" fill="#FFCC80" stroke="#E65100" stroke-width="3" />
         <path d="M10 40 Q 50 60, 90 40" fill="none" stroke="#E65100" stroke-width="2" />
         <text x="50" y="180" text-anchor="middle" font-weight="bold" font-size="16">Торба А</text>
         
         <!-- Balls inside A: {3, -4, 2, 6} -->
         <circle cx="35" cy="70" r="18" fill="white" stroke="#E65100" />
         <text x="35" y="75" text-anchor="middle" font-weight="bold">3</text>
         
         <circle cx="70" cy="90" r="18" fill="white" stroke="#E65100" />
         <text x="70" y="95" text-anchor="middle" font-weight="bold">-4</text>
         
         <circle cx="30" cy="115" r="18" fill="white" stroke="#E65100" />
         <text x="30" y="120" text-anchor="middle" font-weight="bold">2</text>
         
         <circle cx="75" cy="55" r="15" fill="white" stroke="#E65100" />
         <text x="75" y="60" text-anchor="middle" font-weight="bold">6</text>
      </g>

      <!-- Bag B -->
      <g transform="translate(300, 20)">
         <path d="M10 40 Q 50 0, 90 40 L 90 140 Q 50 160, 10 140 Z" fill="#90CAF9" stroke="#1565C0" stroke-width="3" />
         <path d="M10 40 Q 50 60, 90 40" fill="none" stroke="#1565C0" stroke-width="2" />
         <text x="50" y="180" text-anchor="middle" font-weight="bold" font-size="16">Торба Б</text>

         <!-- Balls inside B: {-4, 3, -6, -2} -->
         <circle cx="35" cy="70" r="18" fill="white" stroke="#1565C0" />
         <text x="35" y="75" text-anchor="middle" font-weight="bold">-4</text>
         
         <circle cx="70" cy="90" r="18" fill="white" stroke="#1565C0" />
         <text x="70" y="95" text-anchor="middle" font-weight="bold">3</text>
         
         <circle cx="30" cy="115" r="18" fill="white" stroke="#1565C0" />
         <text x="30" y="120" text-anchor="middle" font-weight="bold">-6</text>
         
         <circle cx="75" cy="55" r="15" fill="white" stroke="#1565C0" />
         <text x="75" y="60" text-anchor="middle" font-weight="bold">-2</text>
      </g>
    </svg>`
  },
  {
    "id": "CHALLENGE_1_10_2",
    "category": "challenge",
    "topic": "1.10. МНОЖЕЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "expression_calculation",
    "text_mk": "Марко фрла 12 стрели кон метата прикажана на сликата. \n* Секое поле со **позитивен** цел број го погодува по **двапати**.\n* Секое поле со **негативен** цел број го погодува по **трипати**.\n\nЗа секое фрлање, Марко ги добива поените што се напишани на погоденото поле. Колку вкупно поени освоил Марко?",
    "svg": `<svg viewBox="0 0 400 350" class="w-full max-w-md mx-auto" xmlns="http://www.w3.org/2000/svg">
      <!-- Background Frame (Value: -10) -->
      <rect x="50" y="25" width="300" height="300" fill="#bdbdbd" stroke="black" stroke-width="2" />
      <text x="200" y="50" text-anchor="middle" font-weight="bold" font-size="18">-10</text>
      
      <!-- Inner Square Frame (Value: -2) -->
      <rect x="80" y="60" width="240" height="230" fill="white" stroke="black" stroke-width="2" />
      <text x="200" y="80" text-anchor="middle" font-weight="bold" font-size="18">-2</text>
      
      <!-- Outer Circle (Value: 6) -->
      <circle cx="200" cy="180" r="90" fill="#bdbdbd" stroke="black" stroke-width="2" />
      <text x="200" y="115" text-anchor="middle" font-weight="bold" font-size="18">6</text>
      
      <!-- Middle Circle (Value: 8) -->
      <circle cx="200" cy="180" r="60" fill="white" stroke="black" stroke-width="2" />
      <text x="200" y="145" text-anchor="middle" font-weight="bold" font-size="18">8</text>
      
      <!-- Inner Circle (Value: 12) -->
      <circle cx="200" cy="180" r="30" fill="#9e9e9e" stroke="black" stroke-width="2" />
      <text x="200" y="185" text-anchor="middle" font-weight="bold" font-size="18" fill="black">12</text>
    </svg>`,
    "answer": "16" 
    // Logic:
    // Positives: 12, 8, 6. Hit 2 times each. Sum = 26 * 2 = 52.
    // Negatives: -2, -10. Hit 3 times each. Sum = -12 * 3 = -36.
    // Total = 52 - 36 = 16.
  },
  {
    "id": "CHALLENGE_1_10_3",
    "category": "challenge",
    "topic": "1.10. МНОЖЕЊЕ ЦЕЛИ БРОЕВИ",
    "problem_type": "text_input",
    "text_mk": "Во една игра се врти тркало на среќа. Кога тркалото ќе застане, се освојуваат поени кои се еднакви на **производот од бројот 3 и бројот на полето** каде што застанала стрелката.\n\nМелиса го завртела ова тркало трипати. По трите вртења, стрелката **двапати** застанала на полето со бројот **(+6)**, а **еднаш** на полето со бројот **(–4)**. \n\nСпоред тоа, колку е вкупниот збир на поени што ги освоила Мелиса?",
    "svg": `<svg viewBox="0 0 450 250" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
       <defs>
         <marker id="arrowDown" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
            <path d="M0,0 L10,5 L0,10 L2,5 Z" fill="#E65100" />
         </marker>
       </defs>
       
       <!-- Wheel Group -->
       <g transform="translate(120, 130)">
          <!-- Pie Slice 1: (-1) Yellow -->
          <path d="M0,0 L-70,-70 A100,100 0 0,1 70,-70 Z" fill="#FFF9C4" stroke="black" stroke-width="2" />
          <text x="0" y="-60" text-anchor="middle" font-weight="bold" font-size="20">(-1)</text>
          
          <!-- Pie Slice 2: (-4) Blue -->
          <path d="M0,0 L70,-70 A100,100 0 0,1 0,100 Z" fill="#B3E5FC" stroke="black" stroke-width="2" />
          <text x="50" y="20" text-anchor="middle" font-weight="bold" font-size="20">(-4)</text>

          <!-- Pie Slice 3: (+6) Pink -->
          <path d="M0,0 L0,100 A100,100 0 0,1 -70,-70 Z" fill="#F8BBD0" stroke="black" stroke-width="2" />
          <text x="-50" y="20" text-anchor="middle" font-weight="bold" font-size="20">(+6)</text>
          
          <!-- Pointer -->
          <path d="M0,-110 L-10,-130 L10,-130 Z" fill="#E65100" stroke="black" />
          <text x="0" y="-140" text-anchor="middle" font-size="12" font-weight="bold">Застане</text>
       </g>
       
       <!-- Explanation Graphic (Right side) -->
       <g transform="translate(280, 50)">
          <text x="0" y="0" font-family="monospace" font-size="18" font-weight="bold">3 · (-1) = (-3)</text>
          <line x1="80" y1="5" x2="80" y2="40" stroke="black" stroke-width="1.5" marker-end="url(#arrowDown)" />
          <text x="80" y="60" text-anchor="middle" font-size="12" font-weight="bold">број на поени</text>
          <text x="80" y="75" text-anchor="middle" font-size="12" font-weight="bold">кои се</text>
          <text x="80" y="90" text-anchor="middle" font-size="12" font-weight="bold">освојуваат</text>
       </g>
    </svg>`,
    "answer": "24"
    // Logic:
    // 2 spins on (+6) => 2 * (3 * 6) = 2 * 18 = 36
    // 1 spin on (-4) => 1 * (3 * -4) = -12
    // Total = 36 - 12 = 24.
  }
];

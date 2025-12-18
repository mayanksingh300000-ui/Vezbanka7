
import { Problem } from '../types';

export const PROBLEMS_1_6: Problem[] = [
    // --- PRACTICE ---
    {
      "id": "ABSOLUTE_1_6_1",
      "category": "practice",
      "topic": "1.6. АПСОЛУТНА ВРЕДНОСТ",
      "problem_type": "flashcards_logic",
      "text_mk": "Пред тебе се картички со цели броеви. На задната страна на секоја картичка е запишана **апсолутната вредност** на тој број. Разгледај ги броевите и анализирај ги тврдењата подолу. Откако ќе одговориш, кликни „Провери“ за да можеш да ги превртиш картичките.",
      "claims": [
        "На четири од картичките, броевите од предната и задната страна се исти.",
        "Сите броеви на задната страна на картичките се позитивни цели броеви.",
        "Два од броевите на задната страна на картичките се помали од 0."
      ],
      "answer": "option_a",
      "custom_visual_data": {
        "cards": [
           { "front": "-12", "back": "|-12| = 12" },
           { "front": "17", "back": "|17| = 17" },
           { "front": "-25", "back": "|-25| = 25" },
           { "front": "+36", "back": "|36| = 36" },
           { "front": "0", "back": "|0| = 0" },
           { "front": "-36", "back": "|-36| = 36" },
           { "front": "+25", "back": "|25| = 25" }
        ]
      },
      "options": [
        { "option_id": "option_a", "text_mk": "Само I" },
        { "option_id": "option_b", "text_mk": "I и II" },
        { "option_id": "option_c", "text_mk": "II и III" },
        { "option_id": "option_d", "text_mk": "I, II и III" }
      ]
    },
    {
      "id": "ABSOLUTE_1_6_2",
      "category": "practice",
      "topic": "1.6. АПСОЛУТНА ВРЕДНОСТ",
      "problem_type": "absolute_value_visual",
      "text_mk": "Одговори на следниве прашања во врска со апсолутна вредност:",
      "custom_visual_data": {
        "type": "value_cards",
        "description": "а) Пресметај ги апсолутните вредности:",
        "items": [
           { "id": "2a_1", "latex": "|4| =", "answer": "4" },
           { "id": "2a_2", "latex": "|-4| =", "answer": "4" },
           { "id": "2a_3", "latex": "|5| =", "answer": "5" },
           { "id": "2a_4", "latex": "|-10| =", "answer": "10" },
           { "id": "2a_5", "latex": "|0| =", "answer": "0" }
        ]
      },
      "parts": [
        {
          "part_id": "2b",
          "text_mk": "б) Колку изнесува апсолутната вредност на претходникот на бројот –2, а колку на неговиот следбеник?",
          "answer": "3 и 1"
        },
        {
          "part_id": "2c",
          "text_mk": "в) Колку е збирот од апсолутните вредности на броевите кои се на растојание 4 единици од нулата?",
          "answer": "8"
        }
      ]
    },
    {
      "id": "ABSOLUTE_1_6_3",
      "category": "practice",
      "topic": "1.6. АПСОЛУТНА ВРЕДНОСТ",
      "problem_type": "set_comparison",
      "text_mk": "Одговори на следниве прашања:",
      "parts": [
        {
          "part_id": "3a",
          "text_mk": "а) Колку елементи од множеството А имаат апсолутна вредност поголема од 5?",
          "latex_numbers": "A = \\{-12, -10, -8, -4, -2, 0, 6, 8, 14\\}, \\quad |x| > 5",
          "answer": "6"
        },
        {
          "part_id": "3b",
          "text_mk": "б) Кој од следниве цели броеви има најголема апсолутна вредност?",
          "latex_numbers": "-76, -56, 45, -34, 34, -1, -23",
          "answer": "-75"
        }
      ]
    },
    {
      "id": "ABSOLUTE_1_6_4",
      "category": "practice",
      "topic": "1.6. АПСОЛУТНА ВРЕДНОСТ",
      "problem_type": "expression_calculation",
      "text_mk": "Пресметај:",
      "parts": [
        {
          "part_id": "4a",
          "text_mk": "а)",
          "latex": "|-5| + |6+7|",
          "answer": "18"
        },
        {
          "part_id": "4b",
          "text_mk": "б)",
          "latex": "|16| - |-10|",
          "answer": "6"
        },
        {
          "part_id": "4c",
          "text_mk": "в)",
          "latex": "|2\\cdot 2 - 2| + |-15| - |4 + 6\\cdot 2|",
          "answer": "1"
        }
      ]
    },
    {
      "id": "ABSOLUTE_1_6_5",
      "category": "practice",
      "topic": "1.6. АПСОЛУТНА ВРЕДНОСТ",
      "problem_type": "multiple_choice",
      "text_mk": "Дадени се следниве информации за бројот на четвртиот балон:\n\n*   Ако пукне првиот балон, бројот на четвртиот балон е најмал од броевите на преостанатите балони.\n*   Ако пукне третиот балон, апсолутната вредност на бројот на четвртиот балон е помала од апсолутните вредности на броевите на преостанатите балони.\n\nСпоред ова, кој од следниве броеви може биде запишан на четвртиот балон?",
      "answer": "option_b",
      "svg": `<svg viewBox="0 0 500 160" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
         <!-- Balloon 1 -->
         <path d="M70 20 Q110 20 110 60 Q110 90 90 100 L90 110 L88 100 Q70 100 70 60 Q70 20 70 20 Z" fill="#00AEEF" transform="translate(-20, 0)" />
         <path d="M90 110 Q90 130 87 140" stroke="#ccc" fill="none" transform="translate(-20, 0)" />
         <text x="70" y="70" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="white">-11</text>
         
         <!-- Balloon 2 -->
         <path d="M170 20 Q210 20 210 60 Q210 90 190 100 L190 110 L188 100 Q170 100 170 60 Q170 20 170 20 Z" fill="#673AB7" transform="translate(-10, 0)" />
         <path d="M190 110 Q190 130 187 140" stroke="#ccc" fill="none" transform="translate(-10, 0)" />
         <text x="180" y="70" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="white">+5</text>

         <!-- Balloon 3 -->
         <path d="M270 20 Q310 20 310 60 Q310 90 290 100 L290 110 L288 100 Q270 100 270 60 Q270 20 270 20 Z" fill="#E91E63" transform="translate(0, 0)" />
         <path d="M290 110 Q290 130 287 140" stroke="#ccc" fill="none" transform="translate(0, 0)" />
         <text x="290" y="70" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="20" fill="white">+43</text>

         <!-- Balloon 4 (Mystery) -->
         <path d="M370 20 Q410 20 410 60 Q410 90 390 100 L390 110 L388 100 Q370 100 370 60 Q370 20 370 20 Z" fill="#FF9800" transform="translate(10, 0)" />
         <path d="M390 110 Q390 130 387 140" stroke="#ccc" fill="none" transform="translate(10, 0)" />
         <text x="400" y="70" text-anchor="middle" font-family="sans-serif" font-weight="bold" font-size="28" fill="white">?</text>
       </svg>`,
      "options": [
        { "option_id": "option_a", "text_mk": "–6" },
        { "option_id": "option_b", "text_mk": "–4" },
        { "option_id": "option_c", "text_mk": "6" },
        { "option_id": "option_d", "text_mk": "7" }
      ]
    },
    // --- CHALLENGES ---
    {
      "id": "ABSOLUTE_1_6_P1",
      "category": "challenge",
      "topic": "1.6. АПСОЛУТНА ВРЕДНОСТ",
      "problem_type": "inequalities_solving",
      "text_mk": "За кои цели броеви х е точно неравенството?",
      "parts": [
        {
          "part_id": "P1a",
          "text_mk": "а)",
          "latex": "|x|<4",
          "answer": "{-3, -2, -1, 0, 1, 2, 3}"
        },
        {
          "part_id": "P1b",
          "text_mk": "б)",
          "latex": "|x|<1",
          "answer": "{0}"
        }
      ]
    },
    {
      "id": "ABSOLUTE_1_6_P2",
      "category": "challenge",
      "topic": "1.6. АПСОЛУТНА ВРЕДНОСТ",
      "problem_type": "expression_calculation",
      "text_mk": "Колку е |a|+|b| ако:",
      "parts": [
        {
          "part_id": "P2a",
          "text_mk": "а)",
          "latex": "a = -4, b = 3",
          "answer": "7"
        },
        {
          "part_id": "P2b",
          "text_mk": "б)",
          "latex": "a = -5, b = -2",
          "answer": "7"
        }
      ]
    },
    {
      "id": "ABSOLUTE_1_6_P3",
      "category": "challenge",
      "topic": "1.6. АПСОЛУТНА ВРЕДНОСТ",
      "problem_type": "equation_solving",
      "text_mk": "Реши ја равенката:",
      "latex_math": "|2x-5| = 7",
      "answer": "6, -1"
    },
    {
      "id": "ABSOLUTE_1_6_P4",
      "category": "challenge",
      "topic": "1.6. АПСОЛУТНА ВРЕДНОСТ",
      "problem_type": "text_input",
      "text_mk": "Огледалото за симетрија на сликата е поставено нормално на бројната оска. Кога ќе се погледне во огледалото поставено на точката 2, над кој број ќе се види сликата на бројот –5?",
      "answer": "9",
      "svg": `<svg viewBox="0 0 600 140" class="w-full max-w-lg mx-auto" xmlns="http://www.w3.org/2000/svg">
         <defs>
           <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
             <path d="M 0 0 L 10 5 L 0 10 z" />
           </marker>
         </defs>
         <!-- Main Line -->
         <line x1="40" y1="100" x2="560" y2="100" stroke="black" stroke-width="2" marker-end="url(#arrow)" />
         
         <!-- Ticks -->
         <g font-family="sans-serif" font-size="14" text-anchor="middle">
           ${[-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6].map((n) => {
             const x = 240 + n * 40; 
             return `<line x1="${x}" y1="95" x2="${x}" y2="105" stroke="black" stroke-width="1.5" /><text x="${x}" y="125">${n}</text>`;
           }).join('')}
         </g>

         <!-- Mirror at x=320 (Value 2) -->
         <g transform="translate(320, 100)">
            <!-- Mirror Surface -->
            <path d="M -5 -60 L 15 -40 L 15 40 L -5 60 Z" fill="#e0e0e0" stroke="#666" stroke-width="2" opacity="0.8" />
            <!-- Stand/Side -->
            <path d="M -5 -60 L -15 -50 L -15 50 L -5 60" fill="none" stroke="#666" stroke-width="2" />
            <path d="M 15 -40 L 25 -30 L 25 30 L 15 40" fill="none" stroke="#666" stroke-width="2" />
            <!-- Center Point on axis -->
            <rect x="-3" y="-3" width="6" height="6" fill="white" stroke="black" />
            <circle cx="0" cy="0" r="1" fill="black" />
         </g>

         <!-- Eye Icon at left -->
         <g transform="translate(30, 80) scale(0.6)">
            <path d="M0,15 Q20,0 40,15 Q20,30 0,15 Z" fill="white" stroke="black" stroke-width="2"/>
            <circle cx="20" cy="15" r="7" fill="black"/>
            <path d="M-5,15 L-15,5 M-5,15 L-20,15 M-5,15 L-15,25" stroke="black" stroke-width="2" />
         </g>
       </svg>`
    },
    {
      "id": "ABSOLUTE_1_6_P5",
      "category": "challenge",
      "topic": "1.6. АПСОЛУТНА ВРЕДНОСТ",
      "problem_type": "multiple_choice",
      "text_mk": "Ако се спарат целите броеви чии апсолутни вредности се еднакви, кои букви ќе останат неспарени?",
      "answer": "option_d",
      "svg": `<svg viewBox="0 0 550 80" class="w-full max-w-2xl mx-auto" xmlns="http://www.w3.org/2000/svg">
         <line x1="25" y1="40" x2="525" y2="40" stroke="black" stroke-width="2" />
         <line x1="25" y1="35" x2="25" y2="45" stroke="black" stroke-width="2" />
         <line x1="525" y1="35" x2="525" y2="45" stroke="black" stroke-width="2" />
         <g font-family="serif" font-size="16" text-anchor="middle">
           ${Array.from({length: 13}).map((_, i) => {
             const val = i - 6; 
             const x = 275 + val * 38; 
             let content = `<line x1="${x}" y1="35" x2="${x}" y2="45" stroke="black" />`;
             if (val % 2 === 0) {
               content += `<text x="${x}" y="65">${val}</text>`;
             }
             const letters: {[key: number]: string} = {[-3]: 'A', [-1]: 'B', 1: 'C', 3: 'D', 5: 'E'};
             if (letters[val]) {
               content += `<circle cx="${x}" cy="40" r="4" fill="black" />`;
               content += `<text x="${x}" y="65" font-weight="bold">${letters[val]}</text>`;
             }
             return content;
           }).join('')}
         </g>
       </svg>`,
      "options": [
        { "option_id": "option_a", "text_mk": "A и B" },
        { "option_id": "option_b", "text_mk": "B и C" },
        { "option_id": "option_c", "text_mk": "D и E" },
        { "option_id": "option_d", "text_mk": "E" }
      ]
    },
    {
      "id": "ABSOLUTE_1_6_P6",
      "category": "challenge",
      "topic": "1.6. АПСОЛУТНА ВРЕДНОСТ",
      "problem_type": "multiple_choice",
      "text_mk": "Колку цели броеви во интервалот од -20 до 20 се такви што нивната апсолутна вредност е делива со 3?",
      "answer": "option_v",
      "options": [
        { "option_id": "option_a", "text_mk": "7" },
        { "option_id": "option_b", "text_mk": "12" },
        { "option_id": "option_v", "text_mk": "13" },
        { "option_id": "option_g", "text_mk": "14" }
      ]
    }
];

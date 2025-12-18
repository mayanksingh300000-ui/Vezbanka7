
import { WorkbookData } from './types';
import { CURRICULUM } from './data/curriculum';
import { PROBLEMS_1_5 } from './data/topic_1_5';
import { PROBLEMS_1_6 } from './data/topic_1_6';
import { PROBLEMS_1_7 } from './data/topic_1_7';
import { PROBLEMS_1_8 } from './data/topic_1_8';
import { PROBLEMS_1_9 } from './data/topic_1_9';
import { PROBLEMS_1_10 } from './data/topic_1_10';
import { PROBLEMS_1_11 } from './data/topic_1_11';
import { PROBLEMS_1_12 } from './data/topic_1_12';
import { PROBLEMS_1_13 } from './data/topic_1_13';
import { PROBLEMS_1_14 } from './data/topic_1_14';
import { PROBLEMS_1_15 } from './data/topic_1_15';
import { PROBLEMS_1_16 } from './data/topic_1_16';
import { PROBLEMS_2_1 } from './data/topic_2_1';

export const WORKBOOK_DATA: WorkbookData = {
  "workbook_title": "Математика 7 - Дигитална Вежбанка",
  "multilingual_support": ["Macedonian", "English", "Albanian", "Turkish"],
  "themes": CURRICULUM,
  "problems": [
    ...PROBLEMS_1_5,
    ...PROBLEMS_1_6,
    ...PROBLEMS_1_7,
    ...PROBLEMS_1_8,
    ...PROBLEMS_1_9,
    ...PROBLEMS_1_10,
    ...PROBLEMS_1_11,
    ...PROBLEMS_1_12,
    ...PROBLEMS_1_13,
    ...PROBLEMS_1_14,
    ...PROBLEMS_1_15,
    ...PROBLEMS_1_16,
    ...PROBLEMS_2_1
  ]
};

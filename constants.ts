
import { WorkbookData } from './types';
import { TOPICS } from './data/topics';
import { PROBLEMS_1_5 } from './data/topic_1_5';
import { PROBLEMS_1_6 } from './data/topic_1_6';
import { PROBLEMS_1_7 } from './data/topic_1_7';
import { PROBLEMS_1_8 } from './data/topic_1_8';
import { PROBLEMS_1_9 } from './data/topic_1_9';
import { PROBLEMS_1_10 } from './data/topic_1_10';
import { PROBLEMS_1_11 } from './data/topic_1_11';
import { PROBLEMS_1_12 } from './data/topic_1_12';

export const WORKBOOK_DATA: WorkbookData = {
  "workbook_title": "Вежбанка 7 - Тема 1: БРОЕВИ И ОПЕРАЦИИ СО БРОЕВИ",
  "multilingual_support": ["Macedonian", "English", "Albanian", "Turkish"],
  "topics": TOPICS,
  "problems": [
    ...PROBLEMS_1_5,
    ...PROBLEMS_1_6,
    ...PROBLEMS_1_7,
    ...PROBLEMS_1_8,
    ...PROBLEMS_1_9,
    ...PROBLEMS_1_10,
    ...PROBLEMS_1_11,
    ...PROBLEMS_1_12
  ]
};

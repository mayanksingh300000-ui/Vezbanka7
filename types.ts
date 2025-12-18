
export interface Part {
  part_id: string;
  text_mk: string;
  latex?: string;
  latex_numbers?: string;
  svg?: string;
  illustration_prompt?: string; // NEW: Description for AI to generate the SVG later
  latex_suffix?: string;
  answer?: string;
}

export interface Option {
  option_id: string;
  text_mk?: string;
  latex?: string;
}

export interface Problem {
  id: string;
  category: 'practice' | 'challenge';
  topic?: string; // Links to Lesson.db_topic
  problem_type: string;
  text_mk: string;
  note_mk?: string;
  latex_math?: string;
  latex_conditions?: string;
  data_table_latex?: string;
  range_mk?: string;
  parts?: Part[];
  options?: Option[];
  svg?: string;
  illustration_prompt?: string; // NEW: Description for AI to generate the SVG later
  drag_items?: string[]; 
  custom_visual_data?: any;
  answer?: string;
  claims?: string[];
}

// Renamed from TopicDefinition to LessonDefinition for clarity
export interface LessonDefinition {
  id: string;      // e.g., '1.5'
  title: string;   // e.g., 'Цели броеви'
  db_topic: string; // Matches the 'topic' field in Problem
}

// New Hierarchy Types
export interface UnitDefinition {
  id: string;
  title: string;
  lessons: LessonDefinition[];
}

export interface ThemeDefinition {
  id: string;
  title: string;
  icon: string; // Emoji or icon name
  description: string;
  units: UnitDefinition[];
}

export interface WorkbookData {
  workbook_title: string;
  multilingual_support: string[];
  themes: ThemeDefinition[]; // Changed from 'topics' to 'themes'
  problems: Problem[];
}

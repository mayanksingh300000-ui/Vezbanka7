
export interface Part {
  part_id: string;
  text_mk: string;
  latex?: string;
  latex_numbers?: string;
  svg?: string;
  latex_suffix?: string;
  answer?: string; // New: Correct answer directly in the part
}

export interface Option {
  option_id: string;
  text_mk?: string;
  latex?: string;
}

export interface Problem {
  id: string;
  category: 'practice' | 'challenge';
  topic?: string;
  problem_type: string;
  text_mk: string;
  note_mk?: string; // New field for extra notes/hints
  latex_math?: string;
  latex_conditions?: string;
  data_table_latex?: string;
  range_mk?: string;
  parts?: Part[];
  options?: Option[];
  svg?: string;
  drag_items?: string[]; 
  custom_visual_data?: any;
  answer?: string; // New: Correct answer directly in the problem (for single input or options)
  claims?: string[]; // New: List of statements/claims to evaluate (I, II, III...)
}

export interface TopicDefinition {
  id: string;      // e.g., '1.5'
  title: string;   // e.g., 'Цели броеви'
  db_topic: string; // Matches the 'topic' field in Problem interface
}

export interface WorkbookData {
  workbook_title: string;
  multilingual_support: string[];
  topics: TopicDefinition[]; // New: Configuration for the topics
  problems: Problem[];
}

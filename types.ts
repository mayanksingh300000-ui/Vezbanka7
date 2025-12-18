
export interface Part {
  part_id: string;
  text_mk: string;
  latex?: string;
  latex_numbers?: string;
  svg?: string;
  illustration_prompt?: string;
  latex_suffix?: string;
  answer?: string;
}

export interface Option {
  option_id: string;
  text_mk?: string;
  latex?: string;
}

// --- VISUAL DATA TYPES ---

export interface InfoCardData {
  type: 'info_cards';
  cards: {
    title: string;
    subtitle?: string;
    value: string;
    icon?: string;
  }[];
  extra_info?: string;
}

export interface InteractiveTableData {
  type: 'interactive_table';
  rules?: string[];
  headers: string[];
  rows: (
    | { value: string }
    | { id: string; answer: string; type?: 'fraction' | 'text' }
  )[][];
}

export interface FractionConversionData {
  type: 'fraction_conversion';
  tasks: {
    title: string;
    instruction: string;
    original_latex: string[];
    lcm_item: { id: string; answer: string; label: string };
    fraction_items: { id: string; answer: string }[];
  }[];
}

export interface GridSelectorData {
  type: 'grid_of_fractions';
  fractions: string[];
  correct_items: string[];
}

export interface HierarchyFillData {
  type: 'hierarchy_fill';
  groups: { items: string[] }[];
  middle_value: string;
  inputs: { id: string; answer: string }[];
  example_svg?: string;
}

export interface WeatherDashboardData {
  type: 'data_analysis_and_comparison';
  cities: { name: string; min: number; max: number }[];
}

export interface ValueCardsData {
  type: 'value_cards';
  description?: string;
  items: { id: string; latex: string; answer: string }[];
}

export interface FractionInputData {
  type: 'fraction_input';
}

export interface FlashCardsLogicData {
  type: 'flashcards_logic'; // Legacy
  cards: { front: string; back: string }[];
}

// NEW: Geometry Data for Topic 2
export interface GeometryCanvasData {
  type: 'geometry_canvas';
  tools: ('ruler' | 'compass' | 'protractor' | 'pencil')[]; // Which tools are allowed
  background_svg?: string; // Optional background (e.g., coordinate system)
  target_shape?: string; // e.g., 'triangle', 'circle'
}

// Union Type for all custom visuals
export type CustomVisualData = 
  | InfoCardData 
  | InteractiveTableData 
  | FractionConversionData
  | GridSelectorData
  | HierarchyFillData
  | WeatherDashboardData
  | ValueCardsData
  | FractionInputData
  | FlashCardsLogicData
  | GeometryCanvasData
  | any; // Kept 'any' temporarily for backward compatibility during migration

export interface Problem {
  id: string;
  category: 'practice' | 'challenge';
  topic?: string; 
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
  illustration_prompt?: string;
  drag_items?: string[]; 
  custom_visual_data?: CustomVisualData;
  answer?: string;
  claims?: string[];
}

export interface LessonDefinition {
  id: string;      
  title: string;   
  db_topic: string; 
}

export interface UnitDefinition {
  id: string;
  title: string;
  lessons: LessonDefinition[];
}

export interface ThemeDefinition {
  id: string;
  title: string;
  icon: string; 
  description: string;
  units: UnitDefinition[];
}

export interface WorkbookData {
  workbook_title: string;
  multilingual_support: string[];
  themes: ThemeDefinition[]; 
  problems: Problem[];
}

import { DecorStyle } from './enums';

export interface QuizOption {
  text: string;
  weights: Partial<Record<DecorStyle, number>>;
}

export interface QuizQuestion {
  id: string;
  text: string;
  imageUrl?: string;
  options: QuizOption[];
  order: number;
}

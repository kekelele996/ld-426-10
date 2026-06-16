import { DecorStyle } from './enums';

export interface ComparisonPlan {
  id: string;
  name: string;
  moodBoardId: string;
  styleTags: DecorStyle[];
  colors: string[];
  createdAt: string;
}

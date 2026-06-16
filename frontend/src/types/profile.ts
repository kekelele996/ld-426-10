import { DecorStyle } from './enums';

export interface StyleProfile {
  userId: string;
  scores: Record<DecorStyle, number>;
  primaryStyle: DecorStyle;
  secondaryStyle: DecorStyle;
  testedAt: string;
  completed: boolean;
}

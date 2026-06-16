import { DecorStyle, RoomType } from './enums';

export interface InspirationImage {
  id: string;
  imageUrl: string;
  style: DecorStyle;
  roomType: RoomType;
  tags: string[];
  sourceDescription: string;
  collectedAt?: string;
}

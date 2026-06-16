import { DecorStyle, InspirationImage, RoomType } from '../types';

export const mockInspiration: InspirationImage[] = [
  { id: 'img-1', imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80', style: DecorStyle.Nordic, roomType: RoomType.LivingRoom, tags: ['浅木', '开放客厅'], sourceDescription: '北欧自然光客厅' },
  { id: 'img-2', imageUrl: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80', style: DecorStyle.Modern, roomType: RoomType.Kitchen, tags: ['岛台', '黑白'], sourceDescription: '现代厨房岛台' },
  { id: 'img-3', imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=900&q=80', style: DecorStyle.Japanese, roomType: RoomType.Bedroom, tags: ['低床', '原木'], sourceDescription: '日式卧室' },
  { id: 'img-4', imageUrl: 'https://images.unsplash.com/photo-1618221118493-9cfa1a1c00da?auto=format&fit=crop&w=900&q=80', style: DecorStyle.Minimalist, roomType: RoomType.Bathroom, tags: ['石材', '少物'], sourceDescription: '极简卫浴' },
  { id: 'img-5', imageUrl: 'https://images.unsplash.com/photo-1617103996702-96ff29b1c467?auto=format&fit=crop&w=900&q=80', style: DecorStyle.Industrial, roomType: RoomType.Study, tags: ['金属', '深色'], sourceDescription: '工业风书房' },
  { id: 'img-6', imageUrl: 'https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=900&q=80', style: DecorStyle.Chinese, roomType: RoomType.Entrance, tags: ['木格栅', '端景'], sourceDescription: '新中式玄关' },
  { id: 'img-7', imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=900&q=80', style: DecorStyle.Mediterranean, roomType: RoomType.Balcony, tags: ['拱形', '蓝白'], sourceDescription: '地中海阳台' }
];

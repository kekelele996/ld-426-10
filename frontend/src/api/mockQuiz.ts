import { DecorStyle, QuizQuestion } from '../types';

export const mockQuiz: QuizQuestion[] = [
  {
    id: 'q1',
    text: '你最希望客厅首先解决什么问题？',
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80',
    order: 1,
    options: [
      { text: '保持开阔、方便社交', weights: { [DecorStyle.Modern]: 3, [DecorStyle.Minimalist]: 2 } },
      { text: '温暖、有生活痕迹', weights: { [DecorStyle.Nordic]: 3, [DecorStyle.Japanese]: 2 } },
      { text: '有仪式感与收藏展示', weights: { [DecorStyle.Chinese]: 3, [DecorStyle.Mediterranean]: 1 } }
    ]
  },
  {
    id: 'q2',
    text: '你能接受哪种材质成为空间主角？',
    imageUrl: 'https://images.unsplash.com/photo-1600566753151-384129cf4e3e?auto=format&fit=crop&w=900&q=80',
    order: 2,
    options: [
      { text: '水泥、金属、皮革', weights: { [DecorStyle.Industrial]: 4, [DecorStyle.Modern]: 1 } },
      { text: '浅木、棉麻、藤编', weights: { [DecorStyle.Nordic]: 3, [DecorStyle.Japanese]: 2 } },
      { text: '石材、白墙、陶器', weights: { [DecorStyle.Mediterranean]: 3, [DecorStyle.Minimalist]: 1 } }
    ]
  },
  {
    id: 'q3',
    text: '理想的色彩更接近哪一组？',
    order: 3,
    options: [
      { text: '黑、白、灰和一处强对比', weights: { [DecorStyle.Modern]: 3, [DecorStyle.Industrial]: 2 } },
      { text: '米色、木色、低饱和绿', weights: { [DecorStyle.Japanese]: 3, [DecorStyle.Nordic]: 2 } },
      { text: '朱砂、胡桃木、宣纸白', weights: { [DecorStyle.Chinese]: 4 } }
    ]
  }
];

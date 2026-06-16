import { defineStore } from 'pinia';
import { MoodBoard } from '../types';
import { db } from '../utils/db';

export const useMoodboardStore = defineStore('moodboards', {
  state: () => ({ boards: [] as MoodBoard[] }),
  actions: {
    async load() {
      this.boards = await db.moodboards.orderBy('createdAt').reverse().toArray();
      if (!this.boards.length) {
        await this.createBoard('安静木色家', '低饱和木色、自然光和轻收纳', []);
      }
    },
    async createBoard(name: string, description: string, imageIds: string[]) {
      const board: MoodBoard = {
        id: crypto.randomUUID(),
        name,
        description,
        createdAt: new Date().toISOString(),
        coverImageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80',
        imageIds,
        tags: ['木色', '自然光']
      };
      await db.moodboards.put(board);
      this.boards = await db.moodboards.orderBy('createdAt').reverse().toArray();
    },
    async addImage(boardId: string, imageId: string) {
      const board = await db.moodboards.get(boardId);
      if (!board || board.imageIds.includes(imageId)) return;
      await db.moodboards.put({ ...board, imageIds: [...board.imageIds, imageId] });
      this.boards = await db.moodboards.orderBy('createdAt').reverse().toArray();
    }
  }
});

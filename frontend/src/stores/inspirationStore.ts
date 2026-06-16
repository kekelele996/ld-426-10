import { defineStore } from 'pinia';
import { mockInspiration } from '../api/mockInspiration';
import { DecorStyle, InspirationImage, RoomType } from '../types';
import { db } from '../utils/db';

export const useInspirationStore = defineStore('inspiration', {
  state: () => ({ images: [] as InspirationImage[], styleFilter: undefined as DecorStyle | undefined, roomFilter: undefined as RoomType | undefined }),
  getters: {
    filteredImages(state) {
      return state.images.filter((image) => (!state.styleFilter || image.style === state.styleFilter) && (!state.roomFilter || image.roomType === state.roomFilter));
    }
  },
  actions: {
    async seed() {
      if ((await db.images.count()) === 0) await db.images.bulkPut(mockInspiration);
      this.images = await db.images.toArray();
    },
    async collect(image: InspirationImage) {
      await db.images.put({ ...image, collectedAt: new Date().toISOString() });
      this.images = await db.images.toArray();
    }
  }
});

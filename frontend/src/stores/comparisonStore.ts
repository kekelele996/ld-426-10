import { defineStore } from 'pinia';
import { STYLE_COLORS } from '../constants/styleColors';
import { ComparisonPlan, DecorStyle } from '../types';
import { db } from '../utils/db';

export const useComparisonStore = defineStore('comparison', {
  state: () => ({ plans: [] as ComparisonPlan[] }),
  actions: {
    async load() {
      this.plans = await db.comparisons.orderBy('createdAt').reverse().toArray();
      if (!this.plans.length) {
        await this.createPlan('晨光木色', 'seed-board', [DecorStyle.Nordic, DecorStyle.Japanese]);
        await this.createPlan('克制都市', 'seed-board', [DecorStyle.Modern, DecorStyle.Minimalist]);
      }
    },
    async createPlan(name: string, moodBoardId: string, styleTags: DecorStyle[]) {
      const plan: ComparisonPlan = {
        id: crypto.randomUUID(),
        name,
        moodBoardId,
        styleTags,
        colors: styleTags.map((style) => STYLE_COLORS[style]),
        createdAt: new Date().toISOString()
      };
      await db.comparisons.put(plan);
      this.plans = await db.comparisons.orderBy('createdAt').reverse().toArray();
    }
  }
});

import { defineStore } from 'pinia';
import { StyleProfile } from '../types';
import { db } from '../utils/db';

export const useProfileStore = defineStore('profile', {
  state: () => ({ profile: undefined as StyleProfile | undefined, history: [] as StyleProfile[] }),
  actions: {
    async saveProfile(profile: StyleProfile) {
      this.profile = profile;
      await db.profiles.put(profile);
      this.history = await db.profiles.orderBy('testedAt').reverse().toArray();
    },
    async loadProfile() {
      this.history = await db.profiles.orderBy('testedAt').reverse().toArray();
      this.profile = this.history[0];
    }
  }
});

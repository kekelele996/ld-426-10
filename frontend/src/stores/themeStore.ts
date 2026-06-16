import { defineStore } from 'pinia';
import { ThemeMode } from '../types';

export const useThemeStore = defineStore('theme', {
  state: () => ({ mode: (localStorage.getItem('theme-mode') as ThemeMode) ?? 'light' }),
  actions: {
    toggle() {
      this.mode = this.mode === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme-mode', this.mode);
      document.documentElement.dataset.theme = this.mode;
    },
    hydrate() {
      document.documentElement.dataset.theme = this.mode;
    }
  }
});

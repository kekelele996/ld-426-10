import { ref, watch } from 'vue';

export function useLocalStorage<T>(key: string, initialValue: T) {
  const stored = localStorage.getItem(key);
  const state = ref<T>(stored ? JSON.parse(stored) : initialValue);
  watch(state, (value) => localStorage.setItem(key, JSON.stringify(value)), { deep: true });
  return state;
}

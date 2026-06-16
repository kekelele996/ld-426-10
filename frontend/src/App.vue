<template>
  <div class="min-h-screen">
    <aside class="fixed left-0 top-0 z-20 hidden h-full w-60 border-r border-ink/10 bg-paper/90 p-6 backdrop-blur md:block">
      <h1 class="font-display text-3xl leading-none text-ink">Decor<br />Atelier</h1>
      <nav class="mt-10 grid gap-2">
        <RouterLink v-for="item in nav" :key="item.path" :to="item.path" class="px-3 py-2 text-sm font-semibold text-ink/70 hover:bg-clay hover:text-paper" active-class="bg-ink text-paper">{{ item.label }}</RouterLink>
      </nav>
      <button class="absolute bottom-6 left-6 right-6 border border-ink/20 px-3 py-2 text-sm text-ink" @click="theme.toggle()">
        {{ theme.mode === 'light' ? '深色模式' : '浅色模式' }}
      </button>
    </aside>
    <header class="sticky top-0 z-10 flex gap-2 overflow-x-auto border-b border-ink/10 bg-paper/95 p-3 md:hidden">
      <RouterLink v-for="item in nav" :key="item.path" :to="item.path" class="shrink-0 px-3 py-2 text-sm text-ink" active-class="bg-ink text-paper">{{ item.label }}</RouterLink>
    </header>
    <main class="p-5 md:ml-60 md:p-10">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useThemeStore } from './stores/themeStore';

const theme = useThemeStore();
const nav = [
  { path: '/quiz', label: '风格测试' },
  { path: '/gallery', label: '灵感图集' },
  { path: '/moodboards', label: '灵感板' },
  { path: '/compare', label: '方案对比' },
  { path: '/profile', label: '个人档案' }
];

onMounted(() => theme.hydrate());
</script>

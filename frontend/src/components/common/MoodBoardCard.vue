<template>
  <article class="overflow-hidden bg-paper ring-1 ring-ink/10">
    <img :src="board.coverImageUrl" :alt="board.name" class="h-44 w-full object-cover" />
    <div class="space-y-3 p-5">
      <h3 class="font-display text-2xl text-ink">{{ board.name }}</h3>
      <p class="text-sm text-ink/70">{{ board.description }}</p>
      <div class="flex gap-2">
        <span v-for="tag in board.tags" :key="tag" class="bg-moss/10 px-2 py-1 text-xs text-moss">{{ tag }}</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { MoodBoard } from '../../types';
defineProps<{ board: MoodBoard }>();
</script>

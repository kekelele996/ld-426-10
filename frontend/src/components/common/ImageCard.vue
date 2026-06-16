<template>
  <article class="group mb-5 break-inside-avoid overflow-hidden bg-paper shadow-sm ring-1 ring-ink/10 transition hover:-translate-y-1 hover:shadow-xl">
    <img :src="image.imageUrl" :alt="image.sourceDescription" class="aspect-[4/5] w-full object-cover" @error="failed = true" v-if="!failed" />
    <div v-else class="flex aspect-[4/5] items-center justify-center bg-ink/10 text-sm text-ink/60">图片加载失败</div>
    <div class="space-y-3 p-4">
      <div class="flex items-center justify-between">
        <StyleTag :style-name="image.style" />
        <span class="text-xs uppercase tracking-widest text-ink/50">{{ image.roomType }}</span>
      </div>
      <p class="font-display text-xl text-ink">{{ image.sourceDescription }}</p>
      <div class="flex flex-wrap gap-2">
        <span v-for="tag in image.tags" :key="tag" class="bg-ink/5 px-2 py-1 text-xs text-ink/70">{{ tag }}</span>
      </div>
      <button class="w-full bg-ink px-4 py-2 text-sm font-semibold text-paper transition hover:bg-clay" @click="$emit('collect', image)">收藏到灵感板</button>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { InspirationImage } from '../../types';
import StyleTag from './StyleTag.vue';

defineProps<{ image: InspirationImage }>();
defineEmits<{ collect: [image: InspirationImage] }>();
const failed = ref(false);
</script>

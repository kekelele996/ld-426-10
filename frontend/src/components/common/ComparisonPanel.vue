<template>
  <article class="bg-paper p-6 ring-1 ring-ink/10">
    <h3 class="font-display text-3xl text-ink">{{ plan.name }}</h3>
    <div class="mt-4 flex gap-2">
      <StyleTag v-for="style in plan.styleTags" :key="style" :style-name="style" />
    </div>
    <div class="mt-6 flex gap-3">
      <ColorSwatch v-for="color in plan.colors" :key="color" :color="color" />
    </div>
  </article>
</template>

<script setup lang="ts">
import { ComparisonPlan } from '../../types';
import ColorSwatch from './ColorSwatch.vue';
import StyleTag from './StyleTag.vue';
defineProps<{ plan: ComparisonPlan }>();
</script>

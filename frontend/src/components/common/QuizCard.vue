<template>
  <section class="grid gap-6 md:grid-cols-[1fr_1.1fr]">
    <img v-if="question.imageUrl" :src="question.imageUrl" :alt="question.text" class="h-full min-h-80 w-full object-cover" />
    <div class="flex flex-col justify-center bg-paper p-8 ring-1 ring-ink/10">
      <h2 class="font-display text-4xl text-ink">{{ question.text }}</h2>
      <div class="mt-8 grid gap-3">
        <button v-for="option in question.options" :key="option.text" class="border border-ink/15 px-5 py-4 text-left text-ink transition hover:border-clay hover:bg-clay hover:text-paper" @click="$emit('answer', option)">
          {{ option.text }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { QuizOption, QuizQuestion } from '../../types';
defineProps<{ question: QuizQuestion }>();
defineEmits<{ answer: [option: QuizOption] }>();
</script>

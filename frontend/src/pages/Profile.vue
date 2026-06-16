<template>
  <section class="space-y-7">
    <div>
      <p class="text-sm font-semibold uppercase tracking-[0.25em] text-clay">Profile</p>
      <h1 class="page-title mt-3">个人风格档案</h1>
    </div>
    <div v-if="profile.profile" class="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div class="bg-paper p-8 ring-1 ring-ink/10">
        <p class="text-sm text-ink/60">最近测试</p>
        <h2 class="font-display text-5xl text-ink">{{ profile.profile.primaryStyle }}</h2>
        <p class="mt-4 text-ink/70">{{ styleDescriptions[profile.profile.primaryStyle] }}</p>
      </div>
      <StyleRadarChart :scores="profile.profile.scores" />
    </div>
    <EmptyState v-else text="完成一次风格测试后，这里会出现你的长期偏好档案" />
    <div class="grid gap-4 lg:grid-cols-3">
      <MoodBoardCard v-for="board in boards.boards" :key="board.id" :board="board" />
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import EmptyState from '../components/common/EmptyState.vue';
import MoodBoardCard from '../components/common/MoodBoardCard.vue';
import StyleRadarChart from '../components/common/StyleRadarChart.vue';
import { styleDescriptions } from '../constants/styleDescriptions';
import { useMoodboardStore } from '../stores/moodboardStore';
import { useProfileStore } from '../stores/profileStore';

const profile = useProfileStore();
const boards = useMoodboardStore();

onMounted(async () => {
  await profile.loadProfile();
  await boards.load();
});
</script>

<template>
  <section class="space-y-7">
    <div class="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.25em] text-clay">Gallery</p>
        <h1 class="page-title mt-3">按风格和空间筛选灵感</h1>
      </div>
      <div class="space-y-3">
        <FilterTabs v-model="styleValue" :items="styleItems" />
        <FilterTabs v-model="roomValue" :items="roomItems" />
      </div>
    </div>
    <div v-if="store.filteredImages.length" class="columns-1 gap-5 md:columns-2 xl:columns-3">
      <ImageCard v-for="image in store.filteredImages" :key="image.id" :image="image" @collect="collect" />
    </div>
    <EmptyState v-else text="当前筛选下没有灵感图片" />
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import EmptyState from '../components/common/EmptyState.vue';
import FilterTabs from '../components/common/FilterTabs.vue';
import ImageCard from '../components/common/ImageCard.vue';
import { useInspirationStore } from '../stores/inspirationStore';
import { useMoodboardStore } from '../stores/moodboardStore';
import { DecorStyle, InspirationImage, RoomType } from '../types';

const store = useInspirationStore();
const boards = useMoodboardStore();
const styleItems = Object.values(DecorStyle);
const roomItems = Object.values(RoomType);
const styleValue = computed({ get: () => store.styleFilter, set: (value) => (store.styleFilter = value as DecorStyle | undefined) });
const roomValue = computed({ get: () => store.roomFilter, set: (value) => (store.roomFilter = value as RoomType | undefined) });

async function collect(image: InspirationImage) {
  await store.collect(image);
  await boards.load();
  await boards.addImage(boards.boards[0].id, image.id);
}

onMounted(async () => {
  await store.seed();
  await boards.load();
});
</script>

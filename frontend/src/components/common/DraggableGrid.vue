<template>
  <VueDraggable v-model="localImages" class="grid grid-cols-2 gap-3 md:grid-cols-4">
    <img v-for="image in localImages" :key="image.id" :src="image.imageUrl" :alt="image.sourceDescription" class="aspect-square w-full object-cover" />
  </VueDraggable>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { VueDraggable } from 'vue-draggable-plus';
import { InspirationImage } from '../../types';

const props = defineProps<{ images: InspirationImage[] }>();
const emit = defineEmits<{ reorder: [images: InspirationImage[]] }>();
const localImages = computed({
  get: () => props.images,
  set: (value) => emit('reorder', value)
});
</script>

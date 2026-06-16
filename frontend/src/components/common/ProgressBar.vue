<template>
  <div class="h-2 overflow-hidden rounded-full bg-ink/10">
    <div class="h-full rounded-full bg-clay transition-all duration-500" :style="{ width: `${value}%` }" />
  </div>
</template>

<script setup lang="ts">
defineProps<{ value: number }>();
</script>

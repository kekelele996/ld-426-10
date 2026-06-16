<template>
  <span class="inline-block h-8 w-8 rounded-full border border-ink/10" :style="{ background: color }" :title="color" />
</template>

<script setup lang="ts">
defineProps<{ color: string }>();
</script>

<template>
  <div class="border border-dashed border-ink/20 bg-paper/70 p-8 text-center text-ink/60">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
defineProps<{ text?: string }>();
</script>

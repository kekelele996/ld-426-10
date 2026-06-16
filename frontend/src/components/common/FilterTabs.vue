<template>
  <div class="flex flex-wrap gap-2">
    <button class="filter-btn" :class="{ active: !modelValue }" @click="$emit('update:modelValue', undefined)">全部</button>
    <button v-for="item in items" :key="item" class="filter-btn" :class="{ active: modelValue === item }" @click="$emit('update:modelValue', item)">{{ item }}</button>
  </div>
</template>

<script setup lang="ts">
defineProps<{ items: string[]; modelValue?: string }>();
defineEmits<{ 'update:modelValue': [value?: string] }>();
</script>

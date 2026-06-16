<template>
  <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold text-paper" :style="{ background: color }">{{ label }}</span>
</template>

<script setup lang="ts">
import { STYLE_COLORS } from '../../constants/styleColors';
import { DecorStyle } from '../../types';

const props = defineProps<{ styleName: DecorStyle }>();
const label = props.styleName;
const color = STYLE_COLORS[props.styleName];
</script>

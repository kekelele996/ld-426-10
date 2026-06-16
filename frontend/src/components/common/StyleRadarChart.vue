<template>
  <VChart class="h-72 w-full" :option="option" autoresize />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import VChart from 'vue-echarts';
import { use } from 'echarts/core';
import { RadarChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';
import { TooltipComponent } from 'echarts/components';
import { DecorStyle } from '../../types';

use([RadarChart, CanvasRenderer, TooltipComponent]);

const props = defineProps<{ scores: Record<DecorStyle, number> }>();
const option = computed(() => ({
  tooltip: {},
  radar: { indicator: Object.values(DecorStyle).map((name) => ({ name, max: 100 })), splitLine: { lineStyle: { color: '#d9d0c3' } } },
  series: [{ type: 'radar', areaStyle: { color: 'rgba(184,111,82,.28)' }, lineStyle: { color: '#b86f52' }, data: [{ value: Object.values(DecorStyle).map((style) => props.scores[style]) }] }]
}));
</script>

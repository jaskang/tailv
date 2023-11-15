<script setup lang="ts">
import { type PropType } from 'vue'
import { createAnchorItemStyle } from '@zonda/style'
import type { AnchorOption } from './type'

defineOptions({ name: 'AnchorItems' })
defineProps({
  selectedKey: String,
  options: {
    type: Array as PropType<AnchorOption[]>,
    default: () => [],
  },
})
const emit = defineEmits<{ change: [string] }>()

const { css, itemStyler } = createAnchorItemStyle()

const onChange = (k: string) => emit('change', k)
</script>
<template>
  <div v-for="item in options" :class="css" key="{item.key}">
    <div :class="itemStyler(item.key === selectedKey)" @click="() => onChange(item.key)">
      {{ item.title }}
    </div>
    <template v-if="item.children && item.children.length > 0">
      <AnchorItems :items="item.children" :selectedKey="selectedKey" @change="onChange" />
    </template>
  </div>
</template>

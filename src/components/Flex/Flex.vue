<script setup lang="ts">
import { type SizeType, getSpace } from '@/core/space'
import { ref, computed, type PropType, type StyleValue } from 'vue'

defineOptions({ name: 'TFlex' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  align: {
    type: String as PropType<'start' | 'end' | 'center' | 'baseline' | 'stretch'>,
    default: 'start',
  },
  justify: {
    type: String as PropType<'normal' | 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly' | 'stretch'>,
    default: 'start',
  },
  wrap: Boolean,
  gap: {
    type: String as PropType<SizeType>,
    default: '0',
  },
})
</script>

<template>
  <div
    class="t-flex flex"
    :class="{
      'items-start': align === 'start',
      'items-end': align === 'end',
      'items-center': align === 'center',
      'items-baseline': align === 'baseline',
      'items-stretch': align === 'stretch',

      'justify-normal': justify === 'normal',
      'justify-start': justify === 'start',
      'justify-end': justify === 'end',
      'justify-center': justify === 'center',
      'justify-between': justify === 'between',
      'justify-around': justify === 'around',
      'justify-evenly': justify === 'evenly',
      'justify-stretch': justify === 'stretch',

      'flex-wrap': wrap,
      'flex-nowrap': !wrap,
      'gap-[--t-flex-gap]': true,
    }"
    :style="{
      '--t-flex-gap': getSpace(gap),
    }"
  >
    <slot />
  </div>
</template>

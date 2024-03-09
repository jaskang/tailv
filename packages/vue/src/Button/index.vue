<script setup lang="ts">
import { computed, type PropType } from 'vue'

import Loading from '../Icon/Loading.vue'
import type { ColorAlias } from '@/utils/theme'

import { createButtonCss } from './style'

defineOptions({ name: 'TButton' })
defineEmits<{ click: [Event] }>()
const slots = defineSlots<{ default?(_: {}): any; icon?(_: {}): any }>()
const props = defineProps({
  variant: {
    type: String as PropType<'default' | 'secondary' | 'ghost'>,
    default: 'default',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  color: {
    type: String as PropType<ColorAlias>,
  },
  pill: Boolean,
  square: Boolean,
  block: Boolean,
  loading: Boolean,  
  disabled: Boolean,
})

const css = computed(() =>
  createButtonCss({
    variant: props.variant,
    size: props.size,
    color: props.color || 'normal',
    pill: props.pill,
    square: props.square,
    block: props.block,
    disabled: props.disabled,
  })
)
</script>
<template>
  <button :class="css" :disabled="props.disabled" type="button">
    <template v-if="loading">
      <i class="h-[1em] w-[1em] [&_+_*]:ml-1.5 [&_svg]:h-full [&_svg]:w-full">
        <Loading class="animate-spin" />
      </i>
    </template>
    <template v-else-if="slots.icon">
      <i class="h-[1em] w-[1em] [&_+_*]:ml-1.5 [&_svg]:h-full [&_svg]:w-full">
        <slot name="icon"></slot>
      </i>
    </template>
    <template v-if="slots.default">
      <span>
        <slot></slot>
      </span>
    </template>
  </button>
</template>

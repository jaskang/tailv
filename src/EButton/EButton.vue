<script setup lang="ts">
import { computedCls } from '../utils'
import { computed, useSlots, type PropType } from 'vue'

const props = defineProps({
  variant: {
    type: String as PropType<'text' | 'subtle' | ''>,
  },
  color: {
    type: String as PropType<'primary' | 'success' | 'warning' | 'error'>,
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md',
  },
  loading: Boolean,
  pill: Boolean,
  square: Boolean,
  disabled: Boolean,
})

const slots = useSlots()

const cls = computedCls(props, 'e-btn', ['variant', 'color', 'size'])
</script>
<template>
  <button :class="[cls]" type="button" :disabled="disabled">
    <span class="e-btn__icon" v-if="slots.icon">
      <slot name="icon" />
    </span>
    <span class="e-btn__body" v-if="slots.default">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computedCls } from '../utils'
import { computed, useSlots, type PropType } from 'vue'

const props = defineProps({
  variant: {
    type: String as PropType<'square' | 'round' | 'circle'>,
  },
  color: {
    type: String as PropType<'primary' | 'success' | 'warning' | 'error'>,
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md',
  },
  disabled: Boolean,
})

const slots = useSlots()

const cls = computedCls(props, 'e-btn', ['variant', 'size', 'color'])
</script>
<template>
  <button :class="[cls]" type="button" :disabled="disabled">
    <span class="e-btn_icon" v-if="slots.icon">
      <slot name="icon" />
    </span>
    <span class="e-btn_body" v-if="slots.default">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computedCls } from '../utils'
import type { PropType } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<'round' | 'circle' | 'link'>,
  },
  color: {
    type: String as PropType<'neutral' | 'primary' | 'success' | 'warning' | 'error'>,
    default: 'neutral',
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md',
  },
  disabled: Boolean,
})

const cls = computedCls('e-button', props, ['type', 'size', 'color', 'disabled'])
</script>
<template>
  <button :class="cls" type="button" :disabled="disabled">
    <span>
      <slot />
    </span>
  </button>
</template>

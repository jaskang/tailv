<script setup lang="ts">
import { computedCls } from '../utils'
import type { PropType } from 'vue'

const props = defineProps({
  shape: {
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

const cls = computedCls('e-button', props, ['--shape', '--size', '--color', 'disabled'])
</script>
<template>
  <button :class="cls" type="button" :disabled="disabled">
    <span>
      <slot />
    </span>
  </button>
</template>

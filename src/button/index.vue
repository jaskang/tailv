<script lang="ts">
import { defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'EButton',
  props: {
    type: String as PropType<'round' | 'circle' | 'link'>,
    color: String as PropType<'primary' | 'success' | 'warning' | 'error'>,
    size: String as PropType<'xs' | 'sm' | 'lg' | 'xl'>,
    disabled: Boolean,
  },
  setup(props, { slots }) {
    return {}
  },
})
</script>
<template>
  <button
    type="button"
    :disabled="disabled"
    :class="[
      'e-button',
      color && `e-button--${color}`,
      type && `e-button--${type}`,
      size && `e-button--${size}`,
      disabled && `is-disabled`,
    ]"
  >
    <span><slot /></span>
  </button>
</template>

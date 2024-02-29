<script setup lang="ts">
import { PropType } from 'vue'

defineOptions({ name: 'RingInput' })

const borderMap = {
  default: 'ring-gray-300',
  success: 'ring-success-500',
  warning: 'ring-warning-500',
  error: 'ring-error-500',
}
const focusBorderMap = {
  default: 'focus-within:ring-primary-500',
  success: 'focus-within:ring-success-500',
  warning: 'focus-within:ring-warning-500',
  error: 'focus-within:ring-error-500',
}
const props = defineProps({
  disabled: Boolean,
  status: {
    type: String as PropType<'default' | 'success' | 'warning' | 'error'>,
    default: 'default',
  },
})
</script>
<template>
  <div
    :disabled="disabled"
    :class="[
      `flex items-center rounded-md text-sm shadow-sm ring-1 ring-inset focus-within:z-10 focus-within:ring-2 focus-within:ring-inset ${focusBorderMap[status]}`,
      props.disabled
        ? 'cursor-not-allowed bg-gray-50 text-gray-500 ring-gray-200'
        : `cursor-pointer bg-white ring-gray-300 ${borderMap[status]}`,
    ]"
  >
    <slot />
  </div>
</template>

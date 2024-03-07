<script setup lang="ts">
import { PropType } from 'vue'

defineOptions({ name: 'RingInput' })

const borderMap = {
  default: 'ring-gray-300',
  success: 'ring-success-500',
  warning: 'ring-warning-500',
  danger: 'ring-danger-500',
}
const focusBorderMap = {
  default: 'focus-within:ring-primary-500',
  success: 'focus-within:ring-success-500',
  warning: 'focus-within:ring-warning-500',
  danger: 'focus-within:ring-danger-500',
}

const focusedBorderMap = {
  default: 'data-[focused=true]:ring-primary-500',
  success: 'data-[focused=true]:ring-success-500',
  warning: 'data-[focused=true]:ring-warning-500',
  danger: 'data-[focused=true]:ring-danger-500',
}

const props = defineProps({
  status: {
    type: String as PropType<'default' | 'success' | 'warning' | 'danger'>,
    default: 'default',
  },
  disabled: Boolean,
  focused: Boolean,
})
</script>
<template>
  <div
    :disabled="disabled"
    :data-focused="focused"
    :class="[
      `flex items-center rounded-md text-sm shadow-sm ring-1 ring-inset focus-within:z-10 focus-within:ring-2 focus-within:ring-inset
      data-[focused=true]:ring-2 data-[focused=true]:ring-inset
      ${focusedBorderMap[status]}
      ${focusBorderMap[status]}`,
      props.disabled
        ? 'cursor-not-allowed bg-gray-50 text-gray-500 ring-gray-200'
        : `cursor-pointer bg-white ${borderMap[status]}`,
    ]"
  >
    <slot />
  </div>
</template>

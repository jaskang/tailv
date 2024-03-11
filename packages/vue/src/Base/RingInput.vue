<script setup lang="ts">
import { type PropType } from 'vue'

defineOptions({ name: 'RingInput' })

const borderMap = {
  default: 'outline-gray-300',
  success: 'outline-success-500',
  warning: 'outline-warning-500',
  danger: 'outline-danger-500',
}
const focusBorderMap = {
  default: 'focus-within:outline-primary-500',
  success: 'focus-within:outline-success-500',
  warning: 'focus-within:outline-warning-500',
  danger: 'focus-within:outline-danger-500',
}

const focusedBorderMap = {
  default: 'data-[focused=true]:outline-primary-500',
  success: 'data-[focused=true]:outline-success-500',
  warning: 'data-[focused=true]:outline-warning-500',
  danger: 'data-[focused=true]:outline-danger-500',
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
      `flex items-center rounded-md text-sm shadow-sm outline outline-1 outline-offset-0 transition-all 
      focus-within:z-10 focus-within:outline-2 
      data-[focused=true]:z-10 data-[focused=true]:outline-2 
      ${focusedBorderMap[status]} 
      ${focusBorderMap[status]}`,
      props.disabled
        ? 'cursor-not-allowed bg-gray-50 text-gray-500 outline-gray-200'
        : `cursor-pointer bg-white ${borderMap[status]}`,
    ]"
  >
    <slot />
  </div>
</template>

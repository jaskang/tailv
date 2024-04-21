<script setup lang="ts">
import { type PropType } from 'vue'

defineOptions({ name: 'BaseInput' })

const borderMap = {
  default: 'outline-slate-300 dark:outline-slate-600',
  success: 'outline-success-500',
  warning: 'outline-warning-500',
  danger: 'outline-danger-500',
}
const focusWithinMap = {
  default: 'focus-within:outline-primary-500 dark:focus-within:outline-primary-500',
  success: 'focus-within:outline-success-500 dark:focus-within:outline-success-500',
  warning: 'focus-within:outline-warning-500 dark:focus-within:outline-warning-500',
  danger: 'focus-within:outline-danger-500 dark:focus-within:outline-danger-500',
}

const focusMap = {
  default: 'data-[focused=true]:outline-primary-500 dark:data-[focused=true]:outline-primary-500',
  success: 'data-[focused=true]:outline-success-500 dark:data-[focused=true]:outline-success-500',
  warning: 'data-[focused=true]:outline-warning-500 dark:data-[focused=true]:outline-warning-500',
  danger: 'data-[focused=true]:outline-danger-500 dark:data-[focused=true]:outline-danger-500',
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
      `z-base-input relative rounded-md text-sm shadow-sm outline outline-1 -outline-offset-1 transition-all`,
      props.disabled
        ? 'cursor-not-allowed bg-slate-50 text-slate-500 opacity-50 outline-slate-300 dark:bg-slate-700 dark:outline-slate-600'
        : `cursor-pointer bg-white focus-within:z-10 focus-within:outline-2 data-[focused=true]:z-10 data-[focused=true]:outline-2 dark:bg-slate-800 ${borderMap[status]} ${focusMap[status]} ${focusWithinMap[status]}`,
    ]"
  >
    <slot />
  </div>
</template>

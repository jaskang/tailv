<script setup lang="ts">
import { computedCls } from './_utils'
import type { PropType } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<'round' | 'circle' | 'link'>,
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

const cls = computedCls('e-button', props, ['type', 'color', 'size'])
</script>
<template>
  <button :class="cls" type="button" :disabled="disabled">
    <span>
      <slot />
    </span>
  </button>
</template>
<style lang="less">
.e-button {
  @apply inline-flex items-center border border-solid border-gray-300  bg-white font-medium text-gray-700 
  shadow-sm 
  hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2;

  &--xs {
    @apply rounded px-2.5 py-1.5 text-xs;
  }
  &--sm {
    @apply rounded-md px-3 py-2 text-sm leading-4;
  }
  &--md {
    @apply rounded-md px-4 py-2 text-sm;
  }
  &--lg {
    @apply rounded-md px-4 py-2 text-base;
  }
  &--xl {
    @apply rounded-md px-6 py-3 text-base;
  }

  &--primary {
    @apply border-transparent bg-indigo-600 text-white hover:bg-indigo-700 focus:ring-indigo-500;
  }

  &--success {
    @apply border-transparent bg-green-500 text-white hover:bg-green-600 focus:ring-green-500;
  }

  &--warning {
    @apply border-transparent bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-500;
  }

  &--error {
    @apply border-transparent bg-red-500 text-white hover:bg-red-600 focus:ring-red-500;
  }

  &--round {
    @apply rounded-full;
  }

  &--circle {
    @apply justify-center overflow-hidden whitespace-nowrap rounded-full px-0;
    width: calc(theme('width.9') + 2px);
    &.e-button--xs {
      width: calc(theme('width.7') + 2px);
    }
    &.e-button--sm {
      width: calc(theme('width.8') + 2px);
    }
    &.e-button--lg {
      width: calc(theme('width.10') + 2px);
    }
    &.e-button--xl {
      width: calc(theme('width.12') + 2px);
    }
  }

  &--link {
    @apply border-transparent bg-transparent underline underline-offset-2 shadow-none hover:bg-transparent;
    &.e-button--primary {
      @apply text-indigo-600 hover:text-indigo-700;
    }
    &.e-button--success {
      @apply text-green-600 hover:text-green-700;
    }
    &.e-button--warning {
      @apply text-amber-600 hover:text-amber-700;
    }
    &.e-button--error {
      @apply text-red-600 hover:text-red-700;
    }

    &.is-disabled {
      @apply border-transparent bg-transparent;
    }
  }

  &:disabled,
  &.is-disabled {
    /* border text-slate-400  border-slate-300 bg-slate-50  */
    @apply cursor-not-allowed opacity-40 focus:ring-0 !important;
  }
}
</style>

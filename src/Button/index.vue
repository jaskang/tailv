<script setup lang="ts">
import { computed, type PropType } from 'vue'

import Loading from '../Icon/Loading.vue'
import { cvar, type ColorAlias } from '@/utils/theme'

defineOptions({ name: 'Button' })
const emit = defineEmits<{ click: [Event] }>()
const slots = defineSlots<{ default?(_: {}): any; icon?(_: {}): any }>()
const props = defineProps({
  variant: {
    type: String as PropType<'solid' | 'soft' | 'outline' | 'text' | 'link' | 'pure'>,
    default: 'outline',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  color: {
    type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'none'>,
    default: 'none',
  },
  pill: Boolean,
  square: Boolean,
  block: Boolean,
  loading: Boolean,
  disabled: Boolean,
})
</script>
<template>
  <button
    type="button"
    class="inline-flex appearance-none items-center justify-center whitespace-nowrap text-center font-medium transition-colors focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50"
    :class="[
      {
        solid: `shadow-sm ${
          {
            none: 'hover:bg-invert-light bg-accent-foreground text-accent',
            primary: 'hover:bg-primary-dark bg-primary text-primary-foreground dark:hover:bg-primary-light',
            success: 'hover:bg-success-dark dark:hover:bg-success-light bg-success text-success-foreground',
            warning: 'hover:bg-warning-dark dark:hover:bg-warning-light bg-warning text-warning-foreground',
            danger: 'hover:bg-danger-dark dark:hover:bg-danger-light bg-danger text-danger-foreground',
          }[props.color]
        }`,
        soft: `shadow-sm ${
          {
            none: 'bg-accent',
            primary: 'bg-primary-soft text-primary-dark',
            success: 'bg-success-soft text-success-dark',
            warning: 'bg-warning-soft text-warning-dark',
            danger: 'bg-danger-soft text-danger-dark',
          }[props.color]
        }`,
        outline: `border bg-transparent shadow-sm ${
          {
            none: 'hover:bg-accent',
            primary: 'text-primary-dark hover:bg-primary-soft border-primary-light',
            success: 'text-success-dark hover:bg-success-soft border-success-light',
            warning: 'text-warning-dark hover:bg-warning-soft border-warning-light',
            danger: 'text-danger-dark hover:bg-danger-soft border-danger-light',
          }[props.color]
        }`,
        text: `${
          {
            none: 'hover:bg-accent',
            primary: 'hover:bg-primary-soft text-primary-dark',
            success: 'hover:bg-success-soft text-success-dark',
            warning: 'hover:bg-warning-soft text-warning-dark',
            danger: 'hover:bg-danger-soft text-danger-dark',
          }[props.color]
        }`,
        link: `underline-offset-4 hover:underline ${
          {
            none: '',
            primary: 'text-primary-dark',
            success: 'text-success-dark',
            warning: 'text-warning-dark',
            danger: 'text-danger-dark',
          }[props.color]
        }`,
        pure: '',
      }[props.variant],
      {
        sm: `h-7 text-xs ${props.square ? 'w-7' : 'px-2 py-1'}`,
        md: `h-9 text-sm ${props.square ? 'w-9' : 'px-3 py-1.5'}`,
        lg: `h-11 text-base ${props.square ? 'w-11' : 'px-4 py-2'}`,
      }[props.size],
      props.pill ? 'rounded-full' : 'rounded-md',
      !props.square && props.block ? 'w-full' : '',
    ]"
    :disabled
    @click="emit('click', $event)"
  >
    <template v-if="loading">
      <Loading class="h-[1em] w-[1em] animate-spin" :class="$slots.default && !square ? 'mr-1.5' : ''" />
    </template>

    <slot v-if="!square || !loading"></slot>
  </button>
</template>

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
        outline: `border bg-transparent shadow-sm ${
          {
            none: 'hover:bg-default-50',
            primary: 'hover:bg-primary-50 text-primary-600 border-primary',
            success: 'hover:bg-success-50 text-success-600 border-success',
            warning: 'hover:bg-warning-50 text-warning-600 border-warning',
            danger: 'hover:bg-danger-50 text-danger-600 border-danger',
          }[props.color]
        }`,
        solid: `shadow-sm ${
          {
            none: 'hover:bg-default-700 bg-default-800 text-default-100',
            primary: 'hover:bg-primary-600 bg-primary text-primary-foreground ',
            success: 'hover:bg-success-600 bg-success text-success-foreground ',
            warning: 'hover:bg-warning-600 bg-warning text-warning-foreground ',
            danger: 'hover:bg-danger-600 bg-danger text-danger-foreground ',
          }[props.color]
        }`,
        soft: `shadow-sm ${
          {
            none: 'bg-default-100 hover:bg-default-200 text-default-700',
            primary: 'bg-primary-100 hover:bg-primary-200 text-primary-600',
            success: 'bg-success-100 hover:bg-success-200 text-success-600',
            warning: 'bg-warning-100 hover:bg-warning-200 text-warning-600',
            danger: 'bg-danger-100 hover:bg-danger-200 text-danger-600',
          }[props.color]
        }`,
        text: `${
          {
            none: 'text-default-700 hover:bg-default-100',
            primary: 'text-primary-600 hover:bg-primary-100',
            success: 'text-success-600 hover:bg-success-100',
            warning: 'text-warning-600 hover:bg-warning-100',
            danger: 'text-danger-600 hover:bg-danger-100',
          }[props.color]
        }`,
        link: `underline-offset-4 hover:underline ${
          {
            none: 'text-default-700',
            primary: 'text-primary-600',
            success: 'text-success-600',
            warning: 'text-warning-600',
            danger: 'text-danger-600',
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

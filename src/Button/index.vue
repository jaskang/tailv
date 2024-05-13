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
    class="inline-flex appearance-none items-center justify-center whitespace-nowrap text-center font-medium transition-all focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    :class="[
      {
        outline: `border shadow-sm ${
          {
            none: 'text-default-foreground hover:bg-default-100',
            primary: 'border-primary text-primary-600 hover:bg-primary-100',
            success: 'border-success text-success-600 hover:bg-success-100',
            warning: 'border-warning text-warning-600 hover:bg-warning-100',
            danger: 'border-danger text-danger-600 hover:bg-danger-100',
          }[props.color]
        }`,
        solid: `shadow-sm ${
          {
            none: 'bg-default text-default-foreground hover:bg-default-300',
            primary: 'bg-primary text-primary-foreground hover:bg-primary-600 ',
            success: 'bg-success text-success-foreground hover:bg-success-600 ',
            warning: 'bg-warning text-warning-foreground hover:bg-warning-600 ',
            danger: 'bg-danger text-danger-foreground hover:bg-danger-600 ',
          }[props.color]
        }`,
        soft: `shadow-sm ${
          {
            none: 'bg-default-100 text-default-foreground hover:bg-default-200',
            primary: 'bg-primary-100 text-primary-600 hover:bg-primary-200',
            success: 'bg-success-100 text-success-600 hover:bg-success-200',
            warning: 'bg-warning-100 text-warning-600 hover:bg-warning-200',
            danger: 'bg-danger-100 text-danger-600 hover:bg-danger-200',
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

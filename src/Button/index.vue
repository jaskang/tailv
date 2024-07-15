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
    class="inline-flex appearance-none items-center justify-center whitespace-nowrap text-center font-medium outline-none transition-all focus:z-10 focus:outline-none disabled:pointer-events-none disabled:opacity-50"
    :class="[
      {
        outline: `border-2 shadow-sm focus:ring-2 focus:ring-offset-2 ${
          {
            none: 'hover:bg-default-soft border-[--t-border] text-default focus:ring-primary',
            primary: 'hover:bg-primary-soft border-primary text-primary focus:ring-primary',
            success: 'hover:bg-success-soft border-success text-success focus:ring-success',
            warning: 'hover:bg-warning-soft border-warning text-warning focus:ring-warning',
            danger: 'hover:bg-danger-soft border-danger text-danger focus:ring-danger',
          }[props.color]
        }`,
        solid: `shadow-sm focus:ring-2 focus:ring-offset-2 ${
          {
            none: 'hover:bg-default-soft border border-[--t-border] focus:ring-primary',
            primary: 'text-primary-fg hover:bg-primary-hover bg-primary focus:ring-primary',
            success: 'text-success-fg hover:bg-success-hover bg-success focus:ring-success',
            warning: 'text-warning-fg hover:bg-warning-hover bg-warning focus:ring-warning',
            danger: 'text-danger-fg hover:bg-danger-hover bg-danger focus:ring-danger',
          }[props.color]
        }`,
        soft: `focus:ring-2 focus:ring-offset-2 ${
          {
            none: 'bg-default-soft hover:bg-default-soft-hover text-default focus:ring-primary',
            primary: 'bg-primary-soft hover:bg-primary-soft-hover text-primary focus:ring-primary',
            success: 'bg-success-soft hover:bg-success-soft-hover text-success focus:ring-success',
            warning: 'bg-warning-soft hover:bg-warning-soft-hover text-warning focus:ring-warning',
            danger: 'bg-danger-soft hover:bg-danger-soft-hover text-danger focus:ring-danger',
          }[props.color]
        }`,
        text: `focus:ring-2 focus:ring-offset-2 ${
          {
            none: 'hover:bg-default-soft focus:ring-default-soft-hover text-default',
            primary: 'hover:bg-primary-soft focus:ring-primary-soft-hover text-primary',
            success: 'hover:bg-success-soft focus:ring-success-soft-hover text-success',
            warning: 'hover:bg-warning-soft focus:ring-warning-soft-hover text-warning',
            danger: 'hover:bg-danger-soft focus:ring-danger-soft-hover text-danger',
          }[props.color]
        }`,
        link: `underline-offset-4 hover:underline ${
          {
            none: 'text-default',
            primary: 'text-primary',
            success: 'text-success',
            warning: 'text-warning',
            danger: 'text-danger',
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

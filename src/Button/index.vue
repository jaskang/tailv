<script setup lang="ts">
import { type PropType } from 'vue'
import Loading from '../Icon/Loading.vue'

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
    class="inline-flex appearance-none items-center justify-center whitespace-nowrap text-center font-medium outline-none transition-all focus:z-10 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
    :class="[
      {
        outline: `border shadow-sm focus:ring-2 focus:ring-offset-2 ${
          {
            none: 'border-border text-default-text bg-default hover:bg-default-hover focus:ring-primary',
            primary: 'border-primary text-primary hover:bg-primary-subtle focus:ring-primary',
            success: 'border-success text-success hover:bg-success-subtle focus:ring-success',
            warning: 'border-warning text-warning hover:bg-warning-subtle focus:ring-warning',
            danger: 'border-danger text-danger hover:bg-danger-subtle focus:ring-danger',
          }[props.color]
        }`,
        solid: `shadow-sm focus:ring-2 focus:ring-offset-2 ${
          {
            none: 'text-default-text hover:bg-default-hover focus:ring-primary bg-default',
            primary: 'bg-primary text-primary-text hover:bg-primary-hover focus:ring-primary',
            success: 'bg-success text-success-text hover:bg-success-hover focus:ring-success',
            warning: 'bg-warning text-warning-text hover:bg-warning-hover focus:ring-warning',
            danger: 'bg-danger text-danger-text hover:bg-danger-hover focus:ring-danger',
          }[props.color]
        }`,
        soft: `focus:ring-2 focus:ring-offset-2 ${
          {
            none: 'bg-default text-default-text hover:bg-default-hover focus:ring-primary',
            primary: 'bg-primary-subtle text-primary hover:bg-primary-subtle-hover focus:ring-primary',
            success: 'bg-success-subtle text-success hover:bg-success-subtle-hover focus:ring-success',
            warning: 'bg-warning-subtle text-warning hover:bg-warning-subtle-hover focus:ring-warning',
            danger: 'bg-danger-subtle text-danger hover:bg-danger-subtle-hover focus:ring-danger',
          }[props.color]
        }`,
        text: `focus:ring-2 focus:ring-offset-2 ${
          {
            none: 'text-default-text hover:bg-default-hover focus:ring-primary',
            primary: 'text-primary hover:bg-primary-subtle focus:ring-primary-subtle-hover',
            success: 'text-success hover:bg-success-subtle focus:ring-success-subtle-hover',
            warning: 'text-warning hover:bg-warning-subtle focus:ring-warning-subtle-hover',
            danger: 'text-danger hover:bg-danger-subtle focus:ring-danger-subtle-hover',
          }[props.color]
        }`,
        link: `underline-offset-4 hover:underline ${
          {
            none: 'text-default-text',
            primary: 'text-primary',
            success: 'text-success',
            warning: 'text-warning',
            danger: 'text-danger',
          }[props.color]
        }`,
        pure: '',
      }[props.variant],
      {
        sm: `h-7 text-xs ${props.square ? 'w-7' : 'py-1 px-2'}`,
        md: `h-9 text-sm ${props.square ? 'w-9' : 'py-1.5 px-3'}`,
        lg: `h-11 text-base ${props.square ? 'w-11' : 'py-2 px-4'}`,
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

<script setup lang="ts">
import { type PropType } from 'vue'
import Loading from '../Icon/Loading.vue'

defineOptions({ name: 'Button' })
const emit = defineEmits<{ click: [Event] }>()
const slots = defineSlots<{ default?(_: {}): any; icon?(_: {}): any }>()
const props = defineProps({
  variant: {
    type: String as PropType<'solid' | 'soft' | 'outline' | 'text' | 'pure'>,
    default: 'outline',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  color: {
    type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'default'>,
    default: 'default',
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
    class="focus-visible:outline-primary-solid inline-flex cursor-pointer appearance-none items-center justify-center whitespace-nowrap text-center font-medium outline-none transition-all focus:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    :class="[
      {
        outline: `border shadow-sm ${
          {
            default: 'border-accent-border text-accent-text-contrast bg-background hover:bg-accent-subtle-hover',
            primary: 'hover:bg-primary-subtle-hover border-primary-border bg-background text-primary-text',
            success: 'hover:bg-success-subtle-hover border-success-border bg-background text-success-text',
            warning: 'hover:bg-warning-subtle-hover border-warning-border bg-background text-warning-text',
            danger: 'hover:bg-danger-subtle-hover border-danger-border bg-background text-danger-text',
          }[props.color]
        }`,
        solid: `shadow-sm ${
          {
            default: 'bg-accent-text-contrast hover:bg-accent-text text-white',
            primary: 'bg-primary-solid hover:bg-primary-solid-hover text-white',
            success: 'bg-success-solid hover:bg-success-solid-hover text-white',
            warning: 'bg-warning-solid hover:bg-warning-solid-hover text-white',
            danger: 'bg-danger-solid hover:bg-danger-solid-hover text-white',
          }[props.color]
        }`,
        soft: `shadow-sm ${
          {
            default: 'bg-accent-subtle hover:bg-accent-subtle-hover text-accent-subtle-text',
            primary: 'bg-primary-subtle hover:bg-primary-subtle-hover text-primary-text',
            success: 'bg-success-subtle hover:bg-success-subtle-hover text-success-text',
            warning: 'bg-warning-subtle hover:bg-warning-subtle-hover text-warning-text',
            danger: 'bg-danger-subtle hover:bg-danger-subtle-hover text-danger-text',
          }[props.color || 'primary']
        }`,
        text: `${
          {
            default: 'hover:bg-accent-bg-subtle text-accent-text',
            primary: 'hover:bg-primary-bg-subtle text-primary-text',
            success: 'hover:bg-success-bg-subtle text-success-text',
            warning: 'hover:bg-warning-bg-subtle text-warning-text',
            danger: 'hover:bg-danger-bg-subtle text-danger-text',
          }[props.color || 'primary']
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

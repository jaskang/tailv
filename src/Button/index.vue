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
    class="focus-visible:outline-primary inline-flex cursor-pointer appearance-none items-center justify-center whitespace-nowrap text-center font-medium outline-none transition-all focus:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    :class="[
      {
        outline: `border shadow-sm ${
          {
            default: 'border-input text-default-subtle-text bg-default-subtle hover:bg-default-subtle-hover',
            primary: 'hover:bg-primary-subtle border-primary bg-default-subtle text-primary',
            success: 'hover:bg-success-subtle border-success bg-default-subtle text-success',
            warning: 'hover:bg-warning-subtle border-warning bg-default-subtle text-warning',
            danger: 'hover:bg-danger-subtle border-danger bg-default-subtle text-danger',
          }[props.color]
        }`,
        solid: `shadow-sm ${
          {
            default: 'text-default-text bg-default hover:bg-default-hover',
            primary: 'text-primary-text bg-primary hover:bg-primary-hover',
            success: 'text-success-text bg-success hover:bg-success-hover',
            warning: 'text-warning-text bg-warning hover:bg-warning-hover',
            danger: 'text-danger-text bg-danger hover:bg-danger-hover',
          }[props.color]
        }`,
        soft: `shadow-sm ${
          {
            default: 'bg-default-subtle hover:bg-default-subtle-hover text-default',
            primary: 'bg-primary-subtle hover:bg-primary-subtle-hover text-primary',
            success: 'bg-success-subtle hover:bg-success-subtle-hover text-success',
            warning: 'bg-warning-subtle hover:bg-warning-subtle-hover text-warning',
            danger: 'bg-danger-subtle hover:bg-danger-subtle-hover text-danger',
          }[props.color || 'primary']
        }`,
        text: `${
          {
            default: 'hover:bg-default-subtle-hover text-default',
            primary: 'hover:bg-primary-subtle-hover text-primary',
            success: 'hover:bg-success-subtle-hover text-success',
            warning: 'hover:bg-warning-subtle-hover text-warning',
            danger: 'hover:bg-danger-subtle-hover text-danger',
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

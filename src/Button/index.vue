<script setup lang="ts">
import { type PropType } from 'vue'
import Loading from '../Icon/Loading.vue'

defineOptions({ name: 'Button' })
defineSlots<{ default?(_: {}): any; icon?(_: {}): any }>()
const emit = defineEmits<{ click: [Event] }>()
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
    type: String as PropType<'primary' | 'success' | 'warning' | 'danger' | 'normal'>,
    default: 'normal',
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
    class="focus-visible:ring-primary inline-flex cursor-pointer appearance-none items-center justify-center whitespace-nowrap text-center font-medium transition-all focus-visible:z-10 focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
    :class="[
      {
        outline: `border shadow-sm ${
          {
            normal: 'border-border hover:bg-normal-soft',
            primary: 'border-primary text-primary hover:bg-primary-soft',
            success: 'border-success text-success hover:bg-success-soft',
            warning: 'border-warning text-warning hover:bg-warning-soft',
            danger: 'border-danger text-danger hover:bg-danger-soft',
          }[props.color]
        }`,
        solid: `text-white shadow-sm ${
          {
            normal: 'bg-normal hover:bg-normal-d1',
            primary: 'bg-primary hover:bg-primary-d1',
            success: 'bg-success hover:bg-success-d1',
            warning: 'bg-warning hover:bg-warning-d1',
            danger: 'bg-danger hover:bg-danger-d1',
          }[props.color]
        }`,
        soft: `shadow-sm ${
          {
            normal: 'bg-default-100 text-foreground hover:bg-default-200',
            primary: 'bg-primary-soft text-primary hover:bg-primary-soft-d1',
            success: 'bg-success-soft text-success hover:bg-success-soft-d1',
            warning: 'bg-warning-soft text-warning hover:bg-warning-soft-d1',
            danger: 'bg-danger-soft text-danger hover:bg-danger-soft-d1',
          }[props.color]
        }`,
        text: `${
          {
            normal: 'text-normal hover:bg-normal-soft',
            primary: 'text-primary hover:bg-primary-soft',
            success: 'text-success hover:bg-success-soft',
            warning: 'text-warning hover:bg-warning-soft',
            danger: 'text-danger hover:bg-danger-soft',
          }[props.color]
        }`,
        link: `underline-offset-4 hover:underline ${
          {
            normal: 'text-normal',
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

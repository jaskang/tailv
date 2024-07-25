<script setup lang="ts">
import { type PropType } from 'vue'
import Loading from '../Icon/Loading.vue'

defineOptions({ name: 'TButton' })
const emit = defineEmits<{ click: [Event] }>()
const slots = defineSlots<{ default?(_: {}): any; icon?(_: {}): any }>()
const props = defineProps({
  variant: {
    type: String as PropType<'solid' | 'soft' | 'outline' | 'text' | 'pure' | 'default'>,
    default: 'default',
  },
  color: {
    type: String as PropType<'primary' | 'success' | 'warning' | 'danger'>,
    default: 'primary',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
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
    class="focus-visible:outline-primary-solid inline-flex cursor-pointer appearance-none items-center justify-center whitespace-nowrap text-center font-medium outline-none transition-[color,background-color,text-decoration-color] focus:z-10 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    :class="[
      {
        pure: '',
        default: `border-input-border text-foreground bg-input-background enabled:hover:bg-input-background-hover border shadow-sm`,
        outline: `border-2 shadow-sm ${
          {
            primary: 'enabled:hover:bg-primary-subtle border-primary-border bg-background text-primary-text',
            success: 'enabled:hover:bg-success-subtle border-success-border bg-background text-success-text',
            warning: 'enabled:hover:bg-warning-subtle border-warning-border bg-background text-warning-text',
            danger: 'enabled:hover:bg-danger-subtle border-danger-border bg-background text-danger-text',
          }[props.color]
        }`,
        solid: `shadow-sm ${
          {
            primary: 'bg-primary-solid enabled:hover:bg-primary-solid-hover text-white',
            success: 'bg-success-solid enabled:hover:bg-success-solid-hover text-white',
            warning: 'bg-warning-solid enabled:hover:bg-warning-solid-hover text-white',
            danger: 'bg-danger-solid enabled:hover:bg-danger-solid-hover text-white',
          }[props.color]
        }`,
        soft: `shadow-sm ${
          {
            primary: 'bg-primary-subtle enabled:hover:bg-primary-subtle-hover text-primary-text',
            success: 'bg-success-subtle enabled:hover:bg-success-subtle-hover text-success-text',
            warning: 'bg-warning-subtle enabled:hover:bg-warning-subtle-hover text-warning-text',
            danger: 'bg-danger-subtle enabled:hover:bg-danger-subtle-hover text-danger-text',
          }[props.color || 'primary']
        }`,
        text: `${
          {
            primary: 'enabled:hover:bg-primary-bg-subtle text-primary-text',
            success: 'enabled:hover:bg-success-bg-subtle text-success-text',
            warning: 'enabled:hover:bg-warning-bg-subtle text-warning-text',
            danger: 'enabled:hover:bg-danger-bg-subtle text-danger-text',
          }[props.color || 'primary']
        }`,
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
    <template v-if="loading || slots.icon">
      <span class="[:where(&_>_*)]:h-[1em] [:where(&_>_*)]:w-[1em]" :class="slots.default && !square ? 'mr-1.5' : ''">
        <Loading v-if="loading" class="animate-spin" />
        <slot v-else name="icon" />
      </span>
    </template>
    <!-- 一比一样式 loading 时不展示内容 -->
    <slot v-if="!square || !loading"></slot>
  </button>
</template>

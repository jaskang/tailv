<script setup lang="ts">
import { type PropType } from 'vue'

defineOptions({ name: 'Badge' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any; icon?(_: {}): any }>()
const props = defineProps({
  color: {
    type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'danger'>,
    default: 'default',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  placement: {
    type: String as PropType<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'>,
    default: 'top-right',
  },
  content: String,
})
</script>
<template>
  <div class="relative inline-flex shrink-0">
    <slot />
    <span
      class="font-regular text-small border-background absolute top-[5%] right-[5%] z-10 box-border flex max-h-5 min-h-3 min-w-3 origin-center -translate-y-1/2 translate-x-1/2 scale-100 flex-wrap place-content-center items-center justify-center whitespace-nowrap rounded-full border-2 px-1 subpixel-antialiased opacity-100 duration-300 select-none data-[invisible=true]:scale-0 data-[invisible=true]:opacity-0"
      :class="[
        {
          default: 'bg-default text-default-fg',
          primary: 'bg-primary text-primary-fg',
          success: 'bg-success text-success-fg',
          warning: 'bg-warning text-warning-fg',
          danger: 'bg-danger text-danger-fg',
        }[props.color],
      ]"
    >
      <slot name="icon">
        {{ content }}
      </slot>
    </span>
  </div>
</template>

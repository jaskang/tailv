<script setup lang="ts">
import { type PropType, computed, ref } from 'vue'

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
      class="font-regular text-small  absolute right-[5%] top-[5%] z-10 box-border flex max-h-5 min-h-3 min-w-3 origin-center -translate-y-1/2 translate-x-1/2 scale-100 select-none flex-wrap place-content-center items-center justify-center whitespace-nowrap rounded-full border-2 border-white px-1 subpixel-antialiased opacity-100 duration-300 data-[invisible=true]:scale-0 data-[invisible=true]:opacity-0"
      :class="[
        {
          default: 'bg-bg-soft-hover text-white',
          primary: 'bg-primary text-white',
          success: 'bg-success text-white',
          warning: 'bg-warning text-white',
          danger: 'bg-danger text-white',
        }[props.color],
      ]"
    >
      <slot name="icon">
        {{ content }}
      </slot>
    </span>
  </div>
</template>

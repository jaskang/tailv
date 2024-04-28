<script setup lang="ts">
import { computed, type PropType } from 'vue'

import Loading from '../Icon/Loading.vue'
import { cvar, type ColorAlias } from '@/utils/theme'

defineOptions({ name: 'Button' })
const emit = defineEmits<{ click: [Event] }>()
const slots = defineSlots<{ default?(_: {}): any; icon?(_: {}): any }>()
const props = defineProps({
  variant: {
    type: String as PropType<'solid' | 'soft' | 'ghost' | 'link' | 'outline'>,
    default: 'solid',
  },
  size: {
    type: String as PropType<'sm' | 'md' | 'lg'>,
    default: 'md',
  },
  color: {
    type: String as PropType<ColorAlias>,
    default: 'primary',
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
    :style="{
      '--accent-50': cvar(`${props.color}-50`),
      '--accent-100': cvar(`${props.color}-100`),
      '--accent-200': cvar(`${props.color}-200`),
      '--accent-300': cvar(`${props.color}-300`),
      '--accent-400': cvar(`${props.color}-400`),
      '--accent-500': cvar(`${props.color}-500`),
      '--accent-600': cvar(`${props.color}-600`),
      '--accent-800': cvar(`${props.color}-800`),
      '--accent-900': cvar(`${props.color}-900`),
      '--accent-950': cvar(`${props.color}-950`),
    }"
    class="inline-flex items-center justify-center whitespace-nowrap text-center font-medium ring-offset-white transition-colors focus-visible:z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    :class="[
      {
        solid: 'bg-[--accent-500] text-white hover:bg-[--accent-600]',
        soft: 'bg-[--accent-100] text-[--accent-500] hover:bg-[--accent-200] hover:text-[--accent-600] dark:bg-[--accent-900] dark:text-[--accent-400] dark:hover:bg-[--accent-800] dark:hover:text-[--accent-300]',
        ghost:
          'text-[--accent-500] hover:bg-[--accent-100] hover:text-[--accent-600] dark:text-[--accent-400] dark:hover:bg-[--accent-900] dark:hover:text-[--accent-300]',
        outline:
          'border border-gray-200 bg-white hover:bg-gray-100 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800',
        link: 'underline-offset-4 hover:underline',
      }[props.variant],
      {
        sm: `h-7 text-xs ${props.square ? 'w-7' : 'px-2 py-1'}`,
        md: `h-9 text-sm ${props.square ? 'w-9' : 'px-3 py-1.5'}`,
        lg: `h-11 text-base ${props.square ? 'w-11' : 'px-4 py-2'}`,
      }[props.size],
      props.pill ? 'rounded-full' : 'rounded-md',
      !props.square && props.block ? 'w-full' : '',
    ]"
    :disabled="props.disabled"
    @click="emit('click', $event)"
  >
    <template v-if="loading">
      <Loading class="h-[1em] w-[1em] animate-spin" :class="$slots.default && !square ? 'mr-1.5' : ''" />
    </template>

    <slot v-if="!square || !loading"></slot>
  </button>
</template>

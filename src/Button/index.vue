<script setup lang="ts">
import { computed, type PropType } from 'vue'

import Loading from '../Icon/Loading.vue'
import { cvar, type ColorAlias } from '@/utils/theme'

defineOptions({ name: 'Button' })
const emit = defineEmits<{ click: [Event] }>()
const slots = defineSlots<{ default?(_: {}): any; icon?(_: {}): any }>()
const props = defineProps({
  variant: {
    type: String as PropType<'outline' | 'solid' | 'ghost' | 'link'>,
    default: 'outline',
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

// const style = computed(() => createButtonVar(props.variant, props.color))
</script>
<template>
  <button
    type="button"
    :style="{
      '--accent-100': cvar(`${props.color}-100`),
      '--accent-400': cvar(`${props.color}-400`),
      '--accent-500': cvar(`${props.color}-500`),
      '--accent-600': cvar(`${props.color}-600`),
    }"
    class="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
    :class="[
      {
        outline: 'border border-gray-200 bg-white hover:bg-gray-100 hover:text-slate-900',
        solid: 'bg-[--accent-500] text-slate-50 hover:bg-[--accent-600]',
        ghost: 'text-[--accent-500] hover:bg-[--accent-100] hover:text-[--accent-600]',
        link: 'text-[--accent-500] underline-offset-4 hover:underline',
      }[props.variant],
      {
        sm: `h-8 ${props.square ? 'w-8' : 'px-3 py-1'}`,
        md: `h-9 ${props.square ? 'w-9' : 'px-3.5 py-1.5'}`,
        lg: `h-10 ${props.square ? 'w-10' : 'px-4 py-2'}`,
      }[props.size],
      props.pill ? 'rounded-full' : 'rounded-md',
      !props.square && props.block ? 'w-full' : '',
    ]"
    :disabled="props.disabled"
    @click="emit('click', $event)"
  >
    <template v-if="loading">
      <i class="h-[1em] w-[1em] [&>*]:h-full [&>svg]:w-full" :class="$slots.default ? 'mr-1.5' : ''">
        <Loading class="animate-spin" />
      </i>
    </template>
    <template v-else-if="slots.icon">
      <i class="h-[1em] w-[1em] [&>svg]:h-full [&>svg]:w-full" :class="$slots.default ? 'mr-1.5' : ''">
        <slot name="icon"></slot>
      </i>
    </template>
    <slot></slot>
  </button>
</template>

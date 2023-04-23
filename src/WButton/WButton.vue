<script setup lang="ts">
import { computed, useSlots, type PropType } from 'vue'
import LoadingIcon from '../WIcon/Icons/LoadingIcon.vue'
import { getBtnVars } from './styles'
import { useCls } from '@/utils/classNames'
import { useTheme } from '@/core/theme'
import type { ColorKey } from '@/core/colors'

const props = defineProps({
  variant: {
    type: String as PropType<'default' | 'link' | 'subtle'>,
    default: 'default',
  },
  color: {
    type: String as PropType<'primary' | 'success' | 'warning' | 'error' | ColorKey>,
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md',
  },
  rounded: Boolean,
  square: Boolean,
  circle: Boolean,
  block: Boolean,
  loading: Boolean,
  disabled: Boolean,
})

const slots = useSlots()
const { getColor } = useTheme()
const hasIcon = computed(() => slots.icon || props.loading)

const cls = useCls('w-btn', () => ({
  variant: props.variant,
  color: props.color,
  size: props.size,
  rounded: props.rounded || props.circle,
  square: props.square || props.circle,
  block: props.block,
  disabled: props.disabled,
}))

const styles = computed(() => {
  return getBtnVars(props.variant, getColor(props.color))
})
</script>
<template>
  <button :class="cls" :style="styles" type="button" :disabled="disabled">
    <span v-if="hasIcon" class="w-btn_icon">
      <LoadingIcon v-if="loading" class="w-btn_loading" />
      <slot v-else name="icon" />
    </span>
    <span v-if="slots.default" class="w-btn_body">
      <slot />
    </span>
  </button>
</template>

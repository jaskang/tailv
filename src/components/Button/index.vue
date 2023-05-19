<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'
import { getBtnVars, useCls } from './styles'
import { useTheme } from '@/core/theme'
import LoadingIcon from '../svgs/LoadingIcon.vue'

defineOptions({ name: 'TButton' })
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
  ring: {
    type: Boolean,
    default: true,
  },
  rounded: Boolean,
  square: Boolean,
  circle: Boolean,
  block: Boolean,
  loading: Boolean,
  disabled: Boolean,
})
const emit = defineEmits<{ click: [MouseEvent] }>()
const slots = defineSlots<{ default?(_: {}): any; icon?(_: {}): any }>()

const { getColor } = useTheme()

const cls = useCls(() => {
  return {
    variant: props.variant,
    size: props.size,
    ring: props.ring,
    rounded: props.rounded || props.circle,
    square: props.square || props.circle,
    block: props.block,
    disabled: props.disabled,
  }
})
const cssVars = computed(() => {
  return getBtnVars(props.variant, getColor(props.color))
})

const hasIcon = computed(() => !!slots.icon || props.loading)
const onClick = (e: MouseEvent) => {
  if (!props.disabled) {
    emit('click', e)
  }
}
</script>
<template>
  <button :class="cls" :style="cssVars" type="button" :disabled="disabled" @click="onClick">
    <i v-if="hasIcon" class="t-btn-icon">
      <LoadingIcon v-if="loading" class="animate-spin" />
      <slot v-else name="icon" />
    </i>
    <span v-if="slots.default" class="t-btn_body">
      <slot />
    </span>
  </button>
</template>

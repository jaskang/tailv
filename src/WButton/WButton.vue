<script setup lang="ts">
import { computed, useSlots, type PropType } from 'vue'
import LoadingIcon from '../WIcon/icons/LoadingIcon.vue'
import style from './style'
import { useCls } from '@/utils/classNames'

const props = defineProps({
  variant: {
    type: String as PropType<'default' | 'link' | 'subtle'>,
    default: 'default',
  },
  color: {
    type: String as PropType<'normal' | 'primary' | 'success' | 'warning' | 'error'>,
    default: 'normal',
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
</script>
<template>
  <button :class="cls" type="button" :disabled="disabled">
    <template v-if="hasIcon">
      <LoadingIcon v-if="loading" class="w-btn_loading" />
      <slot v-else name="icon" />
    </template>
    <span v-if="slots.default" class="w-btn_body">
      <slot />
    </span>
  </button>
</template>

<script setup lang="ts">
import { computedCls } from '../utils'
import { computed, useSlots, type PropType } from 'vue'
import EIcon from '../EIcon/EIcon.vue'
import LoadingIcon from '../EIcon/Icons/LoadingIcon.vue'

const props = defineProps({
  variant: {
    type: String as PropType<'text' | 'subtle'>,
  },
  color: {
    type: String as PropType<'primary' | 'success' | 'warning' | 'error'>,
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md',
  },
  rounded: Boolean,
  square: Boolean,
  circle: Boolean,
  loading: Boolean,
  disabled: Boolean,
})

const slots = useSlots()

const hasIcon = computed(() => slots.icon || props.loading)
const cls = computedCls(props, 'e-btn', [
  'variant',
  'color',
  'size',
  'rounded',
  'square',
  'circle',
  'loading',
  'disabled',
])
</script>
<template>
  <button :class="[cls]" type="button" :disabled="disabled">
    <template v-if="hasIcon">
      <LoadingIcon v-if="loading" class="e-svg-spin" />
      <slot v-else name="icon" />
    </template>
    <span class="e-btn_body" v-if="slots.default">
      <slot />
    </span>
    <!-- <span v-else>&zwnj;</span> -->
  </button>
</template>

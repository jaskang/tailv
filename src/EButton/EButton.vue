<script setup lang="ts">
import { computedCls } from '../utils'
import { computed, useSlots, type PropType } from 'vue'
import EIcon from '../EIcon/EIcon.vue'
import LoadingIcon from '../EIcon/Icons/LoadingIcon.vue'
import styles from './styles'

const props = defineProps({
  variant: {
    type: String as PropType<'default' | 'link' | 'subtle'>,
    default: 'default',
  },
  color: {
    type: String as PropType<'default' | 'primary' | 'success' | 'warning' | 'error'>,
    default: 'default',
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

const cls = styles({
  variant: props.variant,
  color: props.color,
  size: props.size,
  rounded: props.rounded || props.circle,
  square: props.square || props.circle,
  block: props.block,
  disabled: props.disabled,
})
</script>
<template>
  <button :class="[cls]" type="button" :disabled="disabled">
    <template v-if="hasIcon">
      <LoadingIcon v-if="loading" class="e-svg-spin" />
      <slot v-else name="icon" />
    </template>
    <span v-if="slots.default" class="e-btn_body whitespace-nowrap">
      <slot />
    </span>
    <!-- <span v-else>&zwnj;</span> -->
  </button>
</template>
<style lang="scss">
.e-svg-spin {
  animation: spin 1s infinite linear;
}
.e-btn {
  svg {
    width: 1em;
    height: 1em;
    transform: scaleX(1.25) scaleY(1.25);
    + .e-btn_body {
      margin-inline-start: 0.4em;
    }
  }
}
</style>

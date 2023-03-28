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
  loading: Boolean,
  pill: Boolean,
  square: Boolean,
  disabled: Boolean,
})

const slots = useSlots()

const hasIcon = computed(() => slots.icon || props.loading)
const cls = computedCls(props, 'e-btn', ['variant', 'color', 'size'])
</script>
<template>
  <button :class="[cls]" type="button" :disabled="disabled">
    <span class="e-btn_icon" v-if="hasIcon">
      <EIcon v-if="loading" spin><LoadingIcon /></EIcon>
      <template v-else>
        <slot name="icon" />
      </template>
    </span>
    <span class="e-btn_body" v-if="slots.default">
      <slot />
    </span>
    <span v-else>&zwnj;</span>
  </button>
</template>

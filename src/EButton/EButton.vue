<script setup lang="ts">
import style from './style'
import { computed, getCurrentInstance, type PropType } from 'vue'

const props = defineProps({
  type: {
    type: String as PropType<'round' | 'circle' | 'link'>,
  },
  color: {
    type: String as PropType<'primary' | 'success' | 'warning' | 'error'>,
    default: 'default',
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md',
  },
  disabled: Boolean,
})

const ctx = getCurrentInstance()

const inGroup = ctx?.parent?.exposed?.$name === 'e-button-group'

const cls = computed(() =>
  style({
    color: !props.disabled ? props.color : 'default',
    size: props.size,
    type: inGroup ? undefined : props.type,
    disabled: props.disabled,
    inGroup,
  })
)
</script>
<template>
  <button class="e-button" :class="cls" type="button" :disabled="disabled">
    <span>
      <slot />
    </span>
  </button>
</template>

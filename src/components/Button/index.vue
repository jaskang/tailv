<script setup lang="ts">
import { ref, computed } from 'vue'
import { useCls } from './styles'

defineOptions({ name: 'TButton' })
const props = defineProps({})
const emit = defineEmits<{ click: [number] }>()
const slots = defineSlots<{ default(): any }>()

const cls = useCls(() => {
  return {
    variant: props.variant,
    color: props.color,
    size: props.size,
    rounded: props.rounded || props.circle,
    square: props.square || props.circle,
    block: props.block,
    disabled: props.disabled,
  }
})
</script>
<template>
  <div :class="cls"></div>
</template>
<style lang="scss"></style>

<script setup lang="ts">
import { ref, computed, type PropType, VNode } from 'vue'

defineOptions({ name: 'TSelect' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default(): VNode[] }>()
const props = defineProps({
  value: [String, Number],
  options: Array,
  disabled: Boolean,
  clearable: Boolean,
  size: String as PropType<'sm' | 'md' | 'lg'>,
  placeholder: String,
})
</script>
<template>
  <RingInput> </RingInput>
</template>

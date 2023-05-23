<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'

defineOptions({ name: 'TSpace' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  gap: String as PropType<string>,
})
</script>

<template>
  <div class="t-space flex">
    <slot></slot>
  </div>
</template>

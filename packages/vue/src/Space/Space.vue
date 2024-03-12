<script setup lang="ts">
import { ref, computed } from 'vue'

defineOptions({ name: 'Space' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({})
</script>
<template>
  <div class="flex">
    <slot />
  </div>
</template>
<style lang="scss"></style>

<script setup lang="ts">
import { computed, ref } from 'vue'

defineOptions({ name: 'Dropdown' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any; content?(_: {}): any }>()
const props = defineProps({
  menu: Array,
})
</script>
<template>
  <Popper trigger="click" placement="bottom" ref="popperRef">
    <slot />
    <template #content>
      <div class="z-popover rounded-md bg-white shadow-lg ring-1 ring-input ring-opacity-50">
        <slot name="content">
          <div class="px-2"></div>
        </slot>
      </div>
    </template>
  </Popper>
</template>

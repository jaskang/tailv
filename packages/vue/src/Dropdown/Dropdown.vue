<script setup lang="ts">
import { ref, computed } from 'vue'

defineOptions({ name: 'Dropdown' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  menu: Array,
})
</script>
<template>
  <Popper trigger="click" placement="bottom" ref="popperRef">
    <slot />
    <template #content>
      <div class="z-popover ring-opacity-5 rounded-md bg-white ring-1 shadow-lg ring-slate-300">
        <slot name="content">
          <div class="px-2">
            {{ content }}
          </div>
        </slot>
      </div>
    </template>
  </Popper>
</template>

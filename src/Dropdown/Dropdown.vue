<script setup lang="ts">
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
      <div class="z-popover ring-base-border ring-opacity-50 rounded-md bg-white ring-1 shadow-lg">
        <slot name="content">
          <div class="px-2"></div>
        </slot>
      </div>
    </template>
  </Popper>
</template>

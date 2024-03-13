<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

defineOptions({ name: 'ScrollArea' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  xEnabled: Boolean,
  yEnabled: Boolean,
})

const wrapperEl = ref()
const scrollXEl = ref()
const scrollYEl = ref()

const onscroll = (payload: UIEvent) => {}
onMounted(() => {})
</script>
<template>
  <div ref="wrapperEl" class="relative overflow-hidden">
    <div
      class="h-full w-full [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      :style="{
        overflowX: xEnabled ? 'scroll' : 'hidden',
        overflowY: yEnabled ? 'scroll' : 'hidden',
      }"
    >
      <slot />
    </div>
    <div v-if="yEnabled" class="absolute bottom-0 right-0 top-0 w-1 overflow-hidden bg-black/20">
      <div ref="scrollXEl"></div>
    </div>
    <div v-if="xEnabled" class="absolute bottom-0 left-0 right-0 h-1 overflow-hidden bg-black/50">
      <div ref="scrollYEl"></div>
    </div>
  </div>
</template>

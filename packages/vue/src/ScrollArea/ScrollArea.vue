<script setup lang="ts">
import { useResizeObserver } from '@vueuse/core'
import { ref, computed, onMounted } from 'vue'

defineOptions({ name: 'ScrollArea' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  xEnabled: Boolean,
  yEnabled: Boolean,
})

const wrapperEl = ref()
const viewportEl = ref()
const scrollXEl = ref()
const scrollYEl = ref()

function getThumbRatio(viewportSize: number, contentSize: number) {
  const ratio = viewportSize / contentSize
  return Number.isNaN(ratio) ? 0 : ratio
}

const sizes = ref({
  wrapper: {
    width: 0,
    height: 0,
  },
  viewport: {
    width: 0,
    height: 0,
  },
})
const onscroll = (payload: UIEvent) => {}
onMounted(() => {})
useResizeObserver(wrapperEl, entries => {
  const entry = entries[0]
  const { width, height } = entry.contentRect
  text.value = `width: ${width}, height: ${height}`
})
useResizeObserver(viewportEl, entries => {})
</script>
<template>
  <div ref="wrapperEl" class="relative overflow-hidden">
    <div
      ref="viewportEl"
      class="h-full w-full [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      :style="{
        overflowX: xEnabled ? 'scroll' : 'hidden',
        overflowY: yEnabled ? 'scroll' : 'hidden',
      }"
    >
      <slot />
    </div>
    <div
      v-if="yEnabled"
      class="absolute bottom-0 right-0 top-0 flex w-1 touch-none select-none flex-col overflow-hidden bg-black/20"
    >
      <div
        ref="scrollXEl"
        class="relative flex-1 rounded-[10px] bg-black/25 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
      ></div>
    </div>
    <div v-if="xEnabled" class="absolute bottom-0 left-0 right-0 h-1 overflow-hidden bg-black/50">
      <div ref="scrollYEl"></div>
    </div>
  </div>
</template>

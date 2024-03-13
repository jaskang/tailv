<script setup lang="ts">
import { useResizeObserver, useScroll } from '@vueuse/core'
import { ref, computed, onMounted } from 'vue'
import { getThumbInfo } from './utils'

defineOptions({ name: 'ScrollArea' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  xEnabled: Boolean,
  yEnabled: Boolean,
})

const viewportEl = ref()
const contentEl = ref()
const scrollXEl = ref()
const scrollYEl = ref()

const domSize = ref({
  content: {
    width: 0,
    height: 0,
  },
  viewport: {
    width: 0,
    height: 0,
  },
})

const { x:scrollX, y:scrollY } = useScroll(viewportEl)

const thumb = computed(() => {
  return {
    x: getThumbInfo(domSize.value.content.width, domSize.value.viewport.width),
    y: getThumbInfo(domSize.value.content.height, domSize.value.viewport.height)
  }
})
const offset = computed(()=>({
  x: scrollX.value * thumb.value.x.ratio,
    y: scrollY.value * thumb.value.y.ratio,
}))
useResizeObserver(viewportEl, entries => {
const entry = entries[0]
const { width, height } = entry.contentRect
domSize.value.viewport = { width:width, height:height }
})
useResizeObserver(contentEl, entries => {
const entry = entries[0]
const { width, height } = entry.contentRect
domSize.value.content = { width:width, height:height }
})

onMounted(() => {})
</script>
<template>
  <div class="relative overflow-hidden" :style="{
    '--thumb-width':  thumb.x.size + 'px',
    '--thumb-height': thumb.y.size + 'px',
  }">
    <div
      ref="viewportEl"
      class="h-full w-full [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      :style="{
        overflowX: xEnabled ? 'scroll' : 'hidden',
        overflowY: yEnabled ? 'scroll' : 'hidden',
      }"
    >
      <div class="min-w-full table" ref="contentEl">
        <slot />
      </div>
    </div>
    <div
      v-if="yEnabled"
      class="absolute bottom-0 right-0 top-0 flex w-1 touch-none select-none overflow-hidden bg-black/20"
    >
      <div
        ref="scrollYEl"
        class="relative h-[--thumb-height] flex-1 w-1 rounded-[10px] bg-black/40 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        :style="{
          transform: `translate3d(0px, ${offset.y}px, 0px)` 
        }"
      />
    </div>
    <div
      v-if="xEnabled"
      class="absolute bottom-0 left-0 right-0 flex flex-col h-1 touch-none select-none overflow-hidden bg-black/20"
    >
      <div
        ref="scrollXEl"
        class="relative w-[--thumb-width] h-1 flex-1  rounded-[10px] bg-black/40 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        :style="{
          transform: `translate3d(${offset.x}px, 0px, 0px)` 
        }"
      />
    </div>
  </div>
</template>

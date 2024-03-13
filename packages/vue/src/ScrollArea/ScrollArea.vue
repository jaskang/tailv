<script setup lang="ts">
import { useResizeObserver, useScroll } from '@vueuse/core'
import { ref, computed, onMounted, type PropType } from 'vue'
import { getThumbInfo } from './utils'

defineOptions({ name: 'ScrollArea' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  mode: { type: String as PropType<'x' | 'y' | 'all'>, default: 'all' },
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

const { x: scrollX, y: scrollY } = useScroll(viewportEl)

const thumb = computed(() => {
  return {
    x: getThumbInfo(domSize.value.content.width, domSize.value.viewport.width),
    y: getThumbInfo(domSize.value.content.height, domSize.value.viewport.height),
  }
})
const offset = computed(() => ({
  x: scrollX.value * thumb.value.x.ratio,
  y: scrollY.value * thumb.value.y.ratio,
}))
useResizeObserver(viewportEl, entries => {
  const entry = entries[0]
  const { width, height } = entry.contentRect
  domSize.value.viewport = { width: width, height: height }
  console.log('viewportEl', entry)
})
useResizeObserver(contentEl, entries => {
  const entry = entries[0]
  const { width, height } = entry.contentRect
  domSize.value.content = { width: width, height: height }
  console.log('contentEl', entry)
})

onMounted(() => {})
</script>
<template>
  <div
    class="relative overflow-hidden"
    :style="{
      '--thumb-width': thumb.x.size + 'px',
      '--thumb-height': thumb.y.size + 'px',
    }"
  >
    <div
      ref="viewportEl"
      class="h-full w-full [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      :style="{
        overflowX: mode === 'x' || mode === 'all' ? 'scroll' : 'hidden',
        overflowY: mode === 'y' || mode === 'all' ? 'scroll' : 'hidden',
      }"
    >
      <div class="table min-w-full" ref="contentEl">
        <slot />
      </div>
    </div>
    <div
      v-if="mode === 'y' || mode === 'all'"
      class="absolute bottom-0 right-0 top-0 flex touch-none select-none overflow-hidden px-[2px]"
    >
      <div
        ref="scrollYEl"
        class="relative h-[--thumb-height] w-[6px] flex-1 rounded-[10px] bg-black/40 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        :style="{
          transform: `translate3d(0px, ${offset.y}px, 0px)`,
        }"
      />
    </div>
    <div
      v-if="mode === 'x' || mode === 'all'"
      class="absolute bottom-0 left-0 right-0 flex touch-none select-none flex-col overflow-hidden py-[2px]"
    >
      <div
        ref="scrollXEl"
        class="relative h-[6px] w-[--thumb-width] flex-1 rounded-[10px] bg-black/40 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']"
        :style="{
          transform: `translate3d(${offset.x}px, 0px, 0px)`,
        }"
      />
    </div>
  </div>
</template>

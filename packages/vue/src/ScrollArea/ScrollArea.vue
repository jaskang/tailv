<script setup lang="ts">
import { useDraggable, useResizeObserver, useScroll } from '@vueuse/core'
import { ref, computed, onMounted, type PropType, watch, watchEffect } from 'vue'
import { getScrollPositionFromPointer, getThumbOffsetFromScroll, getThumbSize, type Sizes } from './core'

defineOptions({ name: 'ScrollArea' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  direction: { type: String as PropType<'vertical' | 'horizontal' | 'all'>, default: 'vertical' },
})

const viewportEl = ref<HTMLElement>()
const contentEl = ref<HTMLElement>()
const scrollbarXEl = ref<HTMLElement>()
const scrollbarYEl = ref<HTMLElement>()
const thumbXEl = ref<HTMLElement>()
const thumbYEl = ref<HTMLElement>()

const sizes = ref<Sizes>({
  content: { width: 0, height: 0 },
  viewport: { width: 0, height: 0 },
  scrollbar: { width: 0, height: 0, paddingStart: 0, paddingEnd: 0 },
})
const { x: scrollLeft, y: scrollTop } = useScroll(viewportEl)

const showX = computed(
  () =>
    (props.direction === 'horizontal' || props.direction === 'all') &&
    sizes.value.content.width > sizes.value.viewport.width
)

const showY = computed(
  () =>
    (props.direction === 'vertical' || props.direction === 'all') &&
    sizes.value.content.height > sizes.value.viewport.height
)

const offsetX = computed(() =>
  viewportEl.value ? getThumbOffsetFromScroll(scrollLeft.value, sizes.value, 'horizontal') : 0
)

const offsetY = computed(() =>
  viewportEl.value ? getThumbOffsetFromScroll(scrollTop.value, sizes.value, 'vertical') : 0
)

const handleSizeChange = () => {
  if (viewportEl.value) {
    sizes.value = {
      content: {
        width: viewportEl.value.scrollWidth ?? 0,
        height: viewportEl.value.scrollHeight ?? 0,
      },
      viewport: {
        width: viewportEl.value.offsetWidth ?? 0,
        height: viewportEl.value.offsetHeight ?? 0,
      },
      scrollbar: {
        width: scrollbarXEl.value?.clientWidth ?? 0,
        height: scrollbarYEl.value?.clientHeight ?? 0,
        paddingStart: 0,
        paddingEnd: 0,
      },
    }
    console.log(sizes.value)
  }
}

useDraggable(thumbXEl, {
  initialValue: { x: 0, y: 0 },
  containerElement: scrollbarXEl,
  axis: 'x',
  onMove(pos) {
    scrollLeft.value = getScrollPositionFromPointer(pos.x, sizes.value, 'vertical')
  },
})

useDraggable(thumbYEl, {
  initialValue: { x: 0, y: 0 },
  containerElement: scrollbarYEl,
  axis: 'y',
  onMove(pos) {
    scrollTop.value = getScrollPositionFromPointer(pos.y, sizes.value, 'vertical')
  },
})

useResizeObserver(contentEl, handleSizeChange)
useResizeObserver(scrollbarXEl, handleSizeChange)
useResizeObserver(scrollbarYEl, handleSizeChange)

// watchEffect(() => {
//   console.log('useDraggable', x.value, y.value, style.value, position.value, isDragging.value)
// })
</script>
<template>
  <div
    class="relative overflow-hidden"
    :style="{
      '--thumb-width': sizes ? `${getThumbSize(sizes, 'horizontal')}px` : undefined,
      '--thumb-height': sizes ? `${getThumbSize(sizes, 'vertical')}px` : undefined,
    }"
  >
    <div
      ref="viewportEl"
      class="h-full w-full [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      :style="{
        overflowX: direction === 'horizontal' || direction === 'all' ? 'scroll' : 'hidden',
        overflowY: direction === 'vertical' || direction === 'all' ? 'scroll' : 'hidden',
      }"
    >
      <div class="table min-w-full" ref="contentEl">
        <slot />
      </div>
    </div>

    <div
      v-if="showX"
      ref="scrollbarXEl"
      class="absolute bottom-0 left-0 right-0 flex touch-none select-none flex-col overflow-hidden py-[2px]"
    >
      <div
        ref="thumbXEl"
        class="relative h-[6px] w-[--thumb-width] flex-1 cursor-pointer rounded-[10px] bg-black/30 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] hover:bg-black/50"
        :style="{
          transform: `translate3d(${offsetX}px, 0px, 0px)`,
        }"
      />
    </div>

    <div
      v-if="showY"
      ref="scrollbarYEl"
      class="absolute bottom-0 right-0 top-0 flex touch-none select-none overflow-hidden px-[2px]"
    >
      <div
        ref="thumbYEl"
        class="relative h-[--thumb-height] w-[6px] flex-1 cursor-pointer rounded-[10px] bg-black/30 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-[''] hover:bg-black/50"
        :style="{
          transform: `translate3d(0px, ${offsetY}px, 0px)`,
        }"
      />
    </div>
  </div>
</template>

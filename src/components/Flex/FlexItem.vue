<script setup lang="ts">
import { computed, defineComponent, type PropType, type StyleHTMLAttributes, type StyleValue } from 'vue'

type FlexType = number | 'auto' | 'initial' | 'none'

function parseFlex(flex: FlexType): string {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`
  }
  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`
  }
  return flex
}

defineOptions({ name: 'TFlexItem' })
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  flex: {
    type: [Number, String] as PropType<number | 'auto' | 'none'>,
    default: 'none',
  },
})
const style = computed<StyleValue>(() => {
  const flex = parseFlex(props.flex)
  return {
    flex,
  }
})
</script>

<template>
  <div class="t-flex-item relative" :style="style">
    <slot />
  </div>
</template>

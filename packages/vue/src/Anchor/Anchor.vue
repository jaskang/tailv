<script setup lang="ts">
import { createAnchorStyle } from '@zonda/style'
import { computed, type PropType } from 'vue'
import AnchorItems from './AnchorItems.vue'
import type { AnchorOption } from './type'
import { findKeyOffset } from './utils'
import { useControllableValue } from '../utils/useControllableValue'

defineOptions({ name: 'Anchor' })
const props = defineProps({
  selectedKey: String,
  options: {
    type: Array as PropType<AnchorOption[]>,
    default: () => [],
  },
})
const emit = defineEmits<{ click: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()

const [state, setState] = useControllableValue<string>(props, {
  valuePropName: 'selectedKey',
})
const offset = computed(() => findKeyOffset(props.options, state.value))

const onChange = (key: string) => {
  setState(key)
}

const { anchor, anchorWarper, anchorCursor } = createAnchorStyle()
</script>
<template>
  <div :class="anchorWarper">
    <div :class="anchor">
      <div v-if="offset" :class="anchorCursor" style="{transform: `translateY(${offset}rem)`}" />
      <AnchorItems :options="options" selectedKey="{value}" @change="onChange" />
    </div>
  </div>
</template>

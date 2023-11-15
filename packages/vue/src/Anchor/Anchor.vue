<script setup lang="ts">
import { createAnchorStyle } from '@zonda/style'
import { computed, type PropType } from 'vue'
import AnchorItems from './AnchorItems.vue'
import type { AnchorItem } from './type'
import { findKeyOffset } from './utils'
import { useControllableValue } from '../utils/useControllableValue'

defineOptions({ name: 'Anchor' })
const props = defineProps({
  selectedKey: String,
  items: {
    type: Array as PropType<AnchorItem[]>,
    default: () => [],
  },
})

const emit = defineEmits<{ 'update:selectedKey': [string] }>()

const [state, setState] = useControllableValue<string>(props, {
  valuePropName: 'selectedKey',
})

const offset = computed(() => findKeyOffset(props.items, state.value))

const onChange = (key: string) => {
  setState(key)
}

const { anchor, anchorWarper, anchorCursor } = createAnchorStyle()
</script>
<template>
  <div :class="anchorWarper">
    <div :class="anchor">
      <div v-if="offset" :class="anchorCursor" style="{transform: `translateY(${offset}rem)`}" />
      <AnchorItems :items="items" selectedKey="{value}" @change="onChange" />
    </div>
  </div>
</template>

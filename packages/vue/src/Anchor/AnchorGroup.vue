<script setup lang="ts">
import { createAnchorStyle } from '@zonda/style'
import { computed, type PropType } from 'vue'
import AnchorItems from './AnchorItems.vue'
import type { AnchorGroupProps, AnchorOption } from './type'
import { findKeyOffset } from './utils'
import { useControllableValue } from '../utils/useControllableValue'

defineOptions({ name: 'Anchor' })
const props = defineProps({
  selectedKey: String,
  groups: {
    type: Array as PropType<AnchorGroupProps['groups']>,
    default:()=>[]
  }
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



export const AnchorGroup = (props: AnchorGroupProps) => {
  const { items, className, style } = props
  const [value, setValue] = useControllableValue<string>(props, {
    valuePropName: 'selectedKey',
  })
  const onChange = (key: string) => {
    setValue(key)
  }
  return (
    <div className={clsx('z-anchor-group', className)} style={style}>
      {items.map(item => (
        <div className="mt-12 lg:mt-8" key={item.key || item.title}>
          <div className="mb-8 text-sm font-semibold text-slate-900 dark:text-slate-200 lg:mb-3">
            {item.title}
          </div>
          <Anchor items={item.children} selectedKey={value} onChange={onChange} />
        </div>
      ))}
    </div>
  )
}

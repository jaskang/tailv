import { on } from 'events'
import {
  cloneVNode,
  type ComponentPublicInstance,
  defineComponent,
  onMounted,
  onUnmounted,
  onUpdated,
  type PropType,
  type Ref,
  ref,
  type VNode,
  watch,
  watchEffect,
} from 'vue'

import { getFirstElementFromChildren, mergeFirstChild } from '@/utils/vnode'

export function useFirstElement(): [Ref<HTMLElement | null>, (v: VNode[]) => VNode[]] {
  let vnode: VNode[] = []
  // only save VNodes reference, not use ref
  const el = ref<HTMLElement | null>(null)
  const hookVNode = (v: VNode[]) => {
    vnode = v
    return v
  }
  const getFirstElement = () => {
    const element = getFirstElementFromChildren(vnode)
    if (element !== el.value) {
      el.value = element
    }
  }

  onMounted(() => getFirstElement())
  onUpdated(() => getFirstElement())
  onUnmounted(() => {
    el.value = null
  })
  return [el, hookVNode]
}

export const ElSlot = defineComponent({
  name: 'TElSlot',
  props: {
    elRef: {
      type: Function as PropType<(el: HTMLElement | null) => void>,
      required: true,
    },
    extraProps: Object as PropType<Record<string, unknown>>,
  },
  setup(props, { slots }) {
    // trigger相关变量
    const [el, hookVNode] = useFirstElement()
    watch(el, () => {
      props.elRef(el.value)
    })
    return () => {
      const children = hookVNode(slots.default?.() ?? [])
      mergeFirstChild(children, props.extraProps || {})
      return <>{children}</>
    }
  },
})

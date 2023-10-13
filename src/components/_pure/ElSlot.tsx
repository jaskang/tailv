import { isBrowser } from 'kotl'
import {
  defineComponent,
  getCurrentInstance,
  onMounted,
  onUnmounted,
  onUpdated,
  type PropType,
  type Ref,
  ref,
  watch,
} from 'vue'

import { getRootNodes, withSingleton } from '@/utils/vnode'

function useFirstElement(): Ref<HTMLElement | null> {
  const instance = getCurrentInstance()
  // only save VNodes reference, not use ref
  const element = ref<HTMLElement | null>(null)

  const getFirstElement = () => {
    if (isBrowser()) {
      const nodes = getRootNodes(instance!.vnode)
      if (nodes.length > 0) {
        if (nodes[0] && nodes[0] !== element.value) {
          element.value = nodes[0] as HTMLElement
        }
      }
    }
  }

  onMounted(() => getFirstElement())
  onUpdated(() => getFirstElement())
  onUnmounted(() => {
    element.value = null
  })
  return element
}

export const ElSlot = defineComponent({
  name: 'ZElSlot',
  props: {
    elRef: Function as PropType<(el: HTMLElement | null) => void>,
    extraProps: Object as PropType<Record<string, unknown>>,
    componentName: String,
  },
  setup(props, { slots, expose }) {
    // trigger相关变量
    const el = useFirstElement()
    watch(el, newEl => {
      props.elRef?.(newEl)
    })
    expose({ el })
    return () => {
      const children = withSingleton(
        slots.default?.() ?? [],
        props.componentName || 'ElSlot',
        props.extraProps
      )
      return children
    }
  },
})

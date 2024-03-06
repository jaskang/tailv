import {
  computed,
  inject,
  InjectionKey,
  MaybeRefOrGetter,
  onMounted,
  provide,
  reactive,
  ref,
  toValue,
  type Ref,
} from 'vue'
import { useFloating, offset, flip, shift, type VirtualElement } from '@floating-ui/vue'
import { uid } from 'kotl'
import { onClickOutside, useEventListener } from '@vueuse/core'
import { useHoverListener, useFocusListener, useClickListener } from '../../use/useTargetEvent'

export type PopperContext = {
  nodeId: string
  parent: string
  open: boolean
  onOpenChange(open: boolean, event?: Event, reason?: OpenChangeReason): void
}

export type PopperTreeContext = {
  nodeId: string
  addNode: (node: PopperNode) => void
  removeNode: (nodeId: string) => void
}
export type PopperNode = {
  nodeId: string
  open: boolean
}

export type PopperTrigger = 'click' | 'hover' | 'focus' | 'manual'

const POPPER_TREE_CONTEXT_KEY = Symbol('popper-tree') as InjectionKey<PopperTreeContext>

export function usePopperTree(nodeId: string) {
  const children = ref<PopperNode[]>([])
  const addNode = (node: PopperNode) => {
    children.value.push(node)
  }
  const removeNode = (nodeId: string) => {
    children.value = children.value.filter(n => n.nodeId !== nodeId)
  }
  const hasChildrenOpen = computed(() => children.value.some(n => n.open))
  provide(POPPER_TREE_CONTEXT_KEY, {
    nodeId,
    addNode,
    removeNode,
  })
  return {
    children,
    hasChildrenOpen,
  }
}

export function useClick(options: { reference: Ref<HTMLElement | undefined>; floating: Ref<HTMLElement | undefined> }) {
  onMounted(() => {
    useEventListener(options.reference, 'click', e => {})
  })
}

function refElement(el: Ref<HTMLElement | VirtualElement | undefined>) {
  return computed(() => {
    const e = toValue(el)
    if (e && 'nodeType' in e) {
      return e
    }
    return undefined
  })
}

export function usePopper({
  reference,
  floating,
  trigger,
}: {
  reference: Ref<HTMLElement | VirtualElement | undefined>
  floating: Ref<HTMLElement | undefined>
  trigger: Ref<PopperTrigger[]>
}) {
  const nodeId = `popper-${uid(6)}`
  const parent = inject(POPPER_TREE_CONTEXT_KEY, null)
  const { hasChildrenOpen } = usePopperTree(nodeId)
  const selfOpen = ref(false)
  const open = computed(() => selfOpen.value || hasChildrenOpen.value)
  const floatingReturn = useFloating(reference, floating, {
    middleware: [offset(10), flip(), shift()],
    // whileElementsMounted: autoUpdate,
  })
  const onOpenChange = (val: boolean, trigger?: PopperTrigger) => {
    console.log(trigger)
    selfOpen.value = val
  }

  //
  if (trigger.value.includes('hover')) {
    const referenceHover = ref(false)
    const floatingHover = ref(false)
    const updateOpen = () => {
      onOpenChange(referenceHover.value || floatingHover.value, 'hover')
    }
    useHoverListener(refElement(reference), { delayLeave: 100 }, val => {
      referenceHover.value = val
      updateOpen()
    })
    useHoverListener(refElement(floating), { delayLeave: 100 }, val => {
      floatingHover.value = val
      updateOpen()
    })
  }

  if (trigger.value.includes('focus')) {
    useFocusListener(refElement(reference), val => {
      console.log(val, 'focus')
      onOpenChange(val, 'focus')
    })
    onClickOutside(
      floating,
      e => {
        console.log(e, 'onClickOutside')
        onOpenChange(false, 'click')
      },
      { ignore: [refElement(reference)] }
    )
  }
  if (trigger.value.includes('click')) {
    useClickListener(refElement(reference), () => {
      console.log(!open.value, 'click')
      onOpenChange(!open.value, 'click')
    })
    onClickOutside(
      floating,
      e => {
        console.log(e, 'onClickOutside')
        onOpenChange(false, 'click')
      },
      { ignore: [refElement(reference)] }
    )
  }

  //

  parent?.addNode(reactive({ nodeId, open }))
  onMounted(() => {
    parent?.removeNode(nodeId)
  })
  return {
    open,
    nodeId,
    onOpenChange,
    ...floatingReturn,
  }
}

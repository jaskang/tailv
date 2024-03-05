import { type Ref } from 'vue'
import { type ReferenceElement, useFloating, offset, flip, shift } from '@floating-ui/vue'
import { uid } from 'kotl'

export type PopperContext = {
  nodeId: string
  parent: string
  open: boolean
  onOpenChange(open: boolean, event?: Event, reason?: OpenChangeReason): void
}

export type PopperTrigger = 'click' | 'hover' | 'focus' | 'manual'

export function usePopper(options: { reference: Ref<ReferenceElement>; floating: Ref<HTMLElement>; trigger: PopperTrigger }) {
  const nodeId = `popper-${uid(6)}`
  const floatingReturn = useFloating(options.reference, options.floating, {
    // whileElementsMounted: autoUpdate,
    middleware: [offset(10), flip(), shift()],
  })
  return {
    nodeId,
    ...floatingReturn,
  }
}

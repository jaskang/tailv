import { isObject } from 'kotl'
import {
  Comment,
  defineComponent,
  Fragment,
  h,
  inject,
  type InjectionKey,
  type MaybeRef,
  type Ref,
  ref,
  Text,
  toValue,
  type VNode,
} from 'vue'

import { useClickOutside } from '@/hooks/useClickOutside'
import { useEventListener } from '@/hooks/useEventListener'

import { ElSlot } from '../_pure/ElSlot'

export type TriggerType = 'click' | 'hover' | 'focus' | 'manual'

export type UsePopperTriggerOptions = {
  referenceEl: Ref<HTMLElement | null>
  floatingEl: Ref<HTMLElement | null>
  trigger: Ref<TriggerType>
  open: Ref<boolean>
  delay: MaybeRef<number>
}

export const POPPER_TRIGGER_TOKEN: InjectionKey<Ref> = Symbol('popper-trigger')

export const PopperTrigger = defineComponent({
  name: 'TPopperTrigger',
  props: {},
  setup(_, { slots, expose }) {
    return () => {
      const triggerRef = inject(POPPER_TRIGGER_TOKEN, ref(null)) as Ref<HTMLElement | null>
      const setTriggerRef = (el: HTMLElement | null) => {
        triggerRef.value = el
      }

      return <ElSlot elRef={setTriggerRef}>{slots.default?.()}</ElSlot>
    }
  },
})

export function usePopperTrigger(
  { referenceEl, floatingEl, trigger, open, delay }: UsePopperTriggerOptions,
  change: (value: boolean, event: string) => void
) {
  const hoverDelay = toValue(delay)
  let timer: ReturnType<typeof setTimeout>
  const handleTriggerEnter = () => {
    // if (props.disabled) return
    if (trigger.value === 'hover' && !open.value) {
      console.log('handleTriggerEnter')

      clearTimeout(timer)
      change(true, 'mouseenter')
    }
  }
  function handleTriggerLeave() {
    // if (props.disabled) return
    if (trigger.value === 'hover' && open.value) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        change(false, 'mouseleave')
      }, hoverDelay)
    }
  }
  function handleTriggerClick() {
    // if (props.disabled) return
    if (trigger.value === 'click') change(!open.value, 'click')
  }
  function handleTriggerFocus() {
    // if (props.disabled) return
    if (trigger.value === 'focus' && !open.value) change(true, 'focus')
  }
  function handleTriggerBlur() {
    // if (props.disabled) return
    if (trigger.value === 'focus' && open.value) change(false, 'blur')
  }
  function handleClickOutside() {
    // if (props.disabled) return
    if (trigger.value !== 'manual' && open.value) change(false, 'clickOutside')
  }
  console.log('usePopperTrigger')
  useEventListener(referenceEl, 'mouseenter', handleTriggerEnter)
  useEventListener(referenceEl, 'mouseleave', handleTriggerLeave)
  useEventListener(referenceEl, 'click', handleTriggerClick)
  useEventListener(referenceEl, 'focus', handleTriggerFocus)
  useEventListener(referenceEl, 'blur', handleTriggerBlur)
  useEventListener(floatingEl, 'mouseenter', handleTriggerEnter)
  useEventListener(floatingEl, 'mouseleave', handleTriggerLeave)
  useClickOutside([floatingEl, referenceEl], handleClickOutside)
}

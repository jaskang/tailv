import type { MaybeRef, Ref } from 'vue'
import { onClickOutside, useEventListener } from '@vueuse/core'

export type TriggerType = 'click' | 'hover' | 'focus' | 'manual'

export type UsePopperTriggerOptions = {
  trigger: Ref<TriggerType>
}

export function usePopperTrigger(
  referenceEl: Ref<HTMLElement | undefined>,
  floatingEl: Ref<HTMLElement | undefined>,
  { trigger }: UsePopperTriggerOptions
) {
  const handleTriggerEnter = () => {
    if (props.disabled) return

    if (trigger.value === 'hover') {
      clearTimeout(timer.hover)

      timer.hover = setTimeout(() => {
        toggleVisible(true)
      }, 250)
    }

    emitEvent(props.onTipEnter)
  }

  function handleTriggerLeave() {
    if (props.disabled) return

    if (trigger.value === 'hover') {
      clearTimeout(timer.hover)

      timer.hover = setTimeout(() => {
        toggleVisible(false)
      }, 250)
    }

    emitEvent(props.onTipLeave)
  }

  function handleTriggerClick() {
    if (props.disabled) return

    if (trigger.value === 'click') {
      toggleVisible()
    }
  }

  function handleTriggerFocus() {
    if (props.disabled) return

    if (trigger.value === 'focus') {
      toggleVisible(true)
    }
  }

  function handleTriggerBlur() {
    if (props.disabled) return

    if (trigger.value === 'focus') {
      toggleVisible(false)
    }
  }

  function handleClickOutside() {
    if (props.disabled) return

    emitEvent(props.onClickOutside)

    if (props.outsideClose && trigger.value !== 'custom' && currentVisible.value) {
      toggleVisible(false)
      emitEvent(props.onOutsideClose)
    }
  }

  onClickOutside(referenceEl, handleClickOutside, { ignore: [] })
  useEventListener(referenceEl, 'mouseenter', handleTriggerEnter)
  useEventListener(referenceEl, 'mouseleave', handleTriggerLeave)
  useEventListener(referenceEl, 'click', handleTriggerClick)
  useEventListener(referenceEl, 'focus', handleTriggerFocus)
  useEventListener(referenceEl, 'blur', handleTriggerBlur)
  useEventListener(floatingEl, 'mouseenter', handleTriggerEnter)
  useEventListener(floatingEl, 'mouseleave', handleTriggerLeave)
}

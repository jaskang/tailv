import { computed, onUnmounted, reactive, Ref, watch, watchEffect } from 'vue'
import { createPopper, Instance as PopperInstance, Options as PopperOptions } from '@popperjs/core'
import { uniqueId } from '@elenext/shared'

export type PlacementType =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'bottom'
  | 'right'
  | 'left'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end'
export type TriggerType = 'click' | 'hover' | 'focus' | 'manual'
export type StrategyType = 'absolute' | 'fixed'

interface UsePopperOptions {
  referenceRef: Ref<Element>
  popperRef: Ref<HTMLElement>
  trigger?: TriggerType
  onTrigger: (teleportId: string, value?: boolean) => void
  placement?: PlacementType
  offset?: number
  hideDaly?: number
}

interface usePopperState {
  instance: PopperInstance | null
  popperId: string
  attrs: {
    styles: any
    attributes: Record<string, any>
  }
}

export const fromEntries = (entries: Array<[string, any]>) =>
  entries.reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {})

export const usePopper = (props: UsePopperOptions) => {
  const popperId = uniqueId('el-popper')
  const { referenceRef, popperRef } = props
  const timers = { showTimer: null, hideTimer: null }

  const state = reactive<usePopperState>({
    instance: null,
    popperId,
    attrs: {
      styles: {
        popper: {
          position: 'absolute',
          left: '0',
          top: '0'
        },
        arrow: {
          position: 'absolute'
        }
      },
      attributes: {}
    }
  })

  const popperOptions = computed<PopperOptions>(() => {
    return {
      placement: props.placement || 'bottom-start',
      strategy: 'absolute',
      modifiers: [
        {
          name: 'updateState',
          enabled: true,
          phase: 'write',
          fn: ({ state: popperState }: any) => {
            const elements = Object.keys(popperState.elements)
            state.attrs = {
              styles: fromEntries(elements.map(element => [element, popperState.styles[element] || {}])),
              attributes: fromEntries(elements.map(element => [element, popperState.attributes[element] || {}]))
            }
          },
          requires: ['computeStyles']
        },
        { name: 'applyStyles', enabled: false },
        { name: 'offset', options: { offset: [0, props.offset || 0] } }
      ]
    }
  })

  const clearScheduled = () => {
    clearTimeout(timers.hideTimer)
    clearTimeout(timers.showTimer)
  }

  let clickEvent = null

  const togglePopper = (event: MouseEvent) => {
    clickEvent = event
    props.onTrigger(popperId)
  }
  const showPopper = () => {
    clearScheduled()
    timers.showTimer = setTimeout(() => {
      props.onTrigger(popperId, true)
    }, 0)
  }
  const hidePopper = () => {
    clearScheduled()
    timers.hideTimer = setTimeout(() => {
      props.onTrigger(popperId, false)
    }, props.hideDaly || 200)
  }
  const outSideClickHandler = (event: MouseEvent) => {
    // outSideClick 和 togglePopper 冲突
    if (event === clickEvent) {
      return
    }
    if (popperRef.value && !popperRef.value.contains(event.target as Node)) {
      if (
        ['hover', 'focus'].indexOf(props.trigger) !== -1 &&
        referenceRef.value &&
        referenceRef.value.contains(event.target as Node)
      ) {
        return
      } else {
        hidePopper()
      }
    }
  }

  const eventRegOrUnReg = isReg => {
    const referenceEl = referenceRef.value
    const popperEl = popperRef.value
    const event = isReg ? 'addEventListener' : 'removeEventListener'
    if (referenceEl && popperEl) {
      if (props.trigger === 'hover') {
        referenceEl[event]('mouseenter', showPopper)
        referenceEl[event]('mouseleave', hidePopper)
        popperEl[event]('mouseenter', showPopper)
        popperEl[event]('mouseleave', hidePopper)
      }
      if (props.trigger === 'click') {
        referenceEl[event]('click', togglePopper)
        // popperEl[event]('mouseenter', showPopper)
        // popperEl[event]('mouseleave', hidePopper)
      }
      if (props.trigger === 'focus') {
        referenceEl[event]('focus', showPopper)
        referenceEl[event]('blur', hidePopper)
      }
      if (props.trigger !== 'manual') {
        document[event]('click', outSideClickHandler)
      }
    }
  }

  watchEffect(() => {
    if (state.instance) {
      state.instance.setOptions(popperOptions.value)
    }
  })

  watch([referenceRef, popperRef], () => {
    const referenceEl = referenceRef.value
    const popperEl = popperRef.value
    if (referenceEl && popperEl) {
      if (state.instance) {
        state.instance.destroy()
      }
      state.instance = createPopper(referenceEl, popperEl as HTMLElement, popperOptions.value)
    }
  })

  watchEffect(onInvalidate => {
    const referenceEl = referenceRef.value
    const popperEl = popperRef.value
    onInvalidate(() => {
      eventRegOrUnReg(false)
    })
    if (referenceEl && popperEl) {
      eventRegOrUnReg(true)
    }
  })

  onUnmounted(() => {
    if (state.instance) {
      state.instance.destroy()
    }
  })

  return state
}

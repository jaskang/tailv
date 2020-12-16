import { computed, onUnmounted, reactive, Ref, ref, watch, watchEffect } from 'vue'
import { createPopper, Instance as PopperInstance, Options as PopperOptions } from '@popperjs/core'
import { createEl, removeEl, uniqueId } from '@elenext/shared'

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

export type StrategyType = 'absolute' | 'fixed'

export type TriggerType = 'click' | 'hover' | 'focus' | 'manual'

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
  teleportEl: HTMLElement
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
  const teleportEl = createEl(uniqueId('el-popper'))
  const { referenceRef, popperRef } = props
  const timers = { showTimer: null, hideTimer: null }

  const state = reactive<usePopperState>({
    instance: null,
    teleportEl: teleportEl,
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
      strategy: 'absolute' as StrategyType,
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

  const togglePopper = (event: MouseEvent) => {
    event.stopPropagation()
    props.onTrigger(teleportEl.id)
  }
  const showPopper = () => {
    clearScheduled()
    timers.showTimer = setTimeout(() => {
      props.onTrigger(teleportEl.id, true)
    }, 0)
  }
  const hidePopper = () => {
    clearScheduled()
    timers.hideTimer = setTimeout(() => {
      props.onTrigger(teleportEl.id, false)
    }, props.hideDaly || 200)
  }
  const outSideClickHandler = (event: MouseEvent) => {
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
        popperEl[event]('mouseenter', showPopper)
        referenceEl[event]('mouseleave', hidePopper)
        popperEl[event]('mouseleave', hidePopper)
      }
      if (props.trigger === 'click') {
        referenceEl[event]('click', togglePopper)
        popperEl[event]('mouseenter', showPopper)
        popperEl[event]('mouseleave', hidePopper)
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
    removeEl(teleportEl)
  })

  return state
}

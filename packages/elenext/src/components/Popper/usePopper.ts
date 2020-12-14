import { computed, getCurrentInstance, onUnmounted, reactive, Ref, ref, watchEffect } from 'vue'
import { createPopper, Instance as PopperInstance, Options as PopperOptions } from '@popperjs/core'
import { createEl, removeEl } from '../../utils/dom'

export type Placement =
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

export type Strategy = 'absolute' | 'fixed'

interface UsePopperOptions {
  placement?: Placement
  // strategy?: 'absolute' | 'fixed'
  offset?: number
}

export const fromEntries = (entries: Array<[string, any]>) =>
  entries.reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {})

export const usePopper = (referenceRef: Ref<Element>, popperRef: Ref<HTMLElement>, options: UsePopperOptions = {}) => {
  const self = getCurrentInstance()
  const teleportEl = createEl(`el-popper-${self.uid}`)

  const state = reactive<{
    instance: PopperInstance | null
    teleportEl: HTMLElement
    attrs: {
      styles: any
      attributes: Record<string, any>
    }
  }>({
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

  const popperOptions = computed(() => {
    return {
      placement: options.placement || 'bottom-start',
      strategy: 'absolute' as Strategy,
      modifiers: [
        {
          name: 'updateState',
          enabled: true,
          phase: 'write',
          fn: ({ state: popperState }: any) => {
            const elements = Object.keys(popperState.elements)
            state.attrs = {
              styles: fromEntries(elements.map(element => [element, popperState.styles[element] || {}])),
              attributes: fromEntries(elements.map(element => [element, popperState.attributes[element]]))
            }
            // console.log(state.attrs)
          },
          requires: ['computeStyles']
        },
        { name: 'applyStyles', enabled: false },
        { name: 'offset', options: { offset: [0, options.offset || 0] } }
      ]
    }
  })

  watchEffect(() => {
    if (state.instance) {
      state.instance.setOptions(popperOptions.value)
    }
  })

  watchEffect(onInvalidate => {
    onInvalidate(() => {
      if (state.instance) {
        state.instance.destroy()
      }
      state.instance = null
    })
    if (referenceRef.value && popperRef.value) {
      state.instance = createPopper(referenceRef.value, popperRef.value, popperOptions.value as any)
    }
  })

  onUnmounted(() => {
    removeEl(teleportEl)
  })

  return state
}

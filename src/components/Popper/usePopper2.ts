import { createPopper, Instance as PopperInstance, Options as PopperOptions } from '@popperjs/core'
import { computed, reactive, ref, watch, watchEffect } from 'vue'
import { uniqueId } from '@/utils/uniqueId'
import { createEl, normalizeClass } from '@/utils/dom'

type Options = Partial<PopperOptions>

function fromEntries(entries: Array<[string, any]>) {
  return entries.reduce((acc, [key, value]) => {
    acc[key] = value
    return acc
  }, {} as any)
}

export const usePopper = (options: Options = {}) => {
  const referenceEl = ref<HTMLElement>()
  const popperEl = ref<HTMLElement>()
  const popperRef = ref<PopperInstance | null>(null)

  const optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: options.modifiers || []
  }

  const state = reactive<any>({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: '0',
        top: '0'
      }
    },
    attributes: {}
  })

  const popperOptions = computed(() => {
    return {
      onFirstUpdate: options.onFirstUpdate,
      placement: options.placement || 'bottom-start',
      strategy: options.strategy || 'absolute',
      modifiers: [
        ...(options.modifiers || []),
        {
          name: 'updateState',
          enabled: true,
          phase: 'write',
          fn: ({ state: popperState }: any) => {
            console.log(popperState)

            const elements = Object.keys(popperState.elements)
            state.styles = fromEntries(elements.map(element => [element, popperState.styles[element] || {}]))
            state.attributes = fromEntries(elements.map(element => [element, popperState.attributes[element]]))
          },
          requires: ['computeStyles']
        },
        { name: 'applyStyles', enabled: false }
      ]
    }
  })
  watch(popperOptions, (value, prevVaule, onInvalidate) => {
    if (popperRef.value) {
      popperRef.value.setOptions(popperOptions.value)
    }
  })

  watchEffect(onInvalidate => {
    if (referenceEl?.value == null || popperEl?.value == null) {
      return
    }
    console.log('createPopper')

    const popperInstance = createPopper(referenceEl.value, popperEl.value, popperOptions.value as any)

    popperRef.value = popperInstance
    console.log(popperInstance)

    onInvalidate(() => {
      popperInstance.destroy()
      popperRef.value = null
    })
  })

  return {
    popperEl,
    referenceEl,
    popperRef,
    state
  }
}

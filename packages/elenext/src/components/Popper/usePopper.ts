import { createPopper, Instance as PopperInstance, Options as PopperOptions } from '@popperjs/core'
import { computed, reactive, ref, watchEffect } from 'vue'

type Options = Partial<PopperOptions>

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

            state.styles = { ...popperState.styles }
            state.attributes = { ...popperState.attributes }
          },
          requires: ['computeStyles']
        },
        { name: 'applyStyles', enabled: false }
      ]
    }
  })
  watchEffect(() => {
    if (popperRef.value) {
      popperRef.value.setOptions(popperOptions.value)
    }
  })

  watchEffect(onInvalidate => {
    if (!referenceEl?.value || !popperEl?.value) {
      return
    }
    console.log('createPopper')

    const popperInstance = createPopper(referenceEl.value, popperEl.value, popperOptions.value as any)

    popperRef.value = popperInstance
    console.log(popperInstance)

    onInvalidate(() => {
      if (popperRef.value) {
        popperRef.value.destroy()
      }
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

import {
  reactive,
  toRefs,
  computed,
  ref,
  onMounted,
  watch,
  provide,
  ToRefs,
  inject,
  onBeforeUnmount,
  Ref,
  ComputedRef,
  unref,
  watchEffect
} from 'vue'
import { uniqueId, normalizeClass, createEl, removeEl } from '../../utils'
import { createPopper, Instance as Popper } from '@popperjs/core'

import './popper.scss'

export type PlacementType =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'

type PopperInjectData = {
  actions: {
    add: (id: symbol) => void
    remove: (id: symbol) => void
  }
}

type PopperState = {
  isActive: boolean
  children: symbol[]
}

const PopperSymbol = Symbol('Popper')

export function usePopper(
  referenceElRef: Ref<HTMLElement | undefined>,
  popperClass: string | string[],
  options?: {
    trigger?: 'click' | 'hover'
    placement?: PlacementType
    modifiers?: Array<any>
    strategy?: 'absolute' | 'fixed'
  }
) {
  const { trigger = 'click', placement = 'bottom', modifiers = [], strategy = 'absolute' } = options || {}
  const popperEl = createEl(uniqueId('el-popper'), normalizeClass(['el-popper', popperClass]))
  const popper = ref<Popper>()
  const hideTimer = ref<number>()
  const id = Symbol('usePopper')
  const state = reactive<PopperState>({
    isActive: false,
    children: []
  })

  const hasChildOpened = computed(() => state.children.length > 0)
  const isOpen = computed(() => state.isActive || hasChildOpened.value)

  const injectData = reactive<PopperInjectData>({
    actions: {
      add(id) {
        if (state.children.indexOf(id) === -1) {
          state.children.push(id)
        }
      },
      remove(id) {
        const menuIndex = state.children.indexOf(id)
        if (menuIndex >= 0) {
          state.children.splice(menuIndex, 1)
        }
      }
    }
  })

  watch(referenceElRef, referenceEl => {
    if (referenceEl) {
      popper.value = createPopper(referenceEl, popperEl, {
        placement,
        modifiers,
        strategy
      })
      const showEvents = ['mouseenter', 'focus']
      const hideEvents = ['mouseleave', 'blur']

      showEvents.forEach(event => {
        if (trigger === 'click' && event === 'mouseenter') {
          referenceEl.addEventListener('click', () => {
            state.isActive = true
          })
        } else {
          referenceEl.addEventListener(event, () => {
            state.isActive = true
          })
        }
        popperEl.addEventListener(event, () => {
          state.isActive = true
        })
      })

      hideEvents.forEach(event => {
        referenceEl.addEventListener(event, () => {
          state.isActive = false
        })
        popperEl.addEventListener(event, () => {
          state.isActive = false
        })
      })
    } else {
      popper.value?.destroy()
      popper.value = undefined
    }
  })

  const { actions } = inject<PopperInjectData>(PopperSymbol) || {}

  watchEffect(() => {
    console.log('isActive:' + state.isActive)
    console.log('children:' + state.children.length)
  })
  watch(isOpen, isOpen => {
    console.log(isOpen)
    if (isOpen) {
      clearTimeout(hideTimer.value)
      popper.value?.update()
      popperEl.setAttribute('data-show', 'true')
      actions?.add(id)
    } else {
      hideTimer.value = window.setTimeout(() => {
        popperEl.removeAttribute('data-show')
        actions?.remove(id)
      }, 200)
    }
  })
  onBeforeUnmount(() => {
    if (popper.value) {
      popper.value.destroy()
      popper.value = undefined
    }
    if (actions) {
      actions.remove(id)
    }
    removeEl(popperEl)
  })

  provide(PopperSymbol, injectData)

  return {
    teleportId: popperEl.id,
    popper
  }
}

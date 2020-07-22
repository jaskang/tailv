import {
  reactive,
  computed,
  ref,
  watch,
  provide,
  inject,
  onBeforeUnmount,
  Ref,
  watchEffect,
  onUnmounted,
  onMounted,
  InjectionKey,
  toRefs
} from 'vue'
import { createPopper, Instance as Popper } from '@popperjs/core'
import { normalizeClass, createEl, removeEl } from '../../utils/dom'
import { uniqueId } from '../../utils/uniqueId'

import './popper.scss'
import useChildren from '../../hooks/useChildren'

export type Placement =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end'

export type Strategy = 'absolute' | 'fixed'

const popperInject: InjectionKey<{
  id: symbol
  visible: boolean
}> = Symbol('popper')

export function usePopper(
  popperClass?: string | string[],
  popperOptions?: {
    trigger?: 'click' | 'hover' | 'focus' | 'manual'
    placement?: Placement
    modifiers?: Array<any>
    strategy?: Strategy
  }
) {
  const { placement = 'bottom', modifiers = [], strategy = 'absolute' } = popperOptions || {}
  const id = uniqueId('el-popper')
  const popperEl = createEl(id, normalizeClass(['el-popper', popperClass]))
  const popper = ref<Popper>()
  let referenceEl: HTMLElement | null = null

  const setReferenceEl = (el: HTMLElement) => {
    if (referenceEl === el) {
      return
    }
    if (popper.value) {
      popper.value.destroy()
    }
    popper.value = createPopper(el, popperEl, {
      placement,
      modifiers,
      strategy
    })
  }

  const state = reactive({
    focus: false,
    visible: false,
    childrenVisible: false
  })

  const realVisible = computed(() => state.visible || state.focus || state.childrenVisible)

  const provideData = reactive({
    id: id,
    visible: realVisible
  })
  useChildren(popperInject, provideData, children => {
    state.childrenVisible = children.some(item => item.visible)
    console.log(`${id}:${state.childrenVisible}`)
    console.log(children)
  })

  watchEffect(() => {
    if (realVisible.value) {
      popper.value?.update().then(() => {
        popperEl.setAttribute('data-show', '')
      })
    } else {
      popperEl.removeAttribute('data-show')
    }
  })

  const events: Array<[string, () => void]> = [
    ['mouseenter', () => (state.focus = true)],
    ['mouseleave', () => (state.focus = false)]
  ]

  onMounted(() => {
    events.forEach(event => {
      popperEl.addEventListener(event[0], event[1])
    })
  })
  onUnmounted(() => {
    if (popper.value) {
      popper.value.destroy()
      popper.value = undefined
    }
    events.forEach(event => {
      popperEl.removeEventListener(event[0], event[1])
    })
    removeEl(popperEl)
  })

  return {
    popper,
    popperEl: popperEl,
    setReferenceEl,
    state: state
  }
}

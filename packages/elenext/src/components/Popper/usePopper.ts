import { reactive, computed, ref, watch, provide, inject, onBeforeUnmount, Ref, watchEffect } from 'vue'
import { createPopper, Instance as Popper } from '@popperjs/core'
import { normalizeClass, createEl, removeEl } from '../../utils/dom'
import { uniqueId } from '../../utils/uniqueId'

import './popper.scss'

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

export function usePopper(
  popperClass?: string | string[],
  popperOptions?: {
    placement?: Placement
    modifiers?: Array<any>
    strategy?: Strategy
  }
) {
  const { placement = 'bottom', modifiers = [], strategy = 'absolute' } = popperOptions || {}

  const popperEl = createEl(uniqueId('el-popper'), normalizeClass(['el-popper', popperClass]))
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

  const setVisible = (visible: boolean) => {
    if (visible) {
      popperEl.setAttribute('data-show', '')
    } else {
      popperEl.removeAttribute('data-show')
    }
  }
  onBeforeUnmount(() => {
    if (popper.value) {
      popper.value.destroy()
      popper.value = undefined
    }
    removeEl(popperEl)
  })

  return {
    popper,
    popperEl: popperEl,
    setVisible,
    setReferenceEl
  }
}

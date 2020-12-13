<template>
  <transition v-bind="collapseTransitionProps">
    <slot />
  </transition>
</template>

<script lang="ts">
import { App, defineComponent, TransitionProps } from 'vue'
import { addClass, removeClass } from '../../utils/dom'
import { getCompName } from '../../utils'

const collapseTransitionProps: TransitionProps = {
  onBeforeEnter(_el: Element) {
    const el = _el as HTMLElement
    addClass(el, 'el-collapse-transition')
    // @ts-ignore
    if (!el.dataset) el.dataset = {}

    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom

    el.style.height = '0'
    el.style.paddingTop = '0'
    el.style.paddingBottom = '0'
  },

  onEnter(_el: Element) {
    const el = _el as HTMLElement
    el.dataset.oldOverflow = el.style.overflow
    el.style.transitionProperty = 'all'
    if (el.scrollHeight !== 0) {
      el.style.height = el.scrollHeight + 'px'
      el.style.paddingTop = el.dataset.oldPaddingTop || ''
      el.style.paddingBottom = el.dataset.oldPaddingBottom || ''
    } else {
      el.style.height = ''
      el.style.paddingTop = el.dataset.oldPaddingTop || ''
      el.style.paddingBottom = el.dataset.oldPaddingBottom || ''
    }
    el.style.overflow = 'hidden'
  },

  onAfterEnter(_el: Element) {
    const el = _el as HTMLElement
    removeClass(el, 'el-collapse-transition')
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow || ''
  },

  onBeforeLeave(_el: Element) {
    const el = _el as HTMLElement
    // @ts-ignore
    if (!el.dataset) el.dataset = {}
    el.dataset.oldPaddingTop = el.style.paddingTop
    el.dataset.oldPaddingBottom = el.style.paddingBottom
    el.dataset.oldOverflow = el.style.overflow

    el.style.height = el.scrollHeight + 'px'
    el.style.overflow = 'hidden'
  },

  onLeave(_el: Element) {
    const el = _el as HTMLElement
    el.style.transitionProperty = 'all'
    if (el.scrollHeight !== 0) {
      // for safari: add class after set height, or it will jump to zero height suddenly, weired
      addClass(el, 'el-collapse-transition')
      el.style.height = '0'
      el.style.paddingTop = '0'
      el.style.paddingBottom = '0'
    }
  },

  onAfterLeave(_el: Element) {
    const el = _el as HTMLElement
    removeClass(el, 'el-collapse-transition')
    el.style.height = ''
    el.style.overflow = el.dataset.oldOverflow || ''
    el.style.paddingTop = el.dataset.oldPaddingTop || ''
    el.style.paddingBottom = el.dataset.oldPaddingBottom || ''
  }
}

const CollapseTransition = defineComponent({
  name: getCompName('CollapseTransition'),
  setup(_props, { slots }) {
    return {
      collapseTransitionProps
    }
  }
})

CollapseTransition.install = (app: App): void => {
  app.component(CollapseTransition.name, CollapseTransition)
}

export default CollapseTransition
</script>

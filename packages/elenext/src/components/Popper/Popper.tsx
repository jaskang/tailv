import { defineComponent, onMounted, getCurrentInstance, Teleport, PropType, reactive, watch, watchEffect } from 'vue'

import { usePopper, Placement } from './usePopper'
import useClickAway from '../../hooks/useClickAway'
// import vClickAway from '../../directives/v-click-away'

const PopperInner = defineComponent({
  props: {
    setRootEl: {
      type: Function as PropType<(el: HTMLElement | null) => void>,
      required: true
    }
  },
  setup({ setRootEl }, { slots }) {
    onMounted(() => {
      const instance = getCurrentInstance()
      let node = instance!.vnode.el
      while (node && !node.tagName) {
        node = node.nextSibling
      }
      setRootEl(node as HTMLElement | null)
    })
    return () => (slots.default ? slots.default() : <span></span>)
  }
})

const Popper = defineComponent({
  name: 'ElPopper',
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    popperClass: {
      type: String,
      default: ''
    },
    trigger: {
      type: String as PropType<'click' | 'hover'>,
      default: 'click'
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'top'
    },
    modifiers: { type: Array, default: [] },
    strategy: {
      type: String as PropType<'absolute' | 'fixed'>,
      default: 'bottom'
    }
  },
  setup(props, { attrs, slots, emit }) {
    const { state: popperState, popperEl, setReferenceEl } = usePopper(props.popperClass, {
      placement: props.placement as Placement,
      modifiers: props.modifiers,
      strategy: props.strategy as 'absolute' | 'fixed'
    })
    const state = reactive({
      focusPopper: false,
      visible: props.modelValue
    })
    const setVisible = (visible: boolean) => {
      if (popperState.focus && visible === false) {
      } else {
        state.visible = visible
        emit('update:modelValue', visible)
      }
    }
    watchEffect(() => {
      popperState.visible = state.visible
    })
    watch(
      () => props.modelValue,
      value => {
        state.visible = value
      }
    )

    const setRootEl = (el: HTMLElement | null) => {
      if (!el) {
        throw new Error('reference root dom required')
      }
      setReferenceEl(el)
      if (props.trigger === 'click') {
        el.addEventListener('click', () => {
          setVisible(!state.visible)
        })
        useClickAway(() => {
          setVisible(false)
        }, el)
      } else if (props.trigger === 'hover') {
        el.addEventListener('mouseenter', () => {
          setVisible(true)
        })
        el.addEventListener('mouseleave', () => {
          setVisible(false)
        })
      } else if (props.trigger === 'focus') {
        el.addEventListener('focus', () => {
          setVisible(true)
        })
        el.addEventListener('blur', () => {
          setVisible(false)
        })
      }
    }

    return () => {
      return (
        <>
          <Teleport to={`#${popperEl.id}`}>{slots.popper?.()}</Teleport>
          <PopperInner setRootEl={setRootEl}>{slots.default?.()}</PopperInner>
        </>
      )
    }
  }
})

export default Popper

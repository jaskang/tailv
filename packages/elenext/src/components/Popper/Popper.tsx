import {
  defineComponent,
  ref,
  onMounted,
  getCurrentInstance,
  Teleport,
  PropType,
  Ref,
  reactive,
  watch,
  watchEffect
} from 'vue'

import { usePopper, Placement } from './usePopper'
import useClickAway from '../../hooks/useClickAway'

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
  props: {
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
    const { popper, popperEl, setReferenceEl, setVisible } = usePopper(props.popperClass, {
      placement: props.placement as Placement,
      modifiers: props.modifiers,
      strategy: props.strategy as 'absolute' | 'fixed'
    })
    const state = reactive({
      visible: false
    })
    watchEffect(() => {
      setVisible(state.visible)
    })
    const setRootEl = (el: HTMLElement | null) => {
      if (el) {
        setReferenceEl(el)
        if (props.trigger === 'click') {
          el.addEventListener('click', () => {
            state.visible = !state.visible
          })
          useClickAway(() => {
            state.visible = false
          }, el)
        } else if (props.trigger === 'hover') {
          el.addEventListener('mouseenter', () => {
            state.visible = true
          })
          el.addEventListener('mouseleave', () => {
            state.visible = false
          })
        } else if (props.trigger === 'focus') {
          el.addEventListener('focus', () => {
            state.visible = true
          })
          el.addEventListener('blur', () => {
            state.visible = false
          })
        }
      } else {
        throw new Error('reference root dom required')
      }
    }
    return () => {
      return (
        <>
          <Teleport to={`#${popperEl.id}`}>{slots.default && slots.default()}</Teleport>
          <PopperInner setRootEl={setRootEl}>{slots.reference?.()}</PopperInner>
        </>
      )
    }
  }
})

export default Popper

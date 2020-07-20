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
    value: {
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
    const { popper, popperEl, setReferenceEl, setVisible: setPopperVisible } = usePopper(props.popperClass, {
      placement: props.placement as Placement,
      modifiers: props.modifiers,
      strategy: props.strategy as 'absolute' | 'fixed'
    })
    const state = reactive({
      visible: props.value
    })
    const setVisible = (visible: boolean) => {
      state.visible = visible
      emit('input', visible)
    }
    watchEffect(() => {
      setPopperVisible(state.visible)
    })
    watch(
      () => props.value,
      value => {
        console.log(value)
        state.visible = value
      }
    )

    const setRootEl = (el: HTMLElement | null) => {
      if (el) {
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

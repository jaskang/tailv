import { defineComponent, ref, onMounted, getCurrentInstance, Teleport, PropType, Ref, h, Fragment } from 'vue'
import { usePopper, PlacementType } from './usePopper'

const PopperInner = defineComponent({
  props: {
    rootElRef: {
      type: Object as PropType<Ref<Element | undefined>>,
      required: true
    }
  },
  setup({ rootElRef }, { slots, attrs }) {
    onMounted(() => {
      const ctx = getCurrentInstance()
      if (ctx?.vnode.el) {
        rootElRef.value = ctx.vnode.el.nextElementSibling
      }
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
      type: String as PropType<PlacementType>,
      default: 'top'
    },
    modifiers: { type: Array, default: [] },
    strategy: {
      type: String as PropType<'absolute' | 'fixed'>,
      default: 'bottom'
    },
    render: {
      type: Function as PropType<() => JSX.Element>,
      default: () => <></>
    }
  },
  setup(props, { attrs, slots, emit }) {
    const referenceElRef = ref<HTMLElement>()
    const { teleportId } = usePopper(referenceElRef, props.popperClass, {
      trigger: props.trigger as 'click' | 'hover',
      placement: props.placement as PlacementType,
      modifiers: props.modifiers,
      strategy: props.strategy as 'absolute' | 'fixed'
    })

    return () => {
      const Render = props.render as () => JSX.Element
      return (
        <>
          <Teleport to={`#${teleportId}`}>{slots.popper ? slots.popper() : Render()}</Teleport>
          <PopperInner rootElRef={referenceElRef}>{slots.default?.()}</PopperInner>
        </>
      )
    }
  }
})

export default Popper

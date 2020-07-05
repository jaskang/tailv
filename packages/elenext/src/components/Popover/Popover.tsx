import { defineComponent, ref, onMounted, getCurrentInstance, Teleport, PropType, Ref } from 'vue'
import { usePopper } from '../Popper'

const PopoverInner = defineComponent({
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
    return () => (slots.default ? slots.default({}) : <span></span>)
  }
})

const Popover = defineComponent({
  setup(props, { attrs, slots, emit }) {
    const referenceElRef = ref<HTMLElement>()
    const { teleportId } = usePopper(referenceElRef, ['el-popover', 'el-popover--plain'], {
      placement: 'top',
      modifiers: [{ name: 'offset', options: [0, 4] }]
    })

    return () => (
      <>
        <Teleport to={`#${teleportId}`}>
          <div>
            <div class="el-popover__title">title</div>
            {slots.default?.()}
          </div>
          <div class="popper__arrow" data-popper-arrow></div>
        </Teleport>
        <PopoverInner rootElRef={referenceElRef}>{slots.reference?.()}</PopoverInner>
      </>
    )
  }
})

export default Popover

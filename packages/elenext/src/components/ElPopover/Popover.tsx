import { defineComponent, ref, onMounted, getCurrentInstance, Teleport } from 'vue';
import { usePopper, PlacementType } from '../ElPopper';

const PopoverInner = defineComponent({
  props: {
    rootElRef: {
      type: Object,
      required: true
    }
  },
  setup({ rootElRef }, { slots, attrs }) {
    onMounted(() => {
      const ctx = getCurrentInstance();
      rootElRef.value = ctx.vnode.el.nextElementSibling;
    });
    return () => (slots.default ? slots.default({}) : <span></span>);
  }
});

const Popover = defineComponent({
  setup(props, { attrs, slots, emit }) {
    const referenceElRef = ref(null);
    const { teleportId } = usePopper(referenceElRef, ['el-popover', 'el-popover--plain'], {
      placement: 'top',
      modifiers: [{ name: 'offset', options: [0, 4] }]
    });

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
    );
  }
});

export default Popover;

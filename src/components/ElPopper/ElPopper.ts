import {
  defineComponent,
  PropType,
  reactive,
  toRefs,
  Fragment,
  cloneVNode,
  h,
  mergeProps,
  computed,
  isReactive,
  Teleport,
  ref,
  readonly,
  onMounted,
  watch
} from 'vue';
import uniqueId from '@/utils/uniqueId';
import { createEl } from '@/utils/dom';
import { createPopper } from '@popperjs/core';

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
  | 'right-end';

interface ElPopperProps {
  placement: PlacementType;
  trigger: 'hover' | 'click';
  popperClass: string;
  visibleArrow: boolean;
}
export default defineComponent({
  name: 'ElPopper',
  props: {
    placement: {
      type: String,
      default: 'bottom'
    },
    trigger: {
      type: String,
      default: 'hover'
    },
    popperClass: { type: String, default: '' },
    visibleArrow: {
      type: Boolean,
      default: true
    }
  },
  setup(props: ElPopperProps, { slots }) {
    const id = uniqueId('el-popper');
    const teleport = ref(createEl(id));
    teleport.value.classList.add('el-popper');
    const reference = ref(null);
    const popper = ref(null);
    const state = reactive({
      isOpen: false
    });
    const hideTimeer = ref(null);
    console.log('teleport.value.id', teleport.value.id);

    function show() {
      clearTimeout(hideTimeer.value);
      popper.value.update();
      teleport.value.setAttribute('data-show', 'true');
      state.isOpen = true;
    }

    function hide() {
      hideTimeer.value = setTimeout(() => {
        teleport.value.removeAttribute('data-show');
        state.isOpen = false;
      }, 300);
    }
    function toggle() {
      if (teleport.value.getAttribute('data-show')) {
        hide();
      } else {
        show();
      }
    }

    onMounted(() => {
      popper.value = createPopper(reference.value, teleport.value, {
        placement: props.placement,
        modifiers: []
      });
      const showEvents = ['mouseenter', 'focus'];
      const hideEvents = ['mouseleave', 'blur'];

      showEvents.forEach(event => {
        reference.value.addEventListener(event, show);
      });

      hideEvents.forEach(event => {
        reference.value.addEventListener(event, hide);
      });
      setTimeout(() => {
        toggle();
      }, 5000);
    });
    watch(reference, refvalue => {
      console.log(refvalue);
    });
    return () => {
      const referenceContent = slots.reference ? slots.reference() : [];

      const transformedReferenceContent = referenceContent.map(vnode => {
        return cloneVNode(vnode, {
          ref: reference
        });
      });
      return h(Fragment, [
        h(Teleport, { to: `#${teleport.value.id}` }, [
          slots.default?.(),
          h('div', { class: 'popper__arrow', 'data-popper-arrow': true }, [])
        ]),
        transformedReferenceContent
      ]);
    };
  }
});

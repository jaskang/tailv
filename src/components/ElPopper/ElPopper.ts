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
  watch,
  provide,
  ComputedRef,
  ToRefs,
  inject,
  watchEffect,
  toRaw,
  isRef,
  onUnmounted,
  onBeforeUnmount,
  Ref
} from 'vue';
import uniqueId from '@/utils/uniqueId';
import { createEl } from '@/utils/dom';
import { createPopper, Instance as Popper } from '@popperjs/core';

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

type ElPopperState = ToRefs<{
  id: string;
  deep: number;
  isHover: boolean;
  children: ElPopperState[];
  hasChildOpened: boolean;
  isOpen: boolean;
}>;

const ElPopperContextKey = Symbol('ElPopperContext');
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
    const teleportEl = createEl(id, 'el-popper');
    const referenceRef = ref(null);
    let popper: Popper = null;
    const hideTimeer = ref(null);
    const parentState = inject<ElPopperState>(ElPopperContextKey, null);
    const state: ElPopperState = toRefs(
      reactive({
        id,
        deep: parentState?.deep ? parentState?.deep.value + 1 : 0,
        isHover: false,
        children: [],
        hasChildOpened: computed<boolean>(() =>
          state.children.value.some(item => {
            return item.isOpen;
          })
        ),
        isOpen: computed<boolean>(() => {
          return state.isHover.value || state.hasChildOpened.value;
        })
      })
    );

    provide(ElPopperContextKey, state);

    watch(state.isOpen, value => {
      if (value) {
        clearTimeout(hideTimeer.value);
        popper.update();
        teleportEl.setAttribute('data-show', 'true');
      } else {
        hideTimeer.value = setTimeout(() => {
          teleportEl.removeAttribute('data-show');
        }, 200);
      }
    });

    // function toggle() {
    //   if (teleportEl.getAttribute('data-show')) {
    //     hide();
    //   } else {
    //     show();
    //   }
    // }

    onMounted(() => {
      if (parentState) {
        parentState.children.value.push(state);
      }
      popper = createPopper(referenceRef.value, teleportEl, {
        placement: props.placement,
        modifiers: []
      });
      const showEvents = ['mouseenter', 'focus'];
      const hideEvents = ['mouseleave', 'blur'];

      showEvents.forEach(event => {
        referenceRef.value.addEventListener(event, () => {
          state.isHover.value = true;
        });
        teleportEl.addEventListener(event, () => {
          state.isHover.value = true;
        });
      });

      hideEvents.forEach(event => {
        referenceRef.value.addEventListener(event, () => {
          state.isHover.value = false;
        });
        teleportEl.addEventListener(event, () => {
          state.isHover.value = false;
        });
      });
    });

    onBeforeUnmount(() => {
      popper.destroy();
      if (parentState) {
        const index = parentState.children.value.indexOf(state);
        parentState.children.value.splice(index, 1);
      }
    });

    return () => {
      const referenceContent = slots.reference ? slots.reference() : [];

      const transformedReferenceContent = referenceContent.map(vnode => {
        return cloneVNode(vnode, {
          ref: referenceRef
        });
      });
      return h(Fragment, [
        h(Teleport, { to: `#${teleportEl.id}` }, [
          slots.default?.(),
          h('div', { class: 'popper__arrow', 'data-popper-arrow': true }, [])
        ]),
        transformedReferenceContent
      ]);
    };
  }
});

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
  Ref,
  VNode,
  RendererNode,
  RendererElement
} from 'vue';
import { uniqueId, normalizeClass, createEl, removeEl } from '@/utils';
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

type TriggerType = 'click' | 'hover';

type ElPopperState = ToRefs<{
  id: string;
  deep: number;
  isHover: boolean;
  children: ElPopperState[];
  hasChildOpened: boolean;
  isOpen: boolean;
}>;

const ElPopperContextKey = Symbol('ElPopperContext');

export function usePopper(
  referenceElRef: Ref<Element>,
  popperClass: string | string[],
  options?: {
    placement?: PlacementType;
    modifiers?: Array<any>;
    strategy?: 'absolute' | 'fixed';
  }
) {
  const { placement = 'bottom', modifiers = [], strategy = 'absolute' } = options || {};
  const popperEl = createEl(uniqueId('el-popper'), normalizeClass(['el-popper', popperClass]));
  const popper = ref<Popper>(null);
  const hideTimer = ref(null);
  const trigger = 'click';
  watch(referenceElRef, referenceEl => {
    if (referenceEl) {
      popper.value = createPopper(referenceEl, popperEl, {
        placement: placement,
        modifiers: modifiers,
        strategy: strategy
      });
      const showEvents = ['mouseenter', 'focus'];
      const hideEvents = ['mouseleave', 'blur'];

      showEvents.forEach(event => {
        if (trigger === 'click' && event === 'mouseenter') {
          referenceEl.addEventListener('click', () => {
            state.isHover.value = true;
          });
        } else {
          referenceEl.addEventListener(event, () => {
            state.isHover.value = true;
          });
        }
        popperEl.addEventListener(event, () => {
          state.isHover.value = true;
        });
      });

      hideEvents.forEach(event => {
        referenceEl.addEventListener(event, () => {
          state.isHover.value = false;
        });
        popperEl.addEventListener(event, () => {
          state.isHover.value = false;
        });
      });
    } else {
      popper.value.destroy();
      popper.value = null;
    }
  });
  const parentState = inject<ElPopperState>(ElPopperContextKey, null);
  const state: ElPopperState = toRefs(
    reactive({
      id: popperEl.id,
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
      clearTimeout(hideTimer.value);
      popper.value.update();
      popperEl.setAttribute('data-show', 'true');
    } else {
      hideTimer.value = setTimeout(() => {
        popperEl.removeAttribute('data-show');
      }, 200);
    }
  });

  onMounted(() => {
    if (parentState) {
      parentState.children.value.push(state);
    }
  });

  onBeforeUnmount(() => {
    if (popper.value) {
      popper.value.destroy();
      popper.value = null;
    }
    if (parentState) {
      const index = parentState.children.value.indexOf(state);
      parentState.children.value.splice(index, 1);
    }
    removeEl(popperEl);
  });

  return {
    teleportId: popperEl.id,
    popper
  };
}

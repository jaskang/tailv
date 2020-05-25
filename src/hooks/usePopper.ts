import { createPopper, Modifier } from '@popperjs/core';

import { onUnmounted, ref, onMounted, watchEffect, Ref, provide, reactive, inject } from 'vue';
import uniqueId from '@/utils/uniqueId';
import { createEl, removeEl } from '@/utils/dom';

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

type UsePopperOptions = {
  class?: string | string[];
  width?: string;
  trigger?: 'click' | 'hover';
  placement: PlacementType;
  modifiers: Array<Partial<Modifier<any, any>>>;
};

const POPPER_KEY = Symbol('POPPER_KEY');

const poppers = reactive([]);

export function usePopper(id: string, options: UsePopperOptions) {
  const popper = ref(null);
  const referenceRef = ref(null);
  const popperRef = ref(createEl(uniqueId(id)));
  const hideTimeer = ref(null);
  const stete = reactive({
    isOpen: false
  });
  watchEffect(() => {
    if (Array.isArray(options.class)) {
      popperRef.value.className = options.class.filter(cls => !!cls).join(' ');
    } else if (typeof options.class === 'string') {
      popperRef.value.className = options.class;
    }
    if (options.width) {
      popperRef.value.style.width = options.width;
    }
  });
  // const parent = inject(POPPER_KEY, null);
  // if (parent) {
  //   parent;
  // } else {
  //   provide(POPPER_KEY, {});
  // }
  function show() {
    clearTimeout(hideTimeer.value);
    popper.value.update();
    popperRef.value.setAttribute('data-show', 'true');
    stete.isOpen = true;
  }

  function hide() {
    hideTimeer.value = setTimeout(() => {
      popperRef.value.removeAttribute('data-show');
      stete.isOpen = false;
    }, 300);
  }
  function toggle() {
    if (popperRef.value.getAttribute('data-show')) {
      hide();
    } else {
      show();
    }
  }
  function initPopper() {
    popper.value = createPopper(referenceRef.value, popperRef.value, {
      placement: options.placement,
      modifiers: options.modifiers || []
    });
    if (options.trigger === 'click') {
      const toggleEvents = ['click'];
      const hideEvents = ['blur'];

      toggleEvents.forEach(event => {
        referenceRef.value.addEventListener(event, toggle);
      });

      hideEvents.forEach(event => {
        referenceRef.value.addEventListener(event, hide);
      });
    }
    if (options.trigger === 'hover') {
      const showEvents = ['mouseenter', 'focus'];
      const hideEvents = ['mouseleave', 'blur'];

      showEvents.forEach(event => {
        referenceRef.value.addEventListener(event, show);
      });

      hideEvents.forEach(event => {
        referenceRef.value.addEventListener(event, hide);
      });
    }
  }
  onMounted(() => {
    watchEffect(() => {
      if (referenceRef.value) {
        initPopper();
      }
    });
  });
  onUnmounted(() => {
    if (popper.value) {
      popper.value.destroy();
      popper.value = null;
    }
    removeEl(popperRef.value);
  });
  return {
    referenceRef,
    teleportId: popperRef.value.id,
    popper,
    show,
    hide,
    toggle
  };
}

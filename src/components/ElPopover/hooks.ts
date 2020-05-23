import { createPopper, Placement, Modifier } from '@popperjs/core';

import { onUnmounted, ref, onMounted, watch, watchEffect, nextTick, mergeProps } from 'vue';

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
  trigger: 'click' | 'hover';
  placement: PlacementType;
  modifiers: Array<Partial<Modifier<any, any>>>;
};

export const generateId = function() {
  return Math.floor(Math.random() * 10000);
};

function createEl(id: string) {
  const popperEl = document.createElement('div');
  popperEl.id = id + generateId();
  document.body.appendChild(popperEl);
  return popperEl;
}

function removeEl(el) {
  if (el.parentNode) el.parentNode.removeChild(el);
}
export function usePopper(id: string, options: UsePopperOptions) {
  const popper = ref(null);
  const referenceRef = ref(null);
  const popperRef = ref(createEl(id));

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
  // watchEffect(() => {
  //   if (popper.value && referenceRef.value) {
  //     popper.value.setOptions({
  //       placement: options.placement,
  //       modifiers: [
  //         {
  //           name: 'offset',
  //           options: {
  //             offset: [0, 8]
  //           }
  //         }
  //       ]
  //     });
  //   }
  // });

  function show() {
    popper.value.update();
    popperRef.value.setAttribute('data-show', 'true');
  }

  function hide() {
    popperRef.value.removeAttribute('data-show');
  }
  function toggle() {
    if (popperRef.value.getAttribute('data-show')) {
      popperRef.value.removeAttribute('data-show');
    } else {
      popper.value.update();
      popperRef.value.setAttribute('data-show', 'true');
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
    } else {
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
    teleportId: popperRef.value.id
  };
}

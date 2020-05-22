import { createPopper } from '@popperjs/core';

import { onUnmounted, ref, onMounted, watch, watchEffect, nextTick, mergeProps } from 'vue';

export const generateId = function() {
  return Math.floor(Math.random() * 10000);
};

type UsePopperAttr = {
  id: string;
  [key: string]: any;
};

export function usePopper(attrs: UsePopperAttr) {
  const popper = ref(null);
  const referenceRef = ref(null);
  const popperEl = document.createElement('div');
  const props: any = mergeProps(attrs);
  popperEl.id = props.id + generateId();
  if (props.class) {
    props.class.forEach(cls => {
      if (cls) {
        popperEl.classList.add(cls);
      }
    });
  }
  if (props.style) {
    for (const key in props.style) {
      popperEl.style[key] = props.style[key];
    }
  }
  document.body.appendChild(popperEl);

  function show() {
    popper.value.update();
    popperEl.setAttribute('data-show', '');
  }

  function hide() {
    popperEl.removeAttribute('data-show');
  }

  function initPopper() {
    popper.value = createPopper(referenceRef.value, popperEl, {
      placement: props.placement,
      strategy: 'fixed',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8]
          }
        }
      ]
    });
    const showEvents = ['mouseenter', 'focus'];
    const hideEvents = ['mouseleave', 'blur'];

    showEvents.forEach(event => {
      referenceRef.value.addEventListener(event, show);
    });

    hideEvents.forEach(event => {
      referenceRef.value.addEventListener(event, hide);
    });
  }
  onMounted(() => {
    watchEffect(() => {
      if (referenceRef.value) {
        nextTick(() => {
          initPopper();
        });
      }
    });
  });
  onUnmounted(() => {
    popper.value.destroy();
    popper.value = null;
    if (popperEl.parentNode) popperEl.parentNode.removeChild(popperEl);
  });
  return {
    referenceRef,
    teleportId: popperEl.id
  };
}

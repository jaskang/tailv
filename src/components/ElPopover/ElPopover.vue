<template>
  <teleport :to="`#${teleportId}`">
    <div>
      <div v-if="title" class="el-popover__title" v-text="title"></div>
      <slot>{{ content }}</slot>
    </div>
    <div class="popper__arrow" data-popper-arrow></div>
  </teleport>
  <PopoverReference :setup-ref="setupRef" v-bind="handler">
    <slot name="reference"></slot>
  </PopoverReference>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, toRefs, Fragment, cloneVNode, h, mergeProps, computed } from 'vue';

import { usePopper } from './hooks';

const PopoverReference = defineComponent({
  props: {
    setupRef: {
      type: Function,
      required: true
    }
  },
  setup(props, { slots, attrs }) {
    const children = slots.default ? slots.default() : [];
    const child = children?.[0]?.children?.[0];
    const mergeChild = cloneVNode(
      child,
      mergeProps(
        {
          ref: (obj: any) => {
            props.setupRef(obj.$el);
          }
        },
        attrs
      )
    );
    return () => {
      return h(Fragment, [mergeChild]);
    };
  }
});

export default defineComponent({
  name: 'ElPopoVer',
  components: { PopoverReference },
  props: {
    placement: {
      type: String as PropType<
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
        | 'right-end'
      >,
      default: 'bottom'
    },
    trigger: {
      type: String as PropType<'click' | 'hover'>,
      default: 'click'
    },
    openDelay: {
      type: Number,
      default: 0
    },
    closeDelay: {
      type: Number,
      default: 200
    },
    title: { type: String, default: '' },
    disabled: { type: Boolean, default: false },
    content: { type: String, default: '' },
    popperClass: { type: String, default: '' },
    width: {
      type: String,
      default: '200'
    },
    visibleArrow: {
      type: Boolean,
      default: true
    },
    arrowOffset: {
      type: Number,
      default: 0
    },
    transition: {
      type: String,
      default: 'fade-in-linear'
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  setup(props, { attrs, slots, emit }) {
    const { teleportId, referenceRef } = usePopper({
      id: 'ElPopover',
      placement: props.placement,
      class: ['el-popover', 'el-popper', props.popperClass, props.content && 'el-popover--plain'],
      style: { width: props.width + 'px' }
    });

    const { showPopper } = toRefs(
      reactive({
        showPopper: false
      })
    );
    const setupRef = (el: Element) => {
      referenceRef.value = el;
    };
    const positionStype = computed(() => {
      if (referenceRef.value) {
        if (props.placement === 'top') {
          return {};
        }
      }
      return {};
    });
    const handler = {
      onClick: event => {
        if (props.trigger === 'click') {
          console.log(event, referenceRef);
          showPopper.value = !showPopper.value;
        }
      },
      onMouseenter: event => {
        if (props.trigger === 'hover') {
          showPopper.value = true;
        }
      },
      onmouseleave: event => {
        if (props.trigger === 'hover') {
          showPopper.value = false;
        }
      },
      onBlur: event => {
        // showPopper.value = false;
      }
    };
    return {
      setupRef,
      positionStype,
      teleportId,
      showPopper,
      handler
    };
  }
});
</script>

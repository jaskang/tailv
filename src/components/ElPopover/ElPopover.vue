<template>
  <teleport :to="`#${teleportId}`">
    <div>
      <div v-if="title" class="el-popover__title" v-text="title"></div>
      <slot>{{ content }}</slot>
    </div>
    <div class="popper__arrow" data-popper-arrow></div>
  </teleport>
  <PopoverReference :setup-ref="setupRef">
    <slot name="reference"></slot>
  </PopoverReference>
</template>
<script lang="ts">
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
  isReactive
} from 'vue';

import { usePopper, PlacementType } from '../../hooks/usePopper';

const PopoverReference = defineComponent({
  props: {
    setupRef: {
      type: Function,
      required: true
    }
  },
  setup(props, { slots }) {
    const children = slots.default ? slots.default() : [];
    const child = children?.[0]?.children?.[0];

    return () => {
      const mergeChild = cloneVNode(child, {
        ref: (obj: any) => {
          if (obj?.$el) {
            props.setupRef(obj.$el);
          } else {
            props.setupRef(obj);
          }
        }
      });
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
      default: 'hover'
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
    transition: {
      type: String,
      default: 'fade-in-linear'
    },
    tabindex: {
      type: Number,
      default: 0
    }
  },
  setup(props) {
    const { teleportId, referenceRef } = usePopper('ElPopover', {
      placement: props.placement as PlacementType,
      trigger: props.trigger as 'click' | 'hover',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8]
          }
        }
      ],
      class: ['el-popover', 'el-popper', props.popperClass, props.content && 'el-popover--plain'],
      width: props.width + 'px'
    });

    const { showPopper } = toRefs(
      reactive({
        showPopper: false
      })
    );
    const setupRef = (el: Element) => {
      referenceRef.value = el;
    };
    return {
      setupRef,
      teleportId,
      showPopper
    };
  }
});
</script>

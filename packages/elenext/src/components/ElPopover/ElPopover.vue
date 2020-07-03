<template>
  <teleport :to="`#${teleportId}`">
    <div>
      <div v-if="title" class="el-popover__title" v-text="title"></div>
      <slot>{{ content }}</slot>
    </div>
    <div class="popper__arrow" data-popper-arrow></div>
  </teleport>
  <span ref="referenceElRef" style="display: inline-block;">
    <slot name="reference"></slot>
  </span>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from 'vue';

import { usePopper, PlacementType } from '../ElPopper';

export default defineComponent({
  name: 'ElPopoVer',
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
    const referenceElRef = ref(null);
    const { teleportId } = usePopper(
      referenceElRef,
      ['el-popover', props.popperClass, props.content && 'el-popover--plain'],
      {
        placement: props.placement as PlacementType,
        modifiers: [{ name: 'offset', options: [0, 4] }]
      }
    );

    return {
      teleportId,
      referenceElRef
    };
  }
});
</script>

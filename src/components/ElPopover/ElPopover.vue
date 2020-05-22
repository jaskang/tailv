<template>
  <teleport :to="`#${teleportId}`">
    <div
      v-show="!disabled && showPopper"
      ref="popper"
      :class="['el-popover', 'el-popper', popperClass, content && 'el-popover--plain']"
      :style="{ width: width + 'px' }"
    >
      <div v-if="title" class="el-popover__title" v-text="title"></div>
      <slot>{{ content }}</slot>
    </div>
  </teleport>
  <PopoverReference v-bind="handler">
    <slot name="reference"></slot>
  </PopoverReference>
</template>
<script lang="ts">
import { defineComponent, PropType, reactive, toRefs, Fragment, cloneVNode, h } from 'vue';
import { usePopper } from './hooks';

const PopoverReference = defineComponent((props, { slots, attrs }) => {
  const children = slots.default ? slots.default() : [];
  const child = children?.[0]?.children?.[0];
  return () => h(Fragment, [cloneVNode(child, attrs)]);
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
    const { teleportId } = usePopper('ElPopover');
    // console.log(teleportId);
    // console.log(slots.reference);
    // watch(reference, (reference, prevReference) => {
    //   console.log(reference, prevReference);

    //   if (reference && prevReference === null) {
    //     console.log(reference);
    //   }
    // });
    const { showPopper } = toRefs(
      reactive({
        showPopper: false
      })
    );
    const handler = {
      onClick: event => {
        if (props.trigger === 'click') {
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
        showPopper.value = false;
      }
    };
    return {
      teleportId,
      showPopper,
      handler
    };
  }
});
</script>

<template>
  <Popper :model-value="modelValue" :popper-class="classes" :placement="placement" :trigger="trigger" :offset="offset">
    <template #content>
      <slot name="content">
        {{ content }}
      </slot>
    </template>
    <slot />
  </Popper>
</template>
<script lang="ts">
import { App, computed, defineComponent, PropType } from 'vue'
import { mergeClass } from '@elenext/shared'
import { getBlockCls, getCompName } from '../../utils'
import { Popper, Placement } from '../Popper'

const blockCls = getBlockCls('Tooltip')
const Tooltip = defineComponent({
  name: getCompName('Tooltip'),
  components: {
    Popper
  },
  props: {
    effect: {
      type: String as PropType<'dark' | 'light'>,
      default: 'dark'
    },
    content: {
      type: String,
      default: ''
    },
    offset: {
      type: Number,
      default: 0
    },
    modelValue: Boolean,
    popperClass: {
      type: String,
      default: ''
    },
    placement: {
      type: String as PropType<Placement>,
      default: 'top'
    },
    trigger: {
      type: String as PropType<'click' | 'hover'>,
      default: 'hover'
    },
    transition: {
      type: String,
      default: ''
    }
  },
  setup(props, { slots }) {
    const classes = computed(() => mergeClass(blockCls, props.popperClass, 'is-' + props.effect))
    return {
      classes
    }
  }
})

Tooltip.install = (app: App): void => {
  app.component(Tooltip.name, Tooltip)
}

export default Tooltip
</script>

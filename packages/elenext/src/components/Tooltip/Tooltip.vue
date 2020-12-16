<template>
  <Popper
    arrow
    :background-color="backgroundColor"
    :model-value="modelValue"
    :popper-class="classes"
    :placement="placement"
    :trigger="trigger"
    :offset="offset"
    @change="visibleHandler"
  >
    <template #content>
      <slot name="content">
        {{ content }}
      </slot>
    </template>
    <slot />
  </Popper>
</template>
<script lang="ts">
import { App, computed, defineComponent, PropType, ref } from 'vue'
import { mergeClass } from '@elenext/shared'
import { getBlockCls, getCompName } from '../../utils'
import { Popper, PlacementType, TriggerType } from '../Popper'
import { emit } from 'process'

const blockCls = getBlockCls('Tooltip')
const Tooltip = defineComponent({
  name: getCompName('Tooltip'),
  components: {
    Popper
  },
  props: {
    modelValue: Boolean,
    backgroundColor: {
      type: String as PropType<string>,
      default: undefined
    },
    content: {
      type: String,
      default: ''
    },
    offset: {
      type: Number,
      default: 0
    },
    popperClass: {
      type: String,
      default: ''
    },
    placement: {
      type: String as PropType<PlacementType>,
      default: 'top'
    },
    trigger: {
      type: String as PropType<TriggerType>,
      default: 'hover'
    },
    transition: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    const innerValue = ref(false)
    const classes = computed(() => mergeClass('el-tooltip', props.popperClass))
    const visibleHandler = (visible: boolean) => {
      innerValue.value = visible
      emit('update:modelValue', visible)
    }
    return {
      classes,
      innerValue,
      visibleHandler
    }
  }
})

Tooltip.install = (app: App): void => {
  app.component(Tooltip.name, Tooltip)
}

export default Tooltip
</script>

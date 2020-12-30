<template>
  <e-popper
    visible-arrow
    :model-value="modelValue"
    :background-color="backgroundColor"
    :popper-class="classes"
    :placement="placement"
    :trigger="trigger"
    :offset="offset"
    :transition="transition"
    @change="visibleHandler"
  >
    <template #content>
      <div class="el-tooltip__content">
        <slot name="content">
          {{ content }}
        </slot>
      </div>
    </template>
    <slot />
  </e-popper>
</template>
<script lang="ts">
import { App, computed, defineComponent, PropType, ref } from 'vue'
import { mergeClass } from '@elenext/shared'
import { getCompName } from '../../utils'
import { EPopper, PlacementType, TriggerType } from '../Popper'
import { emit } from 'process'
import { propTypes } from '../../utils/PropTypes'

const ETooltip = defineComponent({
  name: getCompName('ETooltip'),
  components: {
    EPopper
  },
  props: {
    modelValue: propTypes.boolean(),
    content: propTypes.string(),
    popperClass: propTypes.string(''),
    offset: propTypes.number(0),
    backgroundColor: propTypes.string(''),
    placement: propTypes.oneOfString<PlacementType>('top'),
    trigger: propTypes.oneOfString<TriggerType>('hover'),
    transition: propTypes.string('el-popper-fade')
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

ETooltip.install = (app: App): void => {
  app.component(ETooltip.name, ETooltip)
}

export default ETooltip
</script>

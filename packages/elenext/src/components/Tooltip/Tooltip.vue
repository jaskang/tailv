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
import { App, computed, defineComponent, ref } from 'vue'
import { mergeClass } from '@elenext/shared'
import { EPopper, PlacementType, TriggerType } from '../Popper'
import { VpTypes } from '../../utils/vptypes'

const ETooltip = defineComponent({
  name: 'ETooltip',
  components: {
    EPopper,
  },
  props: {
    modelValue: VpTypes.bool(),
    content: VpTypes.string(),
    popperClass: VpTypes.string(),
    offset: VpTypes.number().def(0),
    backgroundColor: VpTypes.string(),
    // TODO: oneOf
    // placement: VpTypes.oneOfString(placements, { default: 'top' }),
    // trigger: VpTypes.oneOfString(triggers, { default: 'hover' }),
    placement: VpTypes.string<PlacementType>().def('top'),
    trigger: VpTypes.string<TriggerType>().def('hover'),
    transition: VpTypes.string().def('el-popper-fade'),
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
      visibleHandler,
    }
  },
})

ETooltip.install = (app: App): void => {
  app.component(ETooltip.name, ETooltip)
}

export default ETooltip
</script>

<template>
  <e-popper
    visible-arrow
    :model-value="modelValue"
    :popper-class="classes"
    :placement="placement"
    :trigger="trigger"
    :transition="transition"
    @update:model-value="onChange"
  >
    <template #content>
      <div ref="popper" :style="{ width: width }" class="el-popover__content" role="popper">
        <div v-if="title" class="el-popover__title">
          {{ title }}
        </div>
        <slot name="content">
          {{ content }}
        </slot>
      </div>
    </template>
    <slot />
  </e-popper>
</template>
<script lang="ts">
import { App, computed, defineComponent } from 'vue'
import { mergeClass } from '@elenext/shared'
import { EPopper, PlacementType, TriggerType } from '../Popper'
import { VpTypes } from '../../utils/vptypes'

const EPopover = defineComponent({
  name: 'EPopover',
  components: {
    EPopper,
  },
  props: {
    modelValue: VpTypes.bool(),
    title: VpTypes.string(),
    content: VpTypes.string(),
    popperClass: VpTypes.string(),
    // TODO: oneOf
    // placement: VpTypes.oneOfString(placements, { default: 'top' }),
    // trigger: VpTypes.oneOfString(triggers, { default: 'click' }),
    placement: VpTypes.string<PlacementType>().def('top'),
    trigger: VpTypes.string<TriggerType>().def('click'),
    transition: VpTypes.string().def('el-popper-fade'),
    width: VpTypes.string(),
  },
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    const classes = computed(() => mergeClass('el-popover', props.popperClass, props.content && 'el-popover--plain'))
    const onChange = (...arg) => {
      emit('update:modelValue', ...arg)
    }
    return {
      classes,
      onChange,
    }
  },
})
EPopover.install = (app: App): void => {
  app.component(EPopover.name, EPopover)
}
export default EPopover
</script>

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
import { prop } from '../../utils'
const EPopover = defineComponent({
  name: 'EPopover',
  components: {
    EPopper
  },
  props: {
    modelValue: prop.bool(),
    title: prop.string(),
    content: prop.string(),
    popperClass: prop.string(),
    // TODO: oneOf
    // placement: prop.oneOf(placements, { default: 'top' }),
    // trigger: prop.oneOf(triggers, { default: 'click' }),
    placement: prop.string<PlacementType>({ default: 'top' }),
    trigger: prop.string<TriggerType>({ default: 'click' }),
    transition: prop.string({ default: 'el-popper-fade' }),
    width: prop.string()
  },
  emits: ['update:modelValue'],
  setup(props, { emit, slots }) {
    const classes = computed(() => mergeClass('el-popover', props.popperClass, props.content && 'el-popover--plain'))
    const onChange = (...arg) => {
      emit('update:modelValue', ...arg)
    }
    return {
      classes,
      onChange
    }
  }
})
EPopover.install = (app: App): void => {
  app.component(EPopover.name, EPopover)
}
export default EPopover
</script>

<template>
  <e-popper :model-value="modelValue" :popper-class="classes" :trigger="trigger" @update:model-value="onChange">
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
import { App, computed, defineComponent, PropType } from 'vue'
import { mergeClass } from '@elenext/shared'
import { EPopper } from '../Popper'
import { propTypes } from '../../utils/PropTypes'
import { getCompName } from 'src/utils'
const EPopover = defineComponent({
  name: getCompName('EPopover'),
  components: {
    EPopper
  },
  props: {
    modelValue: propTypes.boolean(),
    trigger: propTypes.oneOfString<'click' | 'hover'>('click'),
    popperClass: propTypes.string(''),
    title: propTypes.string(''),
    content: propTypes.string(''),
    width: propTypes.string('')
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

<template>
  <Popper :model-value="modelValue" :popper-class="classes" :trigger="trigger" @update:model-value="onChange">
    <template #content>
      <div ref="popper" :style="{ width: width }" role="popper">
        <div v-if="title" class="el-popover__title">
          {{ title }}
        </div>
        <slot name="content">
          {{ content }}
        </slot>
      </div>
    </template>
    <slot />
  </Popper>
</template>
<script lang="ts">
import { App, computed, defineComponent, PropType } from 'vue'
import { mergeClass } from '@elenext/shared'
import { Popper } from '../Popper'
const Popover = defineComponent({
  name: 'Popover',
  components: {
    Popper
  },
  props: {
    modelValue: {
      type: Boolean,
      default: false
    },
    trigger: {
      type: String as PropType<'click' | 'hover'>,
      default: 'click'
    },
    popperClass: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    content: {
      type: String,
      default: ''
    },
    width: {
      type: String,
      default: ''
    }
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
Popover.install = (app: App): void => {
  app.component(Popover.name, Popover)
}
export default Popover
</script>

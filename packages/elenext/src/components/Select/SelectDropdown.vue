<template>
  <ul class="el-select-dropdown">
    <slot>
      <e-select-option
        v-for="option in options"
        :key="option.value"
        :label="option.label"
        :value="option.value"
        @select="selectHandler"
      />
    </slot>
  </ul>
</template>
<script lang="ts">
// No matter how to sing a song
// No matter who they become
// No matter when they chose to rest
// How could imagine living alone
// Remember no one's coming to save you
import { App, defineComponent, provide, reactive } from 'vue'
import { propTypes } from '../../utils/PropTypes'
import { OptionType, SELECTDROPDOWN_IJK } from './core'
import ESelectOption from './SelectOption.vue'

const ESelectDropdown = defineComponent({
  name: 'ESelectDropdown',
  components: {
    ESelectOption
  },
  props: {
    modelValue: propTypes.array<string>(),
    options: propTypes.array<OptionType>(),
    multiple: propTypes.boolean()
  },
  emits: ['update:modelValue'],
  setup(props, { attrs, slots, emit }) {
    const state = reactive({
      selected: props.modelValue || [],
      options: props.options,
      multiple: props.multiple
    })
    const selectHandler = value => {
      const index = state.selected.indexOf(value)
      if (props.multiple) {
        if (index === -1) {
          state.selected.push(value)
        } else {
          state.selected.splice(index, 1)
        }
      } else {
        if (index === -1) {
          state.selected = [value]
        } else {
          state.selected = []
        }
      }

      emit('update:modelValue', state.selected)
    }
    provide(SELECTDROPDOWN_IJK, state)
    return {
      selectHandler
    }
  }
})
ESelectDropdown.install = (app: App): void => {
  app.component(ESelectDropdown.name, ESelectDropdown)
}
export default ESelectDropdown
</script>

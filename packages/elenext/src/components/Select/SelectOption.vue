<template>
  <li
    class="el-select-option"
    :class="{
      'is-selected': isSelected
    }"
    @click="selectHandler"
  >
    {{ label || value }}
  </li>
</template>
<script lang="ts">
// 那是从荒诞生出美梦
import { propTypes } from 'src/utils/PropTypes'
import { App, computed, defineComponent, inject } from 'vue'
import { SELECTDROPDOWN_IJK } from './core'

const ESelectOption = defineComponent({
  name: 'ESelectOption',
  props: {
    label: propTypes.string(),
    value: {
      type: [Number, String],
      required: true
    }
  },
  emits: ['select'],
  setup(props, { attrs, slots, emit }) {
    const parentState = inject(SELECTDROPDOWN_IJK)
    const isSelected = computed(() => {
      return parentState.selected.includes(props.value)
    })
    const selectHandler = value => {
      emit('select', props.value)
    }
    return {
      isSelected,
      selectHandler
    }
  }
})
ESelectOption.install = (app: App): void => {
  app.component(ESelectOption.name, ESelectOption)
}
export default ESelectOption
</script>

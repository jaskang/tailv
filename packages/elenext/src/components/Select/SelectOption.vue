<template>
  <li v-if="$slots.default" @click="selectHandler">
    <slot :selected="isSelected" :multiple="parentState.multiple" />
  </li>
  <li
    v-else
    class="el-select-option"
    :class="{
      'is-multiple': parentState.multiple,
      'is-selected': isSelected
    }"
    @click="selectHandler"
  >
    {{ label || value }}
    <div class="el-select-option__checked">
      <IconCheck />
    </div>
  </li>
</template>
<script lang="ts">
// 那是从荒诞生出美梦
import { App, computed, defineComponent, inject } from 'vue'
import { IconCheck } from '@elenext/icons'
import { SELECTDROPDOWN_IJK } from './core'
import { prop } from '../../utils'

const ESelectOption = defineComponent({
  name: 'ESelectOption',
  components: {
    IconCheck
  },
  props: {
    label: prop.string(),
    value: prop.any()
  },
  emits: ['select'],
  setup(props, { attrs, slots, emit }) {
    console.log(attrs)

    const parentState = inject(SELECTDROPDOWN_IJK)
    const isSelected = computed(() => {
      return parentState.selected.includes(props.value)
    })
    const selectHandler = event => {
      emit('select', props.value)
      parentState.methods.onItemSelect(props.value)
    }
    return {
      parentState,
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

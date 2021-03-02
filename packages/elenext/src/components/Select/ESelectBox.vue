<template>
  <ul class="el-select-box" :class="{ 'is-plain': isPlain }">
    <slot>
      <e-select-option v-for="option in options" :key="option.value" :label="option.label" :value="option.value" />
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
import vptypes from 'vptypes'
import { OptionType, SelectDropdownState, SELECTDROPDOWN_IJK } from './core'
import ESelectOption from './ESelectOption.vue'

const ESelectBox = defineComponent({
  name: 'ESelectBox',
  components: {
    ESelectOption,
  },
  props: {
    modelValue: vptypes.array(),
    options: vptypes.array<OptionType[]>().def([]),
    multiple: vptypes.bool(),
    isPlain: vptypes.bool().def(true),
  },
  emits: ['update:modelValue', 'change'],
  setup(props, { attrs, slots, emit }) {
    const state = reactive<SelectDropdownState>({
      selected: props.modelValue || [],
      options: props.options,
      multiple: props.multiple,
      methods: {
        onItemSelect(value) {
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
          emit('change', state.selected)
        },
      },
    })
    provide(SELECTDROPDOWN_IJK, state)
    return {}
  },
})
ESelectBox.install = (app: App): void => {
  app.component(ESelectBox.name, ESelectBox)
}
export default ESelectBox
</script>

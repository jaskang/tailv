<template>
  <div ref="elRef" class="el-select">
    <e-input
      ref="inputRef"
      :allow-input="filterable"
      :model-value="inputValue"
      :class="{
        'is-focus': dropdownVisible
      }"
    >
      <template #suffix>
        <IconChevronDown
          :class="{
            'el-select-dropdown__icon': true,
            'is-open': dropdownVisible
          }"
        />
      </template>
    </e-input>
  </div>
  <e-popper
    v-model="dropdownVisible"
    popper-class="el-select-dropdown-popper"
    trigger="click"
    placement="bottom"
    :visible-arrow="true"
    :reference="elRef"
  >
    <template #content>
      <e-select-dropdown
        v-model="innerValue"
        :options="options"
        :multiple="multiple"
        :style="{ width: elRef ? `${elRef?.offsetWidth}px` : undefined }"
        @change="changeHandler"
      >
        <slot></slot>
      </e-select-dropdown>
    </template>
  </e-popper>
</template>
<script lang="ts">
// 收余恨、免娇嗔、且自新、改性情、休恋逝水、苦海回身、早悟兰因
import { App, computed, defineComponent, ref } from 'vue'
import { propTypes } from '../../utils/PropTypes'
import { EInput } from '../Input'
import { EPopper } from '../Popper'
import { OptionType } from './core'
import ESelectDropdown from './SelectDropdown.vue'
const ESelect = defineComponent({
  name: 'ESelect',
  components: {
    EInput,
    EPopper,
    ESelectDropdown
  },
  props: {
    modelValue: propTypes.stringOrArray(),
    options: propTypes.array<OptionType>(),
    multiple: propTypes.boolean(),
    filterable: propTypes.boolean(false)
  },
  setup(props, { attrs, slots, emit }) {
    const elRef = ref<HTMLDivElement>()
    const inputRef = ref()
    const dropdownVisible = ref(false)

    const innerValue = ref([])
    const inputValue = computed(() => {
      return innerValue.value.join(',')
    })

    const changeHandler = (select: any[]) => {
      if (!props.multiple) {
        dropdownVisible.value = false
        inputRef.value.inputEl.focus()
      }
    }
    return {
      elRef,
      inputRef,
      innerValue,
      inputValue,
      dropdownVisible,
      changeHandler
    }
  }
})
ESelect.install = (app: App): void => {
  app.component(ESelect.name, ESelect)
}
export default ESelect
</script>

<script setup lang="ts">
import Popover from '../Popover/index.vue'
import Input from '../Input/index.vue'
import { ref, computed, type PropType } from 'vue'
import type { SelectOption } from './type'
import { useModelValue } from '../use/useModelValue'
import ChevronUpDown from '../Icon/ChevronUpDown.vue'

defineOptions({ name: 'TSelect', inheritAttrs: false })

const emit = defineEmits(['update:value', 'change', 'select'])
const props = defineProps({
  value: [String, Number],
  options: {
    type: Array as PropType<SelectOption[]>,
    default: () => [],
  },
  disabled: Boolean,
  clearable: Boolean,
  size: String as PropType<'sm' | 'md' | 'lg'>,
  placeholder: String,
})

const [val, setVal] = useModelValue(props, {
  onChange: (v: string) => {
    emit('change', v)
  },
})

const label = computed(() => {
  const item = props.options.find(item => item.value === val.value)
  return item ? item.label : ''
})

const popoverRef = ref<InstanceType<typeof Popover>>()
const inputRef = ref<InstanceType<typeof Input>>()

const selectHandler = (item: SelectOption) => {
  setVal(item.value)
  emit('select', item)
  popoverRef.value?.toggle()
  inputRef.value?.focus()
}

const focused = ref(false)
</script>
<template>
  <Popover trigger="click" ref="popoverRef" @change="v => (focused = v)">
    <Input readonly :value="label" ref="inputRef" :focused="focused" v-bind="$attrs">
      <template #suffix>
        <div class="px-1 text-gray-400">
          <ChevronUpDown class="h-6 w-6"></ChevronUpDown>
        </div>
      </template>
    </Input>
    <template #content>
      <div class="flex max-h-80 flex-col overflow-auto py-1 text-sm">
        <div
          v-for="item in options"
          :key="item.value"
          @click="selectHandler(item)"
          class="relative cursor-default select-none px-3 py-2 hover:bg-primary-500 hover:text-white"
          :class="[item.value === val ? 'bg-primary-100' : '']"
        >
          {{ item.label }}
        </div>
      </div>
    </template>
  </Popover>
</template>

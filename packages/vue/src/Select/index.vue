<script setup lang="ts">
import Popover from '../Popover/index.vue'
import Input from '../Input/index.vue'
import { ref, computed, type PropType } from 'vue'
import type { SelectOption } from './type'
import { useModelValue } from '../use/useModelValue'
import ChevronUpDown from '../Icon/ChevronUpDown.vue'
import type { PopperSizer } from '@/Base/Popper/core'
import { ScrollArea } from '../ScrollArea'

defineOptions({ name: 'TSelect', inheritAttrs: false })

const emit = defineEmits(['update:value', 'change', 'select'])
const props = defineProps({
  value: [String, Number],
  options: {
    type: Array as PropType<SelectOption[]>,
    default: () => [],
  },
  size: String as PropType<'sm' | 'md' | 'lg'>,
  disabled: Boolean,
  clearable: Boolean,
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

const sizer: PopperSizer = ({ rects, elements }) => {
  Object.assign(elements.floating.style, {
    minWidth: `${rects.reference.width}px`,
  })
}
const focused = ref(false)
</script>
<template>
  <Popover trigger="click" ref="popoverRef" :sizer="sizer" @change="v => (focused = v)">
    <Input
      readonly
      :value="label"
      ref="inputRef"
      class="cursor-pointer"
      v-bind="$attrs"
      :focused
      :placeholder
      :disabled
    >
      <template #suffix>
        <div class="pr-1 text-gray-400">
          <ChevronUpDown class="h-5 w-5"></ChevronUpDown>
        </div>
      </template>
    </Input>
    <template #content>
      <ScrollArea class="flex max-h-80 flex-col text-sm" mode="y">
        <div class="py-1">
          <div
            v-for="item in options"
            :key="item.value"
            @click="selectHandler(item)"
            class="relative cursor-default select-none px-3 py-2"
            :class="[item.value === val ? 'bg-primary-500 text-white' : 'hover:bg-primary-100']"
          >
            {{ item.label }}
          </div>
        </div>
      </ScrollArea>
    </template>
  </Popover>
</template>

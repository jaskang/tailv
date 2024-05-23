<script setup lang="ts">
import { type PropType, computed, ref } from 'vue'
import { ListBox } from '@/Base'
import type { SelectOption } from './types'
import CheckIcon from '../Icon/CheckIcon.vue'
import ChevronDownIcon from '../Icon/ChevronDownIcon.vue'
import Input from '../Input/index.vue'
import Popover from '../Popover/index.vue'
import { ScrollArea } from '../ScrollArea'
import { useModelValue } from '../use/useModelValue'

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

const [modelValue, setModelValue] = useModelValue(props, {
  onChange: (v: string) => {
    emit('change', v)
  },
})

const label = computed(() => {
  const item = props.options.find(item => item.value === modelValue.value)
  return item ? item.label : ''
})

const popoverRef = ref<InstanceType<typeof Popover>>()
const inputRef = ref<InstanceType<typeof Input>>()

const selectHandler = (item: SelectOption) => {
  setModelValue(item.value)
  emit('select', item)
  popoverRef.value?.toggle()
  inputRef.value?.focus()
}

const focused = ref(false)
</script>
<template>
  <Popover trigger="click" placement="bottom-start" ref="popoverRef" size-mode="min-width" @change="v => (focused = v)">
    <button
      class="flex h-9 items-center justify-between rounded-md border border-border bg-transparent px-3 text-sm leading-[1.375rem] shadow-sm focus-visible:z-10 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
      v-bind="$attrs"
      :disabled
    >
      <span
        class="pointer-events-none overflow-hidden text-ellipsis whitespace-nowrap"
        :class="[label ? '' : 'text-default-400']"
      >
        {{ label || placeholder }}
      </span>
      <ChevronDownIcon class="-mr-1 ml-1 h-4 w-4 flex-shrink-0"></ChevronDownIcon>
    </button>
    <template #content>
      <ScrollArea class="flex max-h-80 flex-col rounded text-sm shadow-md ring-1 ring-border" mode="y">
        <ListBox :items="options" index-key="value" @click="selectHandler">
          <template #item="{ item }">
            <div
              @click="selectHandler(item)"
              class="flex items-center p-2"
              :class="[item.value === modelValue ? 'bg-primary font-medium text-white' : '']"
            >
              <span class="flex-1 overflow-hidden text-ellipsis text-nowrap">
                {{ item.label }}
              </span>
              <!-- <span v-if="item.value === modelValue" class="shrink-0 pl-1">
                <CheckIcon class="h-4 w-4" />
              </span> -->
            </div>
          </template>
        </ListBox>
      </ScrollArea>
    </template>
  </Popover>
</template>

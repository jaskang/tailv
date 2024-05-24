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
const slots = defineSlots<{ item?: (props: { active: boolean; item?: SelectOption; placeholder?: string }) => any }>()
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

const currItem = computed(() => props.options.find(item => item.value === modelValue.value))

const label = computed(() => currItem.value?.label || '')

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
      class="flex h-9 items-center rounded-md border border-border bg-transparent px-1 text-left text-sm shadow-sm focus-visible:z-10 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
      v-bind="$attrs"
      :disabled
    >
      <div class="flex w-full flex-1 items-center" :class="[slots.item ? '' : 'p-2']">
        <slot name="item" :active="false" :item="currItem" :placeholder>
          <span class="flex-1 overflow-hidden text-ellipsis text-nowrap" :class="[label ? '' : 'text-default-400']">
            {{ label || placeholder }}
          </span>
        </slot>
      </div>
      <ChevronDownIcon class="mx-1 h-4 w-4 shrink-0"></ChevronDownIcon>
    </button>
    <template #content>
      <ScrollArea class="flex max-h-80 flex-col rounded text-sm shadow-md ring-1 ring-border" mode="y">
        <ListBox :items="options" index-key="value" @click="selectHandler">
          <template #item="{ item }">
            <div
              @click="selectHandler(item)"
              class="flex items-center"
              :class="[slots.item ? '' : 'p-2', item.value === modelValue ? 'font-medium' : '']"
            >
              <slot name="item" :active="item.value === modelValue" :item="item">
                <span class="flex-1 overflow-hidden text-ellipsis text-nowrap">
                  {{ item.label }}
                </span>
                <span v-if="item.value === modelValue" class="shrink-0 pl-1">
                  <CheckIcon class="h-4 w-4" />
                </span>
              </slot>
            </div>
          </template>
        </ListBox>
      </ScrollArea>
    </template>
  </Popover>
</template>

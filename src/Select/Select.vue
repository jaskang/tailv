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
defineSlots<{ label?: (props: { active: boolean; item?: SelectOption; placeholder?: string }) => any }>()
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
  console.log('selectHandler', item)
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
      class="flex h-9 items-center gap-1 rounded-md border border-border bg-transparent px-1 text-left text-sm shadow-sm focus-visible:z-10 focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50"
      v-bind="$attrs"
      :disabled
    >
      <div class="flex flex-1 items-center overflow-hidden text-nowrap pl-2">
        <slot v-if="label" name="label" :active="false" :item="currItem" :placeholder>
          <span class="w-full text-ellipsis text-nowrap">
            {{ label }}
          </span>
        </slot>
        <span v-else class="text-default-400">
          {{ placeholder }}
        </span>
      </div>
      <ChevronDownIcon class="mr-1 h-4 w-4 shrink-0"></ChevronDownIcon>
    </button>
    <template #content>
      <ScrollArea class="flex max-h-80 flex-col rounded text-sm shadow-md ring-1 ring-border" mode="y">
        <ListBox :items="options" index-key="value" style="" @click="selectHandler">
          <template #item="{ item }">
            <div class="flex min-h-9 w-full items-center gap-1">
              <div class="flex flex-1 items-center overflow-hidden text-nowrap pl-2">
                <slot name="label" :active="item.value === modelValue" :item="item">
                  <span
                    class="w-full text-ellipsis text-nowrap"
                    :class="[item.value === modelValue ? 'font-medium' : '']"
                  >
                    {{ item.label }}
                  </span>
                </slot>
              </div>
              <CheckIcon v-if="item.value === modelValue" class="mr-2 h-4 w-4 shrink-0" />
            </div>
          </template>
        </ListBox>
      </ScrollArea>
    </template>
  </Popover>
</template>

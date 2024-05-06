<script setup lang="ts">
import Popover from '../Popover/index.vue'
import Input from '../Input/index.vue'
import { ref, computed, type PropType } from 'vue'
import type { SelectOption } from './types'
import { useModelValue } from '../use/useModelValue'
import ChevronDownIcon from '../Icon/ChevronDownIcon.vue'
import { ScrollArea } from '../ScrollArea'

defineOptions({ name: 'Select', inheritAttrs: false })

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
      class="focus-visible:ring-border flex h-9 items-center justify-between rounded-md px-3 py-1.5 text-sm leading-[1.375rem] shadow-sm input-bg input-border focus-visible:z-10 focus-visible:input-border-primary-500 disabled:cursor-not-allowed disabled:opacity-50"
      v-bind="$attrs"
      :disabled
    >
      <span
        class="pointer-events-none overflow-hidden text-ellipsis whitespace-nowrap"
        :class="[label ? '' : 'text-slate-400']"
      >
        {{ label || placeholder }}
      </span>
      <ChevronDownIcon class="-mr-1 ml-1 h-4 w-4 flex-shrink-0"></ChevronDownIcon>
    </button>
    <template #content>
      <ScrollArea class="flex max-h-80 flex-col text-sm" mode="y">
        <div class="grid gap-1 p-1">
          <div
            v-for="item in options"
            :key="item.value"
            @click="selectHandler(item)"
            class="relative cursor-pointer rounded px-3 py-2 text-sm"
            :class="[
              item.value === modelValue
                ? 'bg-primary-500 font-medium text-white'
                : 'hover:bg-slate-100 hover:text-primary-600',
            ]"
          >
            {{ item.label }}
          </div>
        </div>
      </ScrollArea>
    </template>
  </Popover>

  <!-- <Input
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
        <div class="pr-1 text-slate-400">
          <ChevronDownIcon class="h-5 w-5"></ChevronDownIcon>
        </div>
      </template>
    </Input>
    <template #content>
      <ScrollArea class="flex max-h-80 flex-col text-sm" mode="y">
        <div class="grid gap-1 p-1">
          <div
            v-for="item in options"
            :key="item.value"
            @click="selectHandler(item)"
            class="relative cursor-pointer rounded px-3 py-2 text-sm"
            :class="[
              item.value === modelValue
                ? 'bg-primary-500 font-medium text-white'
                : 'hover:bg-slate-100 hover:text-primary-600',
            ]"
          >
            {{ item.label }}
          </div>
        </div>
      </ScrollArea>
    </template> -->
</template>

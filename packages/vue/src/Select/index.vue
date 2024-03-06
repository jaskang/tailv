<script setup lang="ts">
import Popover from '../Popover/index.vue'
import Input from '../Input/index.vue'
import { ref, computed, type PropType, VNode } from 'vue'
import { SelectOption } from './type'
import { useModelValue } from '../use/useModelValue'

defineOptions({ name: 'TSelect' })
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

const selectHandler = (item: SelectOption) => {
  setVal(item.value)
  emit('select', item)
  popoverRef.value?.toggle()
}
</script>
<template>
  <Popover trigger="click" ref="popoverRef">
    <Input readonly :value="label" />
    <template #content>
      <div class="flex max-h-80 flex-col overflow-auto py-1 text-sm ring-1 ring-black ring-opacity-5">
        <div v-for="item in options" :key="item.value" @click="selectHandler(item)">
          {{ item.label }}
        </div>
      </div>
    </template>
  </Popover>
</template>

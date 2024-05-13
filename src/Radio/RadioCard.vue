<script setup lang="ts">
import { useModelValue } from '@/use/useModelValue'
import { computed, inject } from 'vue'
import { RadioGroupInjectKey } from './types'

defineOptions({ name: 'RadioCard' })
const emit = defineEmits<{ 'update:checked': [boolean]; change: [boolean] }>()
const props = defineProps({
  value: { type: null, required: true },
  name: String,
  disabled: Boolean,
  checked: { type: Boolean, default: undefined },
})

const group = inject(RadioGroupInjectKey, null)

const [modelChecked, setModelChecked] = useModelValue(props, {
  defaultValue: group ? group.value.value === props.value : false,
  valuePropName: 'checked',
  onChange: (val: boolean) => {
    emit('change', val)
    group?.select(props.value)
  },
})
const checked = computed(() => (group ? group.value.value === props.value : modelChecked.value))

const clickHandler = () => {
  setModelChecked(true)
}
</script>
<template>
  <button
    :data-checked="checked"
    class="group relative m-0 flex cursor-pointer appearance-none items-center justify-between border-2 border-border p-4 transition-all focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 data-[checked=true]:border-primary"
    :class="[
      {
        sm: `rounded-md px-2 py-1 text-xs`,
        md: `rounded-md px-3 py-1.5 text-sm`,
        lg: `rounded-md px-4 py-2 text-base`,
      }[group?.size.value || 'md'],
      disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    ]"
    @click="clickHandler"
  >
    <slot></slot>
  </button>
</template>

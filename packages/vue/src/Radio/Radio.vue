<script setup lang="ts">
import { useModelValue } from '@/use/useModelValue'
import { computed, inject } from 'vue'
import { RadioGroupInjectKey } from './types'

defineOptions({ name: 'TRadio' })
const emit = defineEmits<{ 'update:checked': [boolean]; change: [boolean] }>()
const props = defineProps({
  value: { type: null, required: true },
  name: String,
  disabled: Boolean,
  checked: { type: Boolean, default: undefined },
})

const group = inject(RadioGroupInjectKey, null)

const [innerChecked, setInnerChecked] = useModelValue(props, {
  defaultValue: group ? group.value.value === props.value : false,
  valuePropName: 'checked',
  onChange: (val: boolean) => {
    emit('change', val)
    group?.select(props.value)
  },
})
const checked = computed(() => (group ? group.value.value === props.value : innerChecked.value))

const onInput = (e: Event) => {
  const el = e.currentTarget as HTMLInputElement
  setInnerChecked(el.checked)
}
</script>
<template>
  <label :class="['relative inline-flex items-center', disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer']">
    <span
      class="focus-within:ring-primary-500 relative block rounded-full transition-all focus-within:ring-2 focus-within:ring-offset-2"
    >
      <input
        class="absolute inset-0 z-1 m-0 cursor-[inherit] p-0 opacity-0"
        type="radio"
        :name="name"
        :disabled="disabled"
        :checked="checked"
        :onInput="onInput"
      />
      <span
        class="block h-4 w-4 rounded-full border-1 transition-all"
        :class="[checked ? 'bg-primary-500 border-primary-500' : 'border-gray-200 bg-transparent']"
      >
        <svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="3" />
        </svg>
      </span>
    </span>
    <span class="relative ml-2 block text-sm font-medium leading-6">
      <slot />
    </span>
  </label>
</template>

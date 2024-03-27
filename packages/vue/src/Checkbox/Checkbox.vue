<script setup lang="ts">
import { useModelValue } from '@/use/useModelValue'
import { computed, inject } from 'vue'
import { CheckboxGroupInjectKey } from './types'

defineOptions({ name: 'TCheckbox' })
const emit = defineEmits<{ 'update:checked': [boolean]; change: [boolean] }>()
const props = defineProps({
  value: { type: null, required: true },
  name: String,
  disabled: Boolean,
  checked: { type: Boolean, default: undefined },
})

const group = inject(CheckboxGroupInjectKey, null)

const [modelChecked, setModelChecked] = useModelValue(props, {
  defaultValue: group ? group.value.value.includes(props.value) : false,
  valuePropName: 'checked',
  onChange: (val: boolean) => {
    emit('change', val)
    if (group) {
      if (val) {
        group.add(props.value)
      } else {
        group.remove(props.value)
      }
    }
  },
})
const checked = computed(() => (group ? group.value.value.includes(props.value) : modelChecked.value))

const onInput = (e: Event) => {
  const el = e.currentTarget as HTMLInputElement
  setModelChecked(el.checked)
}
</script>
<template>
  <label :class="['relative inline-flex items-center', disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer']">
    <span
      class="focus-within:ring-primary-500 relative block rounded transition-all focus-within:ring-2 focus-within:ring-offset-2"
    >
      <input
        class="absolute inset-0 z-1 m-0 cursor-[inherit] p-0 opacity-0"
        type="checkbox"
        :name="name"
        :disabled="disabled"
        :checked="checked"
        :onInput="onInput"
      />
      <span
        class="block h-4 w-4 rounded border-1 transition-all"
        :class="[checked ? 'bg-primary-500 border-primary-500' : 'border-slate-300 bg-transparent']"
      >
        <svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"
          />
        </svg>
      </span>
    </span>
    <span class="relative ml-2 block text-sm font-medium leading-6">
      <slot />
    </span>
  </label>
</template>

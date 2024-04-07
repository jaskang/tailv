<script setup lang="ts">
import { useModelValue } from '@/use/useModelValue'
import { computed, inject } from 'vue'
import { RadioGroupInjectKey } from './types'

defineOptions({ name: 'Radio' })
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
  <label
    :class="['relative inline-flex items-center', disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer']"
    @click="clickHandler"
  >
    <button
      class="focus-visible:ring-primary-500 relative block cursor-[inherit] appearance-none rounded-full transition-all focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
    >
      <span
        class="block h-4 w-4 rounded-full border-1 transition-all"
        :class="[checked ? 'bg-primary-500 border-primary-500' : 'border-slate-300 bg-transparent']"
      >
        <svg viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
          <circle cx="8" cy="8" r="3" />
        </svg>
      </span>
    </button>
    <span class="relative ml-2 block text-sm font-medium leading-6">
      <slot />
    </span>
  </label>
</template>

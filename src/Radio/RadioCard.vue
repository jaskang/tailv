<script setup lang="ts">
import { computed, inject } from 'vue'
import { useModelValue } from '@/use/useModelValue'
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
    class="group focus-visible:ring-primary border-input data-[checked=true]:border-primary relative m-0 flex cursor-pointer appearance-none items-center justify-center border-2 text-sm font-medium transition-all focus-visible:ring-2 focus-visible:ring-offset-2 [:where(&)]:rounded-md [button:where(&)]:py-1.5 [button:where(&)]:px-3"
    :class="[disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer']"
    @click="clickHandler"
  >
    <slot :checked="checked"></slot>
  </button>
</template>

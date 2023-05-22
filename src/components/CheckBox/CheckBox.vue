<script setup lang="ts">
import { colors } from '@/core/colors'
import { useTheme } from '@/core/theme'
import { useControllable } from '@/hooks/controllable'
import { ref, computed } from 'vue'
import { getCssVars } from './styles'

defineOptions({ name: 'TCheckBox' })

const emit = defineEmits<{
  'update:checked': [any]
  change: [any]
  focus: [any]
  blur: [any]
}>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  value: [String, Number],
  name: String,
  disabled: Boolean,
  checked: Boolean,
})

const { getColorKey, getColor, theme } = useTheme()
const focus = ref(false)

const [checked, setChecked] = useControllable(
  () => props.checked,
  val => {
    emit('update:checked', val)
    emit('change', val)
  },
  false
)

const onInput = (e: Event) => {
  const el = e.currentTarget as HTMLInputElement
  console.log(el.checked)
  setChecked(el.checked)
}
const onFocus = (e: Event) => {
  if (props.disabled) {
    e.preventDefault()
    return false
  } else {
    focus.value = true
    emit('focus', e)
  }
}
const onBlur = (e: Event) => {
  if (props.disabled) {
    e.preventDefault()
    return false
  } else {
    focus.value = false
    emit('blur', e)
  }
}

const cssVars = computed(() =>
  getCssVars({
    '--t-checkbox-primary-color': getColor('primary')[500],
    '--t-checkbox-ring-color': getColor('primary')[500],
  })
)
</script>
<template>
  <label
    :style="cssVars"
    class="t-checkbox inline-flex items-center text-sm font-medium"
    :class="[disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer']"
  >
    <input
      class="t-checkbox_input h-4 w-4 cursor-pointer rounded border border-gray-300 text-[--t-checkbox-text-color] transition-all focus:outline-none focus:ring-2 focus:ring-[--t-checkbox-ring-color] focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
      :name="name"
      type="checkbox"
      :disabled="disabled"
      :checked="checked"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    />
    <span class="t-checkbox_label ml-3 block text-sm font-medium text-gray-700">
      <slot />
    </span>
  </label>
</template>

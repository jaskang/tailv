<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  value: [String, Number],
  name: String,
  disabled: Boolean,
  checked: Boolean,
})

const emit = defineEmits(['onUpdate:checked', 'focus', 'blur'])

const focus = ref(false)

const innerChecked = ref(props.checked)

const onInput = (e: Event) => {
  const el = e.currentTarget as HTMLInputElement
  console.log(el.checked)

  innerChecked.value = el.checked
}
const onClick = (e: Event) => {
  if (props.disabled) {
    e.preventDefault()
    return false
  }
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
</script>
<template>
  <label class="e-checkbox inline-flex items-center" :class="[disabled && 'cursor-not-allowed opacity-50']">
    <div class="flex items-center">
      <input
        :name="name"
        type="checkbox"
        :disabled="disabled"
        :checked="innerChecked"
        class="h-4 w-4 rounded border-gray-300 text-indigo-600 transition-all focus:ring-indigo-500 disabled:opacity-50"
      />
    </div>
    <span class="ml-2 text-sm font-medium text-gray-700">
      <slot />
    </span>
  </label>
</template>

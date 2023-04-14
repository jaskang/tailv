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
  <label class="w-checkbox" :class="[disabled && 'is-disabled']">
    <input :name="name" type="checkbox" :disabled="disabled" :checked="innerChecked" class="w-checkbox_input" />
    <span class="w-checkbox_label">
      <slot />
    </span>
  </label>
</template>

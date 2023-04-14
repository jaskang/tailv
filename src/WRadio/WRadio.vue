<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  value: [String, Number],
  modelValue: [String, Number],
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
  <label class="w-radio" :class="[disabled && 'is-disabled']">
    <input :name="name" type="radio" :disabled="disabled" :checked="innerChecked" class="w-radio_input" />
    <span class="w-radio_label">
      <slot />
    </span>
  </label>
</template>

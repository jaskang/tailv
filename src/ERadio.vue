<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  disabled: Boolean,
  checked: Boolean,
  name: String,
  value: [String, Number],
})

const emits = defineEmits(['onUpdate:checked'])

const innerChecked = ref(props.checked)

const onInput = (e: Event) => {
  const el = e.currentTarget as HTMLInputElement
  innerChecked.value = el.checked
  console.log(el.checked)
}
const onClick = (e: Event) => {
  console.log(e)

  if (props.disabled) {
    e.preventDefault()
    return false
  }
}
const onChange = (e: Event) => {
  console.log('change', e)
}
</script>
<template>
  <label :class="['e-radio', disabled && 'is-disabled']">
    <input
      ref="inputRef"
      class="e-radio__input"
      type="radio"
      :value="value"
      :name="name"
      :disabled="disabled"
      :checked="innerChecked"
      @input="onInput"
      @lick="onClick"
      @change="onChange"
    />
    <span class="e-radio__label">
      <slot />
    </span>
  </label>
</template>

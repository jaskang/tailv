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
  console.log(el.checked)

  innerChecked.value = el.checked
}
const onClick = (e: Event) => {
  if (props.disabled) {
    e.preventDefault()
    return false
  }
}
</script>
<template>
  <label :class="['e-checkbox', disabled && 'is-disabled']">
    <span class="e-checkbox__input">
      <input
        type="checkbox"
        class="e-checkbox__original"
        :value="value"
        :name="name"
        :disabled="disabled"
        :checked="innerChecked"
        @input="onInput"
        @click="onClick"
      />
      <span class="e-checkbox__inner">
        <svg
          v-show="innerChecked"
          viewBox="0 0 16 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z"
          />
        </svg>
      </span>
    </span>
    <span class="e-checkbox__label"><slot /></span>
  </label>
</template>

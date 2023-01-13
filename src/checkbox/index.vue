<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ECheckbox',
  props: {
    disabled: Boolean,
    checked: Boolean,
    name: String,
    value: [String, Number],
  },
  emits: ['onUpdate:checked'],
  setup(props, { emit, slots, expose }) {
    const innerChecked = ref(props.checked)

    const onInput = (e: Event) => {
      const el = e.currentTarget as HTMLInputElement
      innerChecked.value = el.checked
    }
    const onClick = (e: Event) => {
      if (props.disabled) {
        e.preventDefault()
        return false
      }
    }

    return {
      innerChecked,
      onInput,
      onClick,
    }
  },
})
</script>
<template>
  <label :class="['e-checkbox', disabled && 'is-disabled']">
    <input
      type="checkbox"
      class="e-checkbox__input font-extrabold"
      :value="value"
      :name="name"
      :disabled="disabled"
      :checked="innerChecked"
      @input="onInput"
      @click="onClick"
    />
    <span class="e-checkbox__label"><slot /></span>
  </label>
</template>

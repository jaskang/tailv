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

<style lang="less">
.e-checkbox {
  @apply inline-flex cursor-pointer items-center;
  &__input {
    @apply h-4 w-4 rounded border border-solid border-gray-300 text-indigo-600 transition-all focus:ring-indigo-500;
  }
  &__label {
    @apply ml-2 text-sm text-gray-900;
  }
  &.is-disabled {
    @apply cursor-not-allowed;
    .e-checkbox__input {
      @apply bg-gray-100 focus-visible:shadow-none;
      &:checked {
        @apply bg-current;
      }
    }
    .e-checkbox__label {
      @apply text-gray-400;
    }
  }
}
</style>

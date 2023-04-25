<script setup lang="ts">
import { colors } from '@/core/colors'
import { useTheme } from '@/core/theme'
import { computed, ref } from 'vue'

const props = defineProps({
  value: [String, Number],
  modelValue: [String, Number],
  name: String,
  disabled: Boolean,
  checked: Boolean,
})

const emit = defineEmits(['onUpdate:checked', 'focus', 'blur'])
const { theme } = useTheme()
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

const cssVars = computed(() => {
  return {
    color: colors[theme.value.colors.primary][600],
    ringColor: colors[theme.value.colors.primary][500],
  }
})
</script>
<template>
  <label class="t-radio" :class="[disabled && 'is-disabled']">
    <input :name="name" type="radio" :disabled="disabled" :checked="innerChecked" class="t-radio_input" />
    <span class="t-radio_label">
      <slot />
    </span>
  </label>
</template>
<style lang="scss">
.t-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  &.is-disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  &_input {
    height: 1rem;
    width: 1rem;
    border: 1px solid var(--t-border-color);
    color: v-bind('cssVars.color');
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    cursor: pointer;
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px var(--t-ring-offset-color), 0 0 0 4px v-bind('cssVars.ringColor');
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  &_label {
    margin-left: 0.5rem;
    line-height: 1.25rem;
    font-size: 0.875rem;
    font-weight: 500;
  }
}
</style>

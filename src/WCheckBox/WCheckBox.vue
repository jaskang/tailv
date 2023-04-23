<script setup lang="ts">
import { colors } from '@/core/colors'
import { useTheme } from '@/core/theme'
import { computed, ref } from 'vue'

const props = defineProps({
  value: [String, Number],
  name: String,
  disabled: Boolean,
  checked: Boolean,
})

const emit = defineEmits(['onUpdate:checked', 'focus', 'blur'])

const { getColor, theme } = useTheme()
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
  <label class="w-checkbox" :class="[disabled && 'is-disabled']">
    <input :name="name" type="checkbox" :disabled="disabled" :checked="innerChecked" class="w-checkbox_input" />
    <span class="w-checkbox_label">
      <slot />
    </span>
  </label>
</template>
<style lang="scss">
.w-checkbox {
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
    border-radius: 0.25rem;
    border: 1px solid var(--w-border-color);
    color: v-bind('cssVars.color');
    cursor: pointer;
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px var(--w-ring-offset-color), 0 0 0 4px v-bind('cssVars.ringColor');
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

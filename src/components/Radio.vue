<script lang="ts">
import { colors } from '@/core/colors'
import { useTheme } from '@/core/theme'
import { PropTypes } from '@/utils'
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TRadio',
  props: {
    value: PropTypes.any(),
    name: String,
    disabled: Boolean,
    checked: Boolean,
  },
  emits: ['onUpdate:checked', 'focus', 'blur'],
  setup(props, { emit }) {
    const { theme } = useTheme()

    const focus = ref(false)

    const innerChecked = ref(props.checked)

    const onInput = (e: Event) => {
      const el = e.currentTarget as HTMLInputElement
      innerChecked.value = el.checked
    }

    const onFocus = (e: Event) => {
      focus.value = true
      emit('focus', e)
    }

    const onBlur = (e: Event) => {
      focus.value = false
      emit('blur', e)
    }

    const cssVars = computed(() => {
      return {
        color: colors[theme.value.colors.primary][600],
        ringColor: colors[theme.value.colors.primary][500],
      }
    })
    return {
      innerChecked,
      onInput,
      onFocus,
      onBlur,
      cssVars,
      focus,
    }
  },
})
</script>
<template>
  <label class="t-radio" :class="[disabled && 'is-disabled']">
    <input
      class="t-radio_input"
      :name="name"
      type="radio"
      :disabled="disabled"
      :checked="innerChecked"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
    />
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

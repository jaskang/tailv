<script lang="ts">
import { colors } from '@/core/colors'
import { useTheme } from '@/core/theme'
import { useControllable } from '@/hooks/controllable'
import { computed, defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'TInput',
  props: {
    value: String,
    before: String,
    after: String,
    prefix: String,
    suffix: String,
    placeholder: String,
    disabled: Boolean,
  },
  emits: ['update:value', 'change', 'input', 'focus', 'blur'],
  setup(props, { emit }) {
    const { theme } = useTheme()

    const [value, setValue] = useControllable(
      () => props.value,
      val => {
        emit('update:value', val)
        emit('change', val)
      },
      ''
    )
    const isFocused = ref(false)

    const onInput = (e: Event) => {
      const el = e.currentTarget as HTMLInputElement
      setValue(el.value)
      emit('input', el.value)
    }
    const onFocus = (e: Event) => {
      if (props.disabled) {
        e.preventDefault()
        return false
      } else {
        isFocused.value = true
        emit('focus', e)
      }
    }
    const onBlur = (e: Event) => {
      if (props.disabled) {
        e.preventDefault()
        return false
      } else {
        isFocused.value = false
        emit('blur', e)
      }
    }

    const cssVar = computed(() => {
      return {
        ringColor: colors[theme.value.colors.primary][500],
      }
    })

    return {
      cssVar,
      isFocused,
      value,
      onInput,
      onFocus,
      onBlur,
    }
  },
})
</script>
<template>
  <div class="t-input" :class="[disabled && 'is-disabled', isFocused && 'is-focused']" :disabled="disabled">
    <span class="t-input_before" v-if="$slots.before">
      <slot name="before" />
    </span>
    <span class="t-input_wraper">
      <span class="t-input_prefix" v-if="prefix">{{ prefix }}</span>
      <input
        class="t-input_input"
        style="box-shadow: none"
        type="text"
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      />
      <span class="t-input_suffix flex-initial pl-2" v-if="suffix">{{ suffix }}</span>
    </span>
    <span class="t-input_after" v-if="$slots.after">
      <slot name="after" />
    </span>
  </div>
</template>
<style lang="scss">
.t-input {
  width: 100%;
  display: inline-flex;
  align-items: stretch;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &_before,
  &_after {
    display: inline-flex;
    flex: 0 1 auto;
    align-items: center;
    border: 1px solid var(--t-border-color);
    background-color: var(--t-gray-50);
  }
  &_before {
    border-right-width: 0;
    border-radius: 0.375rem 0 0 0.375rem;
    padding-left: 0.75rem;
    padding-right: 0.5rem;
  }
  &_after {
    border-left-width: 0;
    border-radius: 0 0.375rem 0.375rem 0;
    padding-left: 0.5rem;
    padding-right: 0.75rem;
  }
  &_wraper {
    width: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    border: 1px solid var(--t-border-color);
    background-color: white;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    &:first-child {
      border-top-left-radius: 0.375rem;
      border-bottom-left-radius: 0.375rem;
    }
    &:last-child {
      border-top-right-radius: 0.375rem;
      border-bottom-right-radius: 0.375rem;
    }
  }
  &_input {
    flex: 1;
    border: none;
    background-color: transparent;
    padding: 0.5rem 0;
    &:focus {
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  &_prefix {
    flex: 0 1 auto;
    padding-right: 0.5rem;
  }
  &_suffix {
    flex: 0 1 auto;
    padding-left: 0.5rem;
  }

  &.is-focused {
    .t-input_wraper {
      z-index: 10;
      border-color: v-bind('cssVar.ringColor');
      box-shadow: 0 0 0 1px v-bind('cssVar.ringColor');
    }
  }
  &.is-disabled {
    .t-input_wraper {
      cursor: not-allowed;
      background-color: var(--t-gray-50);
      opacity: 0.5;
    }
  }
}
</style>

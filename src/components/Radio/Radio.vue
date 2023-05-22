<script setup lang="ts">
import { useTheme } from '@/core/theme'
import { useControllable } from '@/hooks/controllable'
import { PropTypes } from '@/utils'
import { ref, computed, inject } from 'vue'
import type { RadioGroupContext } from './Radio'
import { getCssVars } from './styles'

defineOptions({ name: 'IRadio' })
const emit = defineEmits<{ 'update:checked': [any]; focus: [any]; blur: [any] }>()
const slots = defineSlots<{ default?(_: {}): any }>()
const props = defineProps({
  value: PropTypes.any(),
  name: String,
  disabled: Boolean,
  checked: Boolean,
})

const { theme, getColor } = useTheme()

const focus = ref(false)

const groupContext = inject<RadioGroupContext | null>('RadioGroupContext', null)
const groupProps = computed(() => {
  return {
    disabled: groupContext?.props.value.disabled || props.disabled,
    value: groupContext?.props.value.value || props.value,
    name: groupContext?.props.value.name || props.name,
  }
})
const [realChecked, setChecked] = useControllable(
  () => {
    return groupContext ? groupContext.props.value.value === props.value : props.checked
  },
  val => {
    if (groupContext) {
      if (groupContext.props.value.value !== props.value) {
        groupContext.onRadioChange(props.value)
      }
    }
    emit('update:checked', val)
  },
  false
)
const onInput = (e: Event) => {
  const el = e.currentTarget as HTMLInputElement
  setChecked(el.checked)
}
const onChange = (e: Event) => {}
const onFocus = (e: Event) => {
  focus.value = true
  emit('focus', e)
}

const onBlur = (e: Event) => {
  focus.value = false
  emit('blur', e)
}

const cssVars = computed(() =>
  getCssVars({
    '--t-radio-primary-color': getColor('primary')[500],
    '--t-radio-ring-color': getColor('primary')[500],
  })
)
</script>
<template>
  <label
    :style="cssVars"
    class="t-radio inline-flex items-center"
    :class="[groupProps.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer']"
  >
    <input
      class="t-radio_input h-4 w-4 border-gray-300 text-[--t-radio-primary-color] focus:ring-[--t-radio-ring-color] disabled:cursor-not-allowed"
      type="radio"
      :name="groupProps.name"
      :value="groupProps.value"
      :disabled="groupProps.disabled"
      :checked="realChecked"
      @input="onInput"
      @focus="onFocus"
      @blur="onBlur"
      @change="onChange"
    />
    <span class="t-radio_label ml-3 block text-sm font-medium text-gray-700">
      <slot />
    </span>
  </label>
</template>
<style lang="scss">
// .t-radio {
//   display: inline-flex;
//   align-items: center;
//   cursor: pointer;
//   &.is-disabled {
//     cursor: not-allowed;
//     opacity: 0.5;
//   }
//   &_input {
//     height: 1rem;
//     width: 1rem;
//     border: 1px solid var(--t-border-color);
//     color: v-bind('cssVars.color');
//     transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
//     cursor: pointer;
//     &:focus {
//       outline: none;
//       box-shadow: 0 0 0 2px var(--t-ring-offset-color), 0 0 0 4px v-bind('cssVars.ringColor');
//     }
//     &:disabled {
//       cursor: not-allowed;
//     }
//   }
//   &_label {
//     margin-left: 0.5rem;
//     line-height: 1.25rem;
//     font-size: 0.875rem;
//     font-weight: 500;
//   }
// }
</style>

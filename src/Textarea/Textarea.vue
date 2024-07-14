<script setup lang="ts">
import { type PropType, computed, ref } from 'vue'
import { BUILTIN_CLASS } from '@/utils/theme'

import { useModelValue } from '../use/useModelValue'
defineOptions({ name: 'Textarea' })
const emit = defineEmits<{
  'update:value': [string]
  change: [string]
  input: [Event]
  focus: [FocusEvent]
  blur: [FocusEvent]
  keydown: [KeyboardEvent]
  keyup: [KeyboardEvent]
  keypress: [KeyboardEvent]
  paste: [ClipboardEvent]
  contextmenu: [MouseEvent]
}>()
const slots = defineSlots<{ toolbar?(props: { content: string }): any }>()
const props = defineProps({
  value: String,

  status: { type: String as PropType<'none' | 'success' | 'warning' | 'danger'>, default: 'none' },
  placeholder: String,
  readonly: Boolean,
  disabled: Boolean,
  noBorder: Boolean,
  rows: {
    type: Number,
    default: 3,
  },
  resize: {
    type: String as PropType<'none' | 'both' | 'horizontal' | 'vertical'>,
    default: 'none',
  },
  autocomplete: {
    type: String as PropType<'on' | 'off'>,
    default: 'off',
  },
})

const [modelValue, setModelValue] = useModelValue(props, {
  onChange: (v: string) => {
    emit('change', v)
  },
})

const onInput = (e: Event) => {
  const el = e.currentTarget as HTMLInputElement
  setModelValue(el.value)
  emit('input', e)
}
</script>
<template>
  <textarea
    class="relative flex w-full appearance-none overflow-y-scroll rounded border bg-transparent py-1.5 pl-3 pr-0 text-sm leading-[1.375rem] scrollbar placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
    :class="[
      noBorder ? 'border-transparent bg-inherit dark:border-transparent' : 'focus:ring-1 ',
      !noBorder &&
        {
          none: 'border-input ring-primary  focus:border-primary',
          danger: 'border-danger ring-danger',
          success: 'border-success ring-success',
          warning: 'border-warning ring-warning',
        }[props.status],
      // noBorder ? 'focus:ring-0' : BUILTIN_CLASS.focusRing,
    ]"
    :style="{
      resize: resize,
    }"
    type="text"
    :rows="rows"
    :value="modelValue"
    :readonly="readonly"
    :disabled="disabled"
    :placeholder="placeholder"
    :autocomplete="autocomplete"
    @input="onInput"
    @keypress="emit('keypress', $event)"
    @keydown="emit('keydown', $event)"
    @keyup="emit('keyup', $event)"
    @focus="emit('focus', $event)"
    @blur="emit('blur', $event)"
    @contextmenu="emit('contextmenu', $event)"
  />
</template>

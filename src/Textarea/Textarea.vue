<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'
import { useModelValue } from '../use/useModelValue'
import { BaseInput } from '@/Base'

import { BUILTIN_CLASS } from '@/utils/theme'
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
    class="flex w-full appearance-none overflow-y-scroll rounded-md border border-gray-200 bg-transparent py-1.5 pl-3 pr-0 text-sm leading-[1.375rem] placeholder:text-gray-500 disabled:cursor-not-allowed disabled:opacity-50"
    :class="[
      BUILTIN_CLASS.scrollbar,
      noBorder ? BUILTIN_CLASS.inputTransparentBorder : BUILTIN_CLASS.inputBorder,
      noBorder ? 'focus:ring-0' : BUILTIN_CLASS.focusRing,
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
  <!-- <textarea
    class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    placeholder="Type your message here."
  ></textarea>
  <textarea
    class="border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    placeholder="Type your message here."
  ></textarea> -->
</template>

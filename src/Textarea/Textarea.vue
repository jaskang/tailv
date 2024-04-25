<script setup lang="ts">
import { ref, computed, type PropType } from 'vue'
import { useModelValue } from '../use/useModelValue'
import { BaseInput } from '@/Base'
import { scrollbarClass } from '@/utils/tw'

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
  rows: {
    type: Number,
    default: 3,
  },
  resize: {
    type: String as PropType<'none' | 'both' | 'horizontal' | 'vertical'>,
    default: 'none',
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

const inputRef = ref<HTMLTextAreaElement>()
</script>
<template>
  <BaseInput class="z-textarea relative flex-col">
    <textarea
      class="block w-full flex-1 cursor-[inherit] border-none bg-transparent px-3 py-1.5 text-sm placeholder:text-slate-400"
      :class="scrollbarClass"
      :style="{
        resize: resize,
        boxShadow: 'none',
      }"
      :rows="rows"
      ref="inputRef"
      type="text"
      :value="modelValue"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="placeholder"
      autocomplete="off"
      @input="onInput"
      @keypress="emit('keypress', $event)"
      @keydown="emit('keydown', $event)"
      @keyup="emit('keyup', $event)"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
      @contextmenu="emit('contextmenu', $event)"
    />
    <div v-if="slots.toolbar" class="inset-x-px bottom-px block rounded-b-md bg-white p-2 dark:bg-slate-900">
      <slot name="toolbar" :content="modelValue"></slot>
    </div>
  </BaseInput>
</template>
<style></style>

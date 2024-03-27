<script setup lang="ts">
import { type VNode, ref } from 'vue'
import { useModelValue } from '../use/useModelValue'
import RingInput from '../Base/RingInput.vue'

defineOptions({ name: 'Input' })
const emit = defineEmits<{
  'update:value': [string | number]
  change: [string | number]
  input: [Event]
  focus: [FocusEvent]
  blur: [FocusEvent]
}>()
const slots = defineSlots<{ prefix?: (_: {}) => any; suffix?: (_: {}) => any }>()
const props = defineProps({
  value: [String, Number],
  prefix: String,
  suffix: String,
  placeholder: String,
  readonly: Boolean,
  disabled: Boolean,
  allowClear: Boolean,
})

const focused = ref(false)
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
const onFocus = (e: FocusEvent) => {
  if (props.disabled) {
    e.preventDefault()
    return false
  } else {
    focused.value = true
    emit('focus', e)
  }
}
const onBlur = (e: FocusEvent) => {
  if (props.disabled) {
    e.preventDefault()
    return false
  } else {
    focused.value = false
    emit('blur', e)
  }
}

const inputRef = ref<HTMLInputElement>()

defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
})
</script>
<template>
  <RingInput :disabled="disabled">
    <span v-if="prefix || slots.prefix" class="z-input_prefix flex h-full items-center text-slate-500">
      <slot name="prefix">
        <span class="pl-3">
          {{ prefix }}
        </span>
      </slot>
    </span>
    <input
      ref="inputRef"
      class="z-input_input disabled block w-full flex-1 border-none bg-transparent py-1.5 px-3 text-sm leading-6 outline-none focus:outline-transparent"
      :class="{
        'pl-1': prefix || slots.prefix,
        'pr-1': suffix || slots.suffix,
        'cursor-pointer': readonly,
      }"
      style="box-shadow: none"
      type="text"
      :value="modelValue"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="placeholder"
      :onInput="onInput"
      :onFocus="onFocus"
      :onBlur="onBlur"
      autocomplete="off"
    />
    <span v-if="suffix || slots.suffix" class="z-input_suffix flex h-full items-center text-slate-500">
      <slot name="suffix">
        <span class="pr-3">
          {{ suffix }}
        </span>
      </slot>
    </span>
  </RingInput>
</template>

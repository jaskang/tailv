<script setup lang="ts">
import { type VNode, ref } from 'vue'
import { useModelValue } from '../use/useModelValue'
import RingInput from '../Base/RingInput.vue'

defineOptions({ name: 'TInput' })
const emit = defineEmits<{
  'update:value': [string | number]
  change: [string | number]
  input: [Event]
  focus: [FocusEvent]
  blur: [FocusEvent]
}>()

const slots = defineSlots<{ prefix?(_: {}): any; suffix?(_: {}): any }>()

const props = defineProps({
  value: [String, Number],
  prefix: String,
  suffix: String,
  placeholder: String,
  readonly: Boolean,
  disabled: Boolean,
})

const focused = ref(false)
const [val, setVal] = useModelValue(props, {
  onChange: (v: string) => {
    emit('change', v)
  },
})

const onInput = (e: Event) => {
  const el = e.currentTarget as HTMLInputElement

  setVal(el.value)
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
    <span v-if="prefix || slots.prefix" class="z-input_prefix flex h-full items-center border-r bg-gray-50">
      <template v-if="prefix">
        <span class="px-3">{{ prefix }}</span>
      </template>
      <template v-else><slot name="prefix" /></template>
    </span>

    <input
      ref="inputRef"
      class="z-input_input disabled flex-1 border-none bg-transparent text-sm outline-none focus:outline-transparent"
      style="box-shadow: none"
      type="text"
      size="1"
      :value="val"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="placeholder"
      :onInput="onInput"
      :onFocus="onFocus"
      :onBlur="onBlur"
      autocomplete="off"
    />

    <span v-if="suffix || slots.suffix" class="z-input_suffix flex h-full items-center border-l bg-gray-50">
      <template v-if="suffix">
        <span class="px-3">{{ suffix }}</span>
      </template>
      <template v-else><slot name="suffix" /></template>
    </span>
  </RingInput>
</template>

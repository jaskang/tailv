<script setup lang="ts">
import { VNode, ref, watch } from 'vue'
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

const slots = defineSlots<{ prefix?(): VNode; suffix?(): VNode }>()

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

const size = ref(val.value ? val.value.toString().length : 1)

watch(val, v => {
  size.value = v.length
  console.log('size.value', size.value)
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
</script>
<template>
  <RingInput :disabled="disabled">
    <span v-if="prefix || slots.prefix" class="z-input_prefix -mr-1 flex items-center pl-3">
      <template v-if="prefix">{{ prefix }}</template>
      <template v-else><slot name="prefix" /></template>
    </span>

    <input
      class="z-input_input disabled flex-1 border-none bg-transparent text-sm outline-none focus:outline-transparent"
      style="box-shadow: none"
      type="text"
      :size="size"
      :value="val"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="placeholder"
      :onInput="onInput"
      :onFocus="onFocus"
      :onBlur="onBlur"
      autocomplete="off"
    />
    <span v-if="suffix || slots.suffix" class="z-input_suffix -ml-1 flex items-center pr-3">
      <template v-if="suffix">{{ suffix }}</template>
      <template v-else><slot name="suffix" /></template>
    </span>
  </RingInput>
</template>

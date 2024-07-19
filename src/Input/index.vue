<script setup lang="ts">
import { type PropType, ref } from 'vue'
import { useModelValue } from '../use/useModelValue'

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
  status: { type: String as PropType<'normal' | 'success' | 'warning' | 'danger'>, default: 'normal' },
  prefix: String,
  suffix: String,
  placeholder: String,
  readonly: Boolean,
  disabled: Boolean,
  allowClear: Boolean,
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

const inputRef = ref<HTMLInputElement>()

defineExpose({
  focus: () => inputRef.value?.focus(),
  blur: () => inputRef.value?.blur(),
})
</script>
<template>
  <div
    class="bg-background flex h-9 items-center overflow-hidden rounded-md border focus-within:z-10 focus-within:ring-1 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-60"
    :class="[
      {
        normal: 'border-input-border focus-within:border-primary focus-within:ring-primary',
        success: 'border-success focus-within:ring-success',
        warning: 'border-warning focus-within:ring-warning',
        danger: 'border-danger focus-within:ring-danger',
      }[props.status],
    ]"
    :data-disabled="disabled"
  >
    <span v-if="prefix || slots.prefix" class="flex h-full items-center">
      <slot name="prefix">
        <span class="pl-3"> {{ prefix }} </span>
      </slot>
    </span>
    <input
      ref="inputRef"
      class="placeholder:text-mute-fg block w-full flex-1 cursor-[inherit] border-0 bg-transparent py-1.5 px-3 text-sm leading-[1.375rem] outline-none focus:outline-none"
      :class="{
        'pl-1': prefix || slots.prefix,
        'pr-1': suffix || slots.suffix,
      }"
      style="box-shadow: none"
      type="text"
      :value="modelValue"
      :readonly="readonly"
      :disabled="disabled"
      :placeholder="placeholder"
      autocomplete="off"
      @input="onInput"
      @focus="emit('focus', $event)"
      @blur="emit('blur', $event)"
    />
    <span v-if="suffix || slots.suffix" class="z-input_suffix flex h-full items-center">
      <slot name="suffix">
        <span class="pr-3">
          {{ suffix }}
        </span>
      </slot>
    </span>
  </div>
</template>

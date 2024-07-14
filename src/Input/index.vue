<script setup lang="ts">
import { type PropType, type VNode, ref } from 'vue'
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
    class="flex h-9 items-center overflow-hidden rounded-md border bg-transparent shadow-sm focus-within:z-10 focus-within:ring-1 data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-60"
    :class="[
      {
        normal: 'border-input ring-primary focus-within:border-primary',
        danger: 'border-danger ring-danger',
        success: 'border-success ring-success',
        warning: 'border-warning ring-warning',
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
      class="block w-full flex-1 cursor-[inherit] border-0 bg-transparent px-3 py-1.5 text-sm leading-[1.375rem] outline-none placeholder:text-default-400 focus:outline-none"
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

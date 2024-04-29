<script setup lang="ts">
import { type VNode, ref, type PropType } from 'vue'
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
    class="flex h-9 items-center rounded-md bg-transparent shadow-sm input-border focus-within:z-10 focus-within:input-border-ring data-[disabled='true']:cursor-not-allowed data-[disabled='true']:opacity-60"
    :class="[
      {
        normal: 'focus-within:input-border-color-primary',
        danger: 'input-border-color-danger dark:input-border-color-danger',
        success: 'input-border-color-success dark:input-border-color-success',
        warning: 'input-border-color-warning dark:input-border-color-warning',
      }[props.status],
    ]"
    :data-disabled="disabled"
  >
    <span v-if="prefix || slots.prefix" class="z-input_prefix flex h-full items-center text-slate-500">
      <slot name="prefix">
        <span class="pl-3"> {{ prefix }} </span>
      </slot>
    </span>
    <input
      ref="inputRef"
      class="z-input_input block w-full flex-1 cursor-[inherit] border-none bg-transparent px-3 py-1.5 text-sm leading-[1.375rem] outline-none placeholder:text-slate-400 focus:outline-none"
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
    <span v-if="suffix || slots.suffix" class="z-input_suffix flex h-full items-center text-slate-500">
      <slot name="suffix">
        <span class="pr-3">
          {{ suffix }}
        </span>
      </slot>
    </span>
  </div>
</template>

<script setup lang="ts">
import { useTheme } from '@/core/theme'
import { ref, computed } from 'vue'
import { getCssVars } from './styles'
import { useControllable } from '@/hooks/controllable'

defineOptions({ name: 'TInput' })
const emit = defineEmits<{
  'update:value': [any]
  change: [any]
  input: [any]
  focus: [any]
  blur: [any]
}>()
const slots = defineSlots<{ default?(_: {}): any; before?(_: {}): any; after?(_: {}): any }>()
const props = defineProps({
  value: String,
  before: String,
  after: String,
  prefix: String,
  suffix: String,
  placeholder: String,
  disabled: Boolean,
})

const { theme, getColor } = useTheme()

const [value, setValue] = useControllable(
  () => props.value,
  val => {
    emit('update:value', val)
    emit('change', val)
  },
  ''
)
const focused = ref(false)

const onInput = (e: Event) => {
  const el = e.currentTarget as HTMLInputElement
  setValue(el.value)
  emit('input', el.value)
}
const onFocus = (e: Event) => {
  if (props.disabled) {
    e.preventDefault()
    return false
  } else {
    focused.value = true
    emit('focus', e)
  }
}
const onBlur = (e: Event) => {
  if (props.disabled) {
    e.preventDefault()
    return false
  } else {
    focused.value = false
    emit('blur', e)
  }
}

const cssVars = computed(() =>
  getCssVars({
    '--t-input-ring-color': getColor('primary')[500],
  })
)
</script>
<template>
  <div
    :style="cssVars"
    class="t-input inline-flex rounded-md text-sm shadow-sm w-full"
    :class="[
      disabled && 'is-disabled',
      focused && 'is-focused',
      disabled ? 'opacity-50 cursor-not-allowed bg-gray-50' : '',
    ]"
    :disabled="disabled"
  >
    <span
      class="t-input_before inline-flex items-center bg-gray-50 rounded-l-md border border-gray-300 px-3 border-r-0"
      v-if="$slots.before"
    >
      <slot name="before" />
    </span>
    <span
      class="t-input_wraper w-full flex-1 flex items-center border border-gray-300 first:rounded-l-md last:rounded-r-md"
      :class="[
        focused ? 'z-10 border-[--t-input-ring-color] ring-1 ring-[--t-input-ring-color]' : '',
        disabled ? 'bg-gray-50' : 'bg-white',
      ]"
    >
      <span class="t-input_prefix flex-initial pl-3" v-if="prefix">{{ prefix }}</span>
      <input
        class="t-input_input flex-1 border-none bg-transparent px-3 focus:outline-none disabled:cursor-not-allowed"
        style="box-shadow: none"
        type="text"
        :value="value"
        :disabled="disabled"
        :placeholder="placeholder"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
      />
      <span class="t-input_suffix flex-initial pr-3" v-if="suffix">{{ suffix }}</span>
    </span>
    <span
      class="t-input_after inline-flex items-center bg-gray-50 rounded-r-md border border-gray-300 px-3 border-r-0"
      v-if="$slots.after"
    >
      <slot name="after" />
    </span>
  </div>
</template>

<script setup lang="ts">
import { useModelValue } from '@/use/useModelValue'

defineOptions({ name: 'Switch' })
const emit = defineEmits<{ 'update:value': [boolean]; change: [boolean] }>()

const slots = defineSlots<{ default?(_: {}): any; open?(_: {}): any; close?(_: {}): any }>()

const props = defineProps({
  value: { type: Boolean, default: undefined },
  name: String,
  disabled: Boolean,
})

const [value, setValue] = useModelValue<boolean>(props, {
  onChange: val => {
    emit('change', val)
  },
})

const clickHandler = () => {
  setValue(!value.value)
}
</script>
<template>
  <button
    type="button"
    class="peer inline-flex h-6 w-11 shrink-0 cursor-pointer appearance-none items-center rounded-full border-2 border-transparent bg-input transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary"
    :data-state="value ? 'checked' : 'unchecked'"
    :disabled="disabled"
    :name="name"
    @click="clickHandler"
  >
    <span
      :data-state="value ? 'checked' : 'unchecked'"
      class="pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
    ></span>
  </button>
</template>

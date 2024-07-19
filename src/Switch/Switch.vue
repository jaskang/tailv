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
    class="data-[checked=true]:bg-primary focus-visible:ring-primary bg-input-accent relative inline-flex h-6 w-11 rounded-full border-2 border-transparent focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
    :data-checked="!!value"
    :disabled="disabled"
    :name="name"
    @click="clickHandler"
  >
    <span
      :data-checked="!!value"
      class="bg-background pointer-events-none relative inline-block h-5 w-5 transform rounded-full ring-0 shadow transition duration-200 ease-in-out data-[checked=true]:translate-x-5 data-[state=unchecked]:translate-x-0"
    ></span>
  </button>
</template>

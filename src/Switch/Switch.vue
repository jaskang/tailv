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
    class="bg-accent peer data-[checked=true]:bg-primary ring-input-border inline-flex h-6 w-11 shrink-0 cursor-pointer appearance-none items-center rounded-full border-2 border-transparent ring-1 transition-all disabled:cursor-not-allowed disabled:opacity-50"
    :data-checked="!!value"
    :disabled="disabled"
    :name="name"
    @click="clickHandler"
  >
    <span
      :data-checked="!!value"
      class="bg-background pointer-events-none block h-5 w-5 rounded-full ring-0 shadow-lg transition-all data-[checked=true]:translate-x-5 data-[state=unchecked]:translate-x-0"
    ></span>
  </button>
</template>

<script setup lang="ts">
import { useModelValue } from '@/use/useModelValue'
import { ref, computed } from 'vue'

defineOptions({ name: 'Switch' })
const emit = defineEmits<{ 'update:checked': [boolean]; change: [boolean] }>()
const slots = defineSlots<{ default?(_: {}): any; open?(_: {}): any; close?(_: {}): any }>()
const props = defineProps({
  checked: { type: Boolean, default: undefined },
  name: String,
  disabled: Boolean,
})

const [checked, setChecked] = useModelValue<boolean>(props, {
  valuePropName: 'checked',
  onChange: val => {
    emit('change', val)
  },
})

const clickHandler = () => {
  setChecked(!checked.value)
}
</script>
<template>
  <button
    type="button"
    class="peer flex-shrink-0 focus-visible:ring-offset-background data-[state=checked]:bg-primary-500 relative inline-flex h-6 w-11 cursor-pointer appearance-none items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out select-none focus:ring-indigo-600 focus:ring-offset-2 focus-visible:ring-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 data-[state=unchecked]:bg-slate-200"
    :data-state="checked ? 'checked' : 'unchecked'"
    :disabled="disabled"
    :name="name"
    @click="clickHandler"
  >
    <span
      :data-state="checked ? 'checked' : 'unchecked'"
      class="pointer-events-none relative block h-5 w-5 rounded-full bg-white ring-0 shadow-lg transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
    >
      <Transition
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        :duration="{ enter: 200, leave: 100 }"
      >
        <template v-if="checked && slots.open">
          <span class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity">
            <slot name="open" />
          </span>
        </template>
        <template v-else-if="!checked && slots.close">
          <span class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity">
            <slot name="close" />
          </span>
        </template>
      </Transition>
    </span>
  </button>
</template>

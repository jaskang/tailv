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
    class="focus-visible:ring-offset-background peer relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer select-none appearance-none items-center rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:ring-indigo-600 focus:ring-offset-2 focus-visible:outline-none focus-visible:ring-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary-500 data-[state=unchecked]:bg-slate-200"
    :data-state="value ? 'checked' : 'unchecked'"
    :disabled="disabled"
    :name="name"
    @click="clickHandler"
  >
    <span
      :data-state="value ? 'checked' : 'unchecked'"
      class="pointer-events-none relative block h-5 w-5 rounded-full bg-white shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0"
    >
      <Transition
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
        :duration="{ enter: 200, leave: 100 }"
      >
        <template v-if="value && slots.open">
          <span
            class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity [:where(&>svg)]:h-3 [:where(&>svg)]:w-3"
          >
            <slot name="open" />
          </span>
        </template>
        <template v-else-if="!value && slots.close">
          <span
            class="absolute inset-0 flex h-full w-full items-center justify-center transition-opacity [:where(&>svg)]:h-3 [:where(&>svg)]:w-3"
          >
            <slot name="close" />
          </span>
        </template>
      </Transition>
    </span>
  </button>
</template>

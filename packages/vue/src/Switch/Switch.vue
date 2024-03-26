<script setup lang="ts">
import { useModelValue } from '@/use/useModelValue'
import { ref, computed } from 'vue'

defineOptions({ name: 'TSwitch' })
const emit = defineEmits<{ 'update:checked': [boolean]; change: [boolean] }>()
const slots = defineSlots<{ default?(_: {}): any; open?(_: {}): any; close?(_: {}): any }>()
const props = defineProps({
  checked: { type: Boolean, default: undefined },
  name: String,
  disabled: Boolean,
})

const [innerChecked, setInnerChecked] = useModelValue<boolean>(props, {
  valuePropName: 'checked',
  onChange: val => {
    emit('change', val)
  },
})

const clickHandler = () => {
  setInnerChecked(!innerChecked.value)
}
</script>
<template>
  <button
    type="button"
    class="flex-shrink-0 relative inline-flex h-6 w-11 cursor-pointer appearance-none rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out select-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2 focus:outline-none"
    :class="[innerChecked ? 'bg-primary-500' : 'bg-gray-200']"
    :disabled="disabled"
    :name="name"
    @click="clickHandler"
  >
    <slot name="open"></slot>
    <slot name="close"></slot>
    <!-- Enabled: "translate-x-5", Not Enabled: "translate-x-0" -->
    <span
      class="pointer-events-none relative inline-block h-5 w-5 translate-x-0 transform rounded-full bg-white ring-0 shadow transition duration-200 ease-in-out"
      :class="[innerChecked ? 'translate-x-5' : 'translate-x-0']"
    >
      <span
        :class="[
          innerChecked ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in',
          'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <slot name="open">
          <svg class="h-3 w-3 text-gray-400" fill="none" viewBox="0 0 12 12">
            <path
              d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </slot>
      </span>
      <span
        :class="[
          innerChecked ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out',
          'absolute inset-0 flex h-full w-full items-center justify-center transition-opacity',
        ]"
        aria-hidden="true"
      >
        <slot name="close">
          <svg class="h-3 w-3 text-indigo-600" fill="currentColor" viewBox="0 0 12 12">
            <path
              d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z"
            />
          </svg>
        </slot>
      </span>
    </span>
  </button>
</template>

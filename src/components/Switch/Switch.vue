<script setup lang="ts">
import { useTheme } from '@/core/theme'
import { useControllable } from '@/hooks/controllable'
import { ref, computed } from 'vue'
import { getCssVars } from './styles'

defineOptions({ name: 'TSwitch' })
const emit = defineEmits<{
  'update:checked': [any]
  change: [any]
}>()
const slots = defineSlots<{ default?(_: {}): any; on?(_: {}): any; off?(_: {}): any }>()
const props = defineProps({
  checked: Boolean,
  disabled: Boolean,
})
const { theme, getColor } = useTheme()

const [value, setValue] = useControllable(
  () => props.checked,
  val => {
    console.log(val)

    emit('update:checked', val)
    emit('change', val)
  },
  false
)

const cssVars = computed(() =>
  getCssVars({
    '--t-switch-primary-color': getColor('primary')[500],
    '--t-switch-ring-color': getColor('primary')[500],
  })
)
</script>
<template>
  <button
    type="button"
    :style="cssVars"
    class="t-switch relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[--t-switch-ring-color]"
    :class="[
      value ? 'bg-[--t-switch-primary-color]' : ' bg-gray-200',
      disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    ]"
    :disabled="disabled"
    role="switch"
    @click="() => setValue(!value)"
  >
    <span
      class="t-switch_thumb pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
      :class="[value ? 'translate-x-5' : 'translate-x-0']"
    >
      <span
        v-if="slots.off"
        class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity [&>*]:w-3 [&>*]:h-3 text-gray-400"
        :class="[value ? 'opacity-0 ease-out duration-100' : 'opacity-100 ease-in duration-200']"
      >
        <slot name="off" />
      </span>
      <span
        v-if="slots.on"
        class="absolute inset-0 h-full w-full flex items-center justify-center transition-opacity [&>*]:w-3 [&>*]:h-3 text-[--t-switch-primary-color]"
        :class="[value ? 'opacity-100 ease-in duration-200' : 'opacity-0 ease-out duration-100']"
      >
        <slot name="on" />
      </span>
    </span>
  </button>
</template>

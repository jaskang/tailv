<script setup lang="ts">
import { useTheme } from '@/theme'
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
const { colors } = useTheme()

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
    '--t-switch-accent-color': colors.value.primary[500],
    '--t-switch-ring-color': colors.value.primary[500],
  })
)
</script>
<template>
  <button
    type="button"
    :style="cssVars"
    class="t-switch relative inline-flex h-6 w-11 flex-shrink-0 rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[--t-switch-ring-color] focus:ring-offset-2"
    :class="[
      value ? 'bg-[--t-switch-accent-color]' : ' bg-gray-200',
      disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    ]"
    :disabled="disabled"
    role="switch"
    @click="() => setValue(!value)"
  >
    <span
      class="t-switch_thumb pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
      :class="[value ? 'translate-x-5' : 'translate-x-0']"
    >
      <span
        v-if="slots.off"
        class="absolute inset-0 flex h-full w-full items-center justify-center text-gray-400 transition-opacity [&>*]:h-3 [&>*]:w-3"
        :class="[value ? 'opacity-0 duration-100 ease-out' : 'opacity-100 duration-200 ease-in']"
      >
        <slot name="off" />
      </span>
      <span
        v-if="slots.on"
        class="absolute inset-0 flex h-full w-full items-center justify-center text-[--t-switch-accent-color] transition-opacity [&>*]:h-3 [&>*]:w-3"
        :class="[value ? 'opacity-100 duration-200 ease-in' : 'opacity-0 duration-100 ease-out']"
      >
        <slot name="on" />
      </span>
    </span>
  </button>
</template>

<script setup lang="ts">
import { colors } from '@/core/colors'
import { useTheme } from '@/core/theme'
import { useControllable } from '@/hooks/use-controllable'
import { computed, toRef } from 'vue'

const props = defineProps({
  modelValue: Boolean,
  disabled: Boolean,
})
const emits = defineEmits(['update:modelValue', 'change'])

const { theme } = useTheme()

const [value, setValue] = useControllable(
  computed(() => props.modelValue),
  val => {
    emits('update:modelValue', val)
    emits('change', val)
  },
  computed(() => false)
)

const cssVars = computed(() => {
  return {
    color: colors[theme.value.colors.primary][500],
    ringColor: colors[theme.value.colors.primary][500],
  }
})
</script>
<template>
  <button
    type="button"
    class="w-switch"
    :class="[value && 'is-checked']"
    :disabled="disabled"
    role="switch"
    @click="() => setValue(!value)"
  >
    <span class="w-switch_thumb"></span>
  </button>
</template>
<style lang="scss">
.w-switch {
  position: relative;
  display: inline-flex;
  height: 1.5rem;
  width: 2.75rem;
  flex-shrink: 0;
  cursor: pointer;
  align-items: center;
  border-radius: 9999px;
  border: 2px solid var(--w-border-color);
  background-color: var(--w-border-color);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 2px var(--w-ring-offset-color), 0 0 0 4px v-bind('cssVars.ringColor');
  }
  &_thumb {
    pointer-events: none;
    display: inline-block;
    height: 1.25rem;
    width: 1.25rem;
    border-radius: 9999px;
    background-color: white;
    transform: translateX(0);
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.is-checked {
    border: 2px solid v-bind('cssVars.color');
    background-color: v-bind('cssVars.color');
    .w-switch_thumb {
      transform: translateX(1.25rem);
    }
  }
  &.is-disabled,
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
}
</style>

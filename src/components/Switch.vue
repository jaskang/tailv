<script lang="ts">
import { colors } from '@/core/colors'
import { useTheme } from '@/core/theme'
import { useControllable } from '@/hooks/controllable'
import { computed, defineComponent, toRef } from 'vue'

export default defineComponent({
  name: 'TSwitch',
  props: {
    checked: Boolean,
    disabled: Boolean,
  },
  emits: ['update:checked', 'change'],
  setup(props, { emit }) {
    const { theme } = useTheme()

    const [value, setValue] = useControllable(
      () => props.checked,
      val => {
        emit('update:checked', val)
        emit('change', val)
      },
      false
    )

    const cssVars = computed(() => {
      return {
        color: colors[theme.value.colors.primary][500],
        ringColor: colors[theme.value.colors.primary][500],
      }
    })
    return {
      cssVars,
      value,
      setValue,
    }
  },
})
</script>
<template>
  <button
    type="button"
    class="t-switch"
    :class="[value && 'is-checked']"
    :disabled="disabled"
    role="switch"
    @click="() => setValue(!value)"
  >
    <span class="t-switch_thumb"></span>
  </button>
</template>
<style lang="scss">
.t-switch {
  position: relative;
  display: inline-flex;
  height: 1.5rem;
  width: 2.75rem;
  flex-shrink: 0;
  cursor: pointer;
  align-items: center;
  border-radius: 9999px;
  border: 2px solid var(--t-border-color);
  background-color: var(--t-border-color);
  transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);

  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 2px var(--t-ring-offset-color), 0 0 0 4px v-bind('cssVars.ringColor');
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
    .t-switch_thumb {
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

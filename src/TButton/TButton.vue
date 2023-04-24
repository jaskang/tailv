<script setup lang="ts">
import { computed, useSlots, type PropType } from 'vue'
import LoadingIcon from '../TIcon/Icons/LoadingIcon.vue'
import { getBtnVars } from './styles'
import { useCls } from '@/utils/classNames'
import { useTheme } from '@/core/theme'
import type { ColorKey } from '@/core/colors'

const props = defineProps({
  variant: {
    type: String as PropType<'default' | 'link' | 'subtle'>,
    default: 'default',
  },
  color: {
    type: String as PropType<'primary' | 'success' | 'warning' | 'error' | ColorKey>,
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xl'>,
    default: 'md',
  },
  rounded: Boolean,
  square: Boolean,
  circle: Boolean,
  block: Boolean,
  loading: Boolean,
  disabled: Boolean,
})

const slots = useSlots()
const { getColor } = useTheme()
const hasIcon = computed(() => slots.icon || props.loading)

const cls = useCls('t-btn', () => ({
  variant: props.variant,
  color: props.color,
  size: props.size,
  rounded: props.rounded || props.circle,
  square: props.square || props.circle,
  block: props.block,
  disabled: props.disabled,
}))

const cssVars = computed(() => {
  return getBtnVars(props.variant, props.size, getColor(props.color))
})
</script>
<template>
  <button :class="cls" type="button" :disabled="disabled">
    <span v-if="hasIcon" class="t-btn_icon">
      <LoadingIcon v-if="loading" class="t-btn_loading" />
      <slot v-else name="icon" />
    </span>
    <span v-if="slots.default" class="t-btn_body">
      <slot />
    </span>
  </button>
</template>
<style lang="scss">
.t-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375rem;
  font-weight: 500;
  border: solid 1px transparent;
  text-align: center;
  cursor: pointer;
  position: relative;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow,
    transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  color: v-bind('cssVars.textColor');
  background-color: v-bind('cssVars.backgroundColor');
  border-color: v-bind('cssVars.borderColor');

  --t-btn-height: calc(2.25rem + 2px);
  height: calc(2.25rem + 2px);

  &:hover {
    color: v-bind('cssVars.textColorHover');
    background-color: v-bind('cssVars.backgroundColorHover');
    border-color: v-bind('cssVars.borderColorHover');
  }
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    z-index: 10;
  }

  &-default,
  &-subtle {
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    &:focus {
      box-shadow: 0 0 0 2px var(--t-ring-offset-color), 0 0 0 4px v-bind('cssVars.ringColor'),
        0 1px 2px 0 rgba(0, 0, 0, 0.05);
    }
  }
  &-link {
    text-decoration: underline;
    text-underline-offset: 2px;
  }

  &-xs {
    padding: 0 0.5rem;
    font-size: 0.75rem;
    line-height: 0.75rem;
    height: calc(1.75rem + 2px); // 30px / w-7 + 2px
  }
  &-sm {
    padding: 0 0.75rem;
    font-size: 0.75rem; // 12px
    line-height: 1rem; // 16px
    height: calc(2rem + 2px); // 34px / w-8 + 2px
  }
  &-md {
    padding: 0 1rem;
    font-size: 0.875rem; // 14px
    line-height: 1.25rem; // 20px
    height: calc(2.25rem + 2px); // 38px / w-9 + 2px
  }
  &-lg {
    padding: 0 1.25rem;
    font-size: 1rem; // 16px
    line-height: 1.5rem; // 24px
    height: calc(2.5rem + 2px); // 42px / w-10 + 2px
  }
  &-xl {
    padding: 0 1.5rem;
    font-size: 1.125rem; // 18px
    line-height: 1.75rem; // 28px
    height: calc(2.75rem + 2px); // 46px / w-11 + 2px
  }

  &.is-rounded {
    border-radius: 9999px;
  }
  &.is-square {
    width: v-bind('cssVars.size');
    padding-left: 0;
    padding-right: 0;
    justify-content: center;
    overflow: hidden;
    white-space: nowrap;
  }
  &.is-block {
    width: 100%;
  }
  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    pointer-events: none;
    &:hover {
      text-decoration: none;
    }
  }

  &_icon {
    width: 1em;
    height: 1em;
    transform: scale(1.25);
    + .t-btn_body {
      margin-left: 0.5em;
    }
  }
  &_loading {
    animation: t-spin 1s linear infinite;
  }
  &_body {
    white-space: nowrap;
    display: inline-flex;
    align-items: center;
    svg {
      display: inline-block;
      width: 1em;
      height: 1em;
    }
  }
}
</style>

<script setup lang="ts">
import { colors } from '@/core/colors'
import { useTheme } from '@/core/theme'
import { computed, defineComponent, ref } from 'vue'
const props = defineProps({
  before: String,
  after: String,
  prefix: String,
  suffix: String,
  placeholder: String,
  disabled: Boolean,
})

const { theme } = useTheme()

const focused = ref(false)

const cssVar = computed(() => {
  return {
    ringColor: colors[theme.value.colors.primary][500],
  }
})
</script>
<template>
  <div class="w-input" :class="[disabled && 'is-disabled', focused && 'is-focused']" :disabled="disabled">
    <span class="w-input_before" v-if="$slots.before">
      <slot name="before" />
    </span>
    <span class="w-input_wraper">
      <span class="w-input_prefix" v-if="prefix">{{ prefix }}</span>
      <input
        class="w-input_input"
        style="box-shadow: none"
        type="text"
        @focus="focused = true"
        @blur="focused = false"
        :disabled="disabled"
        :placeholder="placeholder"
      />
      <span class="w-input_suffix flex-initial pl-2" v-if="suffix">{{ suffix }}</span>
    </span>
    <span class="w-input_after" v-if="$slots.after">
      <slot name="after" />
    </span>
  </div>
</template>
<style lang="scss">
.w-input {
  width: 100%;
  display: inline-flex;
  align-items: stretch;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &_before,
  &_after {
    display: inline-flex;
    flex: 0 1 auto;
    align-items: center;
    border: 1px solid var(--w-border-color);
    background-color: var(--w-gray-50);
  }
  &_before {
    border-right-width: 0;
    border-radius: 0.375rem 0 0 0.375rem;
    padding-left: 0.75rem;
    padding-right: 0.5rem;
  }
  &_after {
    border-left-width: 0;
    border-radius: 0 0.375rem 0.375rem 0;
    padding-left: 0.5rem;
    padding-right: 0.75rem;
  }
  &_wraper {
    width: 100%;
    display: flex;
    flex: 1;
    align-items: center;
    border: 1px solid var(--w-border-color);
    background-color: white;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    &:first-child {
      border-top-left-radius: 0.375rem;
      border-bottom-left-radius: 0.375rem;
    }
    &:last-child {
      border-top-right-radius: 0.375rem;
      border-bottom-right-radius: 0.375rem;
    }
  }
  &_input {
    flex: 1;
    border: none;
    background-color: transparent;
    padding: 0.5rem 0;
    &:focus {
      outline: none;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
  &_prefix {
    flex: 0 1 auto;
    padding-right: 0.5rem;
  }
  &_suffix {
    flex: 0 1 auto;
    padding-left: 0.5rem;
  }

  &.is-focused {
    .w-input_wraper {
      z-index: 10;
      border-color: v-bind('cssVar.ringColor');
      box-shadow: 0 0 0 1px v-bind('cssVar.ringColor');
    }
  }
  &.is-disabled {
    .w-input_wraper {
      cursor: not-allowed;
      background-color: var(--w-gray-50);
      opacity: 0.5;
    }
  }
}
</style>

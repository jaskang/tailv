<script setup lang="ts">
import { defineComponent, ref } from 'vue'
const props = defineProps({
  before: String,
  after: String,
  prefix: String,
  suffix: String,
  placeholder: String,
  disabled: Boolean,
})

const focused = ref(false)
</script>
<template>
  <div :class="['e-input', disabled && 'is-disabled']">
    <span class="e-input__before" v-if="$slots.before">
      <slot name="before" />
    </span>
    <span :class="['e-input__input', focused && 'is-focused']">
      <span class="e-input__prefix" v-if="prefix">{{ prefix }}</span>
      <input
        class="e-input__input-inner"
        type="text"
        @focus="focused = true"
        @blur="focused = false"
        :disabled="disabled"
        :placeholder="placeholder"
      />
      <span class="e-input__suffix" v-if="suffix">{{ suffix }}</span>
    </span>
    <span class="e-input__after" v-if="$slots.after">
      <slot name="after" />
    </span>
  </div>
</template>

<style lang="less">
.e-input {
  @apply inline-flex w-full items-stretch rounded-md  text-sm shadow-sm;
  &__input {
    @apply flex w-full flex-1 items-center border border-solid border-gray-300 bg-white px-3  transition-all;
    &.is-focused {
      @apply z-10 border-indigo-500 ring-1 ring-indigo-500;
    }
    &:last-child {
      @apply rounded-r-md;
    }
    &:first-child {
      @apply rounded-l-md;
    }
  }
  &__prefix {
    @apply flex-initial pr-2;
  }
  &__input-inner {
    @apply flex-1 bg-transparent px-0 py-2 text-sm;
    box-shadow: none !important;
    cursor: inherit;
  }
  &__suffix {
    @apply flex-initial pl-2;
  }

  &__before,
  &__after {
    @apply inline-flex flex-initial items-center border border-solid border-gray-300 bg-gray-50;
  }
  &__before {
    @apply rounded-l-md border-r-0  pl-3 pr-2;
  }
  &__after {
    @apply rounded-r-md border-l-0  pl-2 pr-3;
  }

  &.is-disabled .e-input {
    &__input {
      @apply cursor-not-allowed border-gray-200 bg-gray-50 text-gray-500;
    }
    &__before,
    &__after {
      @apply border-gray-200;
    }
  }
}
</style>

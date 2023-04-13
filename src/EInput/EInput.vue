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
  <div
    class="e-input group inline-flex w-full items-stretch rounded-md text-sm shadow-sm"
    :class="[disabled && 'is-disabled']"
    :disabled="disabled"
  >
    <span
      class="e-input__before inline-flex flex-initial items-center rounded-l-md border border-r-0 border-solid border-gray-300 bg-gray-50 pl-3 pr-2"
      v-if="$slots.before"
    >
      <slot name="before" />
    </span>
    <span
      class="e-input__input flex w-full flex-1 items-center border border-solid border-gray-300 bg-white px-3 transition-all first:rounded-l-md last:rounded-r-md group-[.is-disabled]:cursor-not-allowed group-[.is-disabled]:bg-gray-50 group-[.is-disabled]:text-gray-500"
      :class="[focused && 'z-10 border-indigo-500 ring-1 ring-indigo-500']"
    >
      <span class="e-input__prefix flex-initial pr-2" v-if="prefix">{{ prefix }}</span>
      <input
        class="e-input__input-inner flex-1 border-0 bg-transparent px-0 py-2 text-sm focus:outline-none"
        style="box-shadow: none"
        type="text"
        @focus="focused = true"
        @blur="focused = false"
        :disabled="disabled"
        :placeholder="placeholder"
      />
      <span class="e-input__suffix flex-initial pl-2" v-if="suffix">{{ suffix }}</span>
    </span>
    <span
      class="e-input__after inline-flex flex-initial items-center rounded-r-md border border-l-0 border-solid border-gray-300 bg-gray-50 pl-2 pr-3"
      v-if="$slots.after"
    >
      <slot name="after" />
    </span>
  </div>
</template>

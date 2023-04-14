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

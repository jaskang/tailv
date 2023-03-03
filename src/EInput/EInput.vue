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

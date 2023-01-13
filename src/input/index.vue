<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'EInput',
  props: {
    before: String,
    after: String,
    prefix: String,
    suffix: String,
  },
  setup(props, { emit }) {
    const focused = ref(false)
    return {
      focused,
    }
  },
})
</script>
<template>
  <div class="e-input">
    <slot name="before" />
    <span :class="['e-input__input', focused && 'is-focused']">
      <span class="e-input__prefix" v-if="prefix">{{ prefix }}</span>
      <input
        type="text"
        @focus="focused = true"
        @blur="focused = false"
        class="e-input__input-inner"
      />
      <span class="e-input__suffix" v-if="suffix">{{ suffix }}</span>
    </span>
    <slot name="after" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, type PropType } from 'vue'

export default defineComponent({
  name: 'TIcon',
  props: {
    spin: Boolean,
  },
  setup(props) {},
})
</script>
<template>
  <span
    role="img"
    class="t-icon w-[1em] inline-flex items-center [&>svg]:block [&>svg]:w-full [&>svg]:h-full"
    :class="[spin ? 'animate-spin' : '']"
  >
    <slot />
  </span>
</template>

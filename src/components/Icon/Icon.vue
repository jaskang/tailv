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
    class="t-icon inline-flex items-center [&>svg]:block [&>svg]:1em [&>svg]:1em"
    :class="[spin ? 'animate-spin' : '']"
  >
    <slot />
  </span>
</template>

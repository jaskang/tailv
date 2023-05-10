<script lang="ts">
import { defineComponent, ref, type PropType } from 'vue'

export default defineComponent({
  name: 'TSpace',
  props: {
    gap: String as PropType<string>,
  },
  setup(props, { emit }) {
    return {}
  },
})
</script>
<template>
  <div class="t-space">
    <slot></slot>
  </div>
</template>
<style lang="scss">
.t-space {
  display: flex;
}
</style>

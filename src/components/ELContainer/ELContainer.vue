<template>
  <section :class="{ 'el-container': true, 'is-vertical': direction === 'vertical' }">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface ElContainerProps {
  direction?: 'horizontal' | 'vertical';
}

export default defineComponent({
  name: 'ElContainer',
  props: {
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'vertical' as 'vertical'
    }
  }
});
</script>

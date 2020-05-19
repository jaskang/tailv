<template>
  <section class="el-container" :class="{ 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue'

interface ElContainerProps {
  direction?: 'horizontal' | 'vertical'
}

export default defineComponent<ElContainerProps>({
  name: 'ElContainer',
  setup(props, { slots }) {
    const isVertical = computed(() => {
      if (props.direction === 'vertical') {
        return true
      } else if (props.direction === 'horizontal') {
        return false
      }
      const child = slots.default?.() || []
      return child.map(vnode => vnode.type === 'el-header' || vnode.type === 'el-footer')
    })
    return { isVertical }
  }
})
</script>

<style lang="less">
.el-container {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;

  &.is-vertical {
    flex-direction: column;
  }
}
</style>

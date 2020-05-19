<script lang="ts">
import { computed, defineComponent, h } from 'vue'

interface ElContainerProps {
  direction?: 'horizontal' | 'vertical'
}

export default defineComponent<ElContainerProps>({
  name: 'ElContainer',
  setup(props, { slots }) {
    const child = slots.default?.()
    const isVertical = computed(() => {
      if (props.direction === 'vertical') {
        return true
      } else if (props.direction === 'horizontal') {
        return false
      }
      return child.some(vnode => vnode.type === 'el-header' || vnode.type === 'el-footer')
    })
    return () =>
      h(
        'section',
        {
          class: { 'el-container': true, 'is-vertical': isVertical.value }
        },
        child
      )
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

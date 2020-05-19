<template>
  <footer class="el-footer" :style="{ height }">
    <slot></slot>
  </footer>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElFooter',
  componentName: 'ElFooter',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
})
</script>

<style lang="less">
@import '../ElStyles/common/var.less';

.el-footer {
  padding: @--footer-padding;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>

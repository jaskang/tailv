<template>
  <header class="el-header" :style="{ height }">
    <slot></slot>
  </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElHeader',
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

.el-header {
  padding: @--header-padding;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>

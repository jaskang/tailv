<template>
  <main class="el-main">
    <slot></slot>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElMain'
})
</script>
<style lang="less">
@import '../ElStyles/common/var.less';

.el-main {
  // IE11 supports the <main> element partially https://caniuse.com/#search=main
  display: block;
  flex: 1;
  flex-basis: auto;
  overflow: auto;
  box-sizing: border-box;
  padding: @--main-padding;
}
</style>

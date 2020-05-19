<template>
  <aside class="el-aside" :style="{ width }">
    <slot></slot>
  </aside>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElAside',
  props: {
    width: {
      type: String,
      default: '300px'
    }
  }
})
</script>
<style lang="less">
.el-aside {
  overflow: auto;
  box-sizing: border-box;
  flex-shrink: 0;
}
</style>

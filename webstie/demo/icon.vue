<template>
  <h1>Icon 图标</h1>
  <h2>使用方法</h2>
  <el-icon name="edit"></el-icon>
  <el-icon name="share"></el-icon>
  <el-icon name="delete"></el-icon>
  <el-button type="primary" icon="el-icon-search">搜索</el-button>
  <h2>图标集合</h2>
</template>

<script lang="ts">
import { ElIcon, ElButton } from '@/index'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { ElIcon, ElButton }
})
</script>

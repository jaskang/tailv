<template>
  <img alt="Vue logo" src="./logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <ElButton />

  <ElRow :gutter="20">
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
  </ElRow>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { ElButton, ElRow, ElCol } from 'elenext'
export default {
  name: 'App',
  components: {
    HelloWorld,
    ElButton,
    ElRow,
    ElCol
  }
}
</script>

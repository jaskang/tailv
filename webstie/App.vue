<template>
  <img alt="Vue logo" src="./logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Element UI" />
  <h2>ElButton</h2>
  <ElRow>
    <ElButton>默认按钮</ElButton>
    <ElButton type="primary">主要按钮</ElButton>
    <ElButton type="success">成功按钮</ElButton>
    <ElButton type="info">信息按钮</ElButton>
    <ElButton type="warning">警告按钮</ElButton>
    <ElButton type="danger">危险按钮</ElButton>
  </ElRow>

  <ElRow>
    <ElButton plain>朴素按钮</ElButton>
    <ElButton type="primary" plain>主要按钮</ElButton>
    <ElButton type="success" plain>成功按钮</ElButton>
    <ElButton type="info" plain>信息按钮</ElButton>
    <ElButton type="warning" plain>警告按钮</ElButton>
    <ElButton type="danger" plain>危险按钮</ElButton>
  </ElRow>

  <ElRow>
    <ElButton round>圆角按钮</ElButton>
    <ElButton type="primary" round>主要按钮</ElButton>
    <ElButton type="success" round>成功按钮</ElButton>
    <ElButton type="info" round>信息按钮</ElButton>
    <ElButton type="warning" round>警告按钮</ElButton>
    <ElButton type="danger" round>危险按钮</ElButton>
  </ElRow>

  <ElRow>
    <ElButton icon="el-icon-search" circle></ElButton>
    <ElButton type="primary" icon="el-icon-edit" circle></ElButton>
    <ElButton type="success" icon="el-icon-check" circle></ElButton>
    <ElButton type="info" icon="el-icon-message" circle></ElButton>
    <ElButton type="warning" icon="el-icon-star-off" circle></ElButton>
    <ElButton type="danger" icon="el-icon-delete" circle></ElButton>
  </ElRow>

  <ElRow :gutter="20">
    <ElCol :span="6"><div class="grid-content bg-purple"></div></ElCol>
    <ElCol :span="6"><div class="grid-content bg-purple"></div></ElCol>
    <ElCol :span="6"><div class="grid-content bg-purple"></div></ElCol>
    <ElCol :span="6"><div class="grid-content bg-purple"></div></ElCol>
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

<style lang="less">
.el-row + .el-row {
  margin-top: 20px;
}
</style>

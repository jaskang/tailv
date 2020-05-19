<template>
  <ElContainer>
    <ElAside>
      <router-link :to="{ name: 'button' }">button</router-link><br />
      <router-link :to="{ name: 'layout' }">layout</router-link><br />
      <router-link :to="{ name: 'container' }">container</router-link><br />
      <router-link :to="{ name: 'icon' }">icon</router-link><br />
    </ElAside>
    <ElMain>
      <img alt="Vue logo" src="./../assets/logo.png" />
      <HelloWorld msg="Hello Vue 3.0 + Element UI" />
      <router-view></router-view>
    </ElMain>
  </ElContainer>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './HelloWorld.vue'
import { ElContainer, ElAside, ElMain } from '@/index'
export default defineComponent({
  components: {
    HelloWorld,
    ElContainer,
    ElAside,
    ElMain
  }
})
</script>
<style lang="less">
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 30px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
}

.el-container:nth-child(7) .el-aside {
}
</style>

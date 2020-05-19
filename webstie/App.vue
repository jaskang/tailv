<template>
  <img alt="Vue logo" src="./logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Element UI" />
  <Button />
  <Layout />
  <Container />
  <Icon />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Button from './demo/button.vue'
import Layout from './demo/layout.vue'
import Container from './demo/container.vue'
import Icon from './demo/icon.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Button,
    Layout,
    Container,
    Icon
  }
})
</script>

<style lang="less">
.el-row + .el-row {
  margin-top: 20px;
}
</style>

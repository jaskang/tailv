<template>
  <img alt="Vue logo" src="./logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Element UI" />
  <Button />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Button from './demo/button.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Button
  }
})
</script>

<style lang="less">
.el-row + .el-row {
  margin-top: 20px;
}
</style>

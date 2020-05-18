<template>
  <img alt="Vue logo" src="./logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <ElButton>默认按钮</ElButton>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { ElButton } from '../src/index'
export default {
  name: 'App',
  components: {
    HelloWorld,
    ElButton
  }
}
</script>

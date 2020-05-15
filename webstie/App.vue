<template>
  <img alt="Vue logo" src="./logo.png" />
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
  <ElButton />
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import { ElButton } from 'elenext'
export default {
  name: 'App',
  components: {
    HelloWorld,
    ElButton
  }
}
</script>

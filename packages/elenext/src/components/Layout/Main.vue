<template>
  <main class="el-main">
    <slot />
  </main>
</template>

<script lang="ts">
import { App, defineComponent } from 'vue'
import { getBlockCls, getCompName } from '../../utils'

const Main = defineComponent({
  name: getCompName('Main')
})

Main.install = (app: App): void => {
  app.component(Main.name, Main)
}

export default Main
</script>

<style></style>

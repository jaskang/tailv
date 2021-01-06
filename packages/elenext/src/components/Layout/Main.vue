<template>
  <main class="el-main">
    <slot />
  </main>
</template>

<script lang="ts">
import { App, defineComponent } from 'vue'

const EMain = defineComponent({
  name: 'EMain'
})

EMain.install = (app: App): void => {
  app.component(EMain.name, EMain)
}

export default EMain
</script>

<style></style>

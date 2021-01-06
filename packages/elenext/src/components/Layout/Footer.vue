<template>
  <footer class="el-footer" :style="{ height: height }">
    <slot />
  </footer>
</template>

<script lang="ts">
import { App, defineComponent } from 'vue'

const EFooter = defineComponent({
  name: 'EFooter',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
})

EFooter.install = (app: App): void => {
  app.component(EFooter.name, EFooter)
}

export default EFooter
</script>

<style></style>

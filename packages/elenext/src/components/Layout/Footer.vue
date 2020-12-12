<template>
  <footer class="el-footer" :style="{ height: height }">
    <slot />
  </footer>
</template>

<script lang="ts">
import { App, defineComponent } from 'vue'
import { getBlockCls, getCompName } from '../../utils'

const Footer = defineComponent({
  name: getCompName('Footer'),
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
})

Footer.install = (app: App): void => {
  app.component(Footer.name, Footer)
}

export default Footer
</script>

<style></style>

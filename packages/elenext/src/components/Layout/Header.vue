<template>
  <header class="el-header" :style="{ height: height }">
    <slot />
  </header>
</template>

<script lang="ts">
import { App, defineComponent } from 'vue'
import { prop } from '../../utils'

const EHeader = defineComponent({
  name: 'EHeader',
  props: {
    height: prop.string()
  }
})

EHeader.install = (app: App): void => {
  app.component(EHeader.name, EHeader)
}

export default EHeader
</script>

<style></style>

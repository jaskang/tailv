<template>
  <header class="el-header" :style="{ height: height }">
    <slot />
  </header>
</template>

<script lang="ts">
import { App, defineComponent } from 'vue'
import { getCompName } from '../../utils'

const Header = defineComponent({
  name: getCompName('Header'),
  props: {
    height: {
      type: String,
      default: '60px'
    }
  }
})

Header.install = (app: App): void => {
  app.component(Header.name, Header)
}

export default Header
</script>

<style></style>

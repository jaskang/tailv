<template>
  <div class="el-breadcrumb">
    <slot />
  </div>
</template>

<script lang="ts">
import { App, defineComponent, provide } from 'vue'
import { getBlockCls, getCompName } from '../../utils'

const blockCls = getBlockCls('Breadcrumb')
const Breadcrumb = defineComponent({
  name: getCompName('Breadcrumb'),
  props: {
    separator: {
      type: String,
      default: '/'
    }
  }
})

Breadcrumb.install = (app: App): void => {
  app.component(Breadcrumb.name, Breadcrumb)
}

export default Breadcrumb
</script>

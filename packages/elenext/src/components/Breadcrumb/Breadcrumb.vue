<template>
  <div class="el-breadcrumb">
    <slot />
  </div>
</template>

<script lang="ts">
import { App, defineComponent } from 'vue'
import { prop } from '../../utils'

const EBreadcrumb = defineComponent({
  name: 'EBreadcrumb',
  props: {
    separator: prop.string({ default: '/' })
  }
})

EBreadcrumb.install = (app: App): void => {
  app.component(EBreadcrumb.name, EBreadcrumb)
}

export default EBreadcrumb
</script>

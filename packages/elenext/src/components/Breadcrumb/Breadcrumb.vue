<template>
  <div class="el-breadcrumb">
    <slot />
  </div>
</template>

<script lang="ts">
import { App, defineComponent, provide } from 'vue'

const EBreadcrumb = defineComponent({
  name: 'EBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    }
  }
})

EBreadcrumb.install = (app: App): void => {
  app.component(EBreadcrumb.name, EBreadcrumb)
}

export default EBreadcrumb
</script>

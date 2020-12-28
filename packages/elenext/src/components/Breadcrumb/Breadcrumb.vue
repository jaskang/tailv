<template>
  <div class="el-breadcrumb">
    <slot />
  </div>
</template>

<script lang="ts">
import { App, defineComponent, provide } from 'vue'
import { getCompName } from '../../utils'

const EBreadcrumb = defineComponent({
  name: getCompName('EBreadcrumb'),
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

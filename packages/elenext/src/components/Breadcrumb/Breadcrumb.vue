<template>
  <div class="el-breadcrumb">
    <slot />
  </div>
</template>

<script lang="ts">
import { App, computed, defineComponent } from 'vue'
import { useChildren } from '../../hooks/useParent'
import { prop } from '../../utils'
import { Breadcrumb_IJK } from './core'
const EBreadcrumb = defineComponent({
  name: 'EBreadcrumb',
  props: {
    separator: prop.string().def('/')
  },
  setup(props) {
    useChildren(Breadcrumb_IJK, {
      separator: computed(() => props.separator)
    })
    return {}
  }
})

EBreadcrumb.install = (app: App): void => {
  app.component(EBreadcrumb.name, EBreadcrumb)
}

export default EBreadcrumb
</script>

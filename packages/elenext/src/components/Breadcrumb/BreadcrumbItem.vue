<template>
  <span class="el-breadcrumb-item">
    <span :class="[`el-breadcrumb-item__inner`, path ? 'is-link' : '']" role="link" @click="clickHandler">
      <slot />
    </span>
    <span class="el-breadcrumb-item__separator" v-text="separator" />
  </span>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, computed, App } from 'vue'
import { prop } from '../../utils'

const EBreadcrumbItem = defineComponent({
  name: 'EBreadcrumbItem',
  props: {
    // path: prop.string(),
    // TODO: oneOfType
    path: prop.oneOfType(['string', 'object']),
    replace: prop.bool()
  },
  setup(props, { slots }) {
    const self = getCurrentInstance()

    const separator = computed<string>(() => self?.parent?.props.separator as string)

    const clickHandler = (event: MouseEvent) => {
      const { path } = props
      const router = self.appContext.config.globalProperties.$router

      if (router) {
        props.replace ? router.replace(path) : router.push(path)
      }
    }
    return {
      separator,
      clickHandler
    }
  }
})

EBreadcrumbItem.install = (app: App): void => {
  app.component(EBreadcrumbItem.name, EBreadcrumbItem)
}

export default EBreadcrumbItem
</script>

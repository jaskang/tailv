<template>
  <span class="el-breadcrumb-item">
    <span :class="[`el-breadcrumb-item__inner`, path ? 'is-link' : '']" role="link" @click="clickHandler">
      <slot />
    </span>
    <span class="el-breadcrumb-item__separator">{{ separator }}</span>
  </span>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, App } from 'vue'
import { useParent } from '../../hooks/useParent'

import vptypes from 'vptypes'
import { Breadcrumb_IJK } from './core'

const EBreadcrumbItem = defineComponent({
  name: 'EBreadcrumbItem',
  props: {
    // path: vptypes.string(),
    // TODO: oneOfType
    path: vptypes.oneOfType([vptypes.string(), vptypes.object()]),
    replace: vptypes.bool(),
  },
  setup(props, {}) {
    const self = getCurrentInstance()
    const { parent } = useParent(Breadcrumb_IJK)

    const clickHandler = (event: MouseEvent) => {
      const { path } = props
      const router = self!.appContext.config.globalProperties.$router

      if (router && path) {
        props.replace ? router.replace(path) : router.push(path)
      }
    }
    return {
      separator: parent?.separator || '/',
      clickHandler,
    }
  },
})

EBreadcrumbItem.install = (app: App): void => {
  app.component(EBreadcrumbItem.name, EBreadcrumbItem)
}

export default EBreadcrumbItem
</script>

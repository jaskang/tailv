<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import { App, computed, defineComponent, getCurrentInstance, InjectionKey, PropType, provide, reactive } from 'vue'
import { layoutInjectKey } from './core'
import { mergeClass } from '@elenext/shared'
import { getBlockCls, getCompName } from '../../utils'

const blockCls = getBlockCls('Layout')

const Layout = defineComponent({
  name: getCompName('Layout'),
  props: {
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: undefined
    }
  },
  setup(props, { slots }) {
    const data = reactive({
      hasAside: false
    })
    const classes = computed(() =>
      mergeClass({
        [blockCls]: true,
        'is-horizontal': props.direction === 'horizontal' || data.hasAside
      })
    )
    provide(layoutInjectKey, {
      setAside: () => {
        data.hasAside = true
      }
    })
    return {
      classes
    }
  }
})

Layout.install = (app: App): void => {
  app.component(Layout.name, Layout)
}

export default Layout
</script>

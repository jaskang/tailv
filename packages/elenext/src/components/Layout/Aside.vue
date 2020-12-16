<template>
  <aside class="el-aside" :style="{ width: width }">
    <slot />
  </aside>
</template>

<script lang="ts">
import { App, defineComponent, inject } from 'vue'
import { layoutInjectKey } from './core'
import { getBlockCls, getCompName } from '../../utils'
import { propTypes } from '../../utils/PropTypes'

const Aside = defineComponent({
  name: getCompName('Aside'),
  props: {
    width: propTypes.string('250px')
  },
  setup(props, { slots }) {
    const layout = inject(layoutInjectKey)
    layout?.setAside()
    return {}
  }
})

Aside.install = (app: App): void => {
  app.component(Aside.name, Aside)
}

export default Aside
</script>

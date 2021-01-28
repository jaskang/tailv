<template>
  <aside class="el-aside" :style="{ width: width }">
    <slot />
  </aside>
</template>

<script lang="ts">
import { App, defineComponent, inject } from 'vue'
import { VpTypes } from 'vptypes'
import { layoutInjectKey } from './core'

const EAside = defineComponent({
  name: 'EAside',
  props: {
    width: VpTypes.string().def('250px'),
  },
  setup(props, { slots }) {
    const layout = inject(layoutInjectKey)
    layout?.setAside()
    return {}
  },
})

EAside.install = (app: App): void => {
  app.component(EAside.name, EAside)
}

export default EAside
</script>

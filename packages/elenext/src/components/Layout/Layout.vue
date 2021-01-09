<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import { App, computed, defineComponent, provide, reactive } from 'vue'
import { layoutInjectKey } from './core'
import { mergeClass } from '@elenext/shared'
import { prop } from '../../utils'

const ELayout = defineComponent({
  name: 'ELayout',
  props: {
    direction: prop.oneOf(['horizontal', 'vertical'])
  },
  setup(props, { slots }) {
    const data = reactive({
      hasAside: false
    })
    const classes = computed(() =>
      mergeClass({
        'el-layout': true,
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

ELayout.install = (app: App): void => {
  app.component(ELayout.name, ELayout)
}

export default ELayout
</script>

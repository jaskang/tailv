<template>
  <div :class="classes">
    <slot />
  </div>
</template>

<script lang="ts">
import { App, computed, defineComponent, getCurrentInstance, InjectionKey, PropType, provide, reactive } from 'vue'
import { layoutInjectKey } from './core'
import { mergeClass } from '@elenext/shared'
import { getCompName } from '../../utils'
import { propTypes } from '../../utils/PropTypes'

const ELayout = defineComponent({
  name: getCompName('ELayout'),
  props: {
    direction: propTypes.oneOfString<'horizontal' | 'vertical'>()
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

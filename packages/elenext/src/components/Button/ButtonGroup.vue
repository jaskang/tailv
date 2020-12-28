<template>
  <div class="el-button-group">
    <slot />
  </div>
</template>

<script lang="ts">
import { App, defineComponent } from 'vue'
import { getCompName } from '../../utils'

const EButtonGroup = defineComponent({
  name: getCompName('EButtonGroup')
})

EButtonGroup.install = (app: App): void => {
  app.component(EButtonGroup.name, EButtonGroup)
}

export default EButtonGroup
</script>

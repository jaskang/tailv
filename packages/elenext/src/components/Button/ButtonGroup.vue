<template>
  <div class="el-button-group">
    <slot />
  </div>
</template>

<script lang="ts">
import { App, defineComponent } from 'vue'
import { getCompName } from '../../utils'

const ButtonGroup = defineComponent({
  name: getCompName('ButtonGroup')
})

ButtonGroup.install = (app: App): void => {
  app.component(ButtonGroup.name, ButtonGroup)
}

export default ButtonGroup
</script>

<template>
  <div class="el-input-group" @focus="focusHandler">
    <slot />
  </div>
</template>
<script lang="ts">
import { App, defineComponent } from 'vue'

const EInputGroup = defineComponent({
  name: 'EInputGroup',
  props: {},
  setup(props, { attrs, slots, emit }) {
    const focusHandler = (event: any) => {}
    return { focusHandler }
  }
})
EInputGroup.install = (app: App): void => {
  app.component(EInputGroup.name, EInputGroup)
}
export default EInputGroup
</script>

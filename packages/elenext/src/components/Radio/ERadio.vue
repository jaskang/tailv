<template>
  <label class="el-radio">
    <span class="el-radio__input"> </span>
    <span class="el-radio__label">
      <slot>{{ label }}</slot>
    </span>
  </label>
  <div>
    <slot />
  </div>
</template>
<script lang="ts">
import { App, defineComponent } from 'vue'
import { prop } from '../../utils'

const ERadio = defineComponent({
  name: 'ERadio',
  props: {
    value: prop.any(),
    label: prop.string(),
    disabled: prop.bool(),
    name: prop.string(),
    border: prop.bool(),
    size: prop.string()
  },
  setup(props, { attrs, slots, emit }) {
    return {}
  }
})
ERadio.install = (app: App): void => {
  app.component(ERadio.name, ERadio)
}
export default ERadio
</script>

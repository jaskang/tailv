<template>
  <div class="el-select">
    <e-input />
  </div>
</template>
<script lang="ts">
import { App, defineComponent } from 'vue'
import { EInput } from '../Input'
const ESelect = defineComponent({
  name: 'ESelect',
  components: {
    EInput
  },
  props: {},
  setup(props, { attrs, slots, emit }) {
    return {}
  }
})
ESelect.install = (app: App): void => {
  app.component(ESelect.name, ESelect)
}
export default ESelect
</script>

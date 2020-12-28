<template>
  <div class="el-input">
    <div class="el-input__prepend">
      <slot name="prepend">
        {{ prepend }}
      </slot>
    </div>
    <div class="el-input__content">
      <div class="el-input__prefix">
        <slot name="prefix">
          {{ prefix }}
        </slot>
      </div>
      <div class="el-input__content">
        <input type="text" class="el-input__inner" />
      </div>
      <div class="el-input__suffix">
        <slot name="suffix">
          {{ suffix }}
        </slot>
      </div>
    </div>
    <div class="el-input__append">
      <slot name="append">
        {{ append }}
      </slot>
    </div>
  </div>
</template>
<script lang="ts">
import { propTypes } from 'src/utils/PropTypes'
import { App, defineComponent } from 'vue'

const EInput = defineComponent({
  name: 'EInput',
  props: {
    prefix: propTypes.string(),
    suffix: propTypes.string(),
    prepend: propTypes.string(),
    append: propTypes.string()
  },
  setup(props, { attrs, slots, emit }) {
    return {}
  }
})
EInput.install = (app: App): void => {
  app.component(EInput.name, EInput)
}
export default EInput
</script>

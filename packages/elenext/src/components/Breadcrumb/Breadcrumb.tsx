import { defineComponent } from 'vue'

const Breadcrumb = defineComponent({
  name: 'ElBreadcrumb',
  props: {
    separator: {
      type: String,
      default: '/'
    },
    separatorClass: {
      type: String,
      default: ''
    }
  },
  setup(prop, { attrs }) {
    return () => (
      <div class="el-breadcrumb" aria-label="Breadcrumb" role="navigation">
        {slots.default?.()}
      </div>
    )
  }
})

export default Breadcrumb

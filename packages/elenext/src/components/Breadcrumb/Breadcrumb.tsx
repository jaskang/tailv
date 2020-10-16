import { defineComponent, provide, getCurrentInstance } from 'vue'
import { ElBreadcrumbSymbol } from '../../provides'

// import './styles/Breadcrumb.scss'

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
  setup(prop, { slots }) {
    provide(ElBreadcrumbSymbol, getCurrentInstance())
    return () => <div class="el-breadcrumb">{slots.default?.()}</div>
  }
})

export default Breadcrumb

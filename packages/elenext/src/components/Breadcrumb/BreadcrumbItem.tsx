import { defineComponent, reactive, inject, onMounted, getCurrentInstance } from 'vue'
import { ElBreadcrumbSymbol } from '../../provides'

const BreadcrumbItem = defineComponent({
  name: 'ElBreadcrumbItem',
  props: {
    to: {
      type: Object,
      default: () => {
        return {}
      }
    },
    replace: Boolean
  },
  setup(props, { slots }) {
    const elBread = inject(ElBreadcrumbSymbol)
    const data = reactive({
      separator: '',
      separatorClass: ''
    })
    const instance = getCurrentInstance()
    onMounted(() => {
      data.separator = elBread.props.separator
      data.separatorClass = elBread.props.separatorClass
    })
    const onLinkClick = () => {
      const { to } = props
      const $router = (instance as any)?.ctx?.$router
      if (!to || !$router) return
      props.replace ? $router.replace(to) : $router.push(to)
    }
    return () => (
      <span class="el-breadcrumb__item">
        <span class={['el-breadcrumb__inner', props.to ? 'is-link' : '']} role="link" onClick={onLinkClick}>
          {slots.default?.()}
        </span>
        {data.separatorClass ? (
          <i class={['el-breadcrumb__separator', data.separatorClass]}></i>
        ) : (
          <span class="el-breadcrumb__separator">{data.separator}</span>
        )}
      </span>
    )
  }
})

export default BreadcrumbItem

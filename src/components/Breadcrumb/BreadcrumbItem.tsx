import { defineComponent, getCurrentInstance, computed } from 'vue'
import { getBlockCls, getCompName } from '../../config'

const blockCls = getBlockCls('Breadcrumb')
const BreadcrumbItem = defineComponent({
  name: getCompName('BreadcrumbItem'),
  props: {
    to: {
      type: Object,
      default: () => {
        return null
      }
    },
    replace: Boolean
  },
  setup(props, { slots }) {
    const instance = getCurrentInstance()

    const separatorRef = computed(() => {
      return {
        separator: instance?.parent?.props.separator,
        separatorClass: instance?.parent?.props.separatorClass
      }
    })

    const onLinkClick = () => {
      const { to } = props
      const $router = (instance as any)?.ctx?.$router
      if (!to || !$router) return
      props.replace ? $router.replace(to) : $router.push(to)
    }
    return () => (
      <span class={`${blockCls}__item`}>
        <span class={[`${blockCls}__inner`, props.to ? 'is-link' : '']} role="link" onClick={onLinkClick}>
          {slots.default?.()}
        </span>
        {separatorRef.value.separatorClass ? (
          <i class={[`${blockCls}__separator`, separatorRef.value.separatorClass]}></i>
        ) : (
          <span class={`${blockCls}__separator`}>{separatorRef.value.separator}</span>
        )}
      </span>
    )
  }
})

export default BreadcrumbItem

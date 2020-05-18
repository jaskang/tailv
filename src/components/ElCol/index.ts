import { defineComponent, computed, inject, h } from 'vue'
import { ElRowSymbol } from '../ElRow'
import './index.less'

export default defineComponent({
  name: 'ElCol',
  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number,
    pull: Number,
    push: Number,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  setup(props, { slots }) {
    const gutter = inject(ElRowSymbol, 0)

    const style = computed(() => {
      if (gutter) {
        return {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px'
        }
      }
      return {}
    })
    const classList = computed(() => {
      const ret: string[] = []
      ;['span', 'offset', 'pull', 'push'].forEach(prop => {
        const _props: any = props
        const size = _props[prop]
        if (size === 0) {
          ret.push(prop !== 'span' ? `el-col-${prop}-${_props[prop]}` : `el-col-${_props[prop]}`)
        }
      })
      ;['xs', 'sm', 'md', 'lg', 'xl'].forEach(size => {
        const _props: any = props
        if (typeof _props[size] === 'number') {
          ret.push(`el-col-${size}-${_props[size]}`)
        } else if (typeof _props[size] === 'object') {
          const sizeProps = _props[size]
          Object.keys(sizeProps).forEach(prop => {
            ret.push(
              prop !== 'span' ? `el-col-${size}-${prop}-${sizeProps[prop]}` : `el-col-${size}-${sizeProps[prop]}`
            )
          })
        }
      })
      return ret
    })

    return h(
      props.tag,
      {
        class: ['el-col', classList],
        style
      },
      slots.default
    )
  }
})

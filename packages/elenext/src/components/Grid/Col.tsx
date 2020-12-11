import { defineComponent, computed, inject, PropType, ref, CSSProperties, App } from 'vue'
import { RowInjectKey, GutterTuple } from './Row'
import { RESPONSIVE_ARRAY } from './hooks/useBreakpoint'
import { getCompName, getBlockCls } from '../../config'
import { mergeClass } from '@elenext/shared'

type ColPropType = number | string

type SizeProp = {
  span?: ColPropType
  order?: ColPropType
  offset?: ColPropType
  push?: ColPropType
  pull?: ColPropType
}

type FlexType = number | 'none' | 'auto' | string

function parseFlex(flex: FlexType): string {
  if (typeof flex === 'number') {
    return `${flex} ${flex} auto`
  }

  if (/^\d+(\.\d+)?(px|em|rem|%)$/.test(flex)) {
    return `0 0 ${flex}`
  }

  return flex
}

const defalutPropItem = {
  type: [Number, String] as PropType<ColPropType>,
  default: undefined
}

const sizePropItem = {
  type: [Number, Object] as PropType<number | SizeProp>,
  required: false
}

const blockCls = getBlockCls('col')

const Col = defineComponent({
  name: getCompName('Col'),
  props: {
    span: defalutPropItem,
    order: defalutPropItem,
    offset: defalutPropItem,
    push: defalutPropItem,
    pull: defalutPropItem,
    xs: sizePropItem,
    sm: sizePropItem,
    md: sizePropItem,
    lg: sizePropItem,
    xl: sizePropItem,
    flex: {
      type: [Number, String] as PropType<FlexType>,
      required: false
    }
  },
  setup(props, { slots }) {
    const { gutter } = inject(RowInjectKey, { gutter: ref([0, 0] as GutterTuple) })

    const classes = computed(() => {
      let sizeObjs: any[] = []
      RESPONSIVE_ARRAY.reverse().forEach(size => {
        let sizeProps: SizeProp = {}
        const propSize = props[size]
        if (typeof propSize !== 'undefined') {
          if (typeof propSize === 'number') {
            sizeProps = { span: propSize }
          } else {
            sizeProps = propSize || {}
          }
          sizeObjs.push({
            [`${blockCls}-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
            [`${blockCls}-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
            [`${blockCls}-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
            [`${blockCls}-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
            [`${blockCls}-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0
          })
        }
      })
      const ret = mergeClass([
        blockCls,
        {
          [`${blockCls}-${props.span}`]: props.span,
          [`${blockCls}-order-${props.order}`]: props.order,
          [`${blockCls}-offset-${props.offset}`]: props.offset,
          [`${blockCls}-push-${props.push}`]: props.push,
          [`${blockCls}-pull-${props.pull}`]: props.pull
        },
        ...sizeObjs
      ])
      return ret
    })

    const styles = computed(() => {
      let ret: CSSProperties = {}
      const [x, y] = gutter.value
      ret = {
        ...(x > 0
          ? {
              paddingLeft: `${x / 2}px`,
              paddingRight: `${x / 2}px`
            }
          : {}),
        ...(y > 0
          ? {
              paddingTop: `${y / 2}px`,
              paddingBottom: `${y / 2}px`
            }
          : {})
      }
      if (props.flex) {
        ret.flex = parseFlex(props.flex)
      }
      return ret
    })

    return () => (
      <div class={classes.value} style={styles.value}>
        {slots.default?.()}
      </div>
    )
  }
})

Col.install = (app: App): void => {
  app.component(Col.name, Col)
}

export default Col

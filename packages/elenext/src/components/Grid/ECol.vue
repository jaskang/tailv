<template>
  <div :class="classes" :style="styles">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, inject, ref, CSSProperties, App } from 'vue'
import { mergeClass } from '@elenext/shared'
import { rowInjectKey, GutterTuple } from './core'
import { RESPONSIVE_ARRAY } from './hooks/useBreakpoint'
import vptypes from 'vptypes'

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

const defalutPropItem = vptypes.oneOfType([vptypes.string(), vptypes.number()])

const sizePropItem = vptypes.oneOfType([vptypes.number(), vptypes.object<SizeProp>()])

const ECol = defineComponent({
  name: 'ECol',
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
    flex: vptypes.oneOfType([vptypes.string(), vptypes.number()]),
  },
  setup(props, { slots }) {
    const { gutter } = inject(rowInjectKey, { gutter: ref([0, 0] as GutterTuple) })

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
            [`el-col-${size}-${sizeProps.span}`]: sizeProps.span !== undefined,
            [`el-col-${size}-order-${sizeProps.order}`]: sizeProps.order || sizeProps.order === 0,
            [`el-col-${size}-offset-${sizeProps.offset}`]: sizeProps.offset || sizeProps.offset === 0,
            [`el-col-${size}-push-${sizeProps.push}`]: sizeProps.push || sizeProps.push === 0,
            [`el-col-${size}-pull-${sizeProps.pull}`]: sizeProps.pull || sizeProps.pull === 0,
          })
        }
      })
      const ret = mergeClass([
        'el-col',
        {
          [`el-col-${props.span}`]: props.span,
          [`el-col-order-${props.order}`]: props.order,
          [`el-col-offset-${props.offset}`]: props.offset,
          [`el-col-push-${props.push}`]: props.push,
          [`el-col-pull-${props.pull}`]: props.pull,
        },
        ...sizeObjs,
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
              paddingRight: `${x / 2}px`,
            }
          : {}),
        ...(y > 0
          ? {
              paddingTop: `${y / 2}px`,
              paddingBottom: `${y / 2}px`,
            }
          : {}),
      }
      if (typeof props.flex) {
        ret.flex = parseFlex(props.flex!)
      }
      return ret
    })

    return {
      classes,
      styles,
    }
  },
})

ECol.install = (app: App): void => {
  app.component(ECol.name, ECol)
}

export default ECol
</script>

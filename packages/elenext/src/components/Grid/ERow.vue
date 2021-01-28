<template>
  <div :class="classes" :style="styles">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, provide, CSSProperties, PropType, App } from 'vue'
import { mergeClass } from '@elenext/shared'
import useBreakpoint, { Breakpoint, RESPONSIVE_ARRAY } from './hooks/useBreakpoint'
import { Gutter, GutterTuple, rowInjectKey } from './core'
import { VpTypes } from 'vptypes'

const ERow = defineComponent({
  name: 'ERow',
  props: {
    gutter: {
      type: [Number, Array, Object] as PropType<Gutter>,
      default: 0,
    },
    align: VpTypes.oneOfString(['top', 'middle', 'bottom']).def('top'),
    justify: VpTypes.oneOfString(['start', 'end', 'center', 'space-around', 'space-between']).def('start'),
    wrap: VpTypes.bool().def(true),
  },
  setup(props, { slots }) {
    const screens = useBreakpoint()
    const gutter = computed(() => {
      const propGutter = props.gutter
      const getTuple = (arg: number | GutterTuple) => {
        if (Array.isArray(arg)) {
          return arg as GutterTuple
        } else {
          return [arg, arg] as GutterTuple
        }
      }
      let results: GutterTuple = [0, 0]
      if (typeof propGutter === 'object' && !Array.isArray(propGutter)) {
        for (let i = 0; i < RESPONSIVE_ARRAY.length; i++) {
          const breakpoint: Breakpoint = RESPONSIVE_ARRAY[i]
          if (screens[breakpoint] && propGutter[breakpoint] !== undefined) {
            results = getTuple(propGutter[breakpoint]!)
            break
          }
        }
      } else {
        results = getTuple(propGutter)
      }
      return results
    })

    const classes = computed(() =>
      mergeClass([
        'el-row',
        {
          [`el-row--no-wrap`]: props.wrap === false,
          [`el-row--${props.justify}`]: props.justify,
          [`el-row--${props.align}`]: props.align,
        },
      ])
    )

    const styles = computed(() => {
      const [x, y] = gutter.value
      let ret: CSSProperties = {
        ...(x > 0
          ? {
              marginLeft: `${x / -2}px`,
              marginRight: `${x / -2}px`,
            }
          : {}),
        ...(y > 0
          ? {
              marginTop: `${y / -2}px`,
              marginBottom: `${y / -2}px`,
            }
          : {}),
      }
      return ret
    })

    provide(rowInjectKey, { gutter })
    return {
      classes,
      styles,
    }
  },
})

ERow.install = (app: App): void => {
  app.component(ERow.name, ERow)
}
export default ERow
</script>

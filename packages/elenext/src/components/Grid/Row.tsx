import { defineComponent, computed, provide, CSSProperties, PropType, InjectionKey, ComputedRef } from 'vue'
import { normalizeClass } from '../../utils/dom'
import { getBlockCls, getCompName } from '../../config'
import useBreakpoint, { Breakpoint, responsiveArray } from './hooks/useBreakpoint'

type Gutter = number | [number, number] | Partial<Record<Breakpoint, number | [number, number]>>
export type GutterTuple = [number, number]

export const RowInjectKey: InjectionKey<{
  gutter: ComputedRef<GutterTuple>
}> = Symbol('Row')

const blockCls = getBlockCls('row')

const Row = defineComponent({
  name: getCompName('Row'),
  props: {
    gutter: {
      type: Number as PropType<Gutter>,
      default: 0
    },
    align: {
      type: String as PropType<'top' | 'middle' | 'bottom'>,
      default: 'top'
    },
    justify: {
      type: String as PropType<'start' | 'end' | 'center' | 'space-around' | 'space-between'>,
      default: 'start'
    }
  },
  setup(props, { slots }) {
    const { screens } = useBreakpoint()

    const gutter = computed(() => {
      console.log(screens)
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
        for (let i = 0; i < responsiveArray.length; i++) {
          const breakpoint: Breakpoint = responsiveArray[i]
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
      normalizeClass([
        blockCls,
        {
          [`${blockCls}-${props.justify}`]: props.justify,
          [`${blockCls}-${props.align}`]: props.align
        }
      ])
    )

    const style = computed(() => {
      const [x, y] = gutter.value
      let ret: CSSProperties = {
        ...(x > 0
          ? {
              marginLeft: x / -2,
              marginRight: x / -2
            }
          : {}),
        ...(y > 0
          ? {
              marginTop: y / -2,
              marginBottom: y / -2
            }
          : {})
      }
      return ret
    })
    provide(RowInjectKey, { gutter })
    return () => (
      <div class={classes.value} style={style.value}>
        {slots.default?.()}
      </div>
    )
  }
})

export default Row

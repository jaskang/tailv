import { ComputedRef, InjectionKey } from 'vue'
import { Breakpoint } from '../hooks/useBreakpoint'

export type GutterTuple = [number, number]

export type Gutter = number | GutterTuple | Partial<Record<Breakpoint, number | GutterTuple>>

export const rowInjectKey: InjectionKey<{
  gutter: ComputedRef<GutterTuple>
}> = Symbol('Row')

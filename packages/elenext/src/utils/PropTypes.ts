import { PropType } from 'vue'

type HexColorType = `#${string}`

export const propTypes = {
  string(value?: string) {
    return { type: String as PropType<string>, default: value }
  },
  number(value?: number) {
    return { type: Number as PropType<number>, default: value }
  },
  boolean(value?: boolean) {
    return { type: Boolean as PropType<boolean>, default: value }
  },
  array<T = any>(value: T[] = []) {
    return { type: Array as PropType<T[]>, default: value }
  },
  object<T = any>(value?: T) {
    return { type: Object as PropType<T>, default: value }
  },
  func<T extends (...args: any) => any>(value?: T) {
    return { type: Function as PropType<T>, default: value }
  },
  hexColor(value?: HexColorType) {
    return { type: String as PropType<HexColorType>, default: value }
  },
  oneOfString<T extends string>(value?: T) {
    return { type: (String as unknown) as PropType<T>, default: value }
  }
}

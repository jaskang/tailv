import { PropType } from 'vue'

export type PType<T = any> = {
  new (...args: any[]): T
}

const PropTypes = {
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
    return { type: Array as PropType<Array<T>>, default: value }
  },
  object<T = any>(value?: T) {
    return { type: Object as PropType<T>, default: value }
  },
  func<T extends (...args: any) => any>(value?: T) {
    return { type: Function as PropType<T>, default: value }
  }
  // oneOfString<T = 'any' | 'sd'>(value: T) {
  //   return { type: String as PropType<T>, default: value }
  // }
}

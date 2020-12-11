import { PropType } from 'vue'

export type PType<T = any> = {
  new (...args: any[]): T
}

const PropTypes = {
  string() {
    return { type: String as PropType<string> }
  },
  number() {
    return { type: Number as PropType<number> }
  },
  boolean() {
    return { type: Boolean as PropType<boolean> }
  },
  array<T = any>() {
    return { type: Array as PropType<Array<T>> }
  },
  object<T = any>() {
    return { type: Object as PropType<T> }
  },
  func<T extends (...args: any) => any>() {
    return { type: Function as PropType<T> }
  },
  oneOf<T = any>() {}
}

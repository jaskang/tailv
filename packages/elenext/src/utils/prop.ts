import { isRef, Prop, PropType, Ref } from 'vue'

type HexColorType = `#${string}`

// type $Keys<T extends object> = keyof T

// const nativeTypes = {
//   object: ObjectConstructor as object,
//   func: FunctionConstructor as (...args: any) => any,
//   number: NumberConstructor as number,
//   bool: BooleanConstructor as boolean,
//   string: StringConstructor as string,
//   symbol: SymbolConstructor as symbol
// } as const

type nativeKey = 'string' | 'number' | 'symbol' | 'object' | 'func' | 'bool'

interface PropOptions<T = any> {
  required?: boolean
  default?: T | null | undefined
  validator?(value: unknown): boolean
}

const prop = {
  any(options: PropOptions<any> = {}) {
    return { default: undefined, ...options }
  },
  array<T = any>(options: PropOptions<T[]> = {}) {
    return { type: Array as PropType<T[]>, default: undefined, ...options }
  },
  string<T = string>(options: PropOptions<T> = {}) {
    return { type: String as PropType<T>, default: undefined, ...options }
  },
  symbol(options: PropOptions<symbol> = {}) {
    return { type: Symbol as PropType<symbol>, default: undefined, ...options }
  },
  bool(options: PropOptions<boolean> = {}) {
    return { type: Boolean as PropType<boolean>, default: undefined, ...options }
  },
  func<T extends (...args: any) => any>(options: PropOptions<T> = {}) {
    return { type: Function as PropType<T>, default: undefined, ...options }
  },
  number(options: PropOptions<number> = {}) {
    return { type: Number as PropType<number>, default: undefined, ...options }
  },
  integer(options: PropOptions<number> = {}) {
    return {
      type: Number as PropType<number>,
      default: undefined,
      validator(value: unknown) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value
      },
      ...options
    }
  },
  object<T = any>(options: PropOptions<T> = {}) {
    return { type: Object as PropType<T>, default: value, ...options }
  },
  hexColor(options: PropOptions<HexColorType> = {}) {
    return {
      type: String as PropType<HexColorType>,
      default: undefined,
      validator: function (value: unknown) {
        return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value)
      },
      ...options
    }
  },
  oneOf<T = any>(arr: T, options: PropOptions<any> = {}) {
    return {
      type: [Object, Function, Number, Boolean, String, Symbol] as PropType<string>,
      default: undefined,
      validator: function (value: string) {
        return arr.indexOf(value) !== -1
      },
      ...options
    }
  }
  // oneOfType<T extends ReadonlyArray<nativeKey>>(types: T, options: PropOptions<NativeTypes[typeof T[number]]> = {}) {
  //   return {
  //     type: [Object, Function, Number, Boolean, String, Symbol] as PropType<NativeTypes[typeof T[number]]>,
  //     default: undefined,
  //     validator: function (value: unknown) {
  //       const valueConstructor = value.constructor
  //       const currentTypes = types.map(item => {
  //         return nativeTypes[item]
  //       })
  //       return currentTypes.indexOf(valueConstructor) !== -1
  //     },
  //     ...options
  //   }
  // },
  // stringOrArray(value?: string | string[], options: PropOptions<T> = {}) {
  //   return { type: [String, Array] as PropType<string | string[]>, default: value, ...options }
  // }
}

export default prop

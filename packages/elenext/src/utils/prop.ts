import { Prop, PropType } from 'vue'

type HexColorType = `#${string}`

// type $Keys<T extends object> = keyof T

const nativeTypes = {
  // eslint-disable-next-line
  object: Object as object,
  func: Function as (...args: any) => any,
  number: (Number as unknown) as number,
  bool: (Boolean as unknown) as boolean,
  string: (String as unknown) as string,
  symbol: (Symbol as unknown) as symbol
} as const
type NativeTypes = typeof nativeTypes

type nativeKey = 'string' | 'number' | 'symbol' | 'object' | 'func' | 'bool'

interface PropOptions {
  validator?(value: unknown): boolean
}

function createProp<T = any>(type: T, options: PropOptions = {}) {
  return {
    type: (type as unknown) as PropType<T>,
    default: undefined as undefined | T,
    required: false,
    def(value?: T) {
      this.default = value
      return this
    },
    isRequired() {
      this.required = true
      return this
    },
    ...options
  }
}

const prop = {
  any(options: PropOptions = {}) {
    return createProp(undefined, options)
  },
  array<T = any>(options: PropOptions = {}) {
    return createProp((Array as unknown) as T[], options)
  },
  string<T extends string = string>(options: PropOptions = {}) {
    return createProp((String as unknown) as T, options)
  },
  symbol(options: PropOptions = {}) {
    return createProp((Symbol as unknown) as symbol, options)
  },
  bool(options: PropOptions = {}) {
    return createProp((Boolean as unknown) as boolean, options)
  },
  func<T extends (...args: any) => any>(options: PropOptions = {}) {
    return createProp((Function as unknown) as T, options)
  },
  number(options: PropOptions = {}) {
    return createProp((Number as unknown) as number, options)
  },
  integer(options: Prop<number> = {}) {
    return createProp((Number as unknown) as number, {
      validator(value: unknown) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value
      },
      ...options
    })
  },
  object<T = any>(options: PropOptions = {}) {
    return createProp((Object as unknown) as T, options)
  },
  hexColor() {
    return createProp((String as unknown) as HexColorType, {
      validator: function (value: unknown) {
        if (typeof value === 'string') {
          return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value)
        }
        return false
      }
    })
  },
  oneOf<T extends readonly string[]>(valArr: T, options: PropOptions = {}) {
    return createProp((String as unknown) as typeof valArr[number], {
      validator: function (value: string) {
        return valArr.indexOf(value) !== -1
      },
      ...options
    })
  },

  oneOfType<T extends readonly nativeKey[]>(types: T, options: PropOptions = {}) {
    return createProp((String as unknown) as NativeTypes[typeof types[number]], {
      validator: function (value: string) {
        const valueConstructor = value.constructor
        const currentTypes = types.map(item => {
          return nativeTypes[item]
        })
        return currentTypes.indexOf(valueConstructor) !== -1
      },
      ...options
    })
  }
}

export default prop

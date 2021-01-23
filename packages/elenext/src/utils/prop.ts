import { PropType } from 'vue'

export type AugmentedRequired<T extends any, K extends keyof T = keyof T> = Omit<T, K> & Required<Pick<T, K>>

type HexColorType = `#${string}`

// type $Keys<T extends object> = keyof T

const nativeTypes = {
  // eslint-disable-next-line
  object: Object as object,
  func: Function as (...args: any) => any,
  number: (Number as unknown) as number,
  bool: (Boolean as unknown) as boolean,
  string: (String as unknown) as string,
  symbol: (Symbol as unknown) as symbol,
  array: (Array as unknown) as Array<any>,
} as const
type NativeTypes = typeof nativeTypes

type nativeKey = 'string' | 'number' | 'symbol' | 'object' | 'func' | 'bool' | 'array'

interface PropFactoryOptions {
  validator?(value: unknown): boolean
}

export interface PropFactoryType<T = any, R = false> {
  type: PropType<T>
  required: R
  validator?(value: unknown): boolean
  def: (value: T) => PropFactoryType<T>
  isRequired: () => PropFactoryType<T, true>
}

function createProp<T = any>(type: T, options: PropFactoryOptions = {}) {
  const prop = {
    type: (type as unknown) as PropType<T>,
    required: false,
    ...options,
  } as PropFactoryType<T>

  prop.def = (value: T) => {
    return {
      ...prop,
      default: value,
    } as PropFactoryType<T>
  }
  prop.isRequired = () => {
    return {
      ...prop,
      required: true,
    } as PropFactoryType<T, true>
  }

  return prop
}

const prop = {
  any(options: PropFactoryOptions = {}) {
    return createProp<any>(undefined, options)
  },
  array<T = any>(options: PropFactoryOptions = {}) {
    return createProp((Array as unknown) as T[], options)
  },
  string<T extends string = string>(options: PropFactoryOptions = {}) {
    return createProp((String as unknown) as T, options)
  },
  symbol(options: PropFactoryOptions = {}) {
    return createProp((Symbol as unknown) as symbol, options)
  },
  bool(options: PropFactoryOptions = {}) {
    return createProp((Boolean as unknown) as boolean, options)
      .def(false)
      .isRequired()
  },
  func<T extends (...args: any) => any>(options: PropFactoryOptions = {}) {
    return createProp((Function as unknown) as T, options)
  },
  number(options: PropFactoryOptions = {}) {
    return createProp((Number as unknown) as number, options)
  },
  integer(options: PropFactoryOptions = {}) {
    return createProp((Number as unknown) as number, {
      validator(value: unknown) {
        return typeof value === 'number' && isFinite(value) && Math.floor(value) === value
      },
      ...options,
    })
  },
  object<T = any>(options: PropFactoryOptions = {}) {
    return createProp((Object as unknown) as T, options)
  },
  hexColor() {
    return createProp((String as unknown) as HexColorType, {
      validator: function (value: unknown) {
        if (typeof value === 'string') {
          return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value)
        }
        return false
      },
    })
  },
  oneOf<T extends readonly string[]>(valArr: T, options: PropFactoryOptions = {}) {
    return createProp((String as unknown) as typeof valArr[number], {
      validator: function (value: string) {
        return valArr.indexOf(value) !== -1
      },
      ...options,
    })
  },

  oneOfType<T extends readonly nativeKey[]>(types: T, options: PropFactoryOptions = {}) {
    return createProp((String as unknown) as NativeTypes[typeof types[number]], {
      validator: function (value: string) {
        const valueConstructor = value.constructor
        const currentTypes = types.map(item => {
          return nativeTypes[item]
        })
        return currentTypes.indexOf(valueConstructor) !== -1
      },
      ...options,
    })
  },
}

export default prop

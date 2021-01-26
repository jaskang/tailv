import { PropType } from 'vue'

export interface PropOptions<T = any, D = T> {
  type?: PropType<T> | true | null
  required?: boolean
  default?: D | ((props: Record<string, unknown>) => D | null | undefined) | null | undefined | Record<string, unknown>
  validator?(value: unknown): boolean
}

export const TYPES = {
  string: String,
  number: Number,
  boolean: Boolean,
  symbol: Symbol,
  date: Date,
  array: Array,
  object: Object,
  function: Function,
}

export type DefaultFactory<T> = (() => T) | T

type validatorType = (value: unknown) => boolean

type HexColorType = `#${string}`

export class VpTypes<P> {
  _meta_ = (undefined as unknown) as P
  type?: PropType<P>
  default?: P
  validator = undefined as validatorType | undefined
  required = false
  constructor(type?: unknown, validator?: validatorType) {
    if (type) {
      this.type = type as PropType<P>
    }
    if (validator) {
      this.validator = validator
    }
  }
  def(value: P) {
    this.default = value
    return this as VpTypes<P> & {
      default: P
    }
  }
  get isRequired() {
    this.required = true
    return this as VpTypes<P> & {
      required: true
    }
  }
  private static create<T>(type?: unknown, validator?: validatorType) {
    return new VpTypes<T>(type, validator)
  }
  static any() {
    const prop = this.create<any>()
    return prop
  }
  static string<T extends string = string>() {
    const prop = this.create<T>(String)
    return prop
  }
  static number() {
    const prop = this.create<number>(Number)
    return prop
  }
  static bool() {
    const prop = this.create<boolean>(Boolean).isRequired
    return prop
  }
  static symbol() {
    const prop = this.create(Symbol)
    return prop
  }
  static object<T extends any = Record<string, unknown>>() {
    const prop = this.create<T>(Object)
    return prop
  }
  static array<T extends any[]>() {
    const prop = this.create<T>(Array)
    return prop
  }
  static func<T extends (...args: any) => any>() {
    const prop = this.create<T>(Function)
    return prop
  }
  static integer() {
    const prop = this.create<number>(Number, (value: unknown) => {
      return typeof value === 'number' && isFinite(value) && Math.floor(value) === value
    })
    return prop
  }
  static hexColor() {
    const prop = this.create<HexColorType>(String, (value: unknown) => {
      if (typeof value === 'string') {
        return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value)
      }
      return false
    })
    return prop
  }
  static oneOfString<T extends readonly string[]>(list: T) {
    const prop = this.create<T[number]>(String, (value: unknown) => {
      return list.indexOf(value as string) !== -1
    })
    return prop
  }
  static oneOfType<T extends readonly VpTypes<unknown>[]>(list: T) {
    const types = list.map(prop => {
      return prop.type
    })
    const validators = list
      .map(prop => {
        return prop.validator
      })
      .filter(Boolean) as validatorType[]
    const prop = this.create<T[number]['_meta_']>(
      types,
      validators.length > 0
        ? (value: unknown) => {
            for (const func of validators) {
              if (!func(value)) {
                return false
              }
            }
            return true
          }
        : undefined
    )
    return prop
  }
}

/** Narrowed function. */
export type Function = (...args: any[]) => unknown

/** Returns a widened value from the given value. */
export type Widen<T> = T extends number
  ? `${T}` | T
  : T extends 'true'
  ? boolean
  : T extends 'false'
  ? boolean
  : T extends `${number}`
  ? number | T
  : T

type Variant = Record<string, string>
type Variants = Record<string, Variant>

type VariantOptions = {
  presets?: {
    [key: string]: string
  }
  variants: Variants
}

type InferVariantProps<V extends Variants = {}> = Partial<{ [K in keyof V]: Widen<keyof V[K]> }>

type ClassedProps<T> = T extends VariantOptions ? InferVariantProps<T['variants']> : {}

type ClassedCreator<Props extends {} = {}> = (variantProps: Props) => string

export type VariantProps<T extends ClassedCreator<any>> = Parameters<T>[0]

/**
 * 根据不同的变体生成对应的 class
 * @param base 基础 class
 * @param classes 变体 class
 * @returns 生成器函数，参数为
 */
export function classed<T extends VariantOptions>(base: string, options: T): ClassedCreator<ClassedProps<T>> {
  const { variants, presets = {} } = options
  const keys = Object.keys(variants)
  const variantKeys = keys.map(key => Object.keys(variants[key]))

  return (variantProps: any) => {
    const cls = [base]

    for (const prop in variantProps) {
      const propVal = variantProps[prop]
      const classes = variants[prop][propVal]
      if (classes) {
        Array.isArray(classes) ? cls.push(...classes) : cls.push(classes)
      }
    }

    return cls.join(' ')
  }
}

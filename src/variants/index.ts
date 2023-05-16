type VariantConfig = {
  /**
   * 变体
   */
  [key: string]: {
    /**
     * 变体值对应的 class
     */
    [key: string]: string[]
  }
}

type VariantOptions<T> = {
  presets?: {
    [key: string]: string
  }
  variants: T
}

type VariantType<T extends VariantConfig> = {
  [K in keyof T]: keyof T[K]
}

type VariantGen<T extends VariantConfig> = (variant: VariantType<T>) => string

/**
 * 根据不同的变体生成对应的 class
 * @param base 基础 class
 * @param classes 变体 class
 * @returns 生成器函数，参数为
 */
function createVariants<T extends VariantConfig>(base: string, options: VariantOptions<T>): VariantGen<T> {
  const { variants, presets = {} } = options
  const keys = Object.keys(variants)
  const variantKeys = keys.map(key => Object.keys(variants[key]))

  return (variant: VariantType<T>) => {
    const cls = [base]

    for (const key in variant) {
      const val = variant[key]
      const classes = variants[key][val]
      classes.forEach(cls => {})
      cls.push(...classes)
    }

    return cls.join(' ')
  }
}

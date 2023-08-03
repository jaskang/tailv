import { clsx, type Flat } from 'kotl'

type ClsvValue = string | [string, string]

type VariantConfig = {
  [key: string]: { true: ClsvValue; false: ClsvValue } | { [key: string]: ClsvValue }
}

type InferVariants<T> = {
  [K in keyof T]: keyof T[K] extends 'true' | 'false' ? boolean : keyof T[K]
}

export function clsVariants<T extends VariantConfig>(
  base: string,
  options: {
    variants: T
    compoundVariants?: Array<Partial<Flat<InferVariants<T>>> & { class: ClsvValue }>
  }
) {
  return (v: Flat<InferVariants<T>>) => {
    const cls = base.split(' ')
    Object.keys(options.variants).forEach(key => {
      const value = options.variants[key]
      let clsValue: ClsvValue = ''
      if (value) {
        const val = v[key]
        if (typeof val === 'boolean') {
          // @ts-ignore
          clsValue = val ? value.true || '' : value.false || ''
        } else {
          // @ts-ignore
          clsValue = value[val] || ''
        }
      }
      if (Array.isArray(clsValue)) {
        // remove all classes in clsValue[1]
        clsValue[1].split(' ').forEach(c => {
          const index = cls.indexOf(c)
          if (index !== -1) {
            cls.splice(index, 1)
          }
        })
        cls.push(...clsValue[0].split(' '))
      } else {
        cls.push(...clsValue.split(' '))
      }
    })

    if (options.compoundVariants) {
      options.compoundVariants.forEach(comp => {
        const isMatch = Object.keys(comp).every(key => {
          if (key === 'class') return true
          const value = comp[key]
          if (value === true) return v[key] === true
          if (value === false) return v[key] === false
          return v[key] === value
        })
        if (isMatch) {
          if (Array.isArray(comp.class)) {
            // remove all classes in clsValue[1]
            comp.class[1].split(' ').forEach(c => {
              const index = cls.indexOf(c)
              if (index !== -1) {
                cls.splice(index, 1)
              }
            })
            cls.push(...comp.class[0].split(' '))
          } else {
            cls.push(...comp.class.split(' '))
          }
        }
      })
    }
    return clsx(cls)
  }
}

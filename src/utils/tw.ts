import { type Prettify, clsx } from 'kotl'

type TwValue = string | [string, string]

type VariantsObject = {
  [key: string]: { true: TwValue; false: TwValue } | { [key: string]: TwValue }
}

type InferVariants<T> = {
  [K in keyof T]: keyof T[K] extends 'true' | 'false' ? boolean : keyof T[K]
}

export function tw<T extends VariantsObject>(
  base: string,
  options: {
    variants: T
    compoundVariants?: Array<Partial<Prettify<InferVariants<T>>> & { class: TwValue }>
  }
) {
  return (v: Prettify<InferVariants<T>>) => {
    const cls = base.split(' ').map(s => s.trim())
    Object.keys(options.variants).forEach(key => {
      const value = options.variants[key]
      let clsValue: TwValue = ''
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
        // 删除 clsValue[1] 中的所有类
        clsValue[1].split(' ').forEach(c => {
          const index = cls.indexOf(c.trim())
          if (index !== -1) {
            cls.splice(index, 1)
          }
        })
        cls.push(...clsValue[0].split(' ').map(s => s.trim()))
      } else {
        cls.push(...clsValue.split(' ').map(s => s.trim()))
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
            cls.push(...comp.class[0].split(' ').map(s => s.trim()))
          } else {
            cls.push(...comp.class.split(' ').map(s => s.trim()))
          }
        }
      })
    }
    return clsx(cls)
  }
}

export const scrollbarClass =
  '[&::-webkit-scrollbar-sizer] [&::-webkit-scrollbar-button]:h-0 [&::-webkit-scrollbar-button]:w-0 [&::-webkit-scrollbar-thumb]:rounded [&::-webkit-scrollbar-thumb]:bg-default-300 dark:[&::-webkit-scrollbar-thumb]:bg-default-500/50 [&::-webkit-scrollbar-track]:rounded [&::-webkit-scrollbar-track]:bg-default-100 dark:[&::-webkit-scrollbar-track]:bg-default-500/[0.16] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar]:bg-transparent'

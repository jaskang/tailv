import { computed, toRef } from 'vue'

export type ClassValue = ClassArray | ClassDictionary | string | number | null | boolean | undefined
export type ClassDictionary = Record<string, any>
export type ClassArray = ClassValue[]

function toVal(mix: any) {
  let str = ''
  if (typeof mix === 'string' || typeof mix === 'number') {
    str += mix
  } else if (typeof mix === 'object') {
    if (Array.isArray(mix)) {
      for (const i of mix) {
        const val = toVal(i)
        if (val) {
          str && (str += ' ')
          str += val
        }
      }
    } else {
      const keys = Object.keys(mix)
      for (const k of keys) {
        if (mix[k]) {
          str && (str += ' ')
          str += k
        }
      }
    }
  }
  return str
}

export function classNames(...args: ClassValue[]) {
  let x
  let str = ''
  for (const tmp of args) {
    if ((x = toVal(tmp))) {
      str && (str += ' ')
      str += x
    }
  }
  return str
}

type StringKeyOf<T, K = keyof T> = K extends string ? K : never

export const computedCls = <T extends Record<string, any>>(
  props: T,
  base: string,
  classNames: Array<StringKeyOf<T>>
) => {
  const cls = computed(() => {
    const cls = [base]
    for (const tag of classNames) {
      const val = toRef(props, tag)
      if (typeof val.value === 'boolean' && val.value) {
        cls.push(`is-${tag}`)
      } else if (val.value) {
        cls.push(`${base}--${val.value}`)
      }
    }
    return cls.join(' ')
  })
  return cls
}

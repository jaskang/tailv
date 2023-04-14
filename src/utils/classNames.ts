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

export const useCls = <T extends Record<string, string | boolean>>(base: string, variants: () => T) => {
  const clsRef = computed(() => {
    const cls = [base]
    const obj = variants()
    const keys = Object.keys(obj)
    for (const k of keys) {
      const val = obj[k]
      if (val) {
        typeof val === 'boolean' ? cls.push(`is-${k}`) : cls.push(`${base}-${val}`)
      }
    }
    return cls.join(' ')
  })

  return clsRef
}

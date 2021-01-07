export type MergeClassValue = { [id: string]: any } | string | number | null | boolean | undefined

export function mergeClass(...classes: MergeClassValue[]): string {
  let res = ''
  for (let index = 0; index < classes.length; index++) {
    const cls = classes[index]
    if (typeof cls === 'string' || typeof cls === 'number') {
      res += ` ${cls}`
    } else if (Array.isArray(cls)) {
      res += ` ${mergeClass(...cls)}`
    } else if (typeof cls === 'object') {
      if (cls) {
        for (const key in cls) {
          if (cls[key]) {
            res += ` ${key}`
          }
        }
      }
    }
  }
  return res.trim()
}

export function throttle<T extends (...args: any[]) => any>(func: T, options?: { wait?: number; immediate?: boolean }) {
  const { wait, immediate } = { ...{ wait: 20, immediate: true }, ...options }
  let previous = 0
  let timer: number | null = null
  return function (...args) {
    if (immediate) {
      const now = Date.now()

      if (now - previous > wait) {
        func.apply(this, args)
        previous = now
      }
    } else {
      if (!timer) {
        // @ts-ignore
        timer = setTimeout(() => {
          timer = null
          func.apply(this, args)
        }, wait)
      }
    }
  } as T
}

export default {}

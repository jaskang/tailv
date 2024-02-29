// reference: https://github.com/vuejs/rfcs/issues/258#issuecomment-1068697672
import { type ComponentPublicInstance, computed, getCurrentInstance, ref, toValue, type MaybeRef, type MaybeRefOrGetter } from 'vue'

export type VueInstance = ComponentPublicInstance
export type MaybeElementRef<T extends MaybeElement = MaybeElement> = MaybeRef<T>
export type MaybeComputedElementRef<T extends MaybeElement = MaybeElement> = MaybeRefOrGetter<T>
export type MaybeElement = HTMLElement | SVGElement | VueInstance | undefined | null

export type UnRefElementReturn<T extends MaybeElement = MaybeElement> = T extends VueInstance
  ? Exclude<MaybeElement, VueInstance>
  : T | undefined

function unrefElement<T extends MaybeElement>(elRef: MaybeComputedElementRef<T>): UnRefElementReturn<T> {
  const plain = toValue(elRef)
  return (plain as VueInstance)?.$el ?? plain
}

export function useForwardExpose() {
  const instance = getCurrentInstance()!

  const currentRef = ref<Element | ComponentPublicInstance | null>()
  const currentElement = computed<HTMLElement>(() => {
    // $el could be text/comment for non-single root normal or text root, thus we retrieve the nextElementSibling
    // @ts-expect-error ignore ts error
    return ['#text', '#comment'].includes(currentRef.value?.$el.nodeName)
      ? // @ts-expect-error ignore ts error
        currentRef.value?.$el.nextElementSibling
      : // @ts-expect-error ignore ts error
        unrefElement(currentRef)
  })

  // Do give us credit if you reference our code :D
  // localExpose should only be assigned once else will create infinite loop
  const localExpose: Record<string, any> | null = Object.assign({}, instance.exposed)
  const ret: Record<string, any> = {}

  // retrieve props for current instance
  for (const key in instance.props) {
    Object.defineProperty(ret, key, {
      enumerable: true,
      configurable: true,
      get: () => instance.props[key],
    })
  }

  // retrieve default exposed value
  if (Object.keys(localExpose).length > 0) {
    for (const key in localExpose) {
      Object.defineProperty(ret, key, {
        enumerable: true,
        configurable: true,
        get: () => localExpose![key],
      })
    }
  }

  // retrieve original first root element
  Object.defineProperty(ret, '$el', {
    enumerable: true,
    configurable: true,
    get: () => instance.vnode.el,
  })
  instance.exposed = ret

  function forwardRef(ref: Element | ComponentPublicInstance | null) {
    currentRef.value = ref

    if (ref instanceof Element || !ref) return

    // retrieve the forwarded element
    Object.defineProperty(ret, '$el', {
      enumerable: true,
      configurable: true,
      get: () => ref.$el,
    })

    instance.exposed = ret
  }

  return { forwardRef, currentRef, currentElement }
}

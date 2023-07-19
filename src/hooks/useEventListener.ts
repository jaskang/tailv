import { isBrowser } from 'kotl'
import { type MaybeRefOrGetter, toValue, watchEffect } from 'vue'

export function useEventListener<TType extends keyof WindowEventMap>(
  maybeEl: MaybeRefOrGetter<HTMLElement | Document | Window | null | undefined>,
  type: TType,
  listener: (event: WindowEventMap[TType]) => any,
  options?: boolean | AddEventListenerOptions
) {
  if (!isBrowser()) return

  watchEffect(onInvalidate => {
    const element = toValue(maybeEl) ?? window

    element.addEventListener(type, listener as any, options)
    onInvalidate(() => element.removeEventListener(type, listener as any, options))
  })
}

export function useDocumentEvent<TType extends keyof DocumentEventMap>(
  type: TType,
  listener: (this: Document, ev: DocumentEventMap[TType]) => any,
  options?: boolean | AddEventListenerOptions
) {
  if (!isBrowser()) return

  watchEffect(onInvalidate => {
    document.addEventListener(type, listener, options)
    onInvalidate(() => document.removeEventListener(type, listener, options))
  })
}

export function useWindowEvent<TType extends keyof WindowEventMap>(
  type: TType,
  listener: (this: Window, ev: WindowEventMap[TType]) => any,
  options?: boolean | AddEventListenerOptions
) {
  if (!isBrowser()) return

  watchEffect(onInvalidate => {
    window.addEventListener(type, listener, options)
    onInvalidate(() => window.removeEventListener(type, listener, options))
  })
}

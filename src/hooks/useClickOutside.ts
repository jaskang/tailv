import { isBrowser } from 'kotl'
import { type MaybeRefOrGetter, ref, toValue } from 'vue'

import { useDocumentEvent, useWindowEvent } from './useEventListener'

type ElementMaybeRef = MaybeRefOrGetter<HTMLElement | null>

export function useClickOutside(
  elements: ElementMaybeRef[],
  cb: (event: MouseEvent | PointerEvent | FocusEvent | TouchEvent, target: HTMLElement) => void
) {
  if (!isBrowser()) return

  function handleOutsideClick<E extends MouseEvent | PointerEvent | FocusEvent | TouchEvent>(
    event: E,
    resolveTarget: (event: E) => HTMLElement | null
  ) {
    // Check whether the event got prevented already. This can happen if you use the
    // useOutsideClick hook in both a Dialog and a Menu and the inner Menu "cancels" the default
    // behaviour so that only the Menu closes and not the Dialog (yet)
    if (event.defaultPrevented) return

    const target = resolveTarget(event)

    if (target === null) {
      return
    }

    // Ignore if the target doesn't exist in the DOM anymore
    if (!target.getRootNode().contains(target)) return

    // Ignore if the target exists in one of the containers
    for (const item of elements) {
      const el = toValue(item)
      if (el === null) continue
      if (el.contains(target)) {
        return
      }

      if (event.composed && event.composedPath().includes(el as EventTarget)) {
        return
      }
    }
    return cb(event, target)
  }

  const initialClickTarget = ref<EventTarget | null>(null)

  useDocumentEvent(
    'pointerdown',
    event => {
      initialClickTarget.value = event.composedPath?.()?.[0] || event.target
    },
    true
  )

  useDocumentEvent(
    'mousedown',
    event => {
      initialClickTarget.value = event.composedPath?.()?.[0] || event.target
    },
    true
  )

  useDocumentEvent(
    'click',
    event => {
      if (!initialClickTarget.value) {
        return
      }
      handleOutsideClick(event, () => {
        return initialClickTarget.value as HTMLElement
      })
      initialClickTarget.value = null
    },
    // We will use the `capture` phase so that layers in between with `event.stopPropagation()`
    // don't "cancel" this outside click check. E.g.: A `Menu` inside a `DialogPanel` if the `Menu`
    // is open, and you click outside of it in the `DialogPanel` the `Menu` should close. However,
    // the `DialogPanel` has a `onClick(e) { e.stopPropagation() }` which would cancel this.
    true
  )

  useDocumentEvent(
    'touchend',
    event => {
      return handleOutsideClick(event, () => {
        if (event.target instanceof HTMLElement) {
          return event.target
        }
        return null
      })
    },

    // We will use the `capture` phase so that layers in between with `event.stopPropagation()`
    // don't "cancel" this outside click check. E.g.: A `Menu` inside a `DialogPanel` if the `Menu`
    // is open, and you click outside of it in the `DialogPanel` the `Menu` should close. However,
    // the `DialogPanel` has a `onClick(e) { e.stopPropagation() }` which would cancel this.
    true
  )

  // When content inside an iframe is clicked `window` will receive a blur event
  // This can happen when an iframe _inside_ a window is clicked
  // Or, if headless UI is *in* the iframe, when a content in a window containing that iframe is clicked

  // In this case we care only about the first case so we check to see if the active element is the iframe
  // If so this was because of a click, focus, or other interaction with the child iframe
  // and we can consider it an "outside click"
  useWindowEvent(
    'blur',
    event => {
      return handleOutsideClick(event, () => {
        return window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null
      })
    },
    true
  )
}

import { Ref, watchEffect } from 'vue'

type EventType = MouseEvent | TouchEvent

export default function useClickAway(
  onClickAway: (event: EventType) => void,
  targetRef: Ref<HTMLElement>,
  eventName: string = 'click'
) {
  const handler = (event: any) => {
    if (!targetRef.value || targetRef.value.contains(event.target)) {
      return
    }
    onClickAway(event)
  }
  watchEffect(onInvalidate => {
    document.addEventListener(eventName, handler)
    onInvalidate(() => {
      document.removeEventListener(eventName, handler)
    })
  })
}

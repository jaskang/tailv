import { watchEffect } from 'vue'

// 鼠标点击事件，click 不会监听右键
const defaultEvent = 'click'

type EventType = MouseEvent | TouchEvent

export default function useClickAway(
  onClickAway: (event: EventType) => void,
  target: HTMLElement,
  eventName: string = defaultEvent
) {
  const handler = (event: any) => {
    if (!target || target.contains(event.target)) {
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

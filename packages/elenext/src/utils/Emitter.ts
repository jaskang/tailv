// An event handler can take an optional event argument

import { uniqueId } from '@elenext/shared'

// and should not return a value
export type Handler = (...arg: any[]) => void

// A map of event types and their corresponding event handlers.
export type EventHandlerMap = Map<string, Handler[]>

class Emitter {
  private prefix = ''
  private events: EventHandlerMap = new Map()
  constructor(prefix: string = uniqueId()) {
    this.prefix = prefix
  }
  on(type: string, handler: Handler) {
    const name = `${this.prefix}-${type}`
    const handlers = this.events.get(name)
    const added = handlers && handlers.push(handler)
    if (!added) {
      this.events.set(name, [handler])
    }
  }
  off(type: string, handler: Handler) {
    const name = `${this.prefix}-${type}`
    const handlers = this.events.get(name)
    if (handlers) {
      handlers.splice(handlers.indexOf(handler) >>> 0, 1)
    }
  }

  emit(type: string, ...arg: any[]) {
    const name = `${this.prefix}-${type}`
    ;((this.events.get(name) || []) as Handler[]).slice().map(handler => {
      handler(...arg)
    })
  }
}

export default Emitter

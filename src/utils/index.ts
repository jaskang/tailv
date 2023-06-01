import { any, array, bool, func, number, integer, object, string, symbol } from 'vue-types'

export const PropTypes = {
  any,
  array,
  bool,
  func,
  number,
  integer,
  object,
  string,
  symbol,
}

export function emitFn<T extends (...args: any[]) => any>(fn: T) {
  return fn as (...args: Parameters<T>) => void
}

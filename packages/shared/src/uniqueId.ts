let id = 0

export function uniqueId(prefix?: string): string {
  const PREFIX = Math.ceil(Math.random() * 8999 + 1000).toString()
  const nextId = `${PREFIX}${++id}`
  return prefix ? `${prefix}-${nextId}` : nextId
}

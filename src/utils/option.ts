export type OptionValue = string | number
export type OptionItem = { label: string; value: OptionValue; disabled?: boolean }

export function toMultipleVal(val?: OptionValue | OptionValue[]): OptionValue[] | undefined {
  if (typeof val === undefined) return undefined
  if (Array.isArray(val)) return val
  return [val] as OptionValue[]
}

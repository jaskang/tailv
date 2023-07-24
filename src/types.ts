export type Fn = (...args: any[]) => any

export type Data = Record<string, any>

export type Flat<T> = T extends Fn ? T : T extends object ? { [K in keyof T]: T[K] } : T

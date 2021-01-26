declare const __DEV__: boolean

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const comp: DefineComponent<{}, {}, any>
  export default comp
}

declare module '*.scss' {
  const classes: string
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

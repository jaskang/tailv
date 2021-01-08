declare const __DEV__: boolean

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const comp: DefineComponent<{}, {}, any>
  export default comp
}

declare module '*.less' {
  const classes: string
  export default classes
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}
declare module '*.scss' {
  const classes: string
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare namespace JSX {
  interface IntrinsicAttributes {
    /**
     * support vue2 v-on
     */
    on?: {
      [key: string]: (...args: any[]) => any
    }
  }
}

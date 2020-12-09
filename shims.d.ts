declare const __DEV__: boolean

// export * from 'vue'

// declare module 'vue' {
//   interface HTMLAttributes {
//     vShow?: boolean
//   }
// }

// declare module '*.vue' {
//   // TODO: Figure out the typing for this
//   import type { DefineComponent } from 'vue'
//   const component: DefineComponent
//   export default component
// }

declare module '*.md' {
  import { ComponentOptions } from 'vue'
  const comp: ComponentOptions
  export default comp
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string }
  export default classes
}

declare module '*.scss' {
  const classes: string
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

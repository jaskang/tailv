declare const __DEV__: boolean

interface Window {
  Prism: any
}

declare module '*.vue' {
  import { Component } from 'vue'
  var component: Component
  export default component
}

declare module '*.md' {
  import { Component } from 'vue'
  var component: Component
  export default component
}

declare module '*.module.less' {
  const classes: { readonly [key: string]: string }
  export default classes
}

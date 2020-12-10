<p>
  <a href="https://www.npmjs.com/package/elenext" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/elenext.svg">
  </a>
  <a href="https://elenext.vercel.app" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

# elenext

A Vue.js 3.0 UI Toolkit for Web

## Foreword

> 这个项目目的并不是为了照搬 Element 2，使用 Vue3 API 重新实现一遍，并不会以兼容为第一优先级。而是为了实现一个更加符合 Vue3 的现代化的 UI 框架，中间会大量使用 Composition API。
> 如果你的项目追求的是 api 的兼容，强烈建议移步 Element Plus

## 附加项目

#### [tsrv](https://github.com/JasKang/tsrv) 零配置打包组件库

#### [vite-plugin-vuedoc](https://github.com/JasKang/vite-plugin-vuedoc) 基于 vite 的组件库文档插件，支持 markdown 文档预览/代码高亮

## Docs & Demo

[https://elenext.vercel.app](https://elenext.vercel.app)

## Install

```sh
yarn add elenext
```

## Quick Start

```javascript
import { createApp } from 'vue'
import elenext from 'elenext'
import App from './App.vue'

const app = createApp(App)

app.use(elenext)
app.mount('#app')
```

For more information, please refer to Quick Start in our documentation.

## Browser Support

Modern browsers and Internet Explorer 11+.

## Development

Skip this part if you just want to use Element.

## Todo

:sparkles: **组件库** :sparkles:

- [x] Grid
  - [x] Row
  - [x] Col
- [x] Layout
  - [x] Layout
  - [x] Main
  - [x] Aside
  - [x] Footer
  - [x] Header
- [x] Button
- [x] Menu
- [x] Icon
- [x] Link
- [x] Alert
- [x] Breadcrumb
- [ ] badge
- [ ] calendar
- [ ] card
- [ ] checkbox
- [ ] date-picker
- [ ] dialog
- [ ] divider
- [ ] drawer
- [ ] dropdown
- [ ] form
- [ ] image
- [ ] input
- [ ] loading
- [ ] message
- [ ] notification
- [ ] option
- [ ] pagination
- [ ] progress
- [ ] radio

## Author

👤 **jaskang**

- Website: https://github.com/jaskang

## Show your support

Give a ⭐️ if this project helped you!

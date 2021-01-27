<p>
  <a href="https://www.npmjs.com/package/elenext" target="_blank">
    <img alt="Version" src="https://img.shields.io/npm/v/elenext.svg">
  </a>
  <a href="https://elenext.vercel.app" target="_blank">
    <img alt="Documentation" src="https://img.shields.io/badge/documentation-yes-brightgreen.svg" />
  </a>
</p>

# Elenext(WIP)

A Vue.js 3.0 UI Toolkit for Web

## Foreword

> The purpose of this project is not to copy Element2 and translate it using Vue3, and compatibility is not a priority

> If you are used to Element2 and want to use it under Vue3, we recommend moving to [Element Plus](https://github.com/element-plus/element-plus).

> This project implements a more modern browser-compliant UI framework that makes extensive use of various new features.

## Features

- zero-configuration bundler for vue3 components ==> [tsrv](https://github.com/JasKang/tsrv)
  - [x] tsrv dev/build
  - [x] tsrv test
- vite docs/demo stie ==> [vite-plugin-vuedoc](https://github.com/JasKang/vite-plugin-vuedoc)
  - [x] docs stie
  - [x] support markdown
  - [x] demo preview
- prop types definitions ==> [vptypes](https://github.com/JasKang/vptypes)
  - [x] typescript support
  - [x] basic check
- style
  - [x] Reconfiguration style
  - [x] use css variables
- components
  - [] something

## Docs & Demo

[https://elenext.vercel.app](https://elenext.vercel.app)

## Install

```sh
yarn add elenext
```

## Quick Start

```javascript
import 'elenext/dist/elenext.css'
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

Skip this part if you just want to use Elenext.

## Todo

:sparkles: **组件库** :sparkles:

- [x] Grid
  - [x] ERow
  - [x] ECol
- [x] Layout
  - [x] ELayout
  - [x] EMain
  - [x] EAside
  - [x] EFooter
  - [x] EHeader
- [x] Button
  - [x] EButton
  - [x] EButtonGroup
- [x] ELink
- [x] EBreadcrumb
  - [x] EBreadcrumbItem
- [x] EPagination
- [x] Icon
- [x] EAlert
- [x] EPopper
- [x] ETooltip
- [x] EPopover
- [x] Menu
  - [x] EMenu
  - [x] ESubMenu
  - [x] EMenuItem
  - [x] EMenuItemGroup
- [x] EInput
  - [x] EInputGroup
- [x] radio
- [x] checkbox
- [ ] card
- [ ] date-picker
- [ ] dialog
- [ ] divider
- [ ] drawer
- [ ] dropdown
- [ ] form
- [ ] image
- [ ] loading
- [ ] message
- [ ] notification
- [ ] option
- [ ] pagination
- [ ] progress

## Additional Tools

- [tsrv](https://github.com/JasKang/tsrv) Zero Configuration bundler for vue3 components

- [vite-plugin-vuedoc](https://github.com/JasKang/vite-plugin-vuedoc) Markdown document preview and code highlighting for vite

- [vptypes](https://github.com/JasKang/vptypes) Vue3 Prop Types definitions

## Author

👤 **jaskang**

- Website: https://github.com/jaskang

## Show your support

Give a ⭐️ if this project helped you!

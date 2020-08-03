import { Plugin } from 'vue'
import { ElRow, ElCol } from './components/Layout'
import { ElContainer, ElAside, ElMain, ElFooter, ElHeader } from './components/Container'
import { ElButton, ElButtonGroup } from './components/Button'
import { ElLink } from './components/Link'
import { ElIcon } from './components/Icon'
import { ElPopover } from './components/Popover'
import { ElMenu, ElMenuItem, ElSubmenu, ElMenuItemGroup } from './components/Menu'
import { ElAlert } from './components/Alert'
import { ElBreadcrumb,ElBreadcrumbItem } from './components/Breadcrumb'
// import './styles/index.less'
export { default as injectCss } from './utils/injectCss'

export {
  ElRow,
  ElCol,
  ElContainer,
  ElAside,
  ElMain,
  ElHeader,
  ElFooter,
  ElButton,
  ElButtonGroup,
  ElLink,
  ElIcon,
  ElPopover,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup,
  ElAlert,
  ElBreadcrumb,
  ElBreadcrumbItem
}

export const elenext: Plugin = {
  install(app) {
    app.component('ElRow', ElRow)
    app.component('ElCol', ElCol)

    app.component('ElContainer', ElContainer)
    app.component('ElAside', ElAside)
    app.component('ElMain', ElMain)
    app.component('ElHeader', ElHeader)
    app.component('ElFooter', ElFooter)

    app.component('ElButton', ElButton)
    app.component('ElButtonGroup', ElButtonGroup)
    app.component('ElLink', ElLink)
    app.component('ElIcon', ElIcon)
    app.component('ElPopover', ElPopover)
    app.component('ElMenu', ElMenu)
    app.component('ElMenuItem', ElMenuItem)
    app.component('ElSubmenu', ElSubmenu)
    app.component('ElMenuItemGroup', ElMenuItemGroup)
    app.component('ElAlert', ElAlert)
    app.component('ElBreadcrumb', ElBreadcrumb)
    app.component('ElBreadcrumbItem', ElBreadcrumbItem)
  }
}

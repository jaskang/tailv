import { Component, Plugin } from 'vue'
import { Row, Col } from './components/Grid'
import { Tile } from './components/Tile'
import { Layout, ElAside, ElMain, ElFooter, ElHeader } from './components/Layout'
import { ElButton, ElButtonGroup } from './components/Button'
import { ElLink } from './components/Link'
import { ElIcon } from './components/Icon'
import { ElPopover } from './components/Popover'
import { ElMenu, ElMenuItem, ElSubmenu, ElMenuItemGroup } from './components/Menu'
import { ElAlert } from './components/Alert'
import { ElBreadcrumb, ElBreadcrumbItem } from './components/Breadcrumb'
import './styles/index.less'
export { default as injectCss } from './utils/injectCss'

export {
  Row,
  Col,
  Tile,
  Layout,
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
    const useComponent = (component: Component) => {
      if (component.name) {
        app.component(component.name, component)
      } else {
        throw 'component need name'
      }
    }

    useComponent(Row)
    useComponent(Col)
    useComponent(Tile)

    useComponent(Layout)
    useComponent(ElAside)
    useComponent(ElMain)
    useComponent(ElHeader)
    useComponent(ElFooter)

    useComponent(ElButton)
    useComponent(ElButtonGroup)
    useComponent(ElLink)
    useComponent(ElIcon)
    useComponent(ElPopover)
    useComponent(ElMenu)
    useComponent(ElMenuItem)
    useComponent(ElSubmenu)
    useComponent(ElMenuItemGroup)
    useComponent(ElAlert)

    useComponent(ElBreadcrumb)
    useComponent(ElBreadcrumbItem)
  }
}

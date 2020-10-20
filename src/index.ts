import { Component, Plugin } from 'vue'
import { Row, Col } from './components/Grid'
import { Tile } from './components/Tile'
import { Container, ElAside, ElMain, ElFooter, ElHeader } from './components/Container'
import { ElButton, ElButtonGroup } from './components/Button'
import { ElLink } from './components/Link'
import { ElIcon } from './components/Icon'
import { ElPopover } from './components/Popover'
import { Nav, NavItem, NavItemGroup } from './components/Nav'
// import { ElMenu, ElMenuItem, ElSubmenu, ElMenuItemGroup } from './components/Menu'
import { Alert } from './components/Alert'
import { ElBreadcrumb, ElBreadcrumbItem } from './components/Breadcrumb'
import './styles/index.less'
export { default as injectCss } from './utils/injectCss'

export {
  Row,
  Col,
  Tile,
  Container,
  ElAside,
  ElMain,
  ElHeader,
  ElFooter,
  ElButton,
  ElButtonGroup,
  ElLink,
  ElIcon,
  ElPopover,
  Alert,
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
    useComponent(Nav)
    useComponent(NavItem)
    useComponent(NavItemGroup)

    useComponent(Container)
    useComponent(ElAside)
    useComponent(ElMain)
    useComponent(ElHeader)
    useComponent(ElFooter)

    useComponent(ElButton)
    useComponent(ElButtonGroup)
    useComponent(ElLink)
    useComponent(ElIcon)
    useComponent(ElPopover)

    useComponent(Alert)

    useComponent(ElBreadcrumb)
    useComponent(ElBreadcrumbItem)
  }
}

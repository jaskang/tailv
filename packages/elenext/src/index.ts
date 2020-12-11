import { Component, Plugin } from 'vue'
import { Row, Col, useBreakpoint } from './components/Grid'
import { Layout, Aside, Main, Footer, Header } from './components/Layout'
import { Button, ButtonGroup } from './components/Button'
import { Link } from './components/Link'
import { Popper } from './components/Popper'
import { Tooltip } from './components/Tooltip'
import { Popover } from './components/Popover'
import { Menu, MenuItem, MenuItemGroup } from './components/Menu'
// import { Menu, MenuItem, Submenu, MenuItemGroup } from './components/Menu'
import { Breadcrumb, BreadcrumbItem } from './components/Breadcrumb'
// export { default as injectCss } from './utils/injectCss'
// import './styles/index.less'

export {
  Row,
  Col,
  Layout,
  Aside,
  Main,
  Header,
  Footer,
  Button,
  ButtonGroup,
  Link,
  Popover,
  Breadcrumb,
  BreadcrumbItem,
  useBreakpoint
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
    useComponent(Menu)
    useComponent(MenuItem)
    useComponent(MenuItemGroup)

    useComponent(Layout)
    useComponent(Aside)
    useComponent(Main)
    useComponent(Header)
    useComponent(Footer)

    useComponent(Button)
    useComponent(ButtonGroup)
    useComponent(Link)
    // useComponent(Icon)
    useComponent(Popper)
    useComponent(Tooltip)
    useComponent(Popover)

    useComponent(Breadcrumb)
    useComponent(BreadcrumbItem)
  }
}

import { Plugin } from 'vue'
import { ElRow } from './components/Row'
import { ElCol } from './components/Col'
import { ElContainer } from './components/Container'
import { ElAside } from './components/Aside'
import { ElMain } from './components/Main'
import { ElHeader } from './components/Header'
import { ElFooter } from './components/Footer'
import { ElButton } from './components/Button'
import { ElButtonGroup } from './components/ButtonGroup'
import { ElIcon } from './components/Icon'
import { ElPopover } from './components/Popover'
import {
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup
} from './components/Menu'

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
  ElIcon,
  ElPopover,
  ElMenu,
  ElMenuItem,
  ElSubmenu,
  ElMenuItemGroup
}

export const elenext: Plugin = {
  install(app) {
    app.component('ElButton', ElButton)
  }
}

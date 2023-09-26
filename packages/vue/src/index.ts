import './styles/index.css'

// import './styles/_index.scss'
import type { Plugin } from 'vue'

import { ElSlot } from './components/_pure/ElSlot'
import { Breadcrumb } from './components/Breadcrumb'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { ConfigProvider } from './components/ConfigProvider'
import { Flex, FlexItem } from './components/Flex'
import { Icon } from './components/Icon'
import { Input } from './components/Input'
import { InputGroup } from './components/InputGroup'
import { Popover } from './components/Popover'
import { Popper } from './components/Popper'
import { Radio, RadioGroup } from './components/Radio'
import { Select } from './components/Select'
import { Switch } from './components/Switch'
import { Tag } from './components/Tag'
import { Tooltip } from './components/Tooltip'
import { useConfig } from './config'

export {
  Breadcrumb,
  Button,
  Checkbox,
  ConfigProvider,
  ElSlot,
  Flex,
  FlexItem,
  Icon,
  Input,
  InputGroup,
  Popover,
  Popper,
  Radio,
  RadioGroup,
  Select,
  Switch,
  Tag,
  Tooltip,
  useConfig,
}

export const Zonda: Plugin = {
  install(app, options) {
    app.component('ZConfigProvider', ConfigProvider)
    app.component('ZIcon', Icon)
    app.component('ZButton', Button)
    app.component('ZSwitch', Switch)
    app.component('ZCheckbox', Checkbox)
    app.component('ZRadio', Radio)
    app.component('ZRadioGroup', RadioGroup)
    app.component('ZInput', Input)
    app.component('ZSelect', Select)
    app.component('ZInputGroup', InputGroup)
    app.component('ZFlex', Flex)
    app.component('ZFlexItem', FlexItem)
    app.component('ZPopover', Popover)
    app.component('ZPopper', Popper)
    app.component('ZTooltip', Tooltip)
    app.component('ZBreadcrumb', Breadcrumb)
    app.component('ZTag', Tag)
  },
}

// export default Wlenext

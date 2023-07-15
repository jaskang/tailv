import type { Plugin } from 'vue'

import { Badge } from './components/Badge'
import { Breadcrumb } from './components/Breadcrumb'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { ConfigProvider, useConfig } from './components/ConfigProvider'
import { Flex, FlexItem } from './components/Flex'
import { Icon } from './components/Icon'
import { Input } from './components/Input'
import { InputGroup } from './components/InputGroup'
import { Popover } from './components/Popover'
import { Popper } from './components/Popper'
import { Radio, RadioGroup } from './components/Radio'
import { Select } from './components/Select'
import { Switch } from './components/Switch'
import { Tooltip } from './components/Tooltip'

export {
  Badge,
  Breadcrumb,
  Button,
  Checkbox,
  ConfigProvider,
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
  Tooltip,
  useConfig,
}

export const Tailv: Plugin = {
  install(app, options) {
    app.component('TConfigProvider', ConfigProvider)
    app.component('TIcon', Icon)
    app.component('TButton', Button)
    app.component('TSwitch', Switch)
    app.component('TCheckbox', Checkbox)
    app.component('TRadio', Radio)
    app.component('TRadioGroup', RadioGroup)
    app.component('TInput', Input)
    app.component('TSelect', Select)
    app.component('TInputGroup', InputGroup)
    app.component('TFlex', Flex)
    app.component('TFlexItem', FlexItem)
    app.component('TPopover', Popover)
    app.component('TPopper', Popper)
    app.component('TTooltip', Tooltip)
    app.component('TBreadcrumb', Breadcrumb)
    app.component('TBadge', Badge)
  },
}

// export default Wlenext

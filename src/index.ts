import type { Plugin } from 'vue'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { ConfigProvider, useConfig } from './components/ConfigProvider'
import { Flex, FlexItem } from './components/Flex'
import { Icon } from './components/Icon'
import { Input } from './components/Input'
import { InputGroup } from './components/InputGroup'
import { Popper } from './components/Popper'
import { Radio, RadioGroup } from './components/Radio'
import { Select } from './components/Select'
import { Switch } from './components/Switch'

export {
  Button,
  Checkbox,
  ConfigProvider,
  Flex,
  FlexItem,
  Icon,
  Input,
  InputGroup,
  Popper,
  Radio,
  RadioGroup,
  Select,
  Switch,
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
    app.component('TPopper', Popper)
  },
}

// export default Wlenext

import type { Plugin } from 'vue'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { useConfig, ConfigProvider } from './components/ConfigProvider'
import { FlexItem, Flex } from './components/Flex'
import { Icon } from './components/Icon'
import { Input } from './components/Input'
import { InputGroup } from './components/InputGroup'
import { Popper } from './components/Popper/Popper'
import { Radio, RadioGroup } from './components/Radio'
import { Select } from './components/Select'
import { Switch } from './components/Switch'

export {
  useConfig,
  ConfigProvider,
  Icon,
  Button,
  Checkbox,
  Switch,
  Radio,
  RadioGroup,
  Input,
  Select,
  InputGroup,
  Flex,
  FlexItem,
  Popper,
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

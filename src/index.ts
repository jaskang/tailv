import type { Plugin } from 'vue'

import { Icon } from './components/Icon'
import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import { Switch } from './components/Switch'
import { Radio, RadioGroup } from './components/Radio'
import { Input } from './components/Input'
import { InputGroup } from './components/InputGroup'
import { Flex, FlexItem } from './components/Flex'

export { Icon, Button, Checkbox, Switch, Radio, RadioGroup, Input, InputGroup, Flex, FlexItem }

export const Tailv: Plugin = {
  install(app, options) {
    app.component('TIcon', Icon)
    app.component('TButton', Button)
    app.component('TSwitch', Switch)
    app.component('TCheckbox', Checkbox)
    app.component('TRadio', Radio)
    app.component('TRadioGroup', RadioGroup)
    app.component('TInput', Input)
    app.component('TInputGroup', InputGroup)
    app.component('TFlex', Flex)
    app.component('TFlexItem', FlexItem)
  },
}

// export default Wlenext

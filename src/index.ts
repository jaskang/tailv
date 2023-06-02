import type { Plugin } from 'vue'

import { Button } from './components/Button'
import { Checkbox } from './components/Checkbox'
import Icon from './components/Icon/Icon.vue'
import Switch from './components/Switch/Switch.vue'
import Radio from './components/Radio/Radio.vue'
import RadioGroup from './components/Radio/RadioGroup.vue'
import { Input } from './components/Input'
import { Flex, FlexItem } from './components/Flex'

import Space from './components/Space/Space.vue'

export { Button, Checkbox, Radio, Switch }

export const Tailv: Plugin = {
  install(app, options) {
    app.component('TIcon', Icon)
    app.component('TButton', Button)
    app.component('TSwitch', Switch)
    app.component('TCheckbox', Checkbox)
    app.component('TRadio', Radio)
    app.component('TRadioGroup', RadioGroup)
    app.component('TInput', Input)
    app.component('TFlex', Flex)
    app.component('TFlexItem', FlexItem)
    app.component('TSpace', Space)
  },
}

// export default Wlenext

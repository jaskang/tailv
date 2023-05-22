import type { Plugin } from 'vue'

import Button from './components/Button/Button.vue'
import Checkbox from './components/CheckBox/CheckBox.vue'
import Icon from './components/Icon/Icon.vue'
import Switch from './components/Switch/Switch.vue'
import Radio from './components/Radio/Radio.vue'
import RadioGroup from './components/Radio/RadioGroup.vue'
import Input from './components/Input/Input.vue'
import Flex from './components/Flex/Flex.vue'
import FlexItem from './components/Flex/FlexItem.vue'
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

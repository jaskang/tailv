import './_styles/index.scss'
import type { Plugin } from 'vue'

import Icon from './components/Icon.vue'
import Button from './components/Button.vue'
import Switch from './components/Switch.vue'
import Radio from './components/Radio.vue'
import RadioGroup from './components/RadioGroup.vue'
import Checkbox from './components/CheckBox.vue'
import Input from './components/Input.vue'
import Row from './components/Row.vue'
import Col from './components/Col.vue'

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
    app.component('TRow', Row)
    app.component('TCol', Col)
  },
}

// export default Wlenext

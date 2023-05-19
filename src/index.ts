import type { Plugin } from 'vue'

import Icon from './components/Icon.vue'
import Button from './components/Button/index.vue'
import Switch from './components/Switch.vue'
import Radio from './components/Radio.vue'
import RadioGroup from './components/RadioGroup.vue'
import Checkbox from './components/CheckBox.vue'
import Input from './components/Input.vue'
import Row from './components/Row.vue'
import Col from './components/Col.vue'
import Space from './components/Space.vue'

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
    app.component('TSpace', Space)
  },
}

// export default Wlenext

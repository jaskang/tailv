import './styles/index.scss'
import 'virtual:uno.css'
import type { Plugin } from 'vue'

import TIcon from './TIcon/TIcon.vue'
import TButton from './TButton/TButton.vue'
import TSwitch from './TSwitch/TSwitch.vue'
import TRadio from './TRadio/TRadio.vue'
import TRadioGroup from './TRadioGroup/TRadioGroup.vue'
import TCheckbox from './TCheckBox/TCheckBox.vue'
import TInput from './TInput/TInput.vue'

export { TButton, TCheckbox, TRadio, TSwitch }

export const Tailv: Plugin = {
  install(app, options) {
    app.component('TIcon', TIcon)
    app.component('TButton', TButton)
    app.component('TSwitch', TSwitch)
    app.component('TCheckbox', TCheckbox)
    app.component('TRadio', TRadio)
    app.component('TRadioGroup', TRadioGroup)
    app.component('TInput', TInput)
  },
}

// export default Wlenext

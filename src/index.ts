import './styles/index.scss'
import 'virtual:uno.css'
import type { Plugin } from 'vue'

import WIcon from './WIcon/WIcon.vue'
import WButton from './WButton/WButton.vue'
import WSwitch from './WSwitch/WSwitch.vue'
import WRadio from './WRadio/WRadio.vue'
import WCheckbox from './WCheckBox/WCheckBox.vue'
import WInput from './WInput/WInput.vue'

export { WButton, WCheckbox, WRadio, WSwitch }

export const Wlenext: Plugin = {
  install(app, options) {
    app.component('WIcon', WIcon)
    app.component('WButton', WButton)
    app.component('WSwitch', WSwitch)
    app.component('WCheckbox', WCheckbox)
    app.component('WRadio', WRadio)
    app.component('WInput', WInput)
  },
}

// export default Wlenext

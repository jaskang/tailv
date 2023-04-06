import './styles/index.scss'
import type { Plugin } from 'vue'

import EIcon from './EIcon/EIcon.vue'
import EButton from './EButton/EButton.vue'
import ESwitch from './ESwitch/ESwitch.vue'
import ERadio from './ERadio/ERadio.vue'
import ECheckbox from './ECheckBox/ECheckBox.vue'
import EInput from './EInput/EInput.vue'

export { EButton, ECheckbox, ERadio, ESwitch }

export const Elenext: Plugin = {
  install(app, options) {
    app.component('EIcon', EIcon)
    app.component('EButton', EButton)
    app.component('ESwitch', ESwitch)
    app.component('ECheckbox', ECheckbox)
    app.component('ERadio', ERadio)
    app.component('EInput', EInput)
  },
}

// export default Elenext

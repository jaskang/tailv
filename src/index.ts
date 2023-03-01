import type { Plugin } from 'vue'
import './_styles/index.css'

import EButton from './EButton.vue'
import EButtonGroup from './EButtonGroup.vue'
import ERadio from './ERadio.vue'
import ECheckbox from './ECheckbox.vue'
import EInput from './EInput.vue'

export { EButton, EButtonGroup, ECheckbox, ERadio }

export const Elenext: Plugin = {
  install(app, options) {
    app.component('EButton', EButton)
    app.component('EButtonGroup', EButtonGroup)
    app.component('ECheckbox', ECheckbox)
    app.component('ERadio', ERadio)
    app.component('EInput', EInput)
  },
}

export default Elenext

import type { Plugin } from 'vue'
import './_styles/index.css'

import EButton from './button/index.vue'
import { EButtonGroup } from './buttonGroup'
import { ERadio } from './radio'
import ECheckbox from './checkbox/index.vue'
import EInput from './input/index.vue'

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

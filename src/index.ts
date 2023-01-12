import type { Plugin } from 'vue'
import './_styles/index.css'

import { EButton } from './button'
import { EButtonGroup } from './buttonGroup'
import { ECheckbox } from './checkbox'
import { ERadio } from './radio'

export { EButton, EButtonGroup, ECheckbox, ERadio }

export const Elenext: Plugin = {
  install(app, options) {
    app.component('EButton', EButton)
    app.component('EButtonGroup', EButtonGroup)
    app.component('ECheckbox', ECheckbox)
    app.component('ERadio', ERadio)
  },
}

export default Elenext

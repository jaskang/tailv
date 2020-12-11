import './index.less'
import 'elenext/dist/elenext.esm.css'
import { createApp } from 'vue'
import { router } from './router'
import { elenext } from 'elenext'
import { IconChevronDown, IconArrowClockwise } from '@elenext/icons'
import App from './App.vue'

const app = createApp(App)

app.component(IconChevronDown.name, IconArrowClockwise)
app.component(IconArrowClockwise.name, IconArrowClockwise)
app.use(elenext)
app.use(router)
app.mount('#app')

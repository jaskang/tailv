import './index.less'
import 'elenext/dist/elenext.esm.css'
import { createApp } from 'vue'
import { router } from './router'
import { elenext } from 'elenext'
import { regIcons } from '@elenext/icons'
import App from './App.vue'

const app = createApp(App)

app.use(elenext)
regIcons(app)
app.use(router)
app.mount('#app')

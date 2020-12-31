import './index.less'
import 'elenext/dist/elenext.esm.css'
import 'vite-plugin-vuedoc/style.css'
import { createApp } from 'vue'
import { router } from './router'
import { elenext } from 'elenext'
import { plugin } from '@elenext/icons'
import App from './App.vue'

const app = createApp(App)

app.use(elenext)
app.use(plugin)
app.use(router)
app.mount('#app')

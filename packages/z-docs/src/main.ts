import './index.less'
import 'elenext/dist/elenext.esm.css'
import { createApp } from 'vue'
import { router } from './router'
import { elenext } from 'elenext'
import App from './App.vue'

const app = createApp(App)

app.use(elenext)
app.use(router)
app.mount('#app')

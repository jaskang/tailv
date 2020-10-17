// import './index.css'

import 'vite-plugin-vuedoc/style.css'
import './index.less'
import { createApp } from 'vue'
import { router } from './router'
import { elenext } from 'elenext'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(elenext)
app.mount('#app')

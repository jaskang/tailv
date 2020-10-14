import './assets/prism.css'
// import './assets/prism.js'
// import './index.css'
import '../scripts/plugins/vite-plugin-vuedoc/vuedoc.css'
import './index.less'
import { createApp } from 'vue'
import { router } from './router'
import { elenext } from 'elenext'
import Preview from './components/Preview.vue'
import App from './App.vue'

const app = createApp(App)

app.use(router)
app.use(elenext)
app.component('Preview', Preview)
app.mount('#app')

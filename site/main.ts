// import './index.css'
import './index.less'
import { createApp } from 'vue'
import { router } from './router'
import { elenext } from 'elenext'
// import RegIcons from './RegIcons'
import App from './App.vue'

const app = createApp(App)

app.use(router)
// app.use(RegIcons)
app.use(elenext)
app.mount('#app')

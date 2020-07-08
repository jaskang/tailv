import './assets/prism.css'
import './assets/prism.js'
// import './index.css'
import './index.less'
import { createApp } from 'vue'
import { router } from './router'
import { elenext } from 'elenext'
import App from './App.vue'
window.Prism.plugins.NormalizeWhitespace.setDefaults({
  indent: 0,
  'remove-trailing': true,
  'remove-indent': true,
  'left-trim': true,
  'right-trim': true,
  'remove-initial-line-feed': false,
  'tabs-to-spaces': 2
})

const app = createApp(App)

app.use(router)
app.use(elenext)
app.mount('#app')

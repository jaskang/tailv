import DefaultTheme from 'vitepress/theme'
import MdvueDemo from '../components/MdvueDemo.vue'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('MdvueDemo', MdvueDemo)
  },
}

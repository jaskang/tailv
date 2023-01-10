import DefaultTheme from 'vitepress/theme'
import { plugin } from '../../../src'
import MdvueDemo from '../components/MdvueDemo.jsx'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.component('MdvueDemo', MdvueDemo)
    ctx.app.use(plugin)
  },
}

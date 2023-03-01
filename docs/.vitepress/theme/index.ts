import DefaultTheme from 'vitepress/theme'
import Elenext from '../../../src'
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(Elenext)
  },
}

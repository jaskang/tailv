// https://vitepress.dev/guide/custom-theme
import './styles/index.css'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import DemoWrapper from './components/DemoWrapper.vue'
import { plugin } from 'tailv'
export default {
  Layout: Layout,
  enhanceApp(ctx) {
    ctx.app.component('DemoWrapper', DemoWrapper)
    // @ts-ignore
    ctx.app.use(plugin)
  },
} satisfies Theme

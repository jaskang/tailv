// https://vitepress.dev/guide/custom-theme
import './styles/index.css'
import { plugin } from 'tailv'
import type { Theme } from 'vitepress'
import DemoWrapper from './components/DemoWrapper.vue'
import Layout from './Layout.vue'
export default {
  Layout: Layout,
  enhanceApp(ctx) {
    ctx.app.component('DemoWrapper', DemoWrapper)
    // @ts-ignore
    ctx.app.use(plugin)
  },
} satisfies Theme

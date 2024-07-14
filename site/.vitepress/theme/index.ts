// https://vitepress.dev/guide/custom-theme
import type { Theme } from 'vitepress'
import { plugin } from 'tailv'
import Layout from './Layout.vue'
import DemoWrapper from './components/DemoWrapper.vue'
import './styles/index.css'
export default {
  Layout: Layout,
  enhanceApp(ctx) {
    ctx.app.component('DemoWrapper', DemoWrapper)
    // @ts-ignore
    ctx.app.use(plugin)
  },
} satisfies Theme

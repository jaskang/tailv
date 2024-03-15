// https://vitepress.dev/guide/custom-theme
import 'virtual:base.css'
import './style.css'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
export default {
  Layout: Layout,
} satisfies Theme

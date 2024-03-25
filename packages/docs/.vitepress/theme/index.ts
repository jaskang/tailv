// https://vitepress.dev/guide/custom-theme
import './theme.css'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
export default {
  Layout: Layout,
} satisfies Theme

import './index.css'
import { Tailv } from '../../../src'
import {
  BeakerIcon,
  StopIcon,
  CogIcon,
  HomeIcon,
  CloudIcon,
  BellIcon,
  CubeIcon,
  StarIcon,
} from '@heroicons/vue/24/solid'
import { type Theme } from 'vitepress'
import Layout from './Layout.vue'

export default {
  Layout,
  enhanceApp(ctx) {
    ctx.app.use(Tailv)
    ctx.app.component('BeakerIcon', BeakerIcon)
    ctx.app.component('StopIcon', StopIcon)
    ctx.app.component('CogIcon', CogIcon)
    ctx.app.component('HomeIcon', HomeIcon)
    ctx.app.component('CloudIcon', CloudIcon)
    ctx.app.component('BellIcon', BellIcon)
    ctx.app.component('CubeIcon', CubeIcon)
    ctx.app.component('StarIcon', StarIcon)
  },
} satisfies Theme

import './index.css'
import DefaultTheme from 'vitepress/theme'
import { Elenext } from '../../../src'
import { BeakerIcon, StopIcon, CogIcon, HomeIcon, CloudIcon, BellIcon, CubeIcon, StarIcon } from '@heroicons/vue/24/solid'

export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    DefaultTheme.enhanceApp(ctx)
    ctx.app.use(Elenext)
    ctx.app.component('BeakerIcon', BeakerIcon)
    ctx.app.component('StopIcon', StopIcon)
    ctx.app.component('CogIcon', CogIcon)
    ctx.app.component('HomeIcon', HomeIcon)
    ctx.app.component('CloudIcon', CloudIcon)
    ctx.app.component('BellIcon', BellIcon)
    ctx.app.component('CubeIcon', CubeIcon)
    ctx.app.component('StarIcon', StarIcon)
  },
}

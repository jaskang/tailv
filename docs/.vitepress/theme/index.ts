import './index.css'

import {
  BeakerIcon,
  BellIcon,
  CheckIcon,
  CloudIcon,
  CogIcon,
  CubeIcon,
  HomeIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  StarIcon,
  StopIcon,
  XMarkIcon,
} from '@heroicons/vue/24/solid'
import { type Theme } from 'vitepress'

import { Tailv } from '../../../src'
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
    ctx.app.component('SpeakerWaveIcon', SpeakerWaveIcon)
    ctx.app.component('SpeakerXMarkIcon', SpeakerXMarkIcon)
    ctx.app.component('CheckIcon', CheckIcon)
    ctx.app.component('XMarkIcon', XMarkIcon)
  },
} satisfies Theme

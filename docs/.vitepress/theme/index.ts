import './index.css'

import {
  BeakerIcon,
  BellIcon,
  CheckIcon,
  CloudIcon,
  CodeBracketIcon,
  CogIcon,
  CubeIcon,
  HomeIcon,
  MoonIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  StarIcon,
  StopIcon,
  SunIcon,
  XMarkIcon,
} from '@heroicons/vue/24/solid'
import { type Theme } from 'vitepress'

import { Tailv } from '../../../src'
import CodePreview from './CodePreview.vue'
import Layout from './Layout.vue'

export default {
  Layout,
  enhanceApp(ctx) {
    ctx.app.component('CodePreview', CodePreview)
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
    ctx.app.component('SunIcon', SunIcon)
    ctx.app.component('MoonIcon', MoonIcon)
    ctx.app.component('CodeBracketIcon', CodeBracketIcon)
  },
} satisfies Theme

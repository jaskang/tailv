import { createRouter, createWebHistory } from 'vue-router'

import Button from '../pages/Button.mdx'
import Input from '../pages/Input.mdx'
import Anchor from '../pages/Anchor.mdx'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/components/button', component: Button },
    { path: '/components/Input', component: Input },
    { path: '/components/Anchor', component: Anchor },
  ],
})

export default router

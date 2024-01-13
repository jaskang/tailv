import { createRouter, createWebHistory } from 'vue-router'

import Button from '../pages/Button.mdx'
import Checkbox from '../pages/Checkbox.mdx'
import Input from '../pages/Input.mdx'
import Anchor from '../pages/Anchor.mdx'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/components/button', component: Button },
    { path: '/components/checkbox', component: Checkbox },
    { path: '/components/input', component: Input },
    { path: '/components/anchor', component: Anchor },
  ],
})

export default router

import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import AppLayout from './components/AppLayout.vue'
import menus from './menus'

export const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: [
    { path: '/home', redirect: '/' },
    {
      path: '/',
      name: 'Layout',
      component: AppLayout,
      redirect: '/grid',
      children: menus.reduce((prev, item) => {
        const _routes = item.items.map(i => {
          return {
            path: `/${i.name.toLowerCase()}`,
            name: i.name,
            component: i.component,
          }
        })
        prev.push(..._routes)
        return prev
      }, [] as RouteRecordRaw[]),
    },
  ],
})

import { createRouter, createWebHistory } from 'vue-router';
import Layout from './components/Layout.vue';

export const router = createRouter({
  history: createWebHistory(),
  strict: true,
  routes: [
    { path: '/home', redirect: '/' },
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        { path: '/button', name: 'button', component: async () => import('./demo/button.vue') },
        { path: '/layout', name: 'layout', component: async () => import('./demo/layout.vue') },
        { path: '/container', name: 'container', component: async () => import('./demo/container.vue') },
        { path: '/icon', name: 'icon', component: async () => import('./demo/icon.vue') },
        { path: '/menu', name: 'menu', component: async () => import('./demo/menu.vue') },
        { path: '/popover', name: 'popover', component: async () => import('./demo/popover.vue') },
        { path: '/popper', name: 'popper', component: async () => import('./demo/popper.vue') }
      ]
    }
  ]
});

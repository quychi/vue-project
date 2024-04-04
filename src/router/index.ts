import { createRouter, createWebHistory } from 'vue-router'
import Layout from '../layout/Layout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Layout,
      children: [
        {
          path: 'home',
          component:  () => import('../views/HomeView.vue'),
        },
        {
          path: 'about',
          component:  () => import('../views/AboutView.vue')
        },
      ],
    },
  ]
})

export default router

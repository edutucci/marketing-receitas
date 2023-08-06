import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reclowcarb',
      name: 'reclowcarb',
      component: () => import('../views/ReceitaLowCarbPage.vue'),
    },
    {
      path: '/reclowcarbobrigado',
      name: 'reclowcarbobrigado',
      component: () => import('../views/ReceitaLowCarbPageObrigado.vue'),
    },
    {
      path: '/gfc',
      name: 'gfc',
      component: () => import('../views/GoldenFitCapsPage.vue'),
    },
    {
      path: '/gfcmenu',
      name: 'gfcmenu',
      component: () => import('../views/GoldenFitCapsMenu.vue'),
    },
    {
      path: '/instabiolink',
      name: 'instabiolink',
      component: () => import('../views/InstaBioLinkPage.vue'),
    },
    {
      path: '/comprargfc',
      name: 'comprargfc',
      component: () => import('../components/CheckoutGFCMonetizze.vue'),
    },
    {
      path: '/gtcare',
      name: 'gtcare',
      component: () => import('../views/GestaCarePage.vue'),
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router

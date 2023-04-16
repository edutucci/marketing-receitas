import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;

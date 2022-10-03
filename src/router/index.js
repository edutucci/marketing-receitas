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
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;

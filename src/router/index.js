import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Elige from '../views/Elige.vue';
import Login from '../views/Login.vue';
import RegAdiestrador from '../views/RegAdiestrador.vue';
import RegCliente from '../views/RegCliente.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/elige',
    name: 'elige',
    component: Elige,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/alta-adiestrador',
    name: 'alta-ad',
    component: RegAdiestrador,
  },
  {
    path: '/alta-cliente',
    name: 'alta-cliente',
    component: RegCliente,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

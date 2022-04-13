import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Elige from '../views/Elige.vue';
import Login from '../views/Login.vue';
import FormAd from '../views/FormAdiestrador.vue';
import FormCli from '../views/FormCliente.vue';
import ClientesList from '../views/ClientesList.vue';

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
    path: '/form-ad',
    name: 'form-ad',
    component: FormAd,
  },
  {
    path: '/form-cli',
    name: 'form-cli',
    component: FormCli,
  },
  {
    path: '/clientes',
    name: 'Clientes',
    component: ClientesList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

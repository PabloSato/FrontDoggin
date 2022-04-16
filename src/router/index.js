import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Eventos from '../views/Eventos.vue';
import Adiestradores from '../views/Adiestradores.vue';
import Elige from '../views/Elige.vue';
import Login from '../views/Login.vue';
import RegAdiestrador from '../views/RegAdiestrador.vue';
import RegCliente from '../views/RegCliente.vue';
import EditarUSuario from '../views/EditarUsuario.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/eventos',
    name: 'Eventos',
    component: Eventos,
  },
  {
    path: '/adiestradores',
    name: 'Adiestradores',
    component: Adiestradores,
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
  {
    path: '/edit/:id',
    name: 'edit',
    component: EditarUSuario,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

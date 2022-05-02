import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Eventos from '../views/Eventos.vue';
import Adiestradores from '../views/Adiestradores.vue';
import Elige from '../views/Elige.vue';
import Login from '../views/Login.vue';
import RegAdiestrador from '../views/RegAdiestrador.vue';
import RegCliente from '../views/RegCliente.vue';
import EditarUSuario from '../views/EditarUsuario.vue';
import DetalleAdiestrador from '../views/DetalleAdiestrador.vue';
import Contacto from '../views/Contacto.vue';
import MiPerfil from '../views/MiPerfil.vue';
import CrearEvento from '../views/CrearEvento.vue';
import Anuncio from '../views/Anuncio.vue';

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
    path: '/adiestradores/:idAdiestrador/eventos',
    name: 'eventos',
    component: Eventos,
    props: true,
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
    path: '/adiestradores/alta',
    name: 'alta-ad',
    component: RegAdiestrador,
  },
  {
    path: '/clientes/alta',
    name: 'alta-cliente',
    component: RegCliente,
  },
  {
    path: '/adiestradores/:id/detalle',
    name: 'detalle',
    component: DetalleAdiestrador,
    props: true,
  },
  {
    path: '/adiestradores/:id/contacto',
    name: 'contacto',
    component: Contacto,
    props: true,
  },
  {
    path: '/adiestradores/:id/miperfil',
    name: 'miPerfil',
    component: MiPerfil,
    props: true,
  },
  {
    path: '/adiestradores/:id/crearevento',
    name: 'crearEvento',
    component: CrearEvento,
    props: true,
  },
  {
    path: '/adiestradores/:id/broadcast',
    name: 'anuncio',
    component: Anuncio,
    props: true,
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

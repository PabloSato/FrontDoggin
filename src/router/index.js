import { createRouter, createWebHistory } from 'vue-router';
// -------------- VIEWS1 -------------------
import Home from '../views/Home.vue';
import Eventos from '../views/Eventos.vue';
import Adiestradores from '../views/Adiestradores.vue';
import Registro from '../views/Registro.vue';
import MiPerfil from '../views/Adiestrador/AdiMiPerfil.vue';
import Login from '../views/Login.vue';
// -------------- REGISTRO -------------------
import RegAdiestrador from '../views/Usuario/RegAdiestrador.vue';
import RegCliente from '../views/Usuario/RegCliente.vue';
// -------------- ADIESTRADOR -------------------
import DetalleAdiestrador from '../views/Adiestrador/DetalleAdiestrador.vue';
import AdiCrearEvento from '../views/Adiestrador/AdiCrearEvento.vue';
import AdiAnuncio from '../views/Adiestrador/AdiAnuncio.vue';
// -------------- CLIENTE -------------------
import ClienteContactoAdi from '../views/Cliente/ClienteContactoAdi.vue';
// -------------- OTROS -------------------
import EditarUSuario from '../views/Usuario/EditarUsuario.vue';

const routes = [
  // -------------- VIEWS1 -------------------
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
    component: Registro,
  },
  {
    path: '/adiestradores/:id/miperfil',
    name: 'miPerfil',
    component: MiPerfil,
    props: true,
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  // -------------- REGISTRO -------------------
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
  // -------------- ADIESTRADOR -------------------
  {
    path: '/adiestradores/:id/detalle',
    name: 'detalle',
    component: DetalleAdiestrador,
    props: true,
  },
  {
    path: '/adiestradores/:idOrganizador/eventos',
    name: 'eventos',
    component: Eventos,
    props: true,
  },
  {
    path: '/adiestradores/:id/crearevento',
    name: 'crearEvento',
    component: AdiCrearEvento,
    props: true,
  },
  {
    path: '/adiestradores/:id/broadcast',
    name: 'anuncio',
    component: AdiAnuncio,
    props: true,
  },
  // -------------- CLIENTES -------------------
  {
    path: '/clientes/:id/contacto',
    name: 'contacto',
    component: ClienteContactoAdi,
    props: true,
  },
  // -------------- OTROS -------------------
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

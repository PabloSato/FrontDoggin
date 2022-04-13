<template>
  <div class="home">
    <router-link to="/elige">Registrarse</router-link> |
    <router-link to="/login">Login</router-link> |
    <router-link to="/clientes">Clientes</router-link>
    <adiestradores-list />
  </div>
</template>

<script>
import AdiestradoresList from '@/views/AdiestradoresList.vue';
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: { AdiestradoresList },
};
</script>

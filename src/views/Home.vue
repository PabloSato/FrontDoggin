<template>
  <div class="home">
    <router-link to="/elige">Registrarse</router-link> |
    <router-link to="/login">Login</router-link>
    <h3 v-if="error">{{ error }}</h3>
    <div v-if="adiestradores.length">
      <ListAdiestra :adiestradores="adiestradores" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import getAdiestradores from '../componsables/Adiestrador/getAdiestradores';
import ListAdiestra from '../components/ListAdiestra.vue';

export default {
  name: 'HomeView',
  components: { ListAdiestra },
  setup() {
    const { adiestradores, error, load } = getAdiestradores();

    load();

    return { adiestradores, error };
  },
};
</script>

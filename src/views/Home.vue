<template>
  <Header />
  <div class="home">
  </div>
</template>

<script>
//Componentes
import Header from '../components/Header.vue'
export default {
  components: {Header},
  name: 'Home',
  setup() {
    if (localStorage.getItem('idUsuario')) {
    }
  },
};
</script>

<template>
  <Header />
  <div class="home">
  </div>
</template>

<script>
import createStore from '../store/index';
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

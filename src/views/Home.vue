<template>
  <div class="home"></div>
</template>

<script>
//Componentes
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
  components: { Header, Footer },
  name: 'Home',
  setup() {
    if (localStorage.getItem('idUsuario')) {
    }
  },
};
</script>
<style scoped>
.home {
  min-height: 90vh;
  min-width: 100vw;
  background: url('https://images.unsplash.com/photo-1543702303-71766260f6d3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80')
    center;
  background-size: cover;
}
</style>

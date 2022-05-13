<template>
  <!-- <div class="home"></div> -->
  <NoticiaSentarse />
  <NoticiaTumbarse />
</template>

<script>
//Componentes
import Header from '../components/partials/Header.vue';
import NoticiaSentarse from '../components/Home/NoticiaSentarse.vue';
import NoticiaTumbarse from '../components/Home/NoticiaTumbarse.vue';
import Footer from '../components/partials/Footer.vue';
export default {
  components: { Header, Footer, NoticiaSentarse, NoticiaTumbarse },
  name: 'Home',
  setup() {
    if (localStorage.getItem('idUsuario')) {
    }
  },
};
</script>
<style scoped>
.container{
  margin-bottom: 30px;
}
</style>

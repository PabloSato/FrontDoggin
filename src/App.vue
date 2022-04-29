<template .container-flex>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
//Componentes
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
//Utilidades
import { ref } from 'vue';
import { mapActions } from 'vuex';
export default {
  components: { Header, Footer },
  computed: {
    // isLogin(){
    //   return localStorage.getItem('token');
    // },
  },
  methods: {
    ...mapActions(['leerToken']),
  },
  created() {
    this.leerToken();
  },
  updated() {
    console.log('modificado');
  },
};
</script>

<style></style>

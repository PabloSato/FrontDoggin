<template .container-flex>
  <Header :userLogin="login" />
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
  // computed: {
  //   login() {
  //     console.log(localStorage.getItem('token'));
  //     return !!localStorage.getItem('token');
  //   },
  // },
  data() {
    return { login: !!localStorage.getItem('token') };
  },
  mounted() {
    this.emitter.on('isLog', log => {
      this.login = log;
    });
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

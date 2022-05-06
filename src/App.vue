<template .container-flex>
  <Header :userLogin="login" />
  <router-view />
  <Footer />
</template>

<script>
//Componentes
import Header from './components/partials/Header.vue';
import Footer from './components/partials/Footer.vue';
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
    return {
      login: {
        token: localStorage.getItem('token'),
        rol: localStorage.getItem('rol'),
        id: localStorage.getItem('id'),
      },
    };
  },
  mounted() {
    this.emitter.on('isLog', loginInfo => {
      this.login = loginInfo;
    });
  },
  methods: {
    ...mapActions(['leerToken']),
  },
  created() {
    this.leerToken();
  },
  updated() {},
};
</script>

<style></style>

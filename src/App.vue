<template .container-flex>
  <router-view />
</template>

<script>
import { ref } from 'vue';
import { mapActions } from 'vuex';
export default {
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

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>

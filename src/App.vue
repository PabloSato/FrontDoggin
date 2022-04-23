<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/eventos">Eventos</router-link> |
  <router-link to="/adiestradores">Adiestradores</router-link> |
  <router-link to="/elige">Registrarse</router-link> |
  <router-link v-if="isLogin" to="/">Logout</router-link>
  <router-link v-else to="/login">Login</router-link>
  <router-view />
  {{isLogin}}
</template>

<script>
import {mapActions} from 'vuex'
export default {

  computed:{
    isLogin(){
      return localStorage.getItem('token');
    },
  },
  methods:{
    ...mapActions(['leerToken'])
  },
  created() {
    this.leerToken()
  },
  updated(){
    console.log('modificado');
  }
}

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

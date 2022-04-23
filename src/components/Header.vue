<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/eventos">Eventos</router-link> |
  <router-link to="/adiestradores">Adiestradores</router-link> |
  <router-link to="/elige">Registrarse</router-link> |
  <router-link v-if="isLogin" @click="logOut" to="/">Logout</router-link>
  <router-link v-else to="/login">Login</router-link>
</template>

<script>
import {ref} from 'vue';
export default {
  setup(){
    let isLogin = ref(null);
    if(localStorage.getItem('token')){
      isLogin.value = true;
    }
    const logOut = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('userId')
      isLogin.value = false;
    }
    return{isLogin, logOut}
  }
}
</script>

<style>

</style>
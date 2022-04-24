<template>
    <Header />
  <h2>Registrarse</h2>
  <router-link to="/alta-adiestrador">¿Eres Adiestrador?</router-link>
  <br />
  <router-link to="/alta-cliente">¿Eres Cliente?</router-link>
</template>

<script>
//Componentes
import Header from '../components/Header.vue'
//Utilidades
import {useRouter} from 'vue-router';
export default {
  components: {Header},
  setup(){
    //Router
    const router = useRouter();
    //Comprobamos si el Usuario ya está Logueado, en el caso que asi sea, lo enviamos a Home
    if(localStorage.getItem('token') || localStorage.getItem('userId')){
      router.push('/')      
    }
  }
};
</script>

<style></style>

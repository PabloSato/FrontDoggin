<template>
  <div class="elige">
    <h2>Registrarse</h2>
    <div class="opcs">
      <router-link to="/alta-adiestrador">¿Eres Adiestrador?</router-link>
      <br />
      <router-link to="/alta-cliente">¿Eres Cliente?</router-link>
    </div>
  </div>
</template>

<script>
//Componentes
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
//Utilidades
import { useRouter } from 'vue-router';
export default {
  components: { Header, Footer },
  setup() {
    //Tools
    const router = useRouter();
    //Comprobamos si el Usuario ya está Logueado, en el caso que asi sea, lo enviamos a Home
    if (localStorage.getItem('token') || localStorage.getItem('userId')) {
      router.push('/');
    }
  },
};
</script>

<style>
.elige {
  padding: 50px 0;
  min-height: 90vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
}
.opcs {
  width: 60%;
  max-width: 700px;
  margin: 40px auto;
  display: flex;
  justify-content: space-between;
}
.opcs a {
  display: block;
  padding: 15px;
  color: #184d47;
  border: 2px solid #184d47;
  border-radius: 10px;
  font-size: 20px;
  text-decoration: none;
  box-shadow: 0 5px 5px #170f11;
}
.opcs a:hover {
  background-color: #184d47;
  color: #ddd;
}
</style>

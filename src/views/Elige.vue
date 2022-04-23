<template>
    <Header />
  <h2>Registrarse</h2>
  <router-link to="/alta-adiestrador">¿Eres Adiestrador?</router-link>
  <br />
  <router-link to="/alta-cliente">¿Eres Cliente?</router-link>
</template>

<script>
import Header from '../components/Header.vue'
export default {
  components: {Header}
};
</script>

<style></style>

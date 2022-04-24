<template>
    <Header />
  <h1>Adiestradores</h1>
  <lista-adiestradores />
</template>

<script>
//Componentes
import ListaAdiestradores from '../components/ListaAdiestradores.vue';
import Header from '../components/Header.vue'
export default {
  components: { ListaAdiestradores, Header },
};
</script>

<style></style>

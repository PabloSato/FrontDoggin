<template>
    <Header />
  <h1>Eventos</h1>
  <lista-eventos :idAdiestrador="idAdiestrador" />
</template>

<script>
import ListaEventos from '../components/ListaEventos.vue';
import Header from '../components/Header.vue'
export default {
  components: { ListaEventos, Header },
  props: ['idAdiestrador'],
};
</script>

<style></style>

<template>
    <Header />
  <h1>Eventos</h1>
  <lista-eventos :idAdiestrador="idAdiestrador" />
</template>

<script>
//Componentes
import Header from '../components/Header.vue'
//Composables
import ListaEventos from '../components/ListaEventos.vue';
export default {
  components: { ListaEventos, Header },
  props: ['idAdiestrador'],
};
</script>

<style></style>

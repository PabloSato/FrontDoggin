<template>
  <h1>Eventos</h1>
  <lista-eventos :idAdiestrador="idAdiestrador" />
</template>

<script>
import ListaEventos from '../components/ListaEventos.vue';
export default {
  components: { ListaEventos },
  props: ['idAdiestrador'],
};
</script>

<style></style>

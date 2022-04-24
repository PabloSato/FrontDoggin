<template>
  <Header />
  <div class="contenedor">
    <div class="titulos">
      <h1>Eventos</h1>
      <h2>Lista de eventos activos</h2>
    </div>
    <div class="lista-eventos">
      <lista-eventos :idAdiestrador="idAdiestrador" />
    </div>
  </div>
  <Footer />
</template>

<script>
//Componentes
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
//Composables
import ListaEventos from '../components/ListaEventos.vue';
export default {
  components: { ListaEventos, Header, Footer },
  props: ['idAdiestrador'],
};
</script>

<style>
.contenedor {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}
.lista-eventos {
  padding: 0 auto;
  max-width: 1000px;
}
.titulos {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

<template>
  <div class="contenedor">
    <div class="titulos">
      <h1>Adiestradores</h1>
      <h2>Lista de adiestradores</h2>
    </div>
    <div class="lista-adiestradores">
      <lista-adiestradores />
    </div>
  </div>
</template>

<script>
//Componentes
import ListaAdiestradores from '../components/ListaAdiestradores.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
export default {
  components: { ListaAdiestradores, Header, Footer },
};
</script>

<style>
.contenedor {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  min-width: 100vw;
  min-height: 95vh;
}
.lista-adiestradores {
  padding: 0 auto;
  max-width: 100%;
}
.titulos {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>

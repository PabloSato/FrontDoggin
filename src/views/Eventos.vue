<template>
  <div class="backdrop" v-if="eventoSeleccionado" @click="ocultarEvento"></div>
  <div class="contenedor">
    <div class="titulos">
      <h1>Eventos</h1>
      <h2>Lista de eventos activos</h2>
    </div>
    <div class="detalles" v-if="eventoSeleccionado">
      <detalle-evento :evento="eventoSeleccionado" />
    </div>
    <div class="lista-eventos">
      <lista-eventos
        :idAdiestrador="idAdiestrador"
        @eventoSeleccionado="mostrarEvento"
      />
    </div>
  </div>
</template>

<script>
//Componentes
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import DetalleEvento from '../components/DetalleEvento.vue';
//Composables
import ListaEventos from '../components/ListaEventos.vue';
import { ref } from '@vue/reactivity';
export default {
  components: { ListaEventos, Header, Footer, DetalleEvento },
  props: ['idAdiestrador'],
  setup() {
    const eventoSeleccionado = ref(null);
    const mostrarEvento = evento => {
      eventoSeleccionado.value = evento;
    };
    const ocultarEvento = () => {
      eventoSeleccionado.value = null;
    };

    return { mostrarEvento, eventoSeleccionado, ocultarEvento };
  },
};
</script>

<style>
.contenedor {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 100vw;
  min-height: 90vh;
}
.lista-eventos {
  padding: 0 auto;
  width: 100%;
}
.titulos {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.backdrop {
  z-index: 100;
  background: rgb(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  position: absolute;
}
.detalles {
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  text-align: center;
  z-index: 150;
  position: absolute;
  height: 90vh;
  width: 50%;
  left: 25%;
  margin: 0;
  border: 2px solid black;
}
</style>

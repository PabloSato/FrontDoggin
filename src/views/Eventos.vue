<template>
  <div class="backdrop" v-if="eventoSeleccionado" @click="ocultarEvento"></div>
  <div class="contenedor">
    <div class="titulos">
      <h1>Eventos</h1>
    </div>
    <div class="detalles" v-if="eventoSeleccionado">
      <detalle-evento
        :evento="eventoSeleccionado"
        :cliente="cliente"
        :adiestrador="adiestrador"
      />
    </div>
    <div class="lista-eventos">
      <lista-eventos
        :idOrganizador="idOrganizador"
        :key="idOrganizador"
        :cliente="cliente"
        :adiestrador="adiestrador"
        @eventoSeleccionado="mostrarEvento"
      />
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { watch } from 'vue';
//Componentes
import DetalleEvento from '@/components/Evento/DetalleEvento.vue';
//Composables
import ListaEventos from '@/components/Evento/ListaEventos.vue';
import getCliente from '@/composables/Cliente/getCliente';
import useEmitter from '@/composables/Tools/emitter';
import getAdiestrador from '@/composables/Adiestrador/getAdiestrador';

export default {
  components: { ListaEventos, DetalleEvento },
  props: ['idOrganizador'],
  setup() {
    const emitter = useEmitter();
    const eventoSeleccionado = ref(null);
    const mostrarEvento = evento => {
      eventoSeleccionado.value = evento;
    };
    const ocultarEvento = () => {
      eventoSeleccionado.value = null;
    };

    const rolUsuario = localStorage.getItem('rol');
    const idCliente =
      rolUsuario === 'CLIENTE' ? localStorage.getItem('id') : null;
    const idAdiestrador =
      rolUsuario === 'ADIESTRADOR' ? localStorage.getItem('id') : null;

    const { cliente, loadCliente } = getCliente(idCliente);
    loadCliente();

    const { adiestrador, loadAdiestrador } = getAdiestrador(idAdiestrador);
    loadAdiestrador();

    emitter.on('clienteActualizado', () => {
      loadCliente();
    });
    return {
      mostrarEvento,
      eventoSeleccionado,
      ocultarEvento,
      cliente,
      adiestrador,
    };
  },
};
</script>

<style lang="scss" scoped>
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
  background: black;
  opacity: 0.8;
  width: 100vw;
  height: 100vh;
  position: absolute;
}

/* css del modal */
.detalles {
  /* background: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */
  text-align: center;
  z-index: 150;
  position:fixed;
  height: 90vh;
  width: 100%;
  margin: 0;
  /* border: 2px solid black; */
}
@media screen and (min-width: 750px) {
.detalles {

  width: 50%;
  left: 25%;
}


}
</style>

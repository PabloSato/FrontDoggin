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
        :cliente="cliente"
        :adiestrador="adiestrador"
        @eventoSeleccionado="mostrarEvento"
      />
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';

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
      console.log('clienteActualizado!');
      console.log('cliente', cliente);
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

<template>
  <div class="eventos">
    <filtro-eventos
      @filtroActualizado="filtro = $event"
      :current="filtro"
      v-if="!idOrganizador && (cliente || adiestrador)"
    />
    <div class="lista">
<evento
      v-for="evento in eventosVisibles"
      :key="evento._id"
      :evento="evento"
      @eventoSeleccionado="mostrarEvento"
      :cliente="cliente"
      :adiestrador="adiestrador"
    />
    </div>
    
  </div>
</template>

<script>
//Componentes
import Evento from '@/components/Evento/Evento.vue';
import FiltroEventos from '@/components/Evento/FiltroEventos.vue';
//Composables
import getEventos from '@/composables/Evento/getEventos';
//Utilidades
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
import useEmitter from '@/composables/Tools/emitter';

export default {
  components: { Evento, FiltroEventos },
  props: ['idOrganizador', 'cliente', 'adiestrador'],
  setup(props, context) {
    const emitter = useEmitter();
    const { eventos, loadEventos } = getEventos(
      localStorage.getItem('token'),
      props.idOrganizador
    );
    loadEventos();

    const filtro = ref('activos');
    const eventosVisibles = computed(() => {
      if (filtro.value === 'misEventos') {
        const usuario = props.cliente
          ? props.cliente
          : props.adiestrador
          ? props.adiestrador
          : null;
        if (usuario) {
          const interseccion = eventos.value.filter(evento => {
            const resultado = usuario.eventos.filter(eventoUsuario => {
              return evento._id === eventoUsuario._id;
            });
            return !!resultado.length;
          });
          return interseccion;
        }
      }
      return eventos.value;
    });

    const eventoSeleccionado = ref(null);

    emitter.on('eventoEliminado', idEvento => {
      eventos.value = eventos.value.filter(e => e._id !== idEvento);
    });
    const mostrarEvento = evento => {
      context.emit('eventoSeleccionado', evento);
    };

    //console.log(eventosVisibles); //para ver que viene
    return { eventosVisibles, mostrarEvento, eventoSeleccionado, filtro };
  },
};
</script>

<style>
.eventos {
  margin: 0 auto;
  display: flex;
  flex-flow: column;
  /* align-items: center; */
}
.lista{
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
</style>

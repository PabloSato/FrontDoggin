<template>
  <div class="eventos">
    <filtro-eventos
      @filtroActualizado="filtro = $event"
      :current="filtro"
      v-if="cliente || adiestrador"
    />
    <evento
      v-for="evento in eventosVisibles"
      :key="evento._id"
      :evento="evento"
      @eventoSeleccionado="mostrarEvento"
      :cliente="cliente"
      :adiestrador="adiestrador"
    />
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
import useEmitter from '@/composables/emitter';

export default {
  components: { Evento, FiltroEventos },
  props: ['idAdiestrador', 'cliente', 'adiestrador'],
  setup(props, context) {
    const emitter = useEmitter();

    // let token = '';
    // if (localStorage.getItem('token')) {
    //   token = localStorage.getItem('token');
    // }
    const { eventos, load } = getEventos(localStorage.getItem('token'));
    load();

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
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>

<template>
  <div class="eventos">
    <evento
      v-for="evento in eventosVisibles"
      :key="evento._id"
      :evento="evento"
      @eventoSeleccionado="mostrarEvento"
      :cliente="cliente"
    />
  </div>
</template>

<script>
//Componentes
import Evento from '../components/Evento.vue';

//Composables
import getEventos from '../composables/Evento/getEventos';
//Utilidades
import { ref } from '@vue/reactivity';
import { computed } from '@vue/runtime-core';
export default {
  components: { Evento },
  props: ['idAdiestrador', 'cliente'],
  setup(props, context) {
    let token = '';
    if (localStorage.getItem('token')) {
      token = localStorage.getItem('token');
    }
    const { eventos, load } = getEventos(token);
    load();

    const eventosVisibles = computed(() => {
      // let resultado = eventos.value;
      // if (props.idAdiestrador) {
      //   resultado = eventos.value.filter(evento => {
      //     return evento.idAdiestrador === props.idAdiestrador;
      //   });
      // }
      // return resultado.filter(evento => !evento.terminado && !evento.privado);
      return eventos.value;
    });

    const eventoSeleccionado = ref(null);
    const mostrarEvento = evento => {
      context.emit('eventoSeleccionado', evento);
    };
    //console.log(eventosVisibles); //para ver que viene
    return { eventosVisibles, mostrarEvento, eventoSeleccionado };
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

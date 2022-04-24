<template>
  <div class="container">
    <evento
      v-for="evento in eventosVisibles"
      :key="evento._id"
      :evento="evento"
    />
  </div>
</template>

<script>
//Componentes
import Evento from '../components/Evento.vue';
//Composables
import getEventos from '../composables/Evento/getEventos';
//Utilidades
import { computed } from '@vue/runtime-core';
export default {
  components: { Evento },
  props: ['idAdiestrador'],
  setup(props) {
    let token = '';
    if (localStorage.getItem('token')) {
      token = localStorage.getItem('token');
    }
    const { eventos, load } = getEventos(token);
    load();
    const eventosVisibles = computed(() => {
      let resultado = eventos.value;
      if (props.idAdiestrador) {
        resultado = eventos.value.filter(evento => {
          return evento.idAdiestrador === props.idAdiestrador;
        });
      }
      return resultado.filter(evento => !evento.terminado && !evento.privado);
    });
    //console.log(eventosVisibles); //para ver que viene
    return { eventosVisibles };
  },
};
</script>

<style>
.container {
  width: 100%;
  padding: 20px auto;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
}
</style>

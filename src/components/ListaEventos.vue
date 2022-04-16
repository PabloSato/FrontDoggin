<template>
  <h2>Lista de eventos activos</h2>
  <div class="grid-container">
    <evento
      v-for="evento in eventosVisibles"
      :key="evento._id"
      :evento="evento"
    />
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import Evento from '../components/Evento.vue';
import getEventos from '../composables/Evento/getEventos';
export default {
  components: { Evento },
  setup() {
    const { eventos, load } = getEventos();
    load();
    const eventosVisibles = computed(() => {
      return eventos.value.filter(
        evento => !evento.terminado && !evento.privado
      );
    });
    return { eventosVisibles };
  },
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>

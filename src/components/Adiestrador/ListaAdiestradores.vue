<template>
  <div class="adiestradores">
    <input type="text" v-model="search" placeholder="Buscar" />
    <adiestrador
      v-for="adiestrador in adiestradoresVisibles"
      :key="adiestrador._id"
      :adiestrador="adiestrador"
    />
  </div>
</template>

<script>
//Componentes
import Adiestrador from './Adiestrador.vue';
//Composables
import getAdiestradores from '../../composables/Adiestrador/getAdiestradores';
import { computed, ref } from '@vue/runtime-core';
export default {
  components: { Adiestrador },
  setup() {
    const search = ref(null);
    search.value = '';
    const { adiestradores, load } = getAdiestradores();
    load();
    const adiestradoresVisibles = computed(() => {
      return adiestradores.value.filter(a =>
        a.nombre.toLowerCase().match(search.value.toLowerCase())
      );
    });
    return { adiestradoresVisibles, search };
  },
};
</script>

<style>
.adiestradores {
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>

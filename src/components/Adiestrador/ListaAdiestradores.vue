<template>
  <div class="adiestradores">
    <input type="text" v-model="search" placeholder="Buscar" />
    <Multiselect
      v-model="filterTags"
      mode="tags"
      placeholder="Selecciona filtros"
      :options="TAGS"
      :search="true"
    />
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
import Multiselect from '@vueform/multiselect';

export default {
  components: { Adiestrador, Multiselect },
  setup() {
    const search = ref(null);
    search.value = '';

    const TAGS = ref([]);
    TAGS.value = ['Agility', 'Cachorros', 'Razas grandes', 'Pastoreo'];

    const filterTags = ref([]);

    const { adiestradores, load } = getAdiestradores();
    load();
    const adiestradoresVisibles = computed(() => {
      let adiestradoresBuscados = adiestradores.value.filter(a =>
        a.nombre.toLowerCase().match(search.value.toLowerCase())
      );
      if (filterTags.value.length) {
        adiestradoresBuscados = adiestradoresBuscados.filter(a => {
          if (!a.tags) return false;
          const resultado = a.tags.find(
            aT => !!filterTags.value.find(t => t === aT)
          );
          return !!resultado;
        });
      }
      return adiestradoresBuscados;
    });

    const filterAdiestradores = () => {
      alert('ya selected!');
    };
    return {
      adiestradoresVisibles,
      search,
      TAGS,
      filterTags,
      filterAdiestradores,
    };
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

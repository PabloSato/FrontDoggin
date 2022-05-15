<template>
  <div class="adiestradores">
    <input class="search" type="text" v-model="search" placeholder="Buscar" />
    <Multiselect
      class="multiselect"
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

<style scoped>
.adiestradores {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
}
.search {
  height: 40px;
  width: 80%;
  padding: 10px;
  border: var(--ms-border-width, 1px) solid var(--ms-border-color, #d1d5db);
  border-radius: var(--ms-radius, 4px);
}
.multiselect {
  position: relative;
  margin: 10px !important;
  width: 80% !important;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  border: var(--ms-border-width, 1px) solid var(--ms-border-color, #d1d5db);
  border-radius: var(--ms-radius, 4px);
  background: var(--ms-bg, #fff);
  font-size: var(--ms-font-size, 1rem);
  min-height: calc(
    var(--ms-border-width, 1px) * 2 + var(--ms-font-size, 1rem) *
      var(--ms-line-height, 1.375) + var(--ms-py, 0.5rem) * 2
  );
}

@media screen and (min-width: 750px) {
  .search {
    width: 540px;
  }
  .multiselect {
    width: 540px !important;
    margin-inline: 20% !important;
  }
}
</style>

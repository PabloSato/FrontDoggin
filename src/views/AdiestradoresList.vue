<template>
  <single-adiestrador
    v-for="adiestrador in adiestradores"
    :key="adiestrador.nombre"
    :adiestrador="adiestrador"
  />
</template>

<script>
import { ref } from '@vue/reactivity';
import SingleAdiestrador from '../components/SingleAdiestrador.vue';
import getAdiestradores from '../componsables/getAdiestradores';
export default {
  components: { SingleAdiestrador },
  setup() {
    const { adiestradores, error, load } = getAdiestradores();
    load();
    return { adiestradores };
  },
};
</script>

<style></style>

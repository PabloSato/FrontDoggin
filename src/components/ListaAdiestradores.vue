<template>
  <h2>Lista de adiestradores</h2>
  <div class="grid-container">
    <adiestrador
      v-for="adiestrador in adiestradores"
      :key="adiestrador._id"
      :adiestrador="adiestrador"
    />
  </div>
</template>

<script>
import Adiestrador from '../components/Adiestrador.vue';
import getAdiestradores from '../composables/Adiestrador/getAdiestradores';
export default {
  components: { Adiestrador },
  setup() {
    const { adiestradores, load } = getAdiestradores();
    load();
    return { adiestradores };
  },
};
</script>

<style>
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
</style>

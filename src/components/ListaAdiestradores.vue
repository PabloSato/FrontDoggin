<template>
  <h2>Lista de adiestradores</h2>
  <div class="container">
    <adiestrador
      v-for="adiestrador in adiestradores"
      :key="adiestrador._id"
      :adiestrador="adiestrador"
    />
  </div>
</template>

<script>
//Componentes
import Adiestrador from '../components/Adiestrador.vue';
//Composables
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
.container {
  min-height: 100vh;
  padding: 20px 0;
  display: flex;
  flex-direction: row;
}
</style>

<template>
  <div class="adiestradores">
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
.adiestradores {
  max-width: 80%;
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
}
</style>

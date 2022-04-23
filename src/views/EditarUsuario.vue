<template>
    <Header />
  <h2>Editar Descripción</h2>
  <form action="">
    <label for="bio">Descripción:</label><br />
    <textarea
      name="bio"
      id="bio"
      cols="30"
      rows="10"
      v-model="adiestrador.bio"
    ></textarea
    ><br />
    <button>Editar</button>
  </form>
</template>

<script>
import getAdiestrador from '../composables/Adiestrador/getAdiestrador';
import Header from '../components/Header.vue'
import _ from 'lodash';
export default {
  components: {Header},
  props: ['id'],
  setup(props) {
    let idAd = '625d730e35c6f4bb050fe7db';
    const { adiestrador, error, load } = getAdiestrador(idAd);
    load();

    return { adiestrador };
  },
};
</script>

<style></style>

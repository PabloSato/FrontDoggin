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
//Componentes
import Header from '../../components/partials/Header.vue';
//Composables
import getAdiestrador from '../../composables/Adiestrador/getAdiestrador';
//Utilidades
import _ from 'lodash';
export default {
  components: { Header },
  props: ['id'],
  setup(props) {
    let idAd = '625d730e35c6f4bb050fe7db';
    const { adiestrador, error, loadAdiestrador } = getAdiestrador(idAd);
    loadAdiestrador();

    return { adiestrador };
  },
};
</script>

<style></style>

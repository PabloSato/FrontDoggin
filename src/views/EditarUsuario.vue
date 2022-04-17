<template>
  <h2>Editar Descripción</h2>
  <form action="">
    <label for="bio">Descripción:</label>
    <textarea
      name="bio"
      id="bio"
      cols="30"
      rows="10"
      v-model="adiestrador.bio"
    ></textarea>
  </form>
</template>

<script>
import getAdiestrador from '../composables/Adiestrador/getAdiestrador';
import _ from 'lodash';
export default {
  props: ['id'],
  setup(props) {
    let idAd = '625bdf68ffb1e36e3f12acc0';
    const { adiestrador, error, load } = getAdiestrador(props.idAd);
    load();

    return { adiestrador };
  },
};
</script>

<style></style>

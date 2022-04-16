<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="adiestrador">
    <h3>{{ adiestrador.nombre }}</h3>
    <p>{{ adiestrador.email }}</p>
    <p>{{ adiestrador.bio }}</p>
    <p>{{ adiestrador.eventos }}</p>
    <p>{{ adiestrador.rating }}</p>
    <!-- <div v-if=""></div> -->
    <router-link :to="{ name: 'edit', params: { id: adiestrador._id } }"
      >Editar</router-link
    >
  </div>
</template>

<script>
import getAdiestrador from '../componsables/Adiestrador/getAdiestrador';
import { ref } from 'vue';
export default {
  props: ['id'],
  setup(props) {
    const eventos = ref(null);
    const { adiestrador, error, load } = getAdiestrador(props.id);

    load();

    return { adiestrador, error };
  },
};
</script>

<style></style>

<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="adiestrador">
    <h3>{{ adiestrador.nombre }}</h3>
    <p>{{ adiestrador.email }}</p>
  </div>
</template>

<script>
import getAdestrador from '../componsables/Adiestrador/getAdiestrador';
export default {
  props: ['id'],
  setup(props) {
    const { adiestrador, error, load } = getAdestrador(props.id);

    load();

    return { adiestrador, error };
  },
};
</script>

<style></style>

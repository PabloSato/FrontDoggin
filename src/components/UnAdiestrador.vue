<template>
  <router-link :to="{ name: 'perfil', params: { id: adiestrador._id } }">
    <h2>{{ adiestrador.nombre }}</h2></router-link
  >
</template>

<script>
export default {
  props: ['adiestrador'],
  setup(props) {},
};
</script>

<style></style>

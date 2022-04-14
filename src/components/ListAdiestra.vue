<template>
  <div v-for="adiestrador in adiestradores" :key="adiestrador">
    <UnAdiestrador :adiestrador="adiestrador" />
  </div>
</template>

<script>
import UnAdiestrador from './UnAdiestrador.vue';
export default {
  props: ['adiestradores'],
  components: { UnAdiestrador },
  setup(props) {
    console.log();
  },
};
</script>

<style></style>

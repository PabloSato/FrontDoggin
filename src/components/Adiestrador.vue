<template>
  <div class="card">
    <h3>{{ adiestrador.nombre }}</h3>
    <p>{{ adiestrador.bio }}</p>
    <p>
      Rating: <span v-if="adiestrador.rating">{{ adiestrador.rating }}</span
      ><span v-else>No disponible</span>
    </p>
    <button @click="verEventos(adiestrador._id)">Ver eventos</button>
    <button>valorar</button>
  </div>
</template>

<script>
import { useRouter } from 'vue-router';
export default {
  props: ['adiestrador'],
  setup() {
    const router = useRouter();
    const verEventos = id => {
      router.push({ path: `/adiestradores/${id}/eventos` });
    };

    return { verEventos };
  },
};
</script>

<style></style>

<template>
<div class="card">
  <h3>{{ evento.nombre }}</h3>
  <p>{{ evento.descripcion }}</p>
  <p>{{ evento.fecha }} </p>
  <button @click="toggleAsistir"><span v-if="asistir">Asistir</span><span v-else>Cancelar</span></button>
</div>

</template>

<script>
import { ref } from '@vue/reactivity';
export default {
  props: ['evento'],
  setup () {
    const asistir = ref(null);
    asistir.value = true;
    const toggleAsistir = () => {
      asistir.value = !asistir.value;
    };
    return { asistir, toggleAsistir };
  }
};
</script>

<style>
button {
  cursor: pointer;
}
</style>

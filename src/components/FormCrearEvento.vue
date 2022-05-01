<template>
  <fieldset>
    <form @submit.prevent="procForm">
      <label for="">Nombre del Evento: </label>
      <input
        type="text"
        v-model="ev.nombre"
        placeholder="añade nombre...."
      /><br />
      <label for="">Descripción:</label>
      <input
        type="text"
        v-model="ev.descripcion"
        placeholder="añade descripcion...."
      /><br />
      <label for="">Fecha: </label>
      <input type="date" v-model="ev.fecha" /><br />
      <label for="">Aforo: </label>
      <input type="number" v-model="ev.maxAforo" /><br />
      <label for="">Privado: </label>
      <input type="radio" v-model="ev.privado" value="s" />
      <label for="">Si</label><br />
      <input type="submit" value="Crear" />
      <input type="reset" value="Borrar" />
    </form>
    <p v-if="errorEvento">
      {{ errorEvento }}
    </p>
  </fieldset>
</template>

<script>
//Utilidades
import { ref } from 'vue';
export default {
  props: ['evento', 'errorEvento'],
  setup(props, context) {
    const ev = ref(null);
    ev.value = props.evento;
    const procForm = () => {
      context.emit('formProce', ev);
    };

    return { ev, procForm };
  },
};
</script>

<style></style>

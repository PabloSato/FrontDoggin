<template>
  <fieldset>
    <form @submit.prevent="procForm">
      <label for="">Nombre del Evento: </label>
      <input
        type="text"
        v-model="evento.nombre"
        placeholder="añade nombre...."
      /><br />
      <label for="">Descripción:</label>
      <input
        type="text"
        v-model="evento.descripción"
        placeholder="añade descripcion...."
      /><br />
      <label for="">Fecha: </label>
      <input type="date" v-model="evento.fecha" /><br />
      <label for="">Aforo: </label>
      <input type="number" v-model="evento.maxAforo" /><br />
      <label for="">Privado: </label>
      <input type="radio" v-model="evento.privado" value="s" />
      <label for="">Si</label><br />
      <input type="submit" value="Crear" />
      <input type="reset" value="Borrar" />
    </form>
  </fieldset>
</template>

<script>
//Utilidades
import { ref } from 'vue';
export default {
  props: ['idAdiestrador', 'evento'],
  setup(props, context) {
    const evento = ref(null);
    evento.value = props.evento;
    const procForm = () => {
      context.emit('formProce', evento);
    };

    return { evento, procForm };
  },
};
</script>

<style></style>

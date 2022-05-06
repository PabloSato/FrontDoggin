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
      <div v-if="!publico">
        <label for="">Privado: </label>
        <input type="radio" v-model="privado" value="s" />
        <label for="">Si</label>
        <input type="radio" v-model="privado" value="n" />
        <label for="">No</label><br />
      </div>
      <div v-if="publico">
        <label for="">Privado: </label>
        <input type="radio" v-model="ev.privado" value="s" checked />
        <label for="">Si</label>
        <input type="radio" v-model="privado" value="n" />
        <label for="">No</label><br />
        <label for="">Nombre del Cliente</label>
        <input type="text" v-model="ev.nombreCliente" />
      </div>
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
import { ref, watch } from 'vue';
export default {
  props: ['evento', 'errorEvento'],
  setup(props, context) {
    const publico = ref(false);
    const privado = ref(null);
    const ev = ref(null);
    ev.value = props.evento;
    const procForm = () => {
      context.emit('formProce', ev);
    };

    const watchPrivado = watch(privado, () => {
      privado.value === 's' ? (publico.value = true) : (publico.value = false);
    });

    return { ev, procForm, privado, publico };
  },
};
</script>

<style></style>

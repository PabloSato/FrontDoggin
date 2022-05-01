<template>
  <div class="crearEvento">
    <h2>Crear Evento</h2>
    <FormCrearEvento
      :idAdiestrador="id"
      :evento="evento"
      @formProce="procForm(evento)"
    />
  </div>
</template>

<script>
//Componentes
import FormCrearEvento from '../components/FormCrearEvento.vue';
//Utilidades
import { ref } from 'vue';
export default {
  props: ['id'],
  components: { FormCrearEvento },
  setup(props) {
    //Recogemos los campos del evento
    const idAdiestrador = props.id;
    const evento = ref({
      nombre: null,
      descripción: null,
      idAdiestrador: idAdiestrador,
      fecha: null,
      maxAforo: null,
      private: null,
    });

    const procForm = async evento => {
      console.log(evento);
    };

    return { evento, procForm };
  },
};
</script>

<style></style>

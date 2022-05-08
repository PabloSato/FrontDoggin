<template>
  <div class="crearEvento">
    <FormCrearEvento
      :evento="evento"
      :errorEvento="errorEvento"
      @formProce="procForm(evento, invitados)"
    />
  </div>
</template>

<script>
//Componentes
import FormCrearEvento from '../../components/Formularios/FormCrearEvento.vue';
//Composables
import createEvento from '../../composables/Evento/createEvento';
//Utilidades
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  props: ['id'],
  components: { FormCrearEvento },
  setup(props) {
    const router = useRouter();
    const idAdiestrador = localStorage.getItem('id');
    const errorEvento = ref(null);
    const feedback = ref(null);
    //Recogemos los campos del evento
    const evento = ref({
      nombre: null,
      descripcion: null,
      idAdiestrador: idAdiestrador,
      fecha: null,
      maxAforo: null,
      invitados: [],
    });
    const procForm = async evento => {
      const { nuevoEvento, error, insertEvento } = createEvento(evento);
      await insertEvento();
      if (error.value) {
        errorEvento.value = true;
        feedback.value = error.mensaje;
      } else {
        errorEvento.value = false;
        feedback.value = 'Evento creado correctamente';
      }
    };

    return { evento, procForm, errorEvento };
  },
};
</script>

<style></style>

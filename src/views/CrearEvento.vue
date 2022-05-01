<template>
  <div class="crearEvento">
    <h2>Crear Evento</h2>
    <FormCrearEvento
      :evento="evento"
      :errorEvento="errorEvento"
      @formProce="procForm(evento)"
    />
  </div>
</template>

<script>
//Componentes
import FormCrearEvento from '../components/FormCrearEvento.vue';
//Composables
import createEvento from '../composables/Evento/createEvento';
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
    //Recogemos los campos del evento
    const evento = ref({
      nombre: null,
      descripción: null,
      idAdiestrador: idAdiestrador,
      fecha: null,
      maxAforo: null,
      private: null,
    });
    const procForm = async evento => {
      const { nuevoEvento, error, insertEvento } = createEvento(evento);
      await insertEvento();
      if (error.value !== 'error al crear el evento') {
        router.go(-1);
      } else {
        errorEvento.value = error.value;
      }
    };

    return { evento, procForm, errorEvento };
  },
};
</script>

<style></style>

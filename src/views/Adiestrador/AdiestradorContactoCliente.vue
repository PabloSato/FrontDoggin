<template>
  <div class="contacto"></div>
</template>

<script>
//Componentes
import FormMail from '../../components/Formularios/FormMail.vue';
//Composables
import validarFormMail from '../../composables/Validacion/validarFormMail';
import getClientesAdiestrador from '../../composables/Adiestrador/getClientesAdiestrador';
import enviarMailToCliente from '../../composables/Adiestrador/enviarMailToCliente';
//Utilidades
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
  components: { FormMail },
  props: ['id'],
  setup(props) {
    //Variables
    const router = useRouter();
    //ANTES DE NADA COMPROBAMOS SI ESTÁ LOGUEADO
    if (
      localStorage.getItem('token') == null ||
      localStorage.getItem('userId') == null ||
      localStorage.getItem('rol') == 'CLIENTE'
    ) {
      router.push('/');
    }
    const mail = ref({
      asunto: null,
      mensaje: null,
    });
    const errorEnvio = ref(null);
    const errorValida = ref([null]);
  },
};
</script>

<style></style>

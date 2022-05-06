<template>
  <div class="anuncio">
    <h2>Envia un Anuncio a tus Clientes</h2>
    <FormMail
      :mail="mail"
      :errorEnvio="errorEnvio"
      :errorValida="errorValida"
      @formProce="procForm(mail)"
    />
  </div>
</template>

<script>
//Componentes
import FormMail from '../../components/Formularios/FormMail.vue';
//Composables
import enviarMailToAll from '../../composables/Adiestrador/enviarMailToAll';
import validarFormMail from '../../composables/Validacion/validarFormMail';
//Utilidades
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
  components: { FormMail },
  props: ['id'],
  setup(props) {
    //Tools
    const router = useRouter();
    if (
      localStorage.getItem('token') == null ||
      localStorage.getItem('userId') == null ||
      localStorage.getItem('rol') == 'CLIENTE'
    ) {
      router.push('/');
    }
    //Variables
    //Mail
    const mail = ref({
      asunto: null,
      mensaje: null,
    });
    const errorEnvio = ref(null);
    const errorValida = ref([null]);

    //Funciones
    const procForm = async mail => {
      const { validacion, mensajesValidacion } = validarFormMail(mail);
      errorValida.value = mensajesValidacion;
      if (validacion) {
        const { error, sendAll } = enviarMailToAll(mail);
        await sendAll();
        if (error.value !== 'error al mandar el email') {
          router.go(-1);
        } else {
          errorEnvio.value = error.value;
        }
      }
    };
    return { mail, errorEnvio, procForm, errorValida };
  },
};
</script>

<style></style>

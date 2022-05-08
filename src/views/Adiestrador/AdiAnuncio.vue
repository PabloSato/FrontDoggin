<template>
  <div class="anuncio">
    <!-- <h2>Envia un Anuncio a tus Clientes</h2> -->
    <FormMail
      :titulo="titulo"
      :subTitulo="subTitulo"
      :mail="mail"
      :errorEnvio="errorEnvio"
      :errorValida="errorValida"
      :feedback="feedback"
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
    const titulo = ref();
    const subTitulo = ref();
    titulo.value = 'Envio de anuncio';
    subTitulo.value = '¡¡Manda un anuncio a tus clientes!!';
    //Mail
    const mail = ref({
      asunto: null,
      mensaje: null,
    });
    const errorEnvio = ref(null);
    const errorValida = ref([null]);
    const feedback = ref(null);

    //Funciones
    const procForm = async mail => {
      const { validacion, mensajesValidacion } = validarFormMail(mail);
      errorValida.value = mensajesValidacion;
      if (validacion) {
        const { error, sendAll } = enviarMailToAll(mail);
        await sendAll();
        if (error.value) {
          errorEnvio.value = true;
          feedback.value = error.value.mensaje;
        } else {
          errorEnvio.value = false;
          feedback.value = 'Email enviado';
        }
        // if (error.value !== 'error al mandar el email') {
        //   router.go(-1);
        // } else {
        //   errorEnvio.value = error.value;
        // }
      }
    };
    return {
      mail,
      errorEnvio,
      procForm,
      errorValida,
      titulo,
      subTitulo,
      feedback,
    };
  },
};
</script>

<style>
.anuncio {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-top: 20px;
  width: 100vw;
  min-height: 90vh;
}
</style>

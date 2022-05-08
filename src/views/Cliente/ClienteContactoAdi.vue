<template>
  <div class="contacto">
    <FormMail
      :titulo="titulo"
      :subTitulo="subTitulo"
      :mail="mail"
      :errorEnvio="errorEnvio"
      :errorValida="errorValida"
      :feedback="feedback"
      @formProce="procForm(mail)"
    />
    <p></p>
  </div>
</template>

<script>
//Componentes
import FormMail from '../../components/Formularios/FormMail.vue';
//Composables
import validarFormMail from '../../composables/Validacion/validarFormMail';
import enviarMailToAdiestrador from '../../composables/Cliente/enviarMailToAdiestrador';
//Utilidades
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
  components: { FormMail },
  props: ['id', 'nombre'],
  setup(props) {
    //Variables
    const router = useRouter();
    //ANTES DE NADA COMPROBAMOS SI ESTÁ LOGUEADO
    if (
      localStorage.getItem('token') == null ||
      localStorage.getItem('userId') == null ||
      localStorage.getItem('rol') == 'ADIESTRADOR'
    ) {
      router.push('/');
    }
    const mail = ref({
      asunto: null,
      mensaje: null,
    });
    const errorEnvio = ref(null);
    const errorValida = ref([null]);
    const feedback = ref(null);
    const adiestradorId = props.id;
    const titulo = `Enviar mensaje a ${props.nombre}`;
    const subTitulo = '¡¡Contacta con tu adiestrador!!';
    //Funciones
    const procForm = async mail => {
      const { validacion, mensajesValidacion } = validarFormMail(mail);
      errorValida.value = mensajesValidacion;
      if (validacion) {
        const { enviado, error, send } = enviarMailToAdiestrador(
          adiestradorId,
          mail
        );
        await send();
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
      procForm,
      errorEnvio,
      errorValida,
      titulo,
      subTitulo,
      feedback,
    };
  },
};
</script>

<style>
.contacto {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-top: 20px;
  width: 100vw;
  min-height: 90vh;
}
</style>

<template>
  <div class="contacto">
    <FormMail
      :listaTrue="listaTrue"
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
import validarFormMail from '../../composables/Validacion/validarFormMail';
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
    const adiToCliente = ref(null);
    adiToCliente.value = true;
    //ANTES DE NADA COMPROBAMOS SI ESTÁ LOGUEADO
    const mail = ref({
      destinatario: null,
      asunto: null,
      mensaje: null,
    });
    const listaTrue = ref();
    listaTrue.value = true;
    const errorEnvio = ref(null);
    const errorValida = ref([null]);
    const feedback = ref(null);
    const titulo = ref();
    const subTitulo = ref();
    titulo.value = 'Comunícate con tus clientes';
    subTitulo.value = '¡¡Manda un mensaje personalizado!!';
    const idAdiestrador = localStorage.getItem('id');
    //Funciones

    const procForm = async mail => {
      const { validacion, mensajesValidacion } = validarFormMail(mail);

      if (validacion) {
        const { enviado, error, send } = enviarMailToCliente(mail);
        await send();
        if (error.value) {
          errorEnvio.value = true;
          feedback.value = error.value.mensaje;
        } else {
          errorEnvio.value = false;
          feedback.value = 'Email enviado';
        }
      } else {
        errorEnvio.value = true;
        feedback.value = mensajesValidacion;
      }
    };
    return {
      mail,
      procForm,
      errorEnvio,
      errorValida,
      titulo,
      subTitulo,
      listaTrue,
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

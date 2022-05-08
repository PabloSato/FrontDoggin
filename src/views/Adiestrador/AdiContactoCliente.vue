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
    const mail = ref({
      cliente: null,
      asunto: null,
      mensaje: null,
    });
    const listaTrue = true;
    const errorEnvio = ref(null);
    const errorValida = ref([null]);
    const feedback = ref(null);
    const titulo = 'Comunícate con tus clientes';
    const subTitulo = '¡¡Manda un mensaje personalizado!!';
    const idAdiestrador = localStorage.getItem('id');
    //Funciones

    const procForm = async mail => {
      const { validacion, mensajesValidacion } = validarFormMail(mail);
      if (validacion) {
        const { enviado, error, send } = enviarMailToCliente(clienteId, mail);
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

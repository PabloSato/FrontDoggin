<template>
  <div class="contacto">
    <h2>Contacta con {{ adiestradorNombre }}</h2>
    <FormMail
      :mail="mail"
      :errorEnvio="errorEnvio"
      @formProce="procForm(mail)"
    />
    <p></p>
  </div>
</template>

<script>
//Componentes
import FormMail from '../components/FormMail.vue';
//Composables
import enviarMailToAdiestrador from '../composables/Cliente/enviarMailToAdiestrador';
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
    let errorEnvio = ref(null);
    const adiestradorId = props.id;
    const adiestradorNombre = props.nombre;
    const clienteId = localStorage.getItem('id');
    const token = localStorage.getItem('token');
    //Funciones
    const procForm = async mail => {
      const { enviado, error, send } = enviarMailToAdiestrador(
        adiestradorId,
        clienteId,
        token,
        mail
      );
      await send();
      console.log('aqui');
      console.log(error);
      if (error.value !== 'error al mandar el email') {
        router.go(-1);
      } else {
        errorEnvio.value = error.value;
      }
    };

    return { adiestradorNombre, mail, procForm, errorEnvio };
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

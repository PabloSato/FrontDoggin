<template>
  <div class="anuncio">
    <h2>Envia un Anuncio a tus Clientes</h2>
    <!-- <FormMail /> -->
  </div>
</template>

<script>
//Componentes
import FormMail from '../components/FormMail.vue';
//Composables
import enviarMailToAll from '../composables/Adiestrador/enviarMailToAll';
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

    return { mail, errorEnvio };
  },
};
</script>

<style></style>

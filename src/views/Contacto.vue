<template>
  <h2>Contacta con {{ adiestradorNombre }}</h2>
  <fieldset>
    <form @submit.prevent="enviar">
      <label for="">Asunto: </label>
      <input
        type="text"
        v-model="mail.asunto"
        placeholder="add motivo..."
      /><br />
      <label for="">Mensaje: </label>
      <textarea
        name="mensaje"
        id="mensaje"
        cols="30"
        rows="10"
        v-model="mail.mensaje"
        placeholder="add mensaje..."
      ></textarea>
      <br />
      <input type="submit" value="enviar" />
      <input type="reset" value="borrar" />
    </form>
  </fieldset>
</template>

<script>
//Composables
import getAdiestrador from '../composables/Adiestrador/getAdiestrador';
import enviarMail from '../composables/Cliente/enviarMailToAdiestrador';
//Utilidades
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
  props: ['id', 'nombre'],
  setup(props) {
    //Variables
    const router = useRouter();
    const mail = ref({
      asunto: null,
      mensaje: null,
    });
    const adiestradorId = props.id;
    const adiestradorNombre = props.nombre;
    const clienteId = localStorage.getItem('userId');
    const { adiestrador, load } = getAdiestrador(adiestradorId);
    const token = localStorage.getItem('token');
    //Funciones
    load();
    if (adiestrador === null) {
      router.push('/');
    }
    const enviar = () => {
      const enviado = enviarMailToAdiestrador(
        adiestradorId,
        clienteId,
        token,
        mail
      );
    };

    return { adiestradorNombre, enviar, mail };
  },
};
</script>

<style></style>

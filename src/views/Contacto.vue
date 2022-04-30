<template>
  <h2>Contacta con {{ adiestradorNombre }}</h2>
  <fieldset>
    <form @submit.prevent="enviar">
      <label for="">Motivo: </label>
      <input
        type="text"
        v-model="mail.motivo"
        placeholder="add motivo..."
      /><br />
      <label for="">Mensaje: </label>
      <textarea
        name="mensaje"
        id="mensaje"
        cols="30"
        rows="10"
        v-model="mail.cuerpo"
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
import enviarMail from '../composables/Cliente/enviarMail';
//Utilidades
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
  props: ['id', 'nombre'],
  setup(props) {
    //Variables
    const router = useRouter();
    const mail = ref({
      motivo: null,
      cuerpo: null,
    });
    const adiestradorId = props.id;
    const adiestradorNombre = props.nombre;
    const clienteId = localStorage.getItem('userId');
    const { adiestrador, load } = getAdiestrador(adiestradorId);
    //Funciones
    load();
    if (adiestrador === null) {
      router.push('/');
    }
    const enviar = () => {
      const enviado = enviarMail(adiestradorId, clienteId, mail);
    };

    return { adiestradorNombre, enviar, mail };
  },
};
</script>

<style></style>

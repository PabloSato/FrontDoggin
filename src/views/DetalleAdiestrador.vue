<template>
  <div v-if="adiestrador">
    <h2>Nombre: {{ adiestrador.nombre }}</h2>
    <p>Bio: {{ adiestrador.bio }}</p>
    <p>Rating: {{ adiestrador.rating }}</p>
    <img :src="adiestrador.imageUrl" :alt="adiestrador.nombre" />
    <div v-if="!isLogin">
      <FormValoracion :adiestrador="adiestrador" />
      <router-link
        :to="{
          name: 'contacto',
          params: { id: adiestrador._id, nombre: adiestrador.nombre },
        }"
        >Contacto</router-link
      >
    </div>
  </div>
</template>

<script>
//Components
import FormValoracion from '../components/FormValoracion.vue';
//Composable
import getAdiestraod from '../composables/Adiestrador/getAdiestrador';
//Utilidades
import { ref } from 'vue';
export default {
  components: { FormValoracion },
  props: ['id'],
  setup(props) {
    //Variables
    const isLogin = ref(null);
    const { adiestrador, error, load } = getAdiestraod(props.id);
    //Funciones
    load();
    if (
      localStorage.getItem('token') !== null ||
      localStorage.getItem('userId') !== null
    ) {
      isLogin.value = true;
    }
    console.log(adiestrador);
    return { adiestrador, isLogin };
  },
};
</script>

<style></style>

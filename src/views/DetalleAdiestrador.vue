<template>
  <div v-if="adiestrador" class="perfil">
    <h2>Nombre: {{ adiestrador.nombre }}</h2>
    <p>Bio: {{ adiestrador.bio }}</p>
    <p>Rating: {{ adiestrador.rating }}</p>
    <img :src="adiestrador.imageUrl" :alt="adiestrador.nombre" />
    <div v-if="isLogin">
      <FormValoracion :adiestrador="adiestrador" />
      <router-link
        :to="{
          name: 'contacto',
          params: { id: adiestrador._id, nombre: adiestrador.nombre },
        }"
        >Contacto</router-link
      >
      <button @click="verEventos(adiestrador._id)">ver eventos</button>
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
import { useRouter } from 'vue-router';
export default {
  components: { FormValoracion },
  props: ['id'],
  setup(props) {
    //Variables
    const router = useRouter();
    const isLogin = ref(null);
    const { adiestrador, error, load } = getAdiestraod(props.id);
    let token = '';
    //Funciones
    load();
    if (
      localStorage.getItem('token') !== null ||
      localStorage.getItem('userId') !== null
    ) {
      isLogin.value = true;
      token = localStorage.getItem('token');
    }
    const verEventos = id => {
      router.push({ path: `/adiestradores/${id}/eventos` });
    };
    //Return
    return { adiestrador, isLogin, verEventos };
  },
};
</script>

<style>
.perfil {
  padding-top: 20px;
  width: 100vw;
  min-height: 90vh;
}
</style>

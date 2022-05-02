<template>
  <div v-if="adiestrador" class="perfil">
    <h2>Nombre: {{ adiestrador.nombre }}</h2>
    <p>Bio: {{ adiestrador.bio }}</p>
    <p>Rating: {{ adiestrador.rating }}</p>
    <img :src="adiestrador.imageUrl" :alt="adiestrador.nombre" />
    <div v-if="isLogin">
      <FormValoracion
        :adiestrador="adiestrador"
        :valoracion="valoracion"
        :errorValora="errorValora"
        :okValora="okValora"
        @proValorar="valoraFuncion(valoracion)"
      />
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
import FormValoracion from '../../components/Formularios/FormValoracion.vue';
//Composable
import getAdiestraod from '../../composables/Adiestrador/getAdiestrador';
import valorarAdiestrador from '../../composables/Cliente/valorarAdiestrador';
//Utilidades
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  components: { FormValoracion },
  props: ['id'],
  setup(props) {
    //Variables
    const valoracion = ref({
      score: null,
    });
    const errorValora = ref(null);
    const okValora = ref(null);
    const router = useRouter();
    const isLogin = ref(null);
    const { adiestrador, error, loadAdiestrador } = getAdiestraod(props.id);
    let token = '';
    //Funciones
    loadAdiestrador();
    if (
      (localStorage.getItem('token') !== null ||
        localStorage.getItem('userId') !== null) &&
      localStorage.getItem('rol') == 'CLIENTE'
    ) {
      isLogin.value = true;
      token = localStorage.getItem('token');
    }
    const verEventos = id => {
      router.push({ path: `/adiestradores/${id}/eventos` });
    };

    //Funcion Valorar
    const valoraFuncion = async valoracion => {
      const { rating, error, insertValoracion } = valorarAdiestrador(
        props.id,
        valoracion
      );
      await insertValoracion();
      if (error.value !== 'error al puntuar al Adiestrador') {
        okValora.value = `Has puntuado con un ${rating.score}`;
      } else {
        errorValora.value = error.value;
      }
    };
    //Return
    return {
      adiestrador,
      isLogin,
      verEventos,
      valoracion,
      valoraFuncion,
      errorValora,
      okValora,
    };
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

<template>
  <div class="contForm">
    <div v-if="adiestrador" class="subContForm">
      <h2>{{ adiestrador.nombre }}</h2>
      <img :src="adiestrador.imageUrl" :alt="adiestrador.nombre" />
      <h2>Bio</h2>
      <p>{{ adiestrador.bio }}</p>
      <h2>Rating</h2>
      <div v-if="adiestrador.rating">
        <p v-if="avgRating">{{ avgRating.toFixed(1) }}/5 puntos</p>
        <p v-else>{{ adiestrador.rating.toFixed(1) }}/5 puntos</p>
      </div>
      <p v-else>No hay valoraciones todavía</p>
      <div v-if="isLogin">
        <FormValoracion
          :adiestrador="adiestrador"
          :valoracion="valoracion"
          :errorValora="errorValora"
          :feedback="feedback"
          @proValorar="valoraFuncion(valoracion)"
        />
        <div class="botonesRow">
          <button @click="contactos()">Contacto</button>
          <button @click="verEventos(adiestrador._id)">Eventos</button>
        </div>
      </div>
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
import { computed, ref } from 'vue';
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
    const feedback = ref(null);
    // const okValora = ref(null);
    const router = useRouter();
    const isLogin = ref(null);
    const { adiestrador, error, loadAdiestrador } = getAdiestraod(props.id);
    let token = '';

    loadAdiestrador();

    const avgRating = ref(null);
    //Funciones

    const contactos = () => {
      router.push({
        name: 'contacto',
        params: { id: adiestrador.value._id, nombre: adiestrador.value.nombre },
      });
    };

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
      if (error.value) {
        errorValora.value = true;
        feedback.value = error.value.mensaje;
      } else {
        errorValora.value = false;
        avgRating.value = rating.value;
        feedback.value = 'Has puntuado al adiestrador';
      }
    };
    //Return
    return {
      verEventos,
      adiestrador,
      avgRating,
      isLogin,
      verEventos,
      valoracion,
      valoraFuncion,
      errorValora,
      contactos,
      feedback,
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  .perfil {
    padding-top: 20px;
    width: 100vw;
    min-height: 90vh;
  }
  h2 {
    font-size: 2.3rem;
    color: #dfe6ee;
    font-weight: 500;
    margin-bottom: 15px;
  }
  p {
    font-size: 1rem;
    color: #dfe6ee;
    font-weight: 100;
    margin-bottom: 5px;
  }
}
.contForm {
  width: 100%;
  display: flex;
  justify-content: center;
}
.subContForm {
  background-color: #5f4bb6;
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  place-items: center;
  line-height: 1.5;
  padding: 30px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.185);

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
  }

  input,
  button,
  textarea {
    width: 100%;
    border: none;
    padding: 14px;
    border-radius: 3px;
  }

  input,
  textarea {
    border: 2px solid #daddec;
    margin: 5px 0 10px;
    font-size: 1rem;
    color: #656880;
  }

  button {
    background: #9ab7d7;
    display: block;
    color: #5f4bb6;
    font-size: 1rem;
    margin: 5px 5px 10px;
  }

  button:hover {
    box-shadow: 0 5px 20px #89caff94;
    transition: box-shadow 0.3s ease-in-out;
  }
}
.botonesRow {
  display: flex;
  flex-direction: column;
  width: 20rem;
}
.alter {
  background: #170f11 !important;
}
.alter:hover {
  box-shadow: 0 5px 20px #170f11 !important;
  transition: box-shadow 0.3s ease-in-out !important;
}

.container-text {
  text-align: center;
  padding: 10px 10px 10px 10px;
  min-height: 100%;
}

@media screen and (min-width: 750px) {
  .subContForm {
    display: flex;
    width: 90%;
    max-width: 1024px;
    min-height: 85vh;

    img {
      width: 660px;

      button {
        width: 10rem;
      }
    }
  }
  .botonesRow {
    display: flex;
    flex-direction: row;
  }
  .container-text {
    width: 625px;
  }
}
</style>

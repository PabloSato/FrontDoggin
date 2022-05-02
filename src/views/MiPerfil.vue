<template>
  <div v-if="adiestrador" class="perfil">
    <h2>Nombre: {{ adiestrador.nombre }}</h2>
    <p>Bio: {{ adiestrador.bio }}</p>
    <p>Rating: {{ adiestrador.rating }}</p>
    <img :src="adiestrador.imageUrl" :alt="adiestrador.nombre" />
    <button @click="verEventos(adiestrador._id)">mis eventos</button>
    <button @click="crearEvento(adiestrador._id)">crear evento</button>
    <button @click="crearAnuncio(adiestrador._id)">crear anuncio</button>
  </div>
</template>

<script>
//Composables
import getAdiestrador from '../composables/Adiestrador/getAdiestrador';
//Utilidades
import { useRouter } from 'vue-router';
export default {
  props: ['id'],
  setup(props) {
    //Tools
    const router = useRouter();
    //Variables
    const idAdi = props.id;
    const idLocal = localStorage.getItem('id');
    const { adiestrador, error, loadAdiestrador } = getAdiestrador(idAdi);
    //Comprobamos si entra el mismoq ue se ha logueado
    if (idAdi !== idLocal) {
      router.push('/'); //Si no, lo mandamos fuera
    }
    //Funciones
    loadAdiestrador();
    const verEventos = id => {
      router.push({ path: `/adiestradores/${id}/eventos` });
    };
    const crearEvento = id => {
      router.push({
        path: `/adiestradores/${id}/crearevento`,
      });
    };
    const crearAnuncio = id => {
      router.push({ path: `/adiestradores/${id}/broadcast` });
    };

    //Returns
    return { adiestrador, verEventos, crearEvento, crearAnuncio };
  },
};
</script>

<style></style>

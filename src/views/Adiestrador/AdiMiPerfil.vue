<template>
  <div class="contForm" v-if="adiestrador">
    <div class="subContForm">
      <h2>{{ adiestrador.nombre }}</h2>
      <img :src="adiestrador.imageUrl" :alt="adiestrador.nombre" />
      <div class="container-text">
        <h2>Bio</h2>
        <p>{{ adiestrador.bio }}</p>
        <h2>Rating</h2>
        <p>{{ adiestrador.rating ? adiestrador.rating.toFixed(1) : '-' }}/5 puntos</p>
        <div class="botonesRow">
          <button @click="verEventos(adiestrador._id)">mis eventos</button>
          <button @click="crearEvento(adiestrador._id)">crear evento</button>
          <button @click="crearAnuncio(adiestrador._id)">crear anuncio</button>
          <button class="alter" @click="enviarMensaje(adiestrador._id)">enviar mensaje</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//Composables
import getAdiestrador from '../../composables/Adiestrador/getAdiestrador';
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
    const enviarMensaje = id => {
      router.push({
        path: `/adiestradores/${id}/contacto/clientes`,
      });
    };
    //Returns
    return {
      adiestrador,
      verEventos,
      crearEvento,
      crearAnuncio,
      enviarMensaje,
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

h2{
  font-size: 2.3rem;
  color: #dfe6ee;
  font-weight: 500;
  margin-bottom: 15px;
}
p{
  font-size: 1rem;
  color: #dfe6ee;
  font-weight: 100;
  margin-bottom: 5px;

}

.alertaForm{
  font-size: 1rem;
  color: #FF5733;
  font-weight: 500;
  margin-bottom: 5px;
}

}.contForm{
  width: 100%;
  display: flex;
  justify-content: center;

}
.subContForm{
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
    border: 2px solid #DADDEC;
    margin: 5px 0 10px;
    font-size: 1rem;
    color: #656880;
  }

  button {
    background:#9ab7d7;
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
.botonesRow{
  display: flex;
  flex-direction: column;
}
.alter {
  background: #170f11 !important;
} 
.alter:hover {
    box-shadow: 0 5px 20px #170f11 !important;
    transition: box-shadow 0.3s ease-in-out !important;
  }

.container-text{
  text-align: center;
  padding: 10px 10px 10px 10px;
  min-height: 100%;
}


@media screen and (min-width: 750px) {
.subContForm{
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
.botonesRow{
  display: flex;
  flex-direction: row;
}
.container-text{
width: 625px; 
}

}
</style>

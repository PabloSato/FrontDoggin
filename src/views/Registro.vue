<template>
  <div class="elige">
    <h2>Registrarse</h2>
  </div>
  <!-- CARD ADIESTRADOR -->
  <div class="contenedorResgistrase">
   <div class="login">
    <div class="container">
      <img
        src="https://cdn.pixabay.com/photo/2017/08/22/21/19/walk-2670512_960_720.jpg"
        alt="Adiestrador"
      />
      <div class="container-text">
        <div>
          <button :to="{ name: 'alta-cliente' }">Soy Adiestrador</button>
          <router-link :to="{ name: 'alta-ad' }">¿Eres Adiestrador?</router-link>
        </div>
      </div>
    </div>
  </div>
<!-- CARD CLIENTE -->
  <div class="login">
    <div class="container">
      <img
        src="https://cdn.pixabay.com/photo/2017/06/18/14/27/dog-2415918_960_720.jpg"
        alt="cliente"
      />
      <div class="container-text">
        <div>
          <button :to="{ name: 'alta-cliente' }">Soy Cliente</button>
          <router-link :to="{ name: 'alta-cliente' }">¿Eres Cliente?</router-link>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>


<script>
//Componentes
import Header from '../components/partials/Header.vue';
import Footer from '../components/partials/Footer.vue';
//Utilidades
import { useRouter } from 'vue-router';
export default {
  components: { Header, Footer },
  setup() {
    //Tools
    const router = useRouter();
    //Comprobamos si el Usuario ya está Logueado, en el caso que asi sea, lo enviamos a Home
    if (localStorage.getItem('token') || localStorage.getItem('userId')) {
      router.push('/');
    }
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.elige{
  text-align: center;
  margin: 20px;
}
.contenedorResgistrase{
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.login {
  width: 100%;
}

.container {
  border-radius: 20px;
  margin-bottom: 20px;
  padding: 20px;
  background-color: #5f4bb6;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;
  line-height: 1.5;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.185);
  max-width: 455px;
  
  img {
    border-radius: 20px;
    width: 100%;
    max-height: 150px;
    object-fit: cover;
    object-position: center;
  }

  &-text {
    text-align: center;
    padding: 10px 10px 10px 10px;

    h2 {
      font-size: 2.3rem;
      color: #dfe6ee;
    }

    p {
      font-size: 14px;
      color: #9ab7d7;
      margin: 10px 0;
    }

    input,
    button {
      width: 100%;
      border: none;
      padding: 14px;
      border-radius: 3px;
    }

    input {
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
      margin-bottom: 20px;

    }

    button:hover {
      box-shadow: 0 5px 20px #89caff94;
      transition: box-shadow 0.3s ease-in-out;

    }

    span {
      display: block;
      text-align: center;
      margin: 20px 0 0;
      color: #BABDCB;
      font-size: 12px;
    }
  }
}
@media screen and (min-width: 750px) {
.contenedorResgistrase{
  flex-direction: row;
  justify-content: center;
  width: 100%;
  }

.login{
    display: flex;
    justify-content: center;
}
.container {
  width: 90%;

  img{
    max-height: 200px
  }
}
}
</style>

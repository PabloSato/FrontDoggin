<template>

  <figure class="image-block">
    <div class="backgroundEffect"></div>
    <h1>{{ adiestrador.nombre }}</h1>
    <img :src="adiestrador.imageUrl" :alt="adiestrador.nombre"/>
    <figcaption>
      <h3>{{ adiestrador.nombre }}</h3>
      <p>{{ adiestrador.bio }}</p>
      <p> Rating: <span v-if="adiestrador.rating">{{ adiestrador.rating.toFixed(1) }}</span> <span v-else>-</span> </p>
      <button class="" @click="verEventos(adiestrador._id)" > Ver eventos </button>
      <button @click="detalle()">Detalle</button>
    </figcaption>
  </figure>
</template>

<script>
//Componentes
import FormValora from '../Formularios/FormValoracion.vue';
//Utilidades
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
  components: { FormValora },
  props: ['adiestrador', 'star'],
  setup(props, context) {
    //Variables
    const isLogin = ref(null);
    const adiestrador = props.adiestrador;

    //Tools
    const router = useRouter();
    //Funciones

    const detalle = () => {
      router.push ({name: 'detalle', params:{id: adiestrador._id},
      });
    };

    const verEventos = id => {
      router.push({ path: `/adiestradores/${id}/eventos` });
    };

    if (localStorage.getItem('token')) {
      isLogin.value = true;
    }

    return { verEventos, isLogin, adiestrador, detalle };
  },
};
</script>

<style lang="scss" scoped>
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

*, 
*:before, 
*:after {
  box-sizing: border-box;
  outline: none;
}

html {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-smooth: auto;
  font-weight: 300;
  line-height: 1.5;
  color: #444;
}

body {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

figure {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 430px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
}
//imagen oscura
figure:before {
  content:'';
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 1s;
  
}
figure:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
figure:hover img {
  transform: scale(1.25);
}
figure:hover figcaption {
  bottom: 0;
}
figure h1 {
  // position: relative;
  position: absolute;
  top: 50px;
  // left: 20px;
  margin: 0;
  padding: 0;
  color: white;
  text-shadow: 0 0 0.5em black;
  font-size: 2em;
  font-weight: 300;
  line-height: 1;
}
figure img {
  height: 100%;
  transition: 0.25s;
}
figure figcaption {
  position: absolute;
  bottom: -90%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  color: white;
  line-height: 1;
  transition: 0.25s;
}
figure figcaption h3 {
  margin: 0 0 20px;
  padding: 0;
}
figure figcaption p {
  font-size: 14px;
  line-height: 1.75;
}
figure figcaption button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 0;
  padding: 10px 30px;
  background-color: #1abc9c;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 14px;
}
</style>

<template>
  <header>
    <div class="contenedorHeader">
      <div class="cabecera">
        <div class="logo">
          <img src="../../assets/logo_doggin.svg" alt="" />
        </div>
        <div class="navegador">
          <router-link to="/">Home</router-link>
          <router-link to="/eventos">Eventos</router-link>
          <router-link to="/adiestradores">Adiestradores</router-link>
          <router-link
            v-if="userLogin.rol === 'ADIESTRADOR'"
            :to="{ name: 'miPerfil', params: { id: userLogin.id } }"
            >Mi Perfil</router-link
          >
          <router-link v-if="!userLogin.token" to="/elige"
            >Registrarse</router-link
          >
          <router-link v-if="userLogin.token" @click="logOut" to="/"
            >Logout</router-link
          >
          <router-link v-else to="/login">Login</router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
//Utilidades
import useEmitter from '../../composables/Tools/emitter';
import { useRouter } from 'vue-router';
import { ref } from 'vue';
export default {
  props: ['userLogin'],
  setup(props) {
    //Tools
    const emitter = useEmitter();
    const router = useRouter();
    //Funciones
    const logOut = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('rol');
      localStorage.removeItem('id');
      emitter.emit('isLog', false);
      router.push('/login');
    };
    return { logOut };
  },
};
</script>

<style>
header {
  width: 100vw;
  background-color: #f1f1f1;
  padding: 10px;
}
.cabecera {
  width: 90%;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  justify-content: space-between;
}
.logo img {
  width: 100px;
}
.navegador {
  width: 60%;
  max-width: 655px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.navegador a {
  text-decoration: none;
  display: block;
  color: #184d47;
  border-bottom: 2px solid transparent;
}
.navegador a:hover {
  color: #96bb7c;
  border-bottom: 2px solid #96bb7c;
}
/*----------- MEDIAQUERI ------------------- */
@media screen and (min-width: 750px) {
  .cabecera {
  flex-direction: row;
  align-items:flex-end;
}
.navegador {
  flex-direction: row;
  width: 27rem;
  justify-content: space-between;
}
.contenedorHeader{
  display: flex;
  justify-content: center;
}
/* header {
    display: block;
  }
  .logo {
    width: 100%;
    text-align: center;
  }
  .navegador {
    flex-direction: column;
  } */
}
</style>

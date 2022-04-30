<template>
  <header>
    <div class="cabecera">
      <div class="logo">
        <img src="../assets/logo_doggin.svg" alt="" />
      </div>
      <div class="navegador">
        <h2>{{ userLogin }}</h2>
        <router-link to="/">Home</router-link>
        <router-link to="/eventos">Eventos</router-link>
        <router-link to="/adiestradores">Adiestradores</router-link>
        <router-link v-if="!userLogin" to="/elige">Registrarse</router-link>
        <router-link v-if="userLogin" @click="logOut" to="/"
          >Logout</router-link
        >
        <router-link v-else to="/login">Login</router-link>
      </div>
    </div>
  </header>
</template>

<script>
//Utilidades
import useEmitter from '../composables/emitter';
import { useRouter } from 'vue-router';
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
  box-shadow: 1px 1px 10px #cdddc2;
  padding: 20px;
}
.cabecera {
  width: 85vw;
  margin: 0 auto;
  display: flex;
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
@media screen and (max-width: 550px) and (min-width: 375px) {
  header {
    display: block;
  }
  .logo {
    width: 100%;
    text-align: center;
  }
  .navegador {
    flex-direction: column;
  }
}
</style>

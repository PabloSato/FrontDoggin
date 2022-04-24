<template>
  <header>
    <div class="logo">
      <img src="../assets/logo_doggin.svg" alt="" />
    </div>
    <div class="navegador">
      <router-link to="/">Home</router-link>
      <router-link to="/eventos">Eventos</router-link>
      <router-link to="/adiestradores">Adiestradores</router-link>
      <router-link v-if="!isLogin" to="/elige">Registrarse</router-link>
      <router-link v-if="isLogin" @click="logOut" to="/">Logout</router-link>
      <router-link v-else to="/login">Login</router-link>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    let isLogin = ref(null);
    if (localStorage.getItem('token')) {
      isLogin.value = true;
    }
    const logOut = () => {
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      isLogin.value = false;
    };
    return { isLogin, logOut };
  },
};
</script>

<style>
header {
  width: 100vw;
  background-color: #f1f1f1;
  display: flex;
  gap: 2rem;
  box-shadow: 1px 1px 10px #cdddc2;
  justify-content: space-between;
  padding: 20px;
}
header > .logo img {
  width: 100px;
  margin-left: 50px;
}
header > .navegador {
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
header > .navegador a {
  text-decoration: none;
  display: block;
  color: #184d47;
  border-bottom: 2px solid transparent;
}
header > .navegador a:hover {
  color: #96bb7c;
  border-bottom: 2px solid #96bb7c;
}
/*----------- MEDIAQUERI ------------------- */
@media screen and (max-width: 550px) and (min-width: 375px) {
  header {
    display: block;
  }
  header > .logo {
    width: 100%;
    text-align: center;
  }
  header > .navegador {
    flex-direction: column;
  }
}
</style>

<template>
  <footer>
    <div>
      <h2><router-link to="/">Dogginer</router-link></h2>
    </div>
    <div class="navegador">
      <router-link to="/">Home</router-link>
      <router-link to="/eventos">Eventos</router-link>
      <router-link to="/adiestradores">Adiestradores</router-link>
      <router-link v-if="!isLogin" to="/elige">Registrarse</router-link>
      <router-link v-if="isLogin" @click="logOut" to="/">Logout</router-link>
      <router-link v-else to="/login">Login</router-link>
    </div>
    <div class="copy">
      <p>Copyright© 2022 | All rights reserved by Dogginer</p>
    </div>
  </footer>
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
footer {
  width: 100vw;
  background-color: #184d47;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
}
footer h2 a {
  color: #5f4bb6;
  text-decoration: none;
}
footer h2 a:hover {
  color: #9ab7d7;
}
footer h2 {
  margin-bottom: 40px;
}
footer > .navegador {
  width: 60%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
footer > .navegador a {
  text-decoration: none;
  display: block;
  color: #9ab7d7;
  border-bottom: 2px solid transparent;
}
footer > .navegador a:hover {
  color: #5f4bb6;
  border-bottom: 2px solid #5f4bb6;
}
.copy {
  margin-top: 45px;
  font-size: 13px;
  color: #9ab7d7;
}
</style>

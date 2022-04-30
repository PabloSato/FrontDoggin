<template>
  <div class="login">
    <div class="container">
      <img
        src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="image"
      />
      <div class="container-text">
        <h2>Bienvenido!!</h2>
        <p>Introduce tu usuario y contraseña</p>
        <p v-if="errorLogin">{{ errorLogin }}</p>
        <form @submit.prevent="logear(usuario)">
          <input type="email" placeholder="Email" v-model="usuario.email" />
          <input
            type="password"
            placeholder="Pass"
            v-model="usuario.password"
          />
          <button type="submit">Acceder</button>
        </form>
      </div>
    </div>
    <!-- 
    <p v-if="!isLogin">Not logged in :(</p>
    {{ usuario }} -->
  </div>
</template>

<script>
//Componentes
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
//Utilidades
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import useEmitter from '../composables/emitter';
import createStore from '../store/index';
export default {
  components: { Header, Footer },
  setup() {
    //Tools
    const router = useRouter();
    const store = useStore();
    const emitter = useEmitter();
    //Variables
    const usuario = ref({
      email: '',
      password: '',
    });
    let errorLogin = ref(null);
    let isLogin = createStore.state.token;
    //Si YA ESTÁ LOGUEADO, lo redirigimos a HOME, no pinta nada aqui
    if (localStorage.getItem('token') || localStorage.getItem('userId')) {
      router.push('/');
    }
    const logear = async usuario => {
      await store.dispatch('login', usuario);
      //Comprobamos si se ha logueado mirando si hay algo en el localStorage
      if (
        localStorage.getItem('token') !== null ||
        localStorage.getItem('userId') !== null
      ) {
        isLogin = createStore.state.token;
        if (isLogin) {
          emitter.emit('isLog', true);
          router.push('/');
        }
      } else {
        //Si ha habido un error, pasamos el error
        errorLogin.value = 'email/password incorrecto';
      }
    };
    return { usuario, logear, errorLogin };
  },
};
</script>
<style lang="scss" scoped>
.login {
  padding-bottom: 100px;
  min-height: 90vh;
  width: 100vw;
  display: flex;
  align-items: center;
}

.container {
  background-color: #5f4bb6;
  width: 60vw;
  max-width: 1150px;
  min-width: 510px;
  height: 450px;
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  place-items: center;
  line-height: 1.5;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.185);

  img {
    width: 250px;
    height: 400px;
    object-fit: cover;
    object-position: center;
  }

  &-text {
    padding: 10px 40px 10px 10px;

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
    }

    button:hover {
      box-shadow: 0 5px 20px #89caff94;
      transition: box-shadow 0.3s ease-in-out;
    }

    span {
      display: block;
      text-align: center;
      margin: 20px 0 0;
      color: #babdcb;
      font-size: 12px;
    }
  }
}
</style>

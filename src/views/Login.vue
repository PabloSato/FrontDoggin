<template>
  <div class="contForm">
    <div class="subContForm">
      <img
        src="https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="image"
      />
      <div class="container-text">
        <h2>Bienvenido!!</h2>
        <p>Introduce tu usuario y contraseña</p>
        <div>
          <p class="feedback" v-if="errorLogin">{{ errorLogin  }}</p>
        </div>
        <form @submit.prevent="logear(usuario)" id="formulario">
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
  </div>
</template>

<script>
//Utilidades
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import useEmitter from '../composables/Tools/emitter';
import createStore from '../store/index';
export default {
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
          emitter.emit('isLog', {
            token: localStorage.getItem('token'),
            rol: localStorage.getItem('rol'),
            id: localStorage.getItem('id'),
          });
          if (localStorage.getItem('rol') == 'ADIESTRADOR') {
            let idAdi = localStorage.getItem('id');
            emitter.emit('isAdi', true);
            router.push({ name: 'miPerfil', params: { id: idAdi } });
          } else {
            router.push('/');
          }
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

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

  .alertaForm {
    font-size: 1rem;
    color: #ff5733;
    font-weight: 500;
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
    margin: 5px 0 10px;
  }

  button:hover {
    box-shadow: 0 5px 20px #89caff94;
    transition: box-shadow 0.3s ease-in-out;
  }
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
}

@media screen and (min-width: 750px) {
  .subContForm {
    display: flex;
    width: 90%;
    max-width: 1024px;
    min-height: 85vh;

    img {
      width: 660px;
    }
  }
  .container-text {
    width: 625px;
  }
}
</style>

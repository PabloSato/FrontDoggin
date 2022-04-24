<template>
  <Header />
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="logear(usuario)">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input
          type="email"
          placeholder="email"
          class="form-control"
          v-model="usuario.email"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input
          type="password"
          placeholder="pass"
          class="form-control"
          v-model="usuario.password"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" class="btn btn-primary">Acceder</button>
    </form>
    <p v-if="!isLogin">Not logged in :(</p>
    {{ usuario }}
  </div>
</template>

<script>
//Componentes
import Header from '../components/Header.vue';
//Utilidades
import useRouter from 'vue-router';
import { mapActions } from 'vuex';
import createStore from '../store/index';
export default {
  components: { Header },
  data() {
    return {
      usuario: {
        email: '',
        password: '',
      },
      isLogin: createStore.state.token,
    };
  },
  methods: {
    ...mapActions(['login']),

    async logear(usuario) {
      await this.login(usuario);
      this.isLogin = createStore.state.token;
      if (this.isLogin) {
        this.$router.push('/');
      }
    },
  },
};
</script>

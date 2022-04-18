<template>
  <div class="container">
    <h1>Login</h1>
    <form @submit.prevent="login(usuario)">
      <div class="mb-3">
        <label for="exampleInputEmail1" class="form-label">Email</label>
        <input type="email" placeholder="email" class="form-control" v-model="usuario.email" id="exampleInputEmail1" aria-describedby="emailHelp">
      </div>
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Password</label>
        <input type="password" placeholder="pass" class="form-control" v-model="usuario.password" id="exampleInputPassword1">
      </div>
      <button type="submit" class="btn btn-primary">Acceder</button>
    </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default{
  data() {
    return {
      usuario: {
        email: '',
        password:''
      }
    }
  },
  methods: {
     ...mapActions(['login'])
  }
}

</script>

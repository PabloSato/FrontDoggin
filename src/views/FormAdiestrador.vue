<template>
  <h2>Nuevo Adiestrador</h2>
  <form @submit.prevent="">
    <label for="nombre">Nombre:</label>
    <input
      type="text"
      v-model="nombre"
      placeholder="mete nombre"
      required
    />
    <br />
    <label for="pass">Contraseña:</label>
    <input type="password" v-model="password" placeholder="****" />
    <br /><label for="email">Email:</label>
    <input
      type="mail"
      v-model="email"
      placeholder="ejemplo@tu.mail"
    />
    <br />
    <input type="submit" value="registrar" />
    <input type="reset" value="borrar" />
  </form>
</template>

<script>
import valida from '../componsables/validarUser';
//
import getUsers from '../componsables/getUsers';
import getUser from '../componsables/getUser';
import getClientes from '../componsables/getClientes';
import getCliente from '../componsables/getCliente';
import getAdiestrador from '../componsables/getAdiestrador';
import getAdiestradores from '../componsables/getAdiestradores';
import createUser from '../componsables/createUser';
import createAdiestrador from '@/componsables/createAdiestrador';
import { ref } from '@vue/reactivity';

export default {
  setup() {
    //Recogemos los campos del User
    const user = ref({
      email: null,
      password: null,
    });
  },
};
</script>

<style></style>

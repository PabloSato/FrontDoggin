<template>
  <h2>{{ act }} {{ quienH2 }}</h2>

  <form @submit.prevent="procesaFormu" id="formulario">
    <label for="nombre">Nombre:</label>
    <input
      type="text"
      v-model="user.nombre"
      placeholder="Introduce tu nombre"
      required
    />
    <br />
    <label for="pass">Contraseña:</label>
    <input
      type="password"
      v-model="user.password"
      placeholder="****"
      required
    />
    <br /><label for="email">Email:</label>
    <input
      type="mail"
      v-model="user.email"
      placeholder="ejemplo@tu.mail"
      required
    />
    <br />
    <div v-if="quienH2 === 'Adiestrador'">
      <label for="bio">Descripción:</label>
      <textarea
        v-model="user.bio"
        id="bio"
        cols="30"
        rows="10"
        placeholder="sobre ti..."
        required
      ></textarea>
    </div>
    <input type="submit" value="registrar" />
    <input type="reset" value="borrar" />
  </form>
  <div v-if="errorInsert.length > 0">
    <p>{{ errorInsert }}</p>
  </div>
  <div v-if="errorValida.length > 0">
    <p v-for="mensaje in errorValida" :key="mensaje">
      {{ mensaje }}
    </p>
  </div>
</template>

<script>
//Utilidades
import { ref } from 'vue';
export default {
  props: ['quienH2', 'user', 'errorValida', 'act', 'errorInsert'],
  emits: ['formProce'],
  setup(props, context) {
    const user = ref(null); //Variable para el usuario

    user.value = props.user; //Recogemos los valores que nos vienen
    const procesaFormu = () => {
      context.emit('formProce', user);
    };

    return { user, procesaFormu };
  },
};
</script>

<style></style>

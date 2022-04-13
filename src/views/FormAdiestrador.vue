<template>
  <h2>Nuevo Adiestrador</h2>
  <div v-if="errorValida.length > 0">
    <p v-for="mensaje in errorValida" :key="mensaje">{{ mensaje }}</p>
  </div>
  <div v-if="error">
    <p>{{ error }}</p>
  </div>
  <form @submit.prevent="procForm" id="formulario">
    <label for="nombre">Nombre:</label>
    <input
      type="text"
      v-model="user.nombre"
      placeholder="mete nombre"
      required
    />
    <br />
    <label for="pass">Contraseña:</label>
    <input type="password" v-model="user.password" placeholder="****" />
    <br /><label for="email">Email:</label>
    <input type="mail" v-model="user.email" placeholder="ejemplo@tu.mail" />
    <br />
    <input type="submit" value="registrar" />
    <input type="reset" value="borrar" />
  </form>
</template>

<script>
import { ref } from "vue";
import validarUser from "../componsables/validarUser";

//
import getUsers from "../componsables/getUsers";
import getUser from "../componsables/getUser";
import getClientes from "../componsables/getClientes";
import getCliente from "../componsables/getCliente";
import getAdiestrador from "../componsables/getAdiestrador";
import getAdiestradores from "../componsables/getAdiestradores";
import createUser from "../componsables/createUser";
import createAdiestrador from "@/componsables/createAdiestrador";

export default {
  setup() {
    //Recogemos los campos del User
    const user = ref({
      email: null,
      password: null,
      nombre: null,
    });
    //Nodo formulario
    const formu = document.getElementById("formulario");
    //Variable que nos recogerá los errores de validación
    const errorValida = ref([null]); //Guardamos los errores de validacion
    const errorInsert = ref(null); // guardmos los errores de insert
    //Función que procesa el formulario
    const procForm = async () => {
      //Primero validamos
      const { validacion, mensajesValidacion } = validarUser(user.value);
      errorValida.value = mensajesValidacion; //Si hay algun error en validación, guardamos su mensaje
      //Si la validació ha sido correcta, insertamos
      if (validacion) {
        const { adiestrador, error, insertAdiestrador } = createAdiestrador(
          user.value
        );
        //Llamamos a la función que inserta el Usuario/Adiestrador
        insertAdiestrador();
        //if no hay errores, redireccionamos a otra pagina
      }
    };

    return { user, procForm, errorValida, errorInsert };
  },
};
</script>

<style></style>

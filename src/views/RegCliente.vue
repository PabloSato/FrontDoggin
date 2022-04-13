<template>
  <RegForm
    :user="user"
    :errorValida="errorValida"
    textH2="Cliente"
    @formProce="procForm(user)"
  />
</template>

<script>
import { ref } from 'vue';
import RegForm from '../components/RegForm.vue';
import validarUser from '../componsables/validarUser';
import createCliente from '../componsables/createCliente';
export default {
  components: { RegForm },
  setup() {
    //Recogemos los campos del User
    const user = ref({
      email: null,
      password: null,
      nombre: null,
    });
    //Variable que nos recogerá los errores de validación
    const errorValida = ref([null]); //Guardamos los errores de validacion
    const errorInsert = ref(null); // guardmos los errores de insert
    //Función que procesa el formulario
    const procForm = async () => {
      const { validacion, mensajesValidacion } = validarUser(user.value);
      errorValida.value = mensajesValidacion; //Si hay algun error en validación, guardamos su mensaje
      //Si la validación ha sido correcta, insertamos
      if (validacion) {
        const { cliente, error, insertCliente } = createCliente(user.value);
        //Llamams a la función que inserta el Usuario/Adiestrador
        insertCliente();
        //redireccionamos ?¿?¿?¿
      }
    };

    return { user, procForm, errorValida };
  },
};
</script>

<style></style>

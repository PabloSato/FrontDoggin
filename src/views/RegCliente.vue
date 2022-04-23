<template>
    <Header />
  <RegForm
    :user="user"
    :errorValida="errorValida"
    :errorInsert="errorInsert"
    act="Nuevo"
    quienH2="Cliente"
    @formProce="procForm(user)"
  />
</template>

<script>
import Header from '../components/Header.vue'
import RegForm from '../components/RegForm.vue';

import { ref } from 'vue';
import validarUser from '../composables/validarUser';
import createCliente from '../composables/Cliente/createCliente';
import { useRouter } from 'vue-router';
export default {
  components: { RegForm, Header },
  setup() {
    //Recogemos los campos del User
    const user = ref({
      email: null,
      password: null,
      nombre: null,
    });
    //Router
    const router = useRouter();
    //Variable que nos recogerá los errores de validación
    const errorValida = ref([null]); //Guardamos los errores de validacion
    let errorInsert = ''; // guardmos los errores de insert
    //Función que procesa el formulario
    const procForm = async user => {
      const { validacion, mensajesValidacion } = validarUser(user);
      errorValida.value = mensajesValidacion; //Si hay algun error en validación, guardamos su mensaje
      //Si la validación ha sido correcta, insertamos
      if (validacion) {
        const { cliente, error, insertCliente } = createCliente(user);
        //Llamams a la función que inserta el Usuario/Adiestrador
        insertCliente();
        //redireccionamos ?¿?¿?¿
        if (
          error.value !== 'error al insertar usuario' ||
          error.value !== 'error al insertar adiestrador'
        ) {
          router.push('/login');
        } else {
          errorInsert = error.value;
        }
      }
    };

    return { user, procForm, errorValida, errorInsert };
  },
};
</script>

<style></style>

<template>
  <div class="contenedor">
    <FormRegistro
      :user="user"
      :errorValida="errorValida"
      :errorInsert="errorInsert"
      act="Nuevo"
      quienH2="cliente"
      @formProce="procForm(user)"
    />
  </div>
</template>

<script>
//Componentes
import Header from '../../components/partials/Header.vue';
import FormRegistro from '../../components/Formularios/FormRegistro.vue';
import Footer from '../../components/partials/Footer.vue';
//Composables
import validarUser from '../../composables/Validacion/validarUser';
import createCliente from '../../composables/Cliente/createCliente';
//Utilidades
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  components: { FormRegistro, Header, Footer },
  setup() {
    //Recogemos los campos del User
    const user = ref({
      email: null,
      password: null,
      nombre: null,
      imageUrl: null,
    });
    //Router
    const router = useRouter();
    //Comprobamos si el Usuario ya está Logueado, en el caso que asi sea, lo enviamos a Home
    if (localStorage.getItem('token') || localStorage.getItem('userId')) {
      router.push('/');
    }
    //Variable que nos recogerá los errores de validación
    const errorValida = ref([null]); //Guardamos los errores de validacion
    const errorInsert = ref(null); // guardmos los errores de insert
    //Función que procesa el formulario
    const procForm = async user => {
      const { validacion, mensajesValidacion } = validarUser(user);
      errorValida.value = mensajesValidacion; //Si hay algun error en validación, guardamos su mensaje
      //Si la validación ha sido correcta, insertamos
      if (validacion) {
        const { cliente, error, insertCliente } = createCliente(user);
        //Llamams a la función que inserta el Usuario/Adiestrador
        await insertCliente();
        //redireccionamos ?¿?¿?¿
        if (error.value) {
          errorInsert.value = error.value;
        } else {
          router.push('/login');
        }
      }
    };

    return { user, procForm, errorValida, errorInsert };
  },
};
</script>

<style scoped>
.contenedor {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 100vw;
  /* min-height: 90vh; */
}
</style>

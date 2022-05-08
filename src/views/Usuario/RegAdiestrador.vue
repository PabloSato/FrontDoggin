<template>
  <div class="contenedor">
    <FormRegistro
      :user="user"
      :errorValida="errorValida"
      :errorInsert="errorInsert"
      act="Nuevo"
      quienH2="Adiestrador"
      @formProce="procForm(user)"
    />
  </div>
</template>

<script>
//Componentes
import FormRegistro from '../../components/Formularios/FormRegistro.vue';
//Composables
import validarUser from '../../composables/Validacion/validarUser';
import createAdiestrador from '../../composables/Adiestrador/createAdiestrador';
//Utilidades
import { ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  components: { FormRegistro },
  setup() {
    //Recogemos los campos del User
    const user = ref({
      email: null,
      password: null,
      nombre: null,
      bio: null,
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
    let errorInsert = '';
    //Función que procesa el formulario
    const procForm = async user => {
      const { validacion, mensajesValidacion } = validarUser(user);
      errorValida.value = mensajesValidacion; //Si hay algun error en validación, guardamos su mensaje
      //Si la validación ha sido correcta, insertamos
      console.log(errorValida.value);
      if (validacion) {
        const { adiestrador, error, insertAdiestrador } =
          createAdiestrador(user);
        //Llamams a la función que inserta el Usuario/Adiestrador
        insertAdiestrador();
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

<style scoped>
.contenedor {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  width: 100vw;
  min-height: 90vh;
}
</style>

<template>
  <RegForm
    :user="adiestrador"
    :errorValida="errorValida"
    act="Editar"
    quienH2="Adiestrador"
    @formProce="procForm(adiestrador)"
  />
</template>

<script>
import { ref } from 'vue';
import RegForm from '../components/RegForm.vue';
import getAdiestrador from '../componsables/Adiestrador/getAdiestrador';
import validarUser from '../componsables/validarUser';
export default {
  props: ['id'],
  components: { RegForm },
  setup(props) {
    //Traemos el User
    const { adiestrador, error, load } = getAdiestrador(props.id);
    load(); //Llamamos a la función que nos devuevle un usuario
    //Variables que nos recogerá los errores
    const errorValida = ref([null]);
    const errorEdit = ref(null);
    console.log('hoola');
    //Función que procesa el formulario
    const procForm = async () => {};

    return { adiestrador, procForm, errorValida };
  },
};
</script>

<style></style>

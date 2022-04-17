<template>
  <h2>Editar Descripción</h2>
  <form action="">
    <label for="bio">Descripción: </label>
    <textarea
      name="bio"
      id="bio"
      cols="30"
      rows="10"
      v-model="adiestrador.bio"
    ></textarea>
  </form>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import RegForm from '../components/RegForm.vue';
import getAdiestrador from '../composables/Adiestrador/getAdiestrador';
import validarUser from '../composables/validarUser';
export default {
  props: ['id'],
  components: { RegForm },
  setup(props) {
    let adiestra = ref(null);
    //Router
    const router = useRouter();
    let idAd = '625bccc8c67f1d20739a6942';
    //Cargamos el Adiestrador
    const { adiestrador, error, load } = getAdiestrador(idAd);
    load();
    console.log(adiestrador);

    return { adiestrador };
  },
};
</script>

<style></style>

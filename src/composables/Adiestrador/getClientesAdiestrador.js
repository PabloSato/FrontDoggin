import { ref } from 'vue';
import { BASEURL } from '@/main';

const getClientesAdiestrador = idAdiestrador => {
  const clientes = ref([null]);

  const loadClientes = async () => {
    try {
      let data = await fetch();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
};
export default getClientesAdiestrador;

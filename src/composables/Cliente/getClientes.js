import { ref } from 'vue';
import { BASEURL } from '@/main';

const getClientes = () => {
  const clientes = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch(`${BASEURL}/clientes`);
      if (!data.ok) throw new Error('errorrrrr');
      clientes.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { clientes, error, load };
};

export default getClientes;

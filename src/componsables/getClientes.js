import { ref } from 'vue';
import { getToken, resetToken } from './tokenHandler';

const getClientes = () => {
  const clientes = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      resetToken();
      const token = await getToken();
      let data = await fetch('http://localhost:3000/clientes', {
        headers: { Authorization: `Bearer ${token}` },
      });
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

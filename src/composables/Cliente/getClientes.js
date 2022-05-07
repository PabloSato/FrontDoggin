import { ref } from 'vue';
import { BASEURL } from '@/main';

const getClientes = () => {
  const clientes = ref([]);
  const errorClientes = ref(null);
  const token = localStorage.getItem('token');

  const loadClientes = async () => {
    try {
      let data = await fetch(`${BASEURL}/clientes`, {
        method: 'get',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!data.ok) throw new Error('Error al cargar los clientes');
      clientes.value = await data.json();
    } catch (err) {
      errorClientes.value = err.message;
      console.log(errorClientes.value);
    }
  };
  return { clientes, errorClientes, loadClientes };
};

export default getClientes;

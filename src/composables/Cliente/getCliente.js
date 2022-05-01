import { ref } from 'vue';
import { BASEURL } from '@/main';
const getCliente = idCliente => {
  const error = ref(null);
  const cliente = ref(null);
  const token = localStorage.getItem('token');
  const loadCliente = async () => {
    try {
      let data = await fetch(`${BASEURL}/clientes/${idCliente}`, {
        method: 'get',
        headers: { Authorization: `Bearer ${token}` },
      });
      if (!data.ok) throw Error('error al coger al cliente');
      cliente.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { cliente, error, loadCliente };
};

export default getCliente;

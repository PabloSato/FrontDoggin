import { BASEURL } from '@/main';
import { ref } from 'vue';

const getEventosCliente = (idCliente) => {
  const eventosCliente = ref([]);
  const url = `${BASEURL}/clientes/${idCliente}/eventos`;
  const error = ref(null);
  const loadEventosCliente = async () => {
    let data;
    const token = localStorage.getItem('token');
    try {
      if (idCliente && token) {
        data = await fetch(url, {
          method: 'get',
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!data.ok) throw new Error('Error al intentar obtener eventos');
        eventosCliente.value = await data.json();
      }
    } catch (err) {
      error.value = err.message;
    }
    };
    return { eventosCliente, error, loadEventosCliente };
};


export default getEventosCliente;
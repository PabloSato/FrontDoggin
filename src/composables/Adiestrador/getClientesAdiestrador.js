import { ref } from 'vue';
import { BASEURL } from '@/main';

const getClientesAdiestrador = idAdiestrador => {
  const listaClientes = ref([null]);
  const errorLista = ref(null);
  const token = localStorage.getItem('token');

  const loadClientes = async () => {
    try {
      let data = await fetch(
        `${BASEURL}/adiestradores/${idAdiestrador}/clientes`,
        {
          method: 'get',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!data.ok) throw Error('Error al obtener clientes');
      listaClientes.value = await data.json();
    } catch (err) {
      errorLista.value = err.message;
      console.log(errorLista.value);
    }
  };
  return { listaClientes, errorLista, loadClientes };
};
export default getClientesAdiestrador;

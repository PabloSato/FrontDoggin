import { ref } from 'vue';
import { BASEURL } from '@/main';

const getClientesAdiestrador = idAdiestrador => {
  if (!idAdiestrador) return;
  const listaClientes = ref([]);
  const errorLista = ref(null);
  const token = localStorage.getItem('token');

  const loadListaClientes = async () => {
    try {
      let data = await fetch(
        `${BASEURL}/adiestradores/${idAdiestrador}/clientes`,
        {
          method: 'get',
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (!data.ok) throw new Error('Error al cargar los clientes');
      listaClientes.value = await data.json();
    } catch (err) {
      errorLista.value = err.message;
      console.log(errorLista.value);
    }
  };
  return { listaClientes, errorLista, loadListaClientes };
};
export default getClientesAdiestrador;

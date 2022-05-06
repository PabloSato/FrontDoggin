import { ref } from 'vue';
import { BASEURL } from '@/main';

const getEventos = (token, idOrganizador) => {
  const eventos = ref([]);
  const error = ref(null);
  const url = idOrganizador
    ? `${BASEURL}/adiestradores/${idOrganizador}/eventos`
    : `${BASEURL}/eventos`;
  const loadEventos = async () => {
    let data;
    try {
      if (token) {
        data = await fetch(url, {
          method: 'get',
          headers: { Authorization: `Bearer ${token}` },
        });
      } else {
        data = await fetch(url);
      }
      if (!data.ok) throw new Error('Error al intentar obtener eventos');
      eventos.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { eventos, error, loadEventos };
};

export default getEventos;

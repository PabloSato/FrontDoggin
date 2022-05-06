import { ref } from 'vue';
import { BASEURL } from '@/main';

const getAdiestradores = () => {
  const adiestradores = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch(`${BASEURL}/adiestradores`);
      if (!data.ok) throw new Error('Error al intentar obtener adiestradores');
      adiestradores.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { adiestradores, error, load };
};

export default getAdiestradores;

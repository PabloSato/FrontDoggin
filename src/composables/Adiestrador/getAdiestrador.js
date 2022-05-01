import { ref } from 'vue';
import { BASEURL } from '@/main';

const getAdiestrador = id => {
  const error = ref(null);
  const adiestrador = ref(null);

  const loadAdiestrador = async () => {
    if (!id) return;
    try {
      let data = await fetch(`${BASEURL}/adiestradores/${id}`);
      if (!data.ok) throw new Error('Error al obtener adiestrador');
      adiestrador.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { adiestrador, error, loadAdiestrador };
};

export default getAdiestrador;

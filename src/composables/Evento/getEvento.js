import { ref } from 'vue';
import { BASEURL } from '@/main';

const getEvento = id => {
  const error = ref(null);
  const evento = ref(null);

  const load = async () => {
    try {
      let data = await fetch(`${BASEURL}/eventos/${id}`);
      if (!data.ok) throw Error('error al coger el Evento');
      evento.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { evento, error, load };
};

export default getEvento;

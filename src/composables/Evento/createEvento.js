import { ref } from 'vue';
import { BASEURL } from '@/main';

const createEvento = evento => {
  const error = ref(null);
  const nuevoEvento = ref(null);
  const idAdiestrador = localStorage.getItem('id');
  const token = localStorage.getItem('token');

  console.log('evento');
  console.log(evento);

  const insertEvento = async () => {
    try {
      let data = await fetch(
        `${BASEURL}/adiestradores/${idAdiestrador}/eventos`,
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(evento),
        }
      );
      if (!data.ok) throw Error('No se ha podido crear el evento');
      nuevoEvento.value = await data.json();
    } catch (err) {
      error.value = { error: true, mensaje: err.message };
    }
  };

  return { nuevoEvento, error, insertEvento };
};

export default createEvento;

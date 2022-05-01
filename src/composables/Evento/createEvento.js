import { ref } from 'vue';
import { BASEURL } from '@/main';

const createEvento = (nuevoEvento, idAdiestrador) => {
  const error = ref(null);
  const evento = ref(null);
  const ev = {
    idAdiestrador: idAdiestrador,
    nombre: nuevoEvento.nombre,
    fecha: nuevoEvento.fecha,
    maxAforo: nuevoEvento.maxAforo,
  };

  const insertEvento = async () => {
    try {
      let data = await fetch(`${BASEURL}/eventos`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ev),
      });
      if (!data.ok) throw Error('error al crear el evento');
      evento.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { evento, error, insertEvento };
};

export default createEvento;

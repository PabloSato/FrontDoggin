import { ref } from 'vue';
import { BASEURL } from '@/main';

const createEvento = evento => {
  const error = ref(null);
  const nuevoEvento = ref(null);
  const ev = {
    nombre: nuevoEvento.nombre,
    descripción: nuevoEvento.descripción,
    idAdiestrador: nuevoEvento.idAdiestrador,
    fecha: nuevoEvento.fecha,
    maxAforo: nuevoEvento.maxAforo,
    private: nuevoEvento.private,
  };

  const insertEvento = async () => {
    try {
      let data = await fetch(`${BASEURL}/eventos`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(ev),
      });
      if (!data.ok) throw Error('error al crear el evento');
      nuevoEvento.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { nuevoEvento, error, insertEvento };
};

export default createEvento;

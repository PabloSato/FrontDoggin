import { ref } from 'vue';
import { BASEURL } from '@/main';

const createEvento = evento => {
  const error = ref(null);
  const nuevoEvento = ref(null);
  const idAdiestrador = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  const ev = {
    nombre: evento.nombre,
    descripcion: evento.descripcion,
    idAdiestrador: evento.idAdiestrador,
    fecha: evento.fecha,
    maxAforo: evento.maxAforo,
    private: evento.private,
  };
  console.log('evento');
  console.log(ev);

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
          body: JSON.stringify(ev),
        }
      );
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

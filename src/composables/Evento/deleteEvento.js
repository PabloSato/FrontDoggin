import { ref } from 'vue';
import { BASEURL } from '@/main';
import useEmitter from '@/composables/emitter';

const eliminarEvento = (idAdiestrador, idEvento, feedbackAccion) => {
  const emitter = useEmitter();

  const token = localStorage.getItem('token');
  const error = ref(null);
  const eliminar = async () => {
    try {
      let data = await fetch(
        `${BASEURL}/adiestradores/${idAdiestrador}/eventos/${idEvento}`,
        {
          method: 'delete',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!data.ok) throw Error('error al eliminar');
      feedbackAccion.value = 'Evento cancelado';
      emitter.emit('eventoEliminado', idEvento);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
      feedbackAccion.value = err.message;
    }
  };
  return { feedbackAccion, eliminar };
};

export default eliminarEvento;

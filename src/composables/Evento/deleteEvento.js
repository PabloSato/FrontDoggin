import { ref } from 'vue';
import { BASEURL } from '@/main';
import useEmitter from '@/composables/Tools/emitter';

const eliminarEvento = (
  idAdiestrador,
  idEvento,
  feedbackAccion,
  errorAccion
) => {
  const emitter = useEmitter();

  const token = localStorage.getItem('token');
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
      if (!data.ok) throw Error('No se pudo cancelar el evento');
      errorAccion.value = false;
      feedbackAccion.value = 'Evento cancelado';
      emitter.emit('eventoEliminado', idEvento);
    } catch (err) {
      errorAccion.value = true;
      feedbackAccion.value = err.message;
    }
  };
  return { feedbackAccion, errorAccion, eliminar };
};

export default eliminarEvento;

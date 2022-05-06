import { ref } from 'vue';
import { BASEURL } from '@/main';
import useEmitter from '@/composables/Tools/emitter';

const cancelarAsistencia = (idCliente, idEvento, feedbackAccion) => {
  const emitter = useEmitter();

  const token = localStorage.getItem('token');
  const error = ref(null);
  const cancelar = async () => {
    try {
      let data = await fetch(
        `${BASEURL}/clientes/${idCliente}/eventos/${idEvento}`,
        {
          method: 'delete',
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!data.ok) throw Error('error al cancelar');
      feedbackAccion.value = 'Asistencia al evento cancelada';
      emitter.emit('clienteActualizado', idEvento);
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
      feedbackAccion.value = err.message;
    }
  };
  return { feedbackAccion, cancelar };
};

export default cancelarAsistencia;

import { ref } from 'vue';
import { BASEURL } from '@/main';
import useEmitter from '@/composables/Tools/emitter';

const registrarCliente = (idCliente, idEvento, feedbackAccion, errorAccion) => {
  const emitter = useEmitter();
  const token = localStorage.getItem('token');
  const error = ref(null);
  const registrarse = async () => {
    try {
      let data = await fetch(`${BASEURL}/clientes/${idCliente}/eventos`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ idEvento: idEvento }),
      });
      if (!data.ok) throw Error('error al registrarse');
      errorAccion.value = false;
      feedbackAccion.value = 'Usuario registrado con éxito';
      emitter.emit('clienteActualizado', idEvento);
    } catch (err) {
      errorAccion.value = true;
      feedbackAccion.value = err.message;
    }
  };
  return { feedbackAccion, errorAccion, registrarse };
};

export default registrarCliente;

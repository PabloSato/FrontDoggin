import { ref } from 'vue';
import { BASEURL } from '@/main';
import useEmitter from '@/composables/emitter';

const registrarCliente = (idCliente, idEvento, registrado, feedbackAccion) => {
  const emitter = useEmitter();
  const token = localStorage.getItem('token');
  const error = ref(null);
  const registrarse = async () => {
    try {
      let data = await fetch(`${BASEURL}/clientes/${idCliente}/eventos`, {
        method: 'put',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ idEvento: idEvento }),
      });
      if (!data.ok) throw Error('error al registrarse');
      registrado.value = true;
      feedbackAccion.value = 'Usuario registrado con éxito';
      emitter.emit('clienteActualizado');
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
      feedbackAccion.value = err.message;
    }
  };
  return { feedbackAccion, registrado, registrarse };
};

export default registrarCliente;

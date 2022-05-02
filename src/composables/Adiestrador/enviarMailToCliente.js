import { ref } from 'vue';
import { BASEURL } from '@/main';

const enviarMailToCliente = (clienteId, mail) => {
  const enviado = ref(null);
  const error = ref(null);
  const adiestradorId = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  const mensaje = {
    asunto: mail.asunto,
    mensaje: mail.mensaje,
  };

  const send = async () => {
    try {
      let response = await fetch(
        `${BASEURL}/adiestradores/${adiestradorId}/clientes/${clienteId}/email`,
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(mensaje),
        }
      );
      if (!response.ok) {
        throw Error('error al mandar el email');
      } else {
        enviado.value = await response.json();

        send();
      }
    } catch (err) {
      console.log(err.message);
      error.value = err.message;
    }
  };
  return { enviado, error, send };
};

export default enviarMailToCliente;

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
      response.ok = false;
      if (!response.ok) {
        throw Error('No se ha podido enviar el email');
      } else {
        // enviado.value = await response.json();
        enviado.value = true;
        // send();
      }
    } catch (err) {
      error.value = { error: true, mensaje: err.message };
    }
  };
  return { enviado, error, send };
};

export default enviarMailToCliente;

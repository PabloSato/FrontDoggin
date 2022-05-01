import { ref } from 'vue';
import { BASEURL } from '@/main';

const enviarMailToAll = (adiestradorId, token, mail) => {
  const enviado = ref(null);
  const error = ref(null);
  const mensaje = {
    asunto: mail.asunto,
    mensaje: mail.mensaje,
  };

  const sendAll = async () => {
    try {
      let response = await fetch(
        `${BASEURL}/adiestradores/${adiestradorId}/clientes/broadcast`,
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

        sendAll();
      }
    } catch (err) {
      console.log(err.message);
      error.value = err.mensaje;
    }
  };
  return { enviado, error, sendAll };
};

export default enviarMailToAll;

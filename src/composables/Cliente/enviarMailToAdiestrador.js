import { ref } from 'vue';
import { BASEURL } from '@/main';

const enviarMailToAdiestrador = (adiestradorId, mail) => {
  const enviado = ref(null);
  const error = ref(null);
  const clienteId = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  const mensaje = {
    destinatario: adiestradorId,
    asunto: mail.asunto,
    mensaje: mail.mensaje,
  };
  const send = async () => {
    try {
      let response = await fetch(
        `${BASEURL}/clientes/${clienteId}/adiestradores/email`,
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(mensaje),
        }
      );
      if (!response.ok) throw Error('error al mandar el email');
      // enviado.value = await response.json();
    } catch (err) {
      // console.log(err.message);
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { enviado, error, send };
};

export default enviarMailToAdiestrador;

import { ref } from 'vue';
import { BASEURL } from '@/main';

const enviarMailToAll = mail => {
  const error = ref(null);
  const adiestradorId = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  const mensaje = {
    asunto: mail.asunto,
    mensaje: mail.mensaje,
  };
  console.log('dentro');
  console.log(mensaje);
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
      if (!response.ok) throw Error('error al mandar el email');
    } catch (err) {
      console.log(err.message);
      error.value = err.mensaje;
    }
  };
  console.log('holaaa');
  return { error, sendAll };
};

export default enviarMailToAll;

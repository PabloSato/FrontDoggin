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
      if (!response.ok) throw Error('No se ha podido enviar el anuncio');
    } catch (err) {
      error.value = { error: true, mensaje: err.message };
    }
  };
  return { error, sendAll };
};

export default enviarMailToAll;

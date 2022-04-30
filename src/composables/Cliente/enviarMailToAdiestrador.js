import { ref } from 'vue';

const enviarMailToAdiestrador = (adiestradorId, clienteId, token, mail) => {
  const enviado = ref(null);
  const error = ref(null);
  const mensaje = {
    asunto: mail.asunto,
    mensaje: mail.mensaje,
  };
  const send = async () => {
    try {
      let response = await fetch(
        `http://localhost:3000/clientes/${clienteId}/adiestradores/${adiestradorId}/email`,
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
      enviado.value = await response.json();
    } catch (err) {
      // console.log(err.message);
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { enviado, error, send };
};

export default enviarMailToAdiestrador;

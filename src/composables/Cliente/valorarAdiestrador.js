import { BASEURL } from '@/main';
import { ref } from 'vue';

const valorarAdiestrador = (idAdiestrador, valoracion) => {
  const rating = ref(null);
  const error = ref(null);
  const clienteId = localStorage.getItem('id');
  const token = localStorage.getItem('token');
  const puntuacion = {
    score: valoracion.score,
  };

  const insertValoracion = async () => {
    try {
      let response = await fetch(
        `${BASEURL}/adiestradores/${idAdiestrador}/rating`,
        {
          method: 'post',
          headers: {
            'Content-Type': 'application/json',
            Authroization: `Bearer ${token}`,
          },
          body: JSON.stringify(puntuacion),
        }
      );
      if (!response.ok) throw Error('error al puntuar al Adiestrador');
      rating.value = await response.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { rating, error, insertValoracion };
};

export default valorarAdiestrador;

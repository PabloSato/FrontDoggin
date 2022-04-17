import { ref } from 'vue';

const getAdiestrador = id => {
  const error = ref(null);
  const adiestrador = ref(null);

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/adiestradores/' + id);
      if (!data.ok) throw new Error('Error al obtener adiestrador');
      adiestrador.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { adiestrador, error, load };
};

export default getAdiestrador;

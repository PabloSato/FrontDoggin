import { ref } from 'vue';

const getAdiestradores = () => {
  const adiestradores = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/adiestradores');
      if (!data.ok) throw new Error('errorrrrr');
      adiestradores.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { adiestradores, error, load };
};

export default getAdiestradores;

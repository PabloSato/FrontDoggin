import { ref } from 'vue';

const getEventos = () => {
  const eventos = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const data = await fetch('http://localhost:3000/eventos');
      if (!data.ok) throw new Error('Error al intentar obtener eventos');
      eventos.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { eventos, error, load };
};

export default getEventos;

import { ref } from 'vue';

const getEventos = (token) => {
  const eventos = ref([]);
  const error = ref(null);
  const load = async () => {
    let data;
    try {
      if(token){
       data = await fetch('http://localhost:3000/eventos', {
        method: 'get',
        headers: { 'Authorization': `Bearer ${token}`},
      });
    }else{
      data = await fetch('http://localhost:3000/eventos');
    }
      if (!data.ok) throw new Error('Error al intentar obtener eventos');
      eventos.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };
  return { eventos, error, load };
};

export default getEventos;

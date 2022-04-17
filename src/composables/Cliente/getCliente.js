import { ref } from 'vue';

const getCliente = id => {
  const error = ref(null);
  const cliente = ref(null);

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/clientes/' + id);
      if (!data.ok) throw Error('error al coger al cliente');
      cliente.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { cliente, error, load };
};

export default getCliente;

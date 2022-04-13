import { ref } from "vue";

const getClientes = () => {
  const clientes = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3001/clientes");
      if (!data.ok) throw new Error("errorrrrr");
      clientes.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { clientes, error, load };
};

export default getClientes;

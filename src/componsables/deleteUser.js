import { ref } from "vue";

const deleteUser = (id) => {
  const cliente = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3001/clientes/" + id);
      if (!data.ok) throw new Error("errorrrrr");
      cliente.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { cliente, error, load };
};

export default deleteUser;

import { ref } from 'vue';

const getCliente = id => {
  const clienteID = ref(null);
  const user = ref(null);
  const error = ref(null);
  const cliente = ref(null);

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3001/clientes/' + id);
      if (!data.ok) {
        throw new Error('errorrrrr');
      } else {
        clienteID.value = await data.json();
        let idUser = clienteID.value.userId;
        let data2 = await fetch('http://localhost:3000/users/' + idUser);
        if (!data.ok) {
          throw new Error('error x2');
        } else {
          user.value = await data2.json();
          let cli = {
            nombre: clienteID.value.nombre,
            email: user.value.email,
          };
          cliente.value = cli;
        }
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { cliente, error, load };
};

export default getCliente;

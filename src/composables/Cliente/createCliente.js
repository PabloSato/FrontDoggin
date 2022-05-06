import { ref } from 'vue';
import { BASEURL } from '@/main';

const createCliente = user => {
  const usuarioId = ref(null);
  const error = ref(null);
  const cliente = ref(null);

  const us = {
    email: user.email,
    password: user.password,
    role: 'CLIENTE',
  };
  const insertCliente = async () => {
    try {
      let response = await fetch(`${BASEURL}/users`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(us),
      });
      if (!response.ok) {
        throw Error('error al insertar usuario');
      } else {
        usuarioId.value = await response.json();
        const cli = {
          userId: usuarioId.value._id,
          nombre: user.nombre,
          eventos: [],
        };
        const insert = async () => {
          try {
            let response2 = await fetch(`${BASEURL}/clientes`, {
              method: 'post',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(cli),
            });
            if (!response2.ok) throw Error('error al insertar cliente');
            cliente.value = await response2.json();
          } catch (err) {
            error.value = err.message;
            console.log('error2 ' + error.value);
          }
        };
        insert();
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { error, cliente, insertCliente };
};

export default createCliente;

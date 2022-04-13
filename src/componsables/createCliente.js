import { ref } from "vue";

const createCliente = (user) => {
  const usuarioId = ref(null);
  const error = ref(null);
  const cliente = ref(null);

  const us = {
    email: user.email,
    password: user.password,
    role: "CLIENTE",
  };
  console.log(usuarioId);
  const insertCliente = async () => {
    try {
      let response = await fetch("http://localhost:3000/users", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(us),
      });
      if (!response.ok) throw Error("errorrrr");
      usuarioId.value = await response.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
    if (usuarioId) {
      const cli = {
        userId: usuarioId.value._id,
        nombre: user.nombre,
        eventos: [],
      };
      const insert = async () => {
        try {
          let response2 = await fetch("http://localhost:3000/clientes", {
            method: "post",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cli),
          });
          if (!response2.ok) throw Error("errorrr 2");
          cliente.value = await response2.json();
        } catch (err) {
          error.value = err.message;
          console.log("error2 " + error.value);
        }
      };
      insert();
    }
  };

  return { error, cliente, insertCliente };
};

export default createCliente;

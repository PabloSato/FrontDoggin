import { ref } from 'vue';

const createAdiestrador = user => {
  const usuarioId = ref(null);
  const adiestrador = ref(null);
  const error = ref(null);

  const usuario = {
    email: user.email,
    password: user.password,
    role: 'ADIESTRADOR',
  };

  const insertAdiestrador = async () => {
    try {
      let data = await fetch('http://localhost:3000/users', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario),
      });
      if (!data.ok) {
        throw Error('error al insertar usuario');
      } else {
        // console.log(user);
        usuarioId.value = await data.json();
        const adi = {
          userId: usuarioId.value._id,
          nombre: user.nombre,
          bio: user.bio,
          eventos: [],
          rating: [],
        };
        const insert = async () => {
          try {
            let data = await fetch('http://localhost:3000/adiestradores', {
              method: 'post',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(adi),
            });
            if (!data.ok) throw Error('error al insertar adiestrador');
            adiestrador.value = await data.json();
          } catch (err) {
            error.value = err.message;
            console.log(error.value);
          }
        };
        insert();
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { adiestrador, error, insertAdiestrador };
};

export default createAdiestrador;

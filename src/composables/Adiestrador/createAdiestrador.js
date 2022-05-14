import { ref } from 'vue';
import { BASEURL } from '@/main';

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
      let data = await fetch(`${BASEURL}/users`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(usuario),
      });
      if (!data.ok) {
        throw Error('No se ha podido crear el usuario');
      } else {
        usuarioId.value = await data.json();
        const adi = {
          userId: usuarioId.value._id,
          nombre: user.nombre,
          bio: user.bio,
          imageUrl: user.imageUrl,
          tags: user.tags,
        };
        const insert = async () => {
          try {
            let data = await fetch(`${BASEURL}/adiestradores`, {
              method: 'post',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(adi),
            });
            if (!data.ok) throw Error('No se ha podido crear el usuario');
            adiestrador.value = await data.json();
          } catch (err) {
            error.value = { error: true, mensaje: err.message };
          }
        };
        insert();
      }
    } catch (err) {
      error.value = err.message;
    }
  };
  return { adiestrador, error, insertAdiestrador };
};

export default createAdiestrador;

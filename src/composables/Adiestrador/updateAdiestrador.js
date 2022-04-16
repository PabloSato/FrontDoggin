import { ref } from 'vue';

const updateAdiestrador = (adiestrador, id) => {
  const usuario = {
    email: adiestrador.email,
    password: adiestrador.password,
    role: 'ADIESTRADOR',
  };
  const adi = {
    nombre: adiestrador.nombre,
    bio: adiestrador.bio,
  };
  console.log(usuario);
  console.log(adi);

  //DESDE AQUI
  const error = ref(null);
  const update = async () => {
    try {
      let data = await fetch('http://localhost:3000/adiestradores/' + id, {
        method: 'patch',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(adiestrador),
      });
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
};

export default updateAdiestrador;

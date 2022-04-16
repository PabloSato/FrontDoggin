import { ref } from 'vue';

const updateAdiestrador = adiestrador => {
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
};

export default updateAdiestrador;

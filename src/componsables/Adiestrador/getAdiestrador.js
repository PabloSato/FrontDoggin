import { ref } from 'vue';

const getAdiestrador = id => {
  const adiestraID = ref(null);
  const user = ref(null);
  const error = ref(null);
  const adiestrador = ref(null);

  const load = async () => {
    try {
      let data = await fetch('http://localhost:3000/adiestradores/' + id);
      if (!data.ok) {
        throw new Error('errorrrrr');
      } else {
        adiestraID.value = await data.json();
        let idUser = adiestraID.value.userId;
        let data2 = await fetch('http://localhost:3000/users/' + idUser);
        if (!data.ok) {
          throw new Error('errorrrrrr x2');
        } else {
          user.value = await data2.json();
          let adiestra = {
            _id: adiestraID.value._id,
            nombre: adiestraID.value.nombre,
            email: user.value.email,
            bio: adiestraID.value.bio,
            eventos: adiestraID.value.eventos,
            rating: adiestraID.value.rating,
          };
          adiestrador.value = adiestra;
        }
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { adiestrador, error, load };
};

export default getAdiestrador;

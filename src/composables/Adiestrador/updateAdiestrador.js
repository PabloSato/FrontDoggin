import { ref } from 'vue';
import { BASEURL } from '@/main';

const updateAdiestrador = (adiestrador, id) => {
  const error = ref(null);
  const adiestraUpdate = ref(null);
  const update = async () => {
    try {
      let data = await fetch(`${BASEURL}/adiestradores/${id}`, {
        method: 'patch',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(adiestrador),
      });
      if (!data.ok) throw Error('error al actualizar');
      adiestraUpdate.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { adiestraUpdate, error, update };
};

export default updateAdiestrador;

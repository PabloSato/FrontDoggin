import { ref } from 'vue';
import { BASEURL } from '@/main';

const createUser = user => {
  const usuario = ref(null);
  const error = ref(null);

  const insert = async () => {
    try {
      let data = await fetch(`${BASEURL}/users`, {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user),
      });
      if (!data.ok) throw Error('errorrr');
      usuario.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { usuario, error, insert };
};

export default createUser;

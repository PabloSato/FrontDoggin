import { ref } from 'vue';
import { BASEURL } from '@/main';

const getUser = id => {
  const user = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch(`${BASEURL}/users/${id}`);
      if (!data.ok) throw new Error('errorrrrr');
      user.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { user, error, load };
};

export default getUser;

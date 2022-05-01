import { ref } from 'vue';
import { BASEURL } from '@/main';

const getUsers = () => {
  const users = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch(`${BASEURL}/users`);
      if (!data.ok) throw new Error('errorrrrr');
      users.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { users, error, load };
};

export default getUsers;

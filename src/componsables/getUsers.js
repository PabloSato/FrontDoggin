import { ref } from "vue";

const getUsers = () => {
  const users = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3001/users");
      if (!data.ok) throw new Error("errorrrrr");
      users.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { users, error, load };
};

export default getUsers;

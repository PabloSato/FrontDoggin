import { ref } from "vue";

const getAdiestrador = (id) => {
  const adiestrador = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3001/adiestradores/" + id);
      if (!data.ok) throw new Error("errorrrrr");
      adiestrador.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { adiestrador, error, load };
};

export default getAdiestrador;

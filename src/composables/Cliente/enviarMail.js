import { ref } from 'vue';

const enviarMail = (adiestradorId, clienteId, mail) => {
  const enviado = ref(null);
  console.log(adiestradorId);
  console.log(mail);
  return { enviado };
};

export default enviarMail;

<template>
  <fieldset>
    <form @submit.prevent="procesaFormu">
      <label for="">Asunto: </label>
      <input
        type="text"
        v-model="mail.asunto"
        placeholder="add motivo..."
        required
      /><br />
      <label for="">Mensaje: </label>
      <textarea
        name="mensaje"
        id="mensaje"
        cols="30"
        rows="10"
        v-model="mail.mensaje"
        placeholder="add mensaje..."
        required
      ></textarea>
      <br />
      <input type="submit" value="enviar" />
      <input type="reset" value="borrar" />
    </form>
  </fieldset>
  <p v-if="errorEnvio">
    {{ errorEnvio }}
  </p>
  <div v-if="errorValida.length > 0">
    <p v-for="mensaje in errorValida" :key="mensaje">
      {{ mensaje }}
    </p>
  </div>
</template>

<script>
export default {
  props: ['mail', 'errorEnvio', 'errorValida'],
  emits: ['formProce'],
  setup(props, context) {
    //Variables
    const mail = props.mail;
    //Funciones
    const procesaFormu = () => {
      context.emit('formProce', mail);
    };
    return { mail, procesaFormu };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  h2 {
    font-size: 2.3rem;
    color: #dfe6ee;
    font-weight: 500;
    margin-bottom: 15px;
  }
  p {
    font-size: 1rem;
    color: #dfe6ee;
    font-weight: 100;
    margin-bottom: 5px;
  }

  .alertaForm {
    font-size: 1rem;
    color: #ff5733;
    font-weight: 500;
    margin-bottom: 5px;
  }
}
.contForm {
  width: 100%;
  display: flex;
  justify-content: center;
}
.subContForm {
  background-color: #5f4bb6;
  width: 100%;
  max-width: 1024px;
  display: flex;
  flex-direction: column;
  place-items: center;
  line-height: 1.5;
  padding: 30px;
  box-shadow: 0 20px 30px rgba(0, 0, 0, 0.185);

  img {
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    object-position: center;
    border-radius: 10px;
  }

  input,
  button,
  textarea {
    width: 100%;
    border: none;
    padding: 14px;
    border-radius: 3px;
  }

  input,
  textarea {
    border: 2px solid #daddec;
    margin: 5px 0 10px;
    font-size: 1rem;
    color: #656880;
  }

  button {
    background: #9ab7d7;
    display: block;
    color: #5f4bb6;
    font-size: 1rem;
    margin: 5px 0 10px;
  }

  button:hover {
    box-shadow: 0 5px 20px #89caff94;
    transition: box-shadow 0.3s ease-in-out;
  }
}
.alter {
  background: #170f11 !important;
}
.alter:hover {
  box-shadow: 0 5px 20px #170f11 !important;
  transition: box-shadow 0.3s ease-in-out !important;
}

.container-text {
  text-align: center;
  padding: 10px 10px 10px 10px;
}

@media screen and (min-width: 750px) {
  .subContForm {
    display: flex;
    width: 90%;
    max-width: 1024px;

    img {
      width: 660px;
    }
  }
  .container-text {
    width: 490px;
  }
}
</style>

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

<style></style>

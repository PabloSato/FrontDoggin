<template>
  <fieldset>
    <form @submit.prevent="procesaFormu">
      <label for="">Asunto: </label>
      <input
        type="text"
        v-model="mail.asunto"
        placeholder="add motivo..."
      /><br />
      <label for="">Mensaje: </label>
      <textarea
        name="mensaje"
        id="mensaje"
        cols="30"
        rows="10"
        v-model="mail.mensaje"
        placeholder="add mensaje..."
      ></textarea>
      <br />
      <input type="submit" value="enviar" />
      <input type="reset" value="borrar" />
    </form>
  </fieldset>
  <p v-if="errorEnvio">
    {{ errorEnvio }}
  </p>
</template>

<script>
export default {
  props: ['mail', 'errorEnvio'],
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

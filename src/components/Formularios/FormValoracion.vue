<template>
  <div class="formu">
    <form @submit.prevent="procValora">
      <p class="clasificacion">
        <input
          :id="staticID + 1"
          type="radio"
          v-model="valoracion.score"
          value="5"
        />
        <label :for="staticID + 1">★</label>
        <input
          :id="staticID + 2"
          type="radio"
          v-model="valoracion.score"
          value="4"
        />
        <label :for="staticID + 2">★</label>
        <input
          :id="staticID + 3"
          type="radio"
          v-model="valoracion.score"
          value="3"
        />
        <label :for="staticID + 3">★</label>
        <input
          :id="staticID + 4"
          type="radio"
          v-model="valoracion.score"
          value="2"
        />
        <label :for="staticID + 4">★</label>
        <input
          :id="staticID + 5"
          type="radio"
          v-model="valoracion.score"
          value="1"
        />
        <label :for="staticID + 5">★</label>
      </p>
      <button type="submit" value="Valorar">Valorar</button>
    </form>
    <p v-if="errorValora">
      {{ errorValora }}
    </p>
    <p v-if="okValora">
      {{ okValora }}
    </p>
  </div>
</template>

<script>
//Utilidades
import { ref } from 'vue';
export default {
  props: ['adiestrador', 'valoracion', 'errorValora', 'okValora'],
  emits: ['proValorar'],
  setup(props, context) {
    //Variables
    const valoracion = props.valoracion;
    const staticID = props.adiestrador._id;
    //Funciones
    const procValora = () => {
      context.emit('proValorar', valoracion);
    };
    return { procValora, staticID };
  },
};
</script>

<style lang="scss">

  button{
    width: 100%;
    border: none;
    padding: 14px;
    border-radius: 3px;
  }
  button {
    background:#9ab7d7;
    display: block;
    color: #5f4bb6;
    font-size: 1rem;
    margin: 5px 5px 10px;
  }

  button:hover {
    box-shadow: 0 5px 20px #89caff94;
    transition: box-shadow 0.3s ease-in-out;

  }
.formu {
  margin-top: 10px;
  width: 100%;
}
.formu form {
  width: 100%;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
}
.formu label {
  font-size: 14px;
  color: grey;
}
.formu input[type='radio'] {
  display: none;
}
.formu .clasificacion {
  display: flex;
  justify-content: space-between;
  width: 40%;
  direction: rtl;
  unicode-bidi: bidi-override;
}
.formu input[type='submit'] {
  width: 40%;
}
.formu p {
  margin-bottom: 10px;
}
.formu label:hover,
.formu label:hover ~ label {
  /*(~) => esto indica precedidas por. En este caso, label precedidas por label con hover*/
  color: orange;
  cursor: pointer;
}
.formu input[type='radio']:checked ~ label {
  /*En naranja todas las label que preceden a la que elegimos*/
  color: orange;
}
</style>

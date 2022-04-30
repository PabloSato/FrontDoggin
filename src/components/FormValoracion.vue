<template>
  <div class="formu">
    <form @submit.prevent="procValora(adiestrador)">
      <p class="clasificacion">
        <input
          :id="staticID + 1"
          type="radio"
          v-model="adiestrador.rating"
          value="5"
        />
        <label :for="staticID + 1">★</label>
        <input
          :id="staticID + 2"
          type="radio"
          v-model="adiestrador.rating"
          value="4"
        />
        <label :for="staticID + 2">★</label>
        <input
          :id="staticID + 3"
          type="radio"
          v-model="adiestrador.rating"
          value="3"
        />
        <label :for="staticID + 3">★</label>
        <input
          :id="staticID + 4"
          type="radio"
          v-model="adiestrador.rating"
          value="2"
        />
        <label :for="staticID + 4">★</label>
        <input
          :id="staticID + 5"
          type="radio"
          v-model="adiestrador.rating"
          value="1"
        />
        <label :for="staticID + 5">★</label>
      </p>
      <input type="submit" value="Valorar" />
    </form>
  </div>
</template>

<script>
//Utilidades
import { ref } from 'vue';
export default {
  props: ['adiestrador'],
  setup(props) {
    //Variables
    const adiestrador = props.adiestrador;
    const staticID = adiestrador._id;
    //Funciones
    const procValora = async adiestrador => {
      console.log(adiestrador.rating);
      console.log(adiestrador);
    };

    return { procValora, staticID };
  },
};
</script>

<style>
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
}
.formu input[type='radio']:checked ~ label {
  /*En naranja todas las label que preceden a la que elegimos*/
  color: orange;
}
</style>

<template>
  <div class="formu">
    <form @submit.prevent="procValora">
      <p class="clasificacion">
        <input id="radio1" type="radio" v-model="star" value="5" />
        <label for="radio1">★</label>
        <input id="radio2" type="radio" v-model="star" value="4" />
        <label for="radio2">★</label>
        <input id="radio3" type="radio" v-model="star" value="3" />
        <label for="radio3">★</label>
        <input id="radio4" type="radio" v-model="star" value="2" />
        <label for="radio4">★</label>
        <input id="radio5" type="radio" v-model="star" value="1" />
        <label for="radio5">★</label>
      </p>
      <input type="submit" value="Votar" />
    </form>
  </div>
</template>

<script>
//Utilidades
import { ref } from 'vue';
export default {
  setup() {
    const star = ref(null);

    const procValora = async () => {
      console.log(star.value);
    };

    return { procValora, star };
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
.formu input[type='submit'] {
  margin-right: 10px;
}
</style>

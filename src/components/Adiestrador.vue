<template>
  <div class="card">
    <h3>{{ adiestrador.nombre }}</h3>
    <p>{{ adiestrador.bio }}</p>
    <p>
      Rating: <span v-if="adiestrador.rating">{{ adiestrador.rating }}</span
      ><span v-else>No disponible</span>
    </p>
    <button @click="verEventos(adiestrador._id)">Ver eventos</button>
    <form @submit.prevent="procValora">
      <p class="clasificacion">
        <input id="radio1" type="radio" v-model="star" value="5"><!--
        --><label for="radio1">★</label><!--
        --><input id="radio2" type="radio" v-model="star" value="4"><!--
        --><label for="radio2">★</label><!--
        --><input id="radio3" type="radio" v-model="star" value="3"><!--
        --><label for="radio3">★</label><!--
        --><input id="radio4" type="radio" v-model="star" value="2"><!--
        --><label for="radio4">★</label><!--
        --><input id="radio5" type="radio" v-model="star" value="1"><!--
        --><label for="radio5">★</label>
        <input type="submit" value="Votar">
      </p>
    </form>
  </div>
</template>

<script>
//Utilidades
import { useRouter } from 'vue-router';
import {ref} from 'vue';
export default {
  props: ['adiestrador', 'star'],
  setup(props, context) {
    const router = useRouter();
    const verEventos = id => {
      router.push({ path: `/adiestradores/${id}/eventos` });
    };

    const star = ref(null);

    const procValora = async() =>{
     console.log(star.value); 
    }

    return { verEventos, procValora, star };
  },
};
</script>

<style>
form{
  margin-top: 10px;
}
form label{
  font-size: 14px;
  color: grey;
}
  input[type="radio"]{
    display: none;
  }
  .clasificacion{
    direction: rtl;
    unicode-bidi: bidi-override;
  }
form label:hover,
form label:hover ~ label{ /*(~) => esto indica precedidas por. En este caso, label precedidas por label con hover*/
  color: orange;
}
input[type="radio"]:checked ~ label{/*En naranja todas las label que preceden a la que elegimos*/
  color: orange;
}
input[type="submit"]{
  margin-right: 10px;
}


</style>

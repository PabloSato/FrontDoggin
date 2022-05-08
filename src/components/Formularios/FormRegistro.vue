<template>
  <div class="contForm">
    <div class="subContForm">
      <h2>{{ act }} {{ quienH2 }}</h2>
      <img
        src="https://cdn.pixabay.com/photo/2019/07/04/17/17/hand-4316948_960_720.jpg"
        alt="image"
      />
      <div class="container-text">
        <p class="feedback error">{{ errorInsert }}</p>
        <div v-if="errorValida.length > 0">
          <p
            class="feedback error"
            v-for="mensaje in errorValida"
            :key="mensaje"
          >
            {{ mensaje }}
          </p>
        </div>
        <form @submit.prevent="procesaFormu" id="formulario">
          <input
            type="text"
            v-model="user.nombre"
            placeholder="añade nombre"
            required
          />
          <input
            type="password"
            v-model="user.password"
            placeholder="Contraseña"
            required
          />
          <input
            type="mail"
            v-model="user.email"
            placeholder="mi_e-mail@dogginer.dog"
            required
          />
          <input
            v-if="quienH2 === 'Adiestrador'"
            type="text"
            v-model="user.imageUrl"
            placeholder="añade la url de tu imagen"
          />
          <div v-if="quienH2 === 'Adiestrador'">
            <textarea
              v-model="user.bio"
              id="bio"
              rows="5"
              placeholder="Biografía sobre ti..."
              required
            ></textarea>
          </div>
          <button type="submit" value="registrar">Registrar</button>
          <button class="alter" type="reset" value="borrar">Borrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//Utilidades
import { ref } from 'vue';
export default {
  props: ['quienH2', 'user', 'errorValida', 'act', 'errorInsert'],
  emits: ['formProce'],
  setup(props, context) {
    const user = ref(null); //Variable para el usuario

    user.value = props.user; //Recogemos los valores que nos vienen
    const procesaFormu = () => {
      context.emit('formProce', user);
    };

    return { user, procesaFormu };
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
  min-height: 100%;
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

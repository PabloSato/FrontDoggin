<template>
  <div class="contForm">
    <div class="subContForm">
      <h2>{{ titulo }}</h2>
      <p>{{ subTitulo }}</p>
      <img
        src="https://cdn.pixabay.com/photo/2018/01/31/05/32/post-3120315_960_720.jpg"
        alt="image"
      />
      <div class="container-text">
        <p class="feedback" :class="{ error: errorEnvio, exito: !errorEnvio }">
          {{ feedback }}
        </p>
        <div v-if="errorValida.length > 0">
          <p
            v-for="mensaje in errorValida"
            :key="mensaje"
            class="feedback error"
          >
            {{ mensaje }}
          </p>
        </div>
        <form @submit.prevent="procesaFormu">
          <input
            type="text"
            v-model="mail.asunto"
            placeholder="Título del mensaje"
            required
          />
          <div v-if="listaTrue">
            <Multiselect
              v-model="mail.destinatario"
              placeholder="añade destinatario"
              :options="
                listaClientes.map(
                  c => c.username,
                  c => c._id
                )
              "
              :search="true"
            />
          </div>
          <textarea
            v-model="mail.mensaje"
            id="mensaje"
            rows="5"
            placeholder="Texto del anuncio"
            required
          ></textarea>
          <button type="submit" value="enviar">Enviar</button>
          <button class="alter" type="reset" value="borrar">Borrar</button>
          <button @click.prevent="volver">Volver</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
//Composables
import getClientes from '../../composables/Cliente/getClientes';
//Componentes
import Multiselect from '@vueform/multiselect';
//Utilidades
import { ref } from '@vue/reactivity';
import { useRouter } from 'vue-router';
import getClientesAdiestrador from '@/composables/Adiestrador/getClientesAdiestrador';
export default {
  components: { Multiselect },
  props: [
    'mail',
    'errorEnvio',
    'errorValida',
    'feedback',
    'adiToCliente',
    'titulo',
    'subTitulo',
    'listaTrue',
  ],
  emits: ['formProce'],
  setup(props, context) {
    // const router = ref(null);
    const router = useRouter();
    //Variables
    const mail = props.mail;
    //Funciones
    // const { clientes, errorClientes, loadClientes } = getClientes();
    // loadClientes();

    const idAdiestrador = localStorage.getItem('id');
    const { listaClientes, errorLista, loadListaClientes} = getClientesAdiestrador(idAdiestrador || '');
    loadListaClientes();
    const procesaFormu = () => {
      context.emit('formProce', mail);
    };
    const volver = () => {
      router.go(-1);
    };
    return { mail, procesaFormu, volver, listaClientes };
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
    width: 625px;
  }
}
</style>

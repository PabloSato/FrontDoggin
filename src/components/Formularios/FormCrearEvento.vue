<template>
  <div class="contForm">
    <div class="subContForm">
      <h2>Crear Evento</h2>
      <img
        src="https://cdn.pixabay.com/photo/2019/07/04/17/17/hand-4316948_960_720.jpg"
        alt="image"
      />
      <div class="container-text">
        <div v-if="errorEvento">
          <p class="alertaForm">
            {{ errorEvento }}
          </p>
        </div>
        <form @submit.prevent="procForm">
          <input
            type="text"
            v-model="ev.nombre"
            placeholder="añade nombre...."
          />

          <input
            type="text"
            v-model="ev.descripcion"
            placeholder="añade descripcion...."
          />

          <input type="date" v-model="ev.fecha" />

          <input type="number" v-model="ev.maxAforo" placeholder="aforo" />
          <div v-if="!publico">
            <label for="">Privado: </label>
            <input type="radio" v-model="privado" value="s" />
            <label for="">Si</label>
            <input type="radio" v-model="privado" value="n" checked />
            <label for="">No</label>
          </div>
          <div v-if="publico">
            <label for="">Privado: </label>
            <input type="radio" v-model="ev.privado" value="s" checked />
            <label for="">Si</label>
            <input type="radio" v-model="privado" value="n" />
            <label for="">No</label>
            <label>Añadir invitados:</label>
            <Multiselect
              v-model="ev.invitados"
              mode="tags"
              placeholder="Añade los invitados"
              :options="clientes.map(c => c.username)"
              :search="true"
            />
          </div>
          <button type="submit" value="registrar">Crear Evento</button>
          <button class="alter" type="reset" value="borrar">Borrar</button>
        </form>
      </div>
    </div>
  </div>
  <fieldset></fieldset>
</template>

<script>
//Composables
import getClientes from '../../composables/Cliente/getClientes';
//Componentes
import Multiselect from '@vueform/multiselect';
//Utilidades
import { ref, watch } from 'vue';
export default {
  components: { Multiselect },
  props: ['evento', 'errorEvento'],
  setup(props, context) {
    //const listaClientes = ['Bataman', 'Superman', 'Iron Man'];

    const { clientes, errorClientes, loadClientes } = getClientes();
    loadClientes();
    console.log(clientes);

    const invitados = [];
    const publico = ref(false);
    const privado = ref(null);
    const ev = ref(null);
    ev.value = props.evento;

    const procForm = () => {
      context.emit('formProce', ev);
    };

    const watchPrivado = watch(privado, () => {
      privado.value === 's' ? (publico.value = true) : (publico.value = false);
    });

    return { ev, procForm, privado, publico, invitados, clientes };
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

<style src="@vueform/multiselect/themes/default.css"></style>

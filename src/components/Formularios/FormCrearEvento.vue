<template>
  <div class="contForm">
    <div class="subContForm">
      <h2>Crear Evento</h2>
      <img
        src="https://cdn.pixabay.com/photo/2014/02/24/08/28/huskies-273409_960_720.jpg"
        alt="image"
      />
      <div class="container-text">
        <p class="feedback error">
          {{ errorLength }}
        </p>
        <form @submit.prevent="procForm">
          <input
            type="text"
            v-model="ev.nombre"
            placeholder="Nombre completo...."
          />
          <input
            type="text"
            v-model="ev.descripcion"
            placeholder="Añade descripcion...."
          />
          <input
            type="text"
            v-model="ev.imageUrl"
            placeholder="añade la url de tu imagen"
          />
          <input type="date" v-model="ev.fecha" required />
          <input
            type="number"
            v-model="ev.maxAforo"
            placeholder="aforo"
            required
          />
          <Multiselect
            v-model="ev.invitados"
            mode="tags"
            placeholder="Añade los invitados"
            :options="
              clientes.map(
                c => c.username,
                c => c._id
              )
            "
            :search="true"
          />
          <p
            class="feedback"
            :class="{ error: errorEvento, exito: !errorEvento }"
          >
            {{ feedback }}
          </p>
          <button type="submit" value="registrar">Crear Evento</button>
          <button class="alter" type="reset" value="borrar">Borrar</button>
          <button @click.prevent="volver">Volver</button>
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
import { useRouter } from 'vue-router';
export default {
  components: { Multiselect },
  props: ['evento', 'errorEvento', 'feedback'],
  emits: ['formProce'],
  setup(props, context) {
    //const listaClientes = ['Bataman', 'Superman', 'Iron Man'];
    const router = useRouter();
    const { clientes, errorClientes, loadClientes } = getClientes();
    loadClientes();

    const publico = ref(false);
    const privado = ref(null);
    const errorLength = ref(null);
    const ev = ref(null);
    ev.value = props.evento;

    const procForm = () => {
      let invitados = [];

      if (ev.value.maxAforo >= ev.value.invitados.length) {
        for (let i = 0; i < clientes.value.length; i++) {
          for (let j = 0; j < ev.value.invitados.length; j++) {
            if (ev.value.invitados[j] === clientes.value[i].username) {
              let invitado = { idCliente: clientes.value[i]._id };
              invitados.push(invitado);
            }
          }
        }
        ev.value.invitados = invitados;
        context.emit('formProce', ev);
        errorLength.value = null;
      } else {
        errorLength.value = 'Hay más invitados que el aforo máximo marcado';
      }
    };

    const watchPrivado = watch(privado, () => {
      privado.value === 's' ? (publico.value = true) : (publico.value = false);
    });

    const volver = () => {
      router.go(-1);
    };
    return { ev, procForm, privado, publico, clientes, errorLength, volver };
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
    min-height: 85vh;

    img {
      width: 660px;
    }
  }
  .container-text {
    width: 625px;
  }
}
</style>

<style src="@vueform/multiselect/themes/default.css"></style>

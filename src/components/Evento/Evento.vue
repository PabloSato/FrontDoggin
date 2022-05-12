<template>
  <figure class="image-block" @click="mostrarEvento" v-click-outside="onClickOutside">
    <div class="backgroundEffect"></div>
    <h1>{{ evento.nombre }}</h1>
    <img :src="evento.imageUrl" alt="" />
    <figcaption>
      <h3>{{ dia }}/{{ mes }}/{{ year }}</h3>
      <p>{{ evento.descripcion }}</p>
      <p class="feedback" :class="{ error: errorAccion, exito: !errorAccion, }" > {{ feedbackAccion }} </p>
      <button v-if="cliente && !registrado" class="" @click.stop="registrarse">Asistir </button>
      <button v-if="cliente && registrado" class="" @click.stop="cancelar" > Cancelar </button>
      <button v-if="adiestrador && owner" class="" @click.stop="eliminar" > Cancelar </button>
    </figcaption>
  </figure>
</template>

<script>
//Utilidades
import { ref } from '@vue/reactivity';
import dayjs from 'dayjs';
import vClickOutside from 'click-outside-vue3';
// Composables
import registrarCliente from '@/composables/Cliente/registrarCliente';
import cancelarAsistencia from '@/composables/Cliente/cancelarAsistencia';
import eliminarEvento from '@/composables/Evento/deleteEvento';
import useEmitter from '@/composables/Tools/emitter';
export default {
  props: ['evento', 'cliente', 'adiestrador'],
  methods: {
    onClickOutside(event) {
      this.feedbackAccion = '';
    },
  },
  directives: {
    clickOutside: vClickOutside.directive,
  },
  setup(props, context) {
    const emitter = useEmitter();
    // -------- FECHAS -----------
    const fecha = dayjs(props.evento.fecha); //Recogemos la fecha del evento
    let date = fecha.format('MMMM D, YYYY'); //Formateamos fecha
    //Trabajo con fechas
    const dia = fecha.format('D'); //Sacamos día
    const mes = fecha.format('MMMM'); // Sacamos Mes
    const year = fecha.format('YYYY'); // Sacamos Año

    const feedbackAccion = ref(null);
    const errorAccion = ref(null);

    // ------- ASISTENCIA -------
    const registrado = ref(null);
    let idCliente = null;
    if (props.cliente) {
      registrado.value = !!props.cliente.eventos.find(
        e => props.evento._id === e._id
      );
      idCliente = props.cliente._id;
    }

    const { registrarse } = registrarCliente(
      idCliente,
      props.evento._id,
      feedbackAccion,
      errorAccion
    );

    const { cancelar } = cancelarAsistencia(
      idCliente,
      props.evento._id,
      feedbackAccion,
      errorAccion
    );

    // ------- GESTION -------
    const owner = ref(null);
    let idAdiestrador = null;
    if (props.adiestrador) {
      owner.value = !!props.adiestrador.eventos.find(
        e => props.evento._id === e._id
      );
      idAdiestrador = props.adiestrador._id;
    }

    const { eliminar } = eliminarEvento(
      idAdiestrador,
      props.evento._id,
      feedbackAccion,
      errorAccion
    );

    // ----- SELECCIONAR EVENTO -------
    const mostrarEvento = () => {
      feedbackAccion.value = '';
      context.emit('eventoSeleccionado', props.evento);
    };

    emitter.on('clienteActualizado', idEvento => {
      if (idEvento === props.evento._id) {
        registrado.value = !registrado.value;
      }
    });

    return {
      dia,
      mes,
      year,
      mostrarEvento,
      registrado,
      registrarse,
      cancelar,
      feedbackAccion,
      errorAccion,
      eliminar,
      owner,
    };
  },
};
</script>

<style lang="scss" scoped>
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

*, 
*:before, 
*:after {
  box-sizing: border-box;
  outline: none;
}

html {
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-smooth: auto;
  font-weight: 300;
  line-height: 1.5;
  color: #444;
}

body {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
}

figure {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 430px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
}
figure {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 430px;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  overflow: hidden;
}
//imagen oscura
figure:before {
  content:'';
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top:0;
  bottom: 0;
  left: 0;
  right: 0;
  transition: 1s;
  
}
figure:hover {
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
}
figure:hover img {
  transform: scale(1.25);
}
figure:hover figcaption {
  bottom: 0;
}
figure h1 {
  // position: relative;
  position: absolute;
  top: 50px;
  // left: 20px;
  margin: 0;
  padding: 0;
  color: white;
  text-shadow: 0 0 0.5em black;
  font-size: 40px;
  font-weight: 300;
  line-height: 1;
}
figure img {
  height: 100%;
  transition: 0.25s;
}
figure figcaption {
  position: absolute;
  bottom: -90%;
  left: 0;
  width: 100%;
  margin: 0;
  padding: 30px;
  background-color: rgba(0, 0, 0, 0.85);
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  color: white;
  line-height: 1;
  transition: 0.25s;
}
figure figcaption h3 {
  margin: 0 0 20px;
  padding: 0;
}
figure figcaption p {
  font-size: 14px;
  line-height: 1.75;
}
figure figcaption button {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px 0 0;
  padding: 10px 30px;
  background-color: #1abc9c;
  border: none;
  border-radius: 5px;
  color: white;
  font-size: 14px;
}
</style>

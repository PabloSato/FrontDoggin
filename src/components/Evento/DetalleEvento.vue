<template>
  <div v-if="adiestradorEvento">
    <h1>{{ evento.nombre }}</h1>
    <h3>{{ adiestradorEvento.nombre }}</h3>
    <p>{{ evento.descripcion }}</p>
    <img :src="evento.imageUrl" alt="imagen del evento" />
    <div class="date">
      <span class="day">{{ dia }}</span>
      <span class="month">{{ mes }}</span>
      <span class="year">{{ year }}</span>
    </div>
    <button
      v-if="cliente && !registrado"
      class="btn btn-primary"
      @click="registrarse"
    >
      Asistir
    </button>
    <button
      v-if="cliente && registrado"
      class="btn btn-danger"
      @click="cancelar"
    >
      Cancelar
    </button>
    <button
      v-if="adiestrador && owner"
      class="btn btn-danger"
      @click="eliminar"
    >
      Cancelar
    </button>
    <p>{{ feedbackAccion }}</p>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import getAdiestrador from '@/composables/Adiestrador/getAdiestrador';
import registrarCliente from '@/composables/Cliente/registrarCliente';
import cancelarAsistencia from '@/composables/Cliente/cancelarAsistencia';
import eliminarEvento from '@/composables/Evento/deleteEvento';
import { ref } from '@vue/runtime-core';
import useEmitter from '@/composables/Tools/emitter';
export default {
  props: ['evento', 'cliente', 'adiestrador'],
  setup(props) {
    const emitter = useEmitter();
    // -------- FECHAS -----------
    const fecha = dayjs(props.evento.fecha); //Recogemos la fecha del evento
    // const date = fecha.format('MMMM D, YYYY'); //Formateamos fecha
    //Trabajo con fechas
    const dia = fecha.format('D'); //Sacamos día
    const mes = fecha.format('MMMM'); // Sacamos Mes
    const year = fecha.format('YYYY'); // Sacamos Añ

    const detallesAdiestrador = getAdiestrador(props.evento.idAdiestrador);
    detallesAdiestrador.loadAdiestrador();
    const adiestradorEvento = ref(detallesAdiestrador.adiestrador);

    const feedbackAccion = ref(null);

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
      feedbackAccion
    );

    const { cancelar } = cancelarAsistencia(
      idCliente,
      props.evento._id,
      feedbackAccion
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
      feedbackAccion
    );

    // eventlisteners
    emitter.on('clienteActualizado', idEvento => {
      if (idEvento === props.evento._id) {
        console.log('presente!', props.evento.nombre);
        registrado.value = !registrado.value;
      }
    });

    return {
      adiestradorEvento,
      dia,
      mes,
      year,
      registrarse,
      cancelar,
      registrado,
      feedbackAccion,
      eliminar,
      owner,
    };
  },
};
</script>
<style></style>

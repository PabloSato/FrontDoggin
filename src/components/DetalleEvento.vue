<template>
  <div v-if="adiestrador">
    <h1>{{ evento.nombre }}</h1>
    <h3>{{ adiestrador.nombre }}</h3>
    <p>{{ evento.descripcion }}</p>
    <img :src="evento.imageUrl" alt="imagen del evento" />
    <div class="date">
      <span class="day">{{ dia }}</span>
      <span class="month">{{ mes }}</span>
      <span class="year">{{ year }}</span>
    </div>
    <button v-if="!registrado" class="btn btn-primary" @click="registrarse">
      Asistir
    </button>
    <button v-if="registrado" class="btn btn-danger" @click="cancelar">
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
import { ref } from '@vue/runtime-core';
export default {
  props: ['evento', 'cliente'],
  setup(props) {
    // -------- FECHAS -----------
    const fecha = dayjs(props.evento.fecha); //Recogemos la fecha del evento
    // const date = fecha.format('MMMM D, YYYY'); //Formateamos fecha
    //Trabajo con fechas
    const dia = fecha.format('D'); //Sacamos día
    const mes = fecha.format('MMMM'); // Sacamos Mes
    const year = fecha.format('YYYY'); // Sacamos Añ

    const { adiestrador, error, load } = getAdiestrador(
      props.evento.idAdiestrador
    );
    load();

    // ------- ASISTENCIA -------
    const registrado = ref(null);
    registrado.value = !!props.cliente.eventos.find(
      e => props.evento._id === e._id
    );

    const feedbackAccion = ref(null);

    const { registrarse } = registrarCliente(
      props.cliente._id,
      props.evento._id,
      registrado,
      feedbackAccion
    );

    const { cancelar } = cancelarAsistencia(
      props.cliente._id,
      props.evento._id,
      registrado,
      feedbackAccion
    );
    return {
      adiestrador,
      dia,
      mes,
      year,
      registrarse,
      cancelar,
      registrado,
      feedbackAccion,
    };
  },
};
</script>
<style></style>
